#!/bin/sh

mkdir -p ./dist

rollup --config ./rollup.config-sw.js
