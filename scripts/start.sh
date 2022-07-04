#!/bin/sh

http-server ./dist -c-1 --ssl -p 3443 --cert ./test-certs/cert.pem --key ./test-certs/cert-key-nopassword.pem
