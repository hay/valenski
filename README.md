# valenski
**the minimal SASS library**

**valenski** is a lightweight set of [SASS](http://sass-lang.com/) mixins, classes, resets and values that simplify your workflow. By [Hay Kranen](http://github.com/hay).

[Github repo](https://github.com/hay/valenski)

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

## Mixins
**valenski** contains around 20 simple yet powerful utilities.

### `respond-*`
You can use `respond-from`, `respond-until` and `respond-between` to simplify the writing of media queries. Use these mixins in conjunction with the [screen breakpoint values](#screen-breakpoints).

    .grid {
        display: flex;
        flex-wrap: wrap;

        @include respond-until($screen-sm) {
            li {
                width: 100%;
            }
        }

        @include respond-between($screen-sm, $screen-md) {
            li {
                width: 50%;
            }
        }

        @include respond-from($screen-md) {
            li {
                width: 25%;
            }
        }
    }

### `wh`
`wh` is a shortcut for the `width` and `height` properties. If you use only one argument `width` and `height` will get the same value.

    header {
        @include wh(100vw, 20vh);
    }

    header h1 {
        @include wh(20rem);
    }

### `pos`
`pos` is a shortcut for the `top`, `right`, `bottom` and `left` properties.

    .footer {
        @include pos(50vh, 25%, 25%, 10rem);
    }

If only one argument is given, `pos` will set the same value to all properties.

    .overlay {
        @include pos(0);
    }

### `clearfix`
A mixin for the famous [clearfix](https://css-tricks.com/snippets/css/clear-fix/) hack.

### `transform-center-*`
Centering elements using the [transform](https://css-tricks.com/centering-percentage-widthheight-elements/) hack. Either horizontal (`transform-center-horizontal`), vertical (`transform-center-vertical`) or both (`transform-center`).

### `flex-center`
Center elements using flexbox.

### `child-margins`
Set `margin-top` on all child elements using the [lobotomized owl selector](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls). By default uses the `$valenski-base-unit` variable.

    main {
        @include child-margins(3rem);
    }

### `background-center`
Center the `background-image`, sizing it by `cover` by default (can be overridden).

## Values
**valenski** contains a couple of breakpoints variables for mediaqueries and some variables that set defaults for mixins, resets and classes.

### Screen breakpoints
These are lifted from [Bootstrap](http://getbootstrap.com/css/#grid-options).
* `$screen-xs: 480px`
* `$screen-sm: 768px`
* `$screen-md: 992px`
* `$screen-lg: 1200px`

### Valenski variables
* `$valenski-screen-small-height: 650px`
    * This is used to set a smaller size for the `rem` unit under this screen height
* `$valenski-base-unit: 10px`
    * Used for spacing and the `buffer-*` classes
* `$valenski-font-size-base: 10px`
    * What `1rem` should be
* `$valenski-font-size-small: 8px`
    * What `1rem` should be on small devices (<768px)


## Reset
**valenski** contains a barebones reset. It only sets margins and paddings to zero, defaults to using `border-box` for `box-sizing` and does some common sense styling for elements like removing the border for the `img` element on Internet Explorer 9. It also sets up the `rem` element so `1rem = 10px`, except for mobile devices (under 768px) and small screens (in height) where it is 8px. Both values can be overwritten using the [`$valenski-font-size-base` and `$valenski-font-size-small` values](#valenski-variables). Using this technique you can do this:

    p {
        font-size: 2rem; // Translates to 20px and 16px for mobile
    }

## Classes
**valenski** contains `buffer-*` classes that can be used for vertical spacing between elements. The spacing is based on the [`$valenski-base-unit` variable](#valenski-variables) (by default this is 10px). For example:

    <header class="buffer-3"> <!-- Add 15px margin add the top and bottom -->
        <h1 class="buffer-bottom-1">Header with 10px margin at the bottom</h1>
        <h2 class="buffer-top-0">Subheader with no margin at top</h2>
    </header>