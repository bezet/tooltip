# baza-tooltip [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> This is a simple library that creates custom tooltips on given elements (anchors by default).

## Installation

We assume you have pre-installed [node.js](https://nodejs.org/).

You should install baza-tooltip using [npm](https://www.npmjs.com/):
```bash
npm i -D baza-tooltip
```
Or [yarn](https://yarnpkg.com/en):
```bash
yarn add baza-tooltip
```

## Usage
### Add styles
`<link rel="stylesheet" type="text/css" href="dist/tooltip.css">`

### Add JS
Either
```
import Tooltip from 'baza-tooltip';
const myTooltip = new Tooltip('a');
```

or
```
<script type="text/javascript" src="dist/Tooltip.js"></script>
<script type="text/javascript">
    var myTooltip = new Tooltip('a');
</script>
```

## License

MIT © [bezet](github.com/bezet)


[npm-image]: https://badge.fury.io/js/baza-tooltip.svg
[npm-url]: https://npmjs.org/package/baza-tooltip
[daviddm-image]: https://david-dm.org/bezet/baza-tooltip.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/bezet/baza-tooltip
