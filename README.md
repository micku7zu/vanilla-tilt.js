# vanilla-tilt.js
Rewritten from [Tilt.js](https://github.com/gijsroge/tilt.js).
**All copyright goes to [https://github.com/gijsroge/tilt.js](https://github.com/gijsroge/tilt.js)**

A tiny requestAnimationFrame powered 60+fps lightweight parallax tilt effect without any dependencies.
![Tilt.js demo gif](http://gijsroge.github.io/tilt.js/tilt.js.gif)

####Take a look at the **[landing page](https://micku7zu.github.io/vanilla-tilt.js/index.html)** for demo's.

### Usage

```html
<!DOCTYPE html>
<body>
    <div data-tilt></div> <!-- Tilt element -->
    <script src="vanilla-tilt.js"></script> <!-- Load vanilla-tilt.js library -->
</body>
```

### Options
```js
max:            35,     //maxTilt
perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
speed:          300,    // Speed of the enter/exit transition.
transition:     true,   // Set a transition on enter/exit.
axis:           null,   // What axis should be disabled. Can be X or Y.
reset:          true    // If the tilt effect has to be reset on exit.
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
