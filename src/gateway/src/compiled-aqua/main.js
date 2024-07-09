/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.13
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */


// Making aliases to reduce chance of accidental name collision
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$
} from '@fluencelabs/js-client';


// Functions
export const showSubnet_script = `
(xor
 (new $services
  (seq
   (seq
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
            (new $option-inline
             (seq
              (xor
               (seq
                (new %MyDeployment_obj_map
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (ap ("chainNetworkId" 31337) %MyDeployment_obj_map)
                      (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %MyDeployment_obj_map)
                     )
                     (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %MyDeployment_obj_map)
                    )
                    (ap ("definition" "bafkreiaguifeta7g4tjmrb5uhrgcgf5oy3ybpo5mqepzwq2tluoxybtmv4") %MyDeployment_obj_map)
                   )
                   (ap ("timestamp" "2024-07-09T15:10:04.869Z") %MyDeployment_obj_map)
                  )
                  (canon %init_peer_id% %MyDeployment_obj_map  MyDeployment_obj)
                 )
                )
                (ap MyDeployment_obj $option-inline)
               )
               (null)
              )
              (canon %init_peer_id% $option-inline  #$option-inline-0)
             )
            )
           )
           (new %Deals_obj_map
            (seq
             (ap ("myDeployment" #$option-inline-0) %Deals_obj_map)
             (canon %init_peer_id% %Deals_obj_map  Deals_obj)
            )
           )
          )
          (ap Deals_obj.$.myDeployment Deals_obj_flat)
         )
         (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
        )
        (xor
         (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
         (fail :error:)
        )
       )
       (new -if-error-
        (xor
         (seq
          (match ret.$.success false
           (seq
            (new $array-inline
             (seq
              (seq
               (ap "Failed to resolve subnet: " $array-inline)
               (ap ret.$.error $array-inline)
              )
              (canon %init_peer_id% $array-inline  #$array-inline-0)
             )
            )
            (call %init_peer_id% ("run-console" "print") [#$array-inline-0])
           )
          )
          (new $-hop-
           (new #$-hopc-
            (canon -relay- $-hop-  #$-hopc-)
           )
          )
         )
         (seq
          (seq
           (ap :error: -if-error-)
           (xor
            (seq
             (match :error:.$.error_code 10001
              (null)
             )
             (new $-hop-
              (new #$-hopc-
               (canon -relay- $-hop-  #$-hopc-)
              )
             )
            )
            (fail -if-error-)
           )
          )
          (new $-hop-
           (new #$-hopc-
            (canon -relay- $-hop-  #$-hopc-)
           )
          )
         )
        )
       )
      )
      (fold ret.$.workers w-0
       (seq
        (new -if-else-error-
         (new -else-error-
          (new -if-error-
           (xor
            (mismatch w-0.$.worker_id []
             (new $services_aliases
              (new $spells_aliases
               (xor
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (new $-hop-
                         (new #$-hopc-
                          (canon -relay- $-hop-  #$-hopc-)
                         )
                        )
                        (new $-hop-
                         (new #$-hopc-
                          (canon w-0.$.host_id $-hop-  #$-hopc-)
                         )
                        )
                       )
                       (call w-0.$.worker_id.[0] ("srv" "list") [] ret-0)
                      )
                      (fold ret-0 s-0
                       (seq
                        (seq
                         (seq
                          (seq
                           (ap s-0.$.aliases s-0_flat)
                           (ap s-0_flat s-0_flat_to_functor)
                          )
                          (ap s-0_flat_to_functor.length s-0_flat_length)
                         )
                         (new -if-error-
                          (xor
                           (mismatch s-0_flat_length 0
                            (seq
                             (new -if-error-
                              (xor
                               (match s-0.$.service_type "spell"
                                (ap s-0.$.aliases.[0] $spells_aliases)
                               )
                               (seq
                                (ap :error: -if-error-)
                                (xor
                                 (match :error:.$.error_code 10001
                                  (null)
                                 )
                                 (fail -if-error-)
                                )
                               )
                              )
                             )
                             (new -if-error-
                              (xor
                               (match s-0.$.service_type "service"
                                (ap s-0.$.aliases.[0] $services_aliases)
                               )
                               (seq
                                (ap :error: -if-error-)
                                (xor
                                 (match :error:.$.error_code 10001
                                  (null)
                                 )
                                 (fail -if-error-)
                                )
                               )
                              )
                             )
                            )
                           )
                           (seq
                            (ap :error: -if-error-)
                            (xor
                             (match :error:.$.error_code 10002
                              (null)
                             )
                             (fail -if-error-)
                            )
                           )
                          )
                         )
                        )
                        (next s-0)
                       )
                       (null)
                      )
                     )
                     (par
                      (new $option-inline-1
                       (seq
                        (xor
                         (seq
                          (canon w-0.$.worker_id.[0] $services_aliases  #$push-to-stream-118)
                          (ap #$push-to-stream-118 $option-inline-1)
                         )
                         (null)
                        )
                        (canon w-0.$.worker_id.[0] $option-inline-1  #$option-inline-1-0)
                       )
                      )
                      (new $option-inline-2
                       (seq
                        (xor
                         (seq
                          (canon w-0.$.worker_id.[0] $spells_aliases  #$push-to-stream-123)
                          (ap #$push-to-stream-123 $option-inline-2)
                         )
                         (null)
                        )
                        (canon w-0.$.worker_id.[0] $option-inline-2  #$option-inline-2-0)
                       )
                      )
                     )
                    )
                    (new %WorkerServices_obj_map
                     (seq
                      (seq
                       (seq
                        (seq
                         (ap ("host_id" w-0.$.host_id) %WorkerServices_obj_map)
                         (ap ("services" #$option-inline-1-0) %WorkerServices_obj_map)
                        )
                        (ap ("spells" #$option-inline-2-0) %WorkerServices_obj_map)
                       )
                       (ap ("worker_id" w-0.$.worker_id) %WorkerServices_obj_map)
                      )
                      (canon w-0.$.worker_id.[0] %WorkerServices_obj_map  WorkerServices_obj)
                     )
                    )
                   )
                   (ap WorkerServices_obj $services)
                  )
                  (new $-hop-
                   (new #$-hopc-
                    (canon w-0.$.host_id $-hop-  #$-hopc-)
                   )
                  )
                 )
                 (new $-hop-
                  (new #$-hopc-
                   (canon -relay- $-hop-  #$-hopc-)
                  )
                 )
                )
                (seq
                 (seq
                  (seq
                   (new $-hop-
                    (new #$-hopc-
                     (canon w-0.$.host_id $-hop-  #$-hopc-)
                    )
                   )
                   (new $-hop-
                    (new #$-hopc-
                     (canon -relay- $-hop-  #$-hopc-)
                    )
                   )
                  )
                  (new $-hop-
                   (new #$-hopc-
                    (canon %init_peer_id% $-hop-  #$-hopc-)
                   )
                  )
                 )
                 (fail :error:)
                )
               )
              )
             )
            )
            (seq
             (ap :error: -if-error-)
             (xor
              (match :error:.$.error_code 10002
               (seq
                (new %WorkerServices_obj-0_map
                 (seq
                  (seq
                   (seq
                    (seq
                     (ap ("host_id" w-0.$.host_id) %WorkerServices_obj-0_map)
                     (ap ("services" []) %WorkerServices_obj-0_map)
                    )
                    (ap ("spells" []) %WorkerServices_obj-0_map)
                   )
                   (ap ("worker_id" []) %WorkerServices_obj-0_map)
                  )
                  (canon %init_peer_id% %WorkerServices_obj-0_map  WorkerServices_obj-0)
                 )
                )
                (ap WorkerServices_obj-0 $services)
               )
              )
              (seq
               (seq
                (ap :error: -else-error-)
                (xor
                 (match :error:.$.error_code 10001
                  (ap -if-error- -if-else-error-)
                 )
                 (ap -else-error- -if-else-error-)
                )
               )
               (fail -if-else-error-)
              )
             )
            )
           )
          )
         )
        )
        (next w-0)
       )
       (null)
      )
     )
     (canon %init_peer_id% $services  #$-services-fix-0)
    )
    (ap #$-services-fix-0 -services-flat-0)
   )
   (call %init_peer_id% ("callbackSrv" "response") [-services-flat-0])
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function showSubnet(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "showSubnet",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "WorkerServices",
                        "fields": {
                            "host_id": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "services": {
                                "type": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "tag": "option"
                            },
                            "spells": {
                                "type": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "tag": "option"
                            },
                            "worker_id": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "option"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        showSubnet_script
    );
}

export const computeSizePersist_script = `
(xor
 (new $answers
  (seq
   (seq
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
            (new $option-inline
             (seq
              (xor
               (seq
                (new %MyDeployment_obj_map
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (ap ("chainNetworkId" 31337) %MyDeployment_obj_map)
                      (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %MyDeployment_obj_map)
                     )
                     (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %MyDeployment_obj_map)
                    )
                    (ap ("definition" "bafkreiaguifeta7g4tjmrb5uhrgcgf5oy3ybpo5mqepzwq2tluoxybtmv4") %MyDeployment_obj_map)
                   )
                   (ap ("timestamp" "2024-07-09T15:10:04.869Z") %MyDeployment_obj_map)
                  )
                  (canon %init_peer_id% %MyDeployment_obj_map  MyDeployment_obj)
                 )
                )
                (ap MyDeployment_obj $option-inline)
               )
               (null)
              )
              (canon %init_peer_id% $option-inline  #$option-inline-0)
             )
            )
           )
           (new %Deals_obj_map
            (seq
             (ap ("myDeployment" #$option-inline-0) %Deals_obj_map)
             (canon %init_peer_id% %Deals_obj_map  Deals_obj)
            )
           )
          )
          (ap Deals_obj.$.myDeployment Deals_obj_flat)
         )
         (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
        )
        (xor
         (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
         (fail :error:)
        )
       )
       (new -if-error-
        (xor
         (seq
          (match ret.$.success false
           (seq
            (new $array-inline
             (seq
              (seq
               (ap "Failed to resolve subnet: " $array-inline)
               (ap ret.$.error $array-inline)
              )
              (canon %init_peer_id% $array-inline  #$array-inline-0)
             )
            )
            (call %init_peer_id% ("run-console" "print") [#$array-inline-0])
           )
          )
          (new $-hop-
           (new #$-hopc-
            (canon -relay- $-hop-  #$-hopc-)
           )
          )
         )
         (seq
          (seq
           (ap :error: -if-error-)
           (xor
            (seq
             (match :error:.$.error_code 10001
              (null)
             )
             (new $-hop-
              (new #$-hopc-
               (canon -relay- $-hop-  #$-hopc-)
              )
             )
            )
            (fail -if-error-)
           )
          )
          (new $-hop-
           (new #$-hopc-
            (canon -relay- $-hop-  #$-hopc-)
           )
          )
         )
        )
       )
      )
      (fold ret.$.workers w-0
       (seq
        (new -if-error-
         (xor
          (mismatch w-0.$.worker_id []
           (xor
            (seq
             (seq
              (seq
               (seq
                (seq
                 (new $-hop-
                  (new #$-hopc-
                   (canon -relay- $-hop-  #$-hopc-)
                  )
                 )
                 (new $-hop-
                  (new #$-hopc-
                   (canon w-0.$.host_id $-hop-  #$-hopc-)
                  )
                 )
                )
                (call w-0.$.worker_id.[0] ("vault" "put") ["qwerty"] ret-0)
               )
               (call w-0.$.worker_id.[0] ("myService" "ls_vault") [] ret-1)
              )
              (call w-0.$.worker_id.[0] ("myService" "file_size") [ret-0] ret-2)
             )
             (new -if-else-error-
              (new -else-error-
               (new -if-error-
                (xor
                 (match ret-2.$.success true
                  (seq
                   (call w-0.$.worker_id.[0] ("myService" "write_file_size") [ret-2.$.size] ret-3)
                   (new -if-else-error-
                    (new -else-error-
                     (new -if-error-
                      (xor
                       (seq
                        (seq
                         (match ret-3.$.success true
                          (seq
                           (seq
                            (seq
                             (call w-0.$.worker_id.[0] ("myService" "pack") [ret-3.$.path ret-0 "qwerty_size"] ret-4)
                             (new $option-inline-1
                              (seq
                               (xor
                                (ap ret-4 $option-inline-1)
                                (null)
                               )
                               (canon w-0.$.worker_id.[0] $option-inline-1  #$option-inline-1-0)
                              )
                             )
                            )
                            (new %Answer_obj_map
                             (seq
                              (seq
                               (seq
                                (seq
                                 (seq
                                  (ap ("cid" #$option-inline-1-0) %Answer_obj_map)
                                  (ap ("errors" []) %Answer_obj_map)
                                 )
                                 (ap ("ls" ret-1) %Answer_obj_map)
                                )
                                (ap ("vault_put" ret-0) %Answer_obj_map)
                               )
                               (ap ("worker" w-0) %Answer_obj_map)
                              )
                              (canon w-0.$.worker_id.[0] %Answer_obj_map  Answer_obj)
                             )
                            )
                           )
                           (ap Answer_obj $answers)
                          )
                         )
                         (new $-hop-
                          (new #$-hopc-
                           (canon w-0.$.host_id $-hop-  #$-hopc-)
                          )
                         )
                        )
                        (new $-hop-
                         (new #$-hopc-
                          (canon -relay- $-hop-  #$-hopc-)
                         )
                        )
                       )
                       (seq
                        (ap :error: -if-error-)
                        (xor
                         (seq
                          (seq
                           (match :error:.$.error_code 10001
                            (seq
                             (seq
                              (new $array-inline-1
                               (seq
                                (seq
                                 (ap "write size" $array-inline-1)
                                 (ap ret-3.$.error $array-inline-1)
                                )
                                (canon w-0.$.worker_id.[0] $array-inline-1  #$array-inline-1-0)
                               )
                              )
                              (new %Answer_obj-0_map
                               (seq
                                (seq
                                 (seq
                                  (seq
                                   (seq
                                    (ap ("cid" []) %Answer_obj-0_map)
                                    (ap ("errors" #$array-inline-1-0) %Answer_obj-0_map)
                                   )
                                   (ap ("ls" ret-1) %Answer_obj-0_map)
                                  )
                                  (ap ("vault_put" ret-0) %Answer_obj-0_map)
                                 )
                                 (ap ("worker" w-0) %Answer_obj-0_map)
                                )
                                (canon w-0.$.worker_id.[0] %Answer_obj-0_map  Answer_obj-0)
                               )
                              )
                             )
                             (ap Answer_obj-0 $answers)
                            )
                           )
                           (new $-hop-
                            (new #$-hopc-
                             (canon w-0.$.host_id $-hop-  #$-hopc-)
                            )
                           )
                          )
                          (new $-hop-
                           (new #$-hopc-
                            (canon -relay- $-hop-  #$-hopc-)
                           )
                          )
                         )
                         (seq
                          (seq
                           (seq
                            (seq
                             (ap :error: -else-error-)
                             (xor
                              (seq
                               (match :error:.$.error_code 10001
                                (ap -if-error- -if-else-error-)
                               )
                               (new $-hop-
                                (new #$-hopc-
                                 (canon w-0.$.host_id $-hop-  #$-hopc-)
                                )
                               )
                              )
                              (seq
                               (ap -else-error- -if-else-error-)
                               (new $-hop-
                                (new #$-hopc-
                                 (canon w-0.$.host_id $-hop-  #$-hopc-)
                                )
                               )
                              )
                             )
                            )
                            (fail -if-else-error-)
                           )
                           (new $-hop-
                            (new #$-hopc-
                             (canon w-0.$.host_id $-hop-  #$-hopc-)
                            )
                           )
                          )
                          (new $-hop-
                           (new #$-hopc-
                            (canon -relay- $-hop-  #$-hopc-)
                           )
                          )
                         )
                        )
                       )
                      )
                     )
                    )
                   )
                  )
                 )
                 (seq
                  (ap :error: -if-error-)
                  (xor
                   (seq
                    (seq
                     (match :error:.$.error_code 10001
                      (seq
                       (seq
                        (new $array-inline-2
                         (seq
                          (seq
                           (ap "calculate size" $array-inline-2)
                           (ap ret-2.$.error $array-inline-2)
                          )
                          (canon w-0.$.worker_id.[0] $array-inline-2  #$array-inline-2-0)
                         )
                        )
                        (new %Answer_obj-1_map
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (ap ("cid" []) %Answer_obj-1_map)
                              (ap ("errors" #$array-inline-2-0) %Answer_obj-1_map)
                             )
                             (ap ("ls" ret-1) %Answer_obj-1_map)
                            )
                            (ap ("vault_put" ret-0) %Answer_obj-1_map)
                           )
                           (ap ("worker" w-0) %Answer_obj-1_map)
                          )
                          (canon w-0.$.worker_id.[0] %Answer_obj-1_map  Answer_obj-1)
                         )
                        )
                       )
                       (ap Answer_obj-1 $answers)
                      )
                     )
                     (new $-hop-
                      (new #$-hopc-
                       (canon w-0.$.host_id $-hop-  #$-hopc-)
                      )
                     )
                    )
                    (new $-hop-
                     (new #$-hopc-
                      (canon -relay- $-hop-  #$-hopc-)
                     )
                    )
                   )
                   (seq
                    (seq
                     (seq
                      (seq
                       (ap :error: -else-error-)
                       (xor
                        (seq
                         (match :error:.$.error_code 10001
                          (ap -if-error- -if-else-error-)
                         )
                         (new $-hop-
                          (new #$-hopc-
                           (canon w-0.$.host_id $-hop-  #$-hopc-)
                          )
                         )
                        )
                        (seq
                         (ap -else-error- -if-else-error-)
                         (new $-hop-
                          (new #$-hopc-
                           (canon w-0.$.host_id $-hop-  #$-hopc-)
                          )
                         )
                        )
                       )
                      )
                      (fail -if-else-error-)
                     )
                     (new $-hop-
                      (new #$-hopc-
                       (canon w-0.$.host_id $-hop-  #$-hopc-)
                      )
                     )
                    )
                    (new $-hop-
                     (new #$-hopc-
                      (canon -relay- $-hop-  #$-hopc-)
                     )
                    )
                   )
                  )
                 )
                )
               )
              )
             )
            )
            (seq
             (seq
              (seq
               (new $-hop-
                (new #$-hopc-
                 (canon w-0.$.host_id $-hop-  #$-hopc-)
                )
               )
               (new $-hop-
                (new #$-hopc-
                 (canon -relay- $-hop-  #$-hopc-)
                )
               )
              )
              (new $-hop-
               (new #$-hopc-
                (canon %init_peer_id% $-hop-  #$-hopc-)
               )
              )
             )
             (fail :error:)
            )
           )
          )
          (seq
           (ap :error: -if-error-)
           (xor
            (match :error:.$.error_code 10002
             (null)
            )
            (fail -if-error-)
           )
          )
         )
        )
        (next w-0)
       )
       (null)
      )
     )
     (canon %init_peer_id% $answers  #$-answers-fix-0)
    )
    (ap #$-answers-fix-0 -answers-flat-0)
   )
   (call %init_peer_id% ("callbackSrv" "response") [-answers-flat-0])
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function computeSizePersist(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "computeSizePersist",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "Answer",
                        "fields": {
                            "errors": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            },
                            "cid": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "option"
                            },
                            "worker": {
                                "name": "Worker",
                                "fields": {
                                    "host_id": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "pat_id": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "worker_id": {
                                        "type": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "tag": "option"
                                    }
                                },
                                "tag": "struct"
                            },
                            "ls": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            },
                            "vault_put": {
                                "name": "string",
                                "tag": "scalar"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        computeSizePersist_script
    );
}
