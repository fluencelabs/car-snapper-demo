```shell
git clone git@github.com:fluencelabs/car-snapper-demo.git

cd car-snapper-demo

fluence build

# copy something to /tmp dir of the myService
cp -r .fluence .fluence/tmp/volumes/services/myService/service/tmp/

# run myService in MREPL
fluence service repl myService

# inside MREPL, call pack
1> call myService pack ["/tmp/.fluence", "/tmp/dot_fluence.car"]
result: "bafybeicfx2doeilobyt34z7tiw6vkpvufrz7o7zxyew5a64izbgppwzs5i"
 elapsed time: 32.322791ms

# inside MREPL, use ls to explore /tmp
2>call myService ls ["/tmp"]
result: [
  "/tmp/module.yaml"
]
 elapsed time: 6.766042ms
```
