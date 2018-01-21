# tooltip [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A simple library that creates custom tooltips on given elements (anchors by default).

[DEMO](https://bezet.github.io/tooltip/)

## Installation

```bash
npm i @bezet/tooltip
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


[npm-image]: https://badge.fury.io/js/tooltip.svg
[npm-url]: https://npmjs.org/package/tooltip
[daviddm-image]: https://david-dm.org/bezet/tooltip.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/bezet/tooltip
