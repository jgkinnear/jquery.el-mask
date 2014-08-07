jQuery el-mask is a simple plugin that allows for easy masking of elements with a loading 'spinner'. It is a bare-bones plugin that provides very little default styling, simply overlaying the targetted elements with a transparent div, and setting up an element to be styled as a spinner.

el-mask aims to provide developers with an easy method of masking elements, leaving the look and feel to the developer. Example/pre-made themes are available in the package

jQuery el-mask
=====

## Demo

## Installation

### Download
Download the package and include javascript

```
<script type="text/javascript" src="jquery.el-mask.js"></script>
```

### Bower
```
bower install jquery.el-mask --save
```

### CDN
Not available

## Quickstart

### Mask Element
```
$('body').mask(); // or
$('body').mask('show');
```

### Unmask Element
```
$('body').mask('hide');
```

## Configuration
el-mask can be configured by passing an object into the `mask` method.

$.fn.mask.defaults = {
		containerClass: 'loading',
		maskClass: 'mask',
		constructor: Mask,
		show: true,
		text: '<div class="spinner"><i class="spinner-icon"></i></div>',
		fadeOutTime: -1,
		fadeOut: false,
		fadeIn: false
	};
#### containerClass (string)
Adds a class to the targetted element during the lifetime of the mask

#### maskClass (string)
Adds a class to the created mask element

#### constructor (Object)
#### show (boolean)
#### text (string)
The text that will be shown when the mask is loaded. This option may include HTML. By default, there is a basic structure for a spinner

#### fadeIn (boolean)
Determines whether the mask will apply a fadeIn effect when displayed

#### fadeOut (boolean)
Determines whether the mask will apply a fadeOut effect when hidden

#### fadeOutTime (integer)
The number of milliseconds before the loading mask will disapear.

#### Defaults
```
$.fn.mask.defaults = {
    containerClass: 'loading',
    maskClass: 'mask',
    constructor: Mask,
    show: true,
    text: '<div class="spinner"><i class="spinner-icon"></i></div>',
    fadeOutTime: -1,
    fadeOut: false,
    fadeIn: false
};
```
## Notes

## License

## Contributers