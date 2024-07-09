# Locally in MREPL

```shell
git clone git@github.com:fluencelabs/car-snapper-demo.git

cd car-snapper-demo

fluence build

# copy something to /tmp dir of the myService
cp -r .fluence .fluence/tmp/volumes/services/myService/service/tmp/

# run myService in MREPL
fluence service repl myService

# inside MREPL, call pack
1> call myService pack ["/tmp/.fluence", "/tmp/", "dot_fluence.car"]
result: "bafybeicfx2doeilobyt34z7tiw6vkpvufrz7o7zxyew5a64izbgppwzs5i"
 elapsed time: 32.322791ms

# inside MREPL, use ls to explore /tmp
2>call myService ls ["/tmp"]
result: [
  "/tmp/module.yaml"
]
 elapsed time: 6.766042ms
```

# Locally on Nox

```shell
git clone git@github.com:fluencelabs/car-snapper-demo.git

cd car-snapper-demo

fluence local up

fluence deploy

% fluence run -f 'computeSizePersist()'
Using aqua compiler version: 0.14.10
Using local blockchain environment
Connecting to random local relay: /ip4/127.0.0.1/tcp/9991/ws/p2p/12D3KooWFL3ATmeGCXeHzX9YuGa2QPUHzfaUtG21yb6UfC9Cv4jt
Connected
Running computeSizePersist() from /Users/folex/Development/fluencelabs/web3mine/src/aqua/main.aqua

[
  {
    "cid": "bafybeie2dnez5ww5w4uw4c5fhh2vosiw5kmrnv3wcgfizuovlin7pycq6a",
    "errors": [],
    "worker": {
      "host_id": "12D3KooWFL3ATmeGCXeHzX9YuGa2QPUHzfaUtG21yb6UfC9Cv4jt",
      "pat_id": "0x0a0f97dc9cb20d39a486a0fdea52f1939fb907b6c235230dbf72d261f64ae93e",
      "worker_id": "12D3KooWAiu7kEopMCqTW4qbEWwBiQ3BgPtzBHpx8YoVHiPKN3sh"
    }
  },
  {
    "cid": "bafybeibclo4tdq76aibt7ira5jfkzto6kxdb2k5jqx7eaiqsewqhd6wi6i",
    "errors": [],
    "worker": {
      "host_id": "12D3KooWK4epo4rnomCN2P3H8k4bCuUaB4cm8yM3Jb5Yq7EsnMxf",
      "pat_id": "0x03db8d1e83f491bcab8faf5426a8dd30113a95d6903e7313da74c2a753e81c00",
      "worker_id": "12D3KooWSqZDrH7CjoMjQPw6kTi3T5uS33fSpgPQ5cFv4mnZsGka"
    }
  },
  {
    "cid": "bafybeibcjmhiapehjwuyjdzxrhtjl3pfky23lvha5l6u3fcolwgneimhca",
    "errors": [],
    "worker": {
      "host_id": "12D3KooWStgrf1cSkuMEspzQDPAqGQhVhkS8okiXe9nWTUpDvi2A",
      "pat_id": "0x0d6dfb5140e341af06dcc725f050c4c01c5d3fe5f9ef5f238a65093d0e86ef0e",
      "worker_id": "12D3KooWJZbe4p5ngGBvhuBUPfGzmf6DCHQtjNKQ1UV4BexE1FwR"
    }
  }
]
```