#![allow(non_snake_case)]

use marine_rs_sdk::module_manifest;
use marine_rs_sdk::{get_call_parameters, marine};
use std::path::Path;

module_manifest!();

// use car_

use blockless_car::utils::pack_files;
use rand::distributions::Alphanumeric;
use rand::Rng;

fn main() {}

#[marine]
pub fn pack(src: String, dst_dir: String, dst_name: String) -> String {
    let from = Path::new(&src);
    let dst = Path::new(&dst_dir).join(&dst_name);
    let target = std::fs::File::create(&dst).expect(&format!("cannot create File with {}", dst.display()));
    let cid = pack_files(from, target, multicodec::Codec::Sha2_256, false)
        .expect(&format!("error packing: from {src} to {}", dst.display()));
    cid.to_string()
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

// Look for the real directory of the particle vault mapping in the module config
// For local testing, the mapping happens in Config.toml
#[allow(dead_code)]
fn get_host_vault_path() -> Option<String> {
    std::env::var("/tmp/vault").ok()
}