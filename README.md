```shell
git clone git@github.com:fluencelabs/car-snapper-demo.git

cd car-snapper-demo

fluence build

# copy something to /tmp dir of the myService
cp -r .fluence .fluence/tmp/volumes/services/myService/service/tmp/

# run myService in MREPL
fluence service repl myService

# inside MREPL, call pack
call myService pack ["/tmp/.fluence", "/tmp/dot_fluence.car"]

# use ls to explore /tmp
call myService ls ["/tmp"]
```
