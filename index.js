#!/usr/bin/env node

const fs = require('fs')
const { info } = require('prettycli')

const content = `
language: node_js
node_js:
  - "10"
cache:
  directories:
    - node_modules
notifications:
  email: false
`

const path = process.cwd() + '/.travis.yml'
fs.writeFileSync(path, content, 'utf8')

info('✔︎', 'Added .travis.yml in your repo')
