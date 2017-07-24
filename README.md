# valenski
**the minimal SASS library**

**valenski** is a lightweight set of [SASS](http://sass-lang.com/) mixins, classes, resets and values that simplify your workflow.

## Philosophy
**valenski** was written because i needed it. I produce around a static website every week with very different requirements and designs, so something like [Bootstrap](http://getbootstrap.com/) is far too heavy and opinionated. After producing more than 100 websites in two years i discovered that the only things i always needed where:

* A very bare-bones CSS reset that puts an emphasis on using the [rem unit](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/).
* Some SASS variables for common responsive breakpoints.
* SASS utility mixins, for making responsive design easier and for reusing some common CSS hacks.
* Optional buffer classes for overwriting default margins on elements.

## Installation
**valenski** only works with [SASS](http://sass-lang.com/). You'll probably want to use a package manager, such as [npm](https://www.npmjs.com/) or [bower](https://bower.io/). Then add it to your project:

    npm install valenski

And include the master file in your SASS file.

    @import "node_modules/valenski/valenski";

Optionally you can only include the reset without the classes:

    @import "node_modules/valenski/valenski-reset";

Or even just the values and mixins:

    @import "node_modules/valenski/values";
    @import "node_modules/valenski/mixins";

## Reset
**valenski** contains a barebones reset. It only sets margins and paddings to zero, defaults to using `border-box` for `box-sizing` and does some common sense styling for elements like removing the border for the `img` element on Internet Explorer 9. It also sets up the `rem` element so `1rem = 10px`, except for mobile devices (under 768px) and small screens (in height) where it is 8px. Both values can be overwritten using the `$valenski-font-size-base` and `$valenski-font-size-small` values. Using this technique you can do this.

    p {
        font-size: 2rem; // Translates to 20px and 16px for mobile
    }

