# vanilla-tilt.js
A smooth 3D tilt javascript library forked from [Tilt.js (jQuery version)](https://github.com/gijsroge/tilt.js).

[View landing page (demos)](https://micku7zu.github.io/vanilla-tilt.js/landing/index.html)

### Usage

```html
<body>
<div class="your-element" data-tilt></div>

<!-- at the end of the body -->
<script type="text/javascript" src="vanilla-tilt.js"></script>
</body>
```

### Options
```js
{
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:          300,    // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
```

### Events
```js
const element = document.querySelector(".js-tilt");
VanillaTilt.init(element);
element.addEventListeners("tiltChange", callback);
```

### Methods
```js
const element = document.querySelector(".js-tilt");
VanillaTilt.init(element);

// Destroy instance
element.vanillaTilt.destroy();

// Get values of instance
element.vanillaTilt.getValues();

// Reset instance
element.vanillaTilt.reset();
```

### Install
You can copy and include any of the following file:

TO DO (automatically build those):

* dest/vanilla-tilt.js ~ 6kb
* dest/vanilla-tilt.min.js ~ 3.5kb
* dest/vanilla-tilt.babel.js ~ 8.5kb
* dest/vanilla-tilt.babel.min.js ~ 4.3kb

in your webiste.

### Credits

Original library: [Tilt.js](http://gijsroge.github.io/tilt.js/)

Original library author: [Gijs Rogé](https://twitter.com/GijsRoge)

### License

MIT License