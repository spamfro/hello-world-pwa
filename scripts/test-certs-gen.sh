#!/bin/sh

[ -f ./test-certs/root.crt ] || exit 1
openssl genrsa -des3 -out ./test-certs/cert-key.pem 4096
openssl req -new -sha256 -days 5475 -subj "/C=US/ST=CA/L=SB/O=spamfro/OU=IT/CN=*.spamfro.xyz" -key ./test-certs/cert-key.pem -out ./test-certs/cert-csr.pem
openssl x509 -req -sha256 -in ./test-certs/cert-csr.pem -CA ./test-certs/root.crt -CAkey ./test-certs/root-key.pem -set_serial 01 -extfile ./scripts/test-certs.conf -out ./test-certs/cert.crt
openssl x509 -in ./test-certs/cert.crt -out ./test-certs/cert.pem -outform PEM
openssl rsa -in ./test-certs/cert-key.pem -out ./test-certs/cert-key-nopassword.pem
  