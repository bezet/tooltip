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
const myTooltip = new Tooltip({
  selector: 'a',
  tooltipClass: 'tooltip',
  margin: 10,
  position: 'top-center',
});
```

or
```
<script type="text/javascript" src="dist/tooltip.js"></script>
<script type="text/javascript">
  var myTooltip = new Tooltip({
    selector: 'a',
    tooltipClass: 'tooltip',
    margin: 10,
    position: 'top-center',
  });
</script>
```

## License

MIT © [Bartek Zadara](github.com/bezet)


[npm-image]: https://badge.fury.io/js/%40bezet%2Ftooltip.svg
[npm-url]: https://npmjs.org/package/@bezet/tooltip
[daviddm-image]: https://david-dm.org/bezet/tooltip.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/bezet/tooltip
