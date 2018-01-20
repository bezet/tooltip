# tooltip [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A simple library that creates custom tooltips on given elements (anchors by default).

[DEMO](https://bezet.github.io/tooltip/)

## Installation

You should install baza-tooltip using [npm](https://www.npmjs.com/):
```bash
npm i -D @bezet/tooltip
```


## Usage
### Add styles
`<link rel="stylesheet" type="text/css" href="dist/tooltip.css">`

### Add JS
Either
```
import Tooltip from '@bezet/tooltip';
const myTooltip = new Tooltip('a');
```

or
```
<script type="text/javascript" src="dist/tooltip.js"></script>
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
