#!/bin/sh

mkdir -p ./test-certs

openssl genrsa -des3 -out ./test-certs/root-key.pem 4096
openssl req -new -sha256 -x509 -days 5475 -subj "/C=US/ST=CA/L=SB/O=spamfro/OU=IT/CN=Spamfro Test Root Certificate" -key ./test-certs/root-key.pem -out ./test-certs/root.crt
  
# ... import root.crt in Local Computer Trusted Root Certification Authorities
