# baza-tooltips [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> This is a simple library that creates custom tooltips on given elements (anchors by default).

## Installation

We assume you have pre-installed [node.js](https://nodejs.org/). 

You should install baza-tooltips using [npm](https://www.npmjs.com/):
```bash
npm i -D baza-tooltips
```
Or [yarn](https://yarnpkg.com/en):
```bash
yarn install baza-tooltips
```

## Usage
### Add styles
`<link rel="stylesheet" type="text/css" href="dist/tooltips.css">`

### Add JS
Either
```
import Tooltips from 'baza-tooltips';
const myTooltips = new Tooltips('a');
```

or    
```
<script type="text/javascript" src="dist/Tooltips.js"></script>
<script type="text/javascript">
    var myTooltips = new Tooltips('a');
</script>
```

## License

MIT © [bezet](github.com/bezet)


[npm-image]: https://badge.fury.io/js/baza-tooltips.svg
[npm-url]: https://npmjs.org/package/baza-tooltips
[daviddm-image]: https://david-dm.org/bezet/baza-tooltips.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/bezet/baza-tooltips