#!/bin/sh

ln -fsv ../csstype ./node_modules/@types/csstype

mkdir -p ./dist

pushd ./src/app
tar c *.html *.ico | tar xv --directory ../../dist
popd

rollup --config ./rollup.config-app.js
