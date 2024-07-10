#![allow(non_snake_case)]

use marine_rs_sdk::module_manifest;
use marine_rs_sdk::{get_call_parameters, marine};
use std::path::Path;

use curl_effector_imports as curl;
use ipfs_effector_imports as ipfs;

module_manifest!();


use blockless_car::utils::pack_files;
use curl_effector_imports::HttpHeader;
use rand::distributions::Alphanumeric;
use serde_json::json;
use rand::Rng;

fn main() {}

#[marine]
pub fn seal_data(cid_bytes: Vec<u8>, cid: String, file_size: u32, snapper_url: String) -> UploadResult {
    let particle_id = get_call_parameters().particle.id;
    let particle_token = get_call_parameters().particle.token;
    let car_url = format!("https://ipfs-gateway.fluence.dev/ipfs/{cid}");
    let req = json!({"car_infos": [{"cid": cid_bytes, "size": file_size, "url": car_url, "verified": false}]}).to_string();

    let req_path = format!("/tmp/vault/{particle_id}-{particle_token}/request");
    std::fs::write(req_path.clone(), req).expect("error writing req");

    let upload_request = curl::CurlRequest {
        url: snapper_url,
        headers: vec![HttpHeader {
            name: "Content-Type".to_string(),
            value: "application/json".to_string(),
        }],
    };
    let result_path = format!("/tmp/vault/{particle_id}-{particle_token}/response");
    let result = curl::curl_post(upload_request, req_path, result_path);
    UploadResult {
        success: result.success,
        error: result.error,
    }
}

#[marine]
pub fn upload_ipfs(file_path: String) -> ipfs::IpfsAddResult  {
    let particle_id = get_call_parameters().particle.id;
    let particle_token = get_call_parameters().particle.token;
    let result_path = format!("/tmp/vault/{particle_id}-{particle_token}/{file_path}");
    let result = ipfs::add("/dns4/ipfs.fluence.dev/tcp/5001".to_string(), result_path);
    result
}

#[marine]
pub fn pack(src: String, dst_name: String) -> Vec<u8> {
    let from = Path::new(&src);
    let particle_id = get_call_parameters().particle.id;
    let particle_token = get_call_parameters().particle.token;
    let result_path = format!("/tmp/vault/{particle_id}-{particle_token}/{dst_name}");

    let dst = Path::new(&result_path);
    let target = std::fs::File::create(&dst).expect(&format!("cannot create File with {}", dst.display()));
    let cid = pack_files(from, target, multicodec::Codec::Sha2_256, false)
        .expect(&format!("error packing: from {src} to {}", dst.display()));
    cid.to_bytes()
}

#[marine]
pub fn ls(dir: String) -> Vec<String> {
    let entries = std::fs::read_dir(&dir)
        .expect(&format!("error reading dir {dir}"))
        .map(|res| res.map(|e| e.path().to_string_lossy().to_string()))
        .collect::<Result<Vec<_>, std::io::Error>>()
        .expect(&format!("error reading dir {dir}"));

    entries
}

#[marine]
pub fn ls_vault() -> Vec<String> {
    ls(vault_dir())
}

#[marine]
pub fn vault_dir() -> String {
    let particle_id = get_call_parameters().particle.id;
    let particle_token = get_call_parameters().particle.token;
    let vault = Path::new("/tmp").join("vault").join(format!("{particle_id}-{particle_token}"));

    vault.to_string_lossy().to_string()
}

#[marine]
pub struct WriteResult {
    pub path: String,
    pub success: bool,
    pub error: String,
}

#[marine]
pub fn write_file_size(size: u32) -> WriteResult {
    let name: String = rand::thread_rng()
        .sample_iter(Alphanumeric)
        .take(16)
        .map(char::from)
        .collect();

    let file = Path::new(&vault_dir()).join(&name);
    let file_str = file.to_string_lossy().to_string();
    match std::fs::write(&file, size.to_string()) {
        Ok(_) => WriteResult {
            path: file_str,
            success: true,
            error: String::new(),
        },
        Err(err) => WriteResult {
            path: String::new(),
            success: false,
            error: format!("{err}: {}", file_str),
        },
    }
}

#[marine]
pub struct SizeResult {
    pub size: u32,
    pub success: bool,
    pub error: String,
}

#[marine]
pub fn file_size(file_path: String) -> SizeResult {
    match std::fs::read(file_path) {
        Ok(bytes) => SizeResult {
            size: bytes.len() as _,
            success: true,
            error: String::new(),
        },
        Err(err) => SizeResult {
            size: 0,
            success: false,
            error: err.to_string(),
        },
    }
}

#[marine]
pub struct UploadResult {
    pub success: bool,
    pub error: String,
}

// Look for the real directory of the particle vault mapping in the module config
// For local testing, the mapping happens in Config.toml
#[allow(dead_code)]
fn get_host_vault_path() -> Option<String> {
    std::env::var("/tmp/vault").ok()
}
