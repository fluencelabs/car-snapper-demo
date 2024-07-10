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

% fluence run -f 'sealMyData()'
Using aqua compiler version: 0.14.10
Using local blockchain environment
Connecting to random local relay: /ip4/127.0.0.1/tcp/9991/ws/p2p/12D3KooWFL3ATmeGCXeHzX9YuGa2QPUHzfaUtG21yb6UfC9Cv4jt
Connected
Running computeSizePersist() from /Users/folex/Development/fluencelabs/web3mine/src/aqua/main.aqua

[
  {
    "cid": "Successfully sent to sealing bafkreihuolbbgoc7ejlz5vflyvmdtkr7lcl3lzlkmamln3ljomkh3f442q",
    "errors": [],
    "worker": {
      "host_id": "12D3KooWCxkcSptCL2RzckfXm9gcwaUQATyGcyzetnVcaEWgqgDH",
      "pat_id": "0x01f250955af4af533b29bb31ae16d94cdac2eeaeb9c086c81c198f6aa2982f11",
      "worker_id": "12D3KooWBCWUhSvEYC7ho7xkwoQeW9BuMPEFaWkzaMZMgc8hgV3x"
    }
  },
  {
    "cid": "Successfully sent to sealing bafkreihqahiwz4jzitmeke7i7dgjzzp3hmkvbnbh3rwirqfpq2acmugglm",
    "errors": [],
    "worker": {
      "host_id": "12D3KooWCy2w1gNewVgJ83myAotX3Gg81SQd6BtBZPXfFD2EPr8J",
      "pat_id": "0x1343de0f7261049695af5d9e0ec26d5204761dbdfb070e87066181b8b186a969",
      "worker_id": "12D3KooWGKeVnQY8b3YMmKckNz29ae8qgmvMEqBiz7LXJ2SN6xDF"
    }
  },
  {
    "cid": "Successfully sent to sealing bafkreieoq45m2cpsrywizumard5pmdzhejb4ttlkky5veexfummxpuo3pm",
    "errors": [],
    "worker": {
      "host_id": "12D3KooWKjVQZxJixLeyAZCcQSmQmzqyh5CHct8o5XWmLknSapdW",
      "pat_id": "0x1a9c4ba16f695aef6258c19c6bc079730bf40feae2e69f8edf8594fed5af1e42",
      "worker_id": "12D3KooWSEG6K5UojG3PxfRvFKsVEUFCxGhTXrDovuAPmRu4J7cW"
    }
  }
]
```