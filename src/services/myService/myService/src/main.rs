#![allow(non_snake_case)]

use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use std::path::Path;

module_manifest!();

// use car_

use blockless_car::utils::pack_files;

fn main() {}

#[marine]
pub fn pack(src: String, dst: String) -> String {
    let from = Path::new(&src);
    let target = std::fs::File::create(&dst).expect(&format!("cannot create File with {dst}"));
    let cid = pack_files(from, target, multicodec::Codec::Sha2_256, false)
        .expect(&format!("error packing: from {src} to {dst}"));
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
