#!/bin/sh

echo "Timestamp;Date;Nonce"
#cat uumChain.json| jq -r '.[] | (._timestamp|tostring) + " ; " +  (.nonce|tostring)'

# https://stackoverflow.com/questions/3249827/convert-unix-timestamp-to-a-date-string/3249978
# https://serverfault.com/questions/842322/run-bash-command-with-json-parameters-from-jq
cat uumChain.json| jq -r '.[] | (._timestamp|tostring) + " ;  ; " +  (.nonce|tostring)'



