<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/114015/250370332-b5b91b72-882d-489e-8d11-7d93f0d01c9a.png" width="600"/>

A GitHub Action for finding and replacing strings in your project files

[![GitHub Release](https://img.shields.io/github/release/thiagodnf/replacer-action.svg)](https://github.com/thiagodnf/replacer-action/releases/latest)
[![GitHub contributors](https://img.shields.io/github/contributors/thiagodnf/replacer-action.svg)](https://github.com/thiagodnf/replacer-action/graphs/contributors)
[![GitHub stars](https://img.shields.io/github/stars/thiagodnf/replacer-action.svg)](https://github.com/thiagodnf/replacer-action)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

## Usage

### Example workflow

```yaml
name: My Workflow

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
     
      - uses: actions/checkout@v3
     
      - name: Find and Replace
        uses: thiagodnf/replacer-action@v3
        with:
          find: "hello"
          replace: "world"
```
