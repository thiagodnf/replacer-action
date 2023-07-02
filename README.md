<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/114015/250370332-b5b91b72-882d-489e-8d11-7d93f0d01c9a.png" width="600"/>

A GitHub Action for finding and replacing strings in your project files

[![GitHub Release](https://img.shields.io/github/release/thiagodnf/replacer-action.svg)](https://github.com/thiagodnf/replacer-action/releases/latest)
[![GitHub contributors](https://img.shields.io/github/contributors/thiagodnf/replacer-action.svg)](https://github.com/thiagodnf/replacer-action/graphs/contributors)
[![GitHub stars](https://img.shields.io/github/stars/thiagodnf/replacer-action.svg)](https://github.com/thiagodnf/replacer-action)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

## Input

### `find`
**Required** The regular expression you want to be replaced

### `replace`
**Required** The new string to be replaced

### `include`
**Optional** A glob of files to include in our find and replace. Default is `**`

### `exclude`
**Optional** A glob of files to exclude in our find and replace. Default is `.git/**`

## Outputs

### `modifiedFiles`

The number of files which have been modified

## Usage

### Example workflow

```yaml
name: My Workflow

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
     
      - uses: actions/checkout@main
     
      - name: Find and Replace
        uses: thiagodnf/replacer-action@v3
        with:
          find: "hello"
          replace: "world"
```

## Questions or Suggestions

Feel free to access the <a href="../../discussions">discussions tab</a> as you need

## Contribute

Contributions to this project are very welcome! We can't do this alone! Feel free to fork this project, work on it and then make a pull request.

## License

Licensed under the [MIT license](LICENSE).

## Donate

I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously, this takes time. You can integrate and use these projects in your applications for free! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, reach out to me if you want to do it.

Thanks!

❤️
