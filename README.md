# valenski
**the minimal SASS library**

[**Source on Github**](https://github.com/hay/valenski)

**valenski** is a lightweight set of [SASS](http://sass-lang.com/) mixins, classes, resets and values that simplify your workflow. By [Hay Kranen](http://github.com/hay).

<aside class="aside"></aside>

## Philosophy
**valenski** was written because i needed it. I produce many static websites with very different requirements and designs, so something like [Bootstrap](http://getbootstrap.com/) is far too heavy and opinionated. After producing more than 100 websites in two years i discovered that the only things i always needed where:

* A very bare-bones CSS reset that puts an emphasis on using the [rem unit](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/).
* Some SASS variables for common responsive breakpoints.
* SASS utility mixins, for making responsive design easier and for reusing some common CSS hacks.
* Optional buffer classes for overwriting default margins on elements.

## Installation
**valenski** only works with [SASS](http://sass-lang.com/). You'll probably want to use a package manager, such as [npm](https://www.npmjs.com/). Then add it to your project:

    npm install --save valenski

And include the master file in your SASS file.

    @use "node_modules/valenski/valenski";

Or if you have set the `load-path` properly or if you're using a bundler:

    @use "valenski/valenski";

Optionally you can only include the reset without the classes:

    @use "valenski/valenski-reset";

Or even just the values and mixins:

    @use "valenski/values";
    @use "valenski/mixins";

## Mixins
**valenski** contains around 20 simple yet powerful utilities.

### `respond-*`
You can use `respond-from`, `respond-until` and `respond-between` to simplify the writing of media queries. Use these mixins in conjunction with the [screen breakpoint values](#screen-breakpoints).

    @use "valenski/mixins";

    .grid {
        display: flex;
        flex-wrap: wrap;

        @include mixins.respond-until(values.$screen-sm) {
            li {
                width: 100%;
            }
        }

        @include mixins.respond-between(values.$screen-sm, values.$screen-md) {
            li {
                width: 50%;
            }
        }

        @include mixins.respond-from(values.$screen-md) {
            li {
                width: 25%;
            }
        }
    }

### `wh`
`wh` is a shortcut for the `width` and `height` properties. If you use only one argument `width` and `height` will get the same value.

    @use "valenski/mixins";

    header {
        @include mixins.wh(100vw, 20vh);
    }

    header h1 {
        @include mixins.wh(20rem);
    }

### `pos`
`pos` is a shortcut for the `top`, `right`, `bottom` and `left` properties.

    @use "valenski/mixins";

    .footer {
        @include mixins.pos(50vh, 25%, 25%, 10rem);
    }

This is the same as writing

    .footer {
        top: 50vh;
        right: 25%;
        bottom: 25%;
        left: 10rem;
    }

If only two arguments are given these will be used for the `left` and `top` properties (think of them as `x` and `y`)

    .circle {
        @include mixins.pos(300px, 200px);
    }

    .circle {
        left: 300px;
        top: 200px;
    }

If only one argument is given, `pos` will set the same value to all properties.

    .overlay {
        @include mixins.pos(0);
    }

This is the same as:

    .overlay {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

### `clearfix`
A mixin for the famous [clearfix](https://css-tricks.com/snippets/css/clear-fix/) hack.

    @use "valenski/mixins";

    .clearfix {
        @include mixins.clearfix;
    }

### `transform-center-*`
Centers an element using the [transform](https://css-tricks.com/centering-percentage-widthheight-elements/) hack. Either horizontal (`transform-center-horizontal`), vertical (`transform-center-vertical`) or both (`transform-center`).

    @use "valenski/mixins";

    body {
        position: relative;
        @include mixins.wh(100vw, 100vh);
    }

    h1 {
        @include mixins.transform-center; // center both horizontally and vertically
    }

    h2 {
        @include mixins.transform-center-horizontal; // only center horizontally
    }

    h3 {
        @include mixins.transform-center-vertically; // only center vertically
    }

### `flex-center`
Center child elements using flexbox. Compare this to the [transform-center](#-transform-center-) mixins that centers the element you apply it to. If you have more than one child elements they will be aligned on the vertical axis. To align horizontally try `@include flex-center(row);`

    @use "valenski/mixins";

    body {
        @include mixins.flex-center;
    }

    h1 {
        // this element will be centered
    }

    ul {
        // centers child elements on horizontal axis
        @include mixins.flex-center(row);
    }

### `child-margins`
Set `margin-top` on all child elements using the [lobotomized owl selector](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls). By default uses the `$valenski-base-unit` variable.

    @use "valenski/mixins";

    main {
        @include mixins.child-margins(3rem);
    }

### `background-center`
Center the `background-image`, by default sizing with the `cover` option. If you want to size with the `contain` option you can give that as an option.

    @use "valenski/mixins";

    figure {
        @include mixins.background-center;
        background-image: url('img/figure.jpg');
    }

    body {
        @include mixins.background-center(contain);
        background-image: url('img/background.jpg');
    }

### `sr-only`
Only display content to screen readers. This is the same mixin as used in [Bootstrap 4](https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss). Note that you can also use the `sr-only` class.

    @use "valenski/mixins";

    .sr-notice {
        @include mixins.sr-only;
    }

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
* `$valenski-use-small-font-size: true`
    * Enable the small font sizes for small devices and screens that are not so high.

All of these variables are also available as CSS variables.

    @use "valenski/values";

    .element {
        width: var(--screen-xs);
    }

## Reset
**valenski** contains a barebones reset. It only sets margins and paddings to zero, defaults to using `border-box` for `box-sizing` and does some common sense styling for elements like removing the border for the `img` element on Internet Explorer 9. It also sets up the `rem` element so `1rem = 10px`, except for mobile devices (under 768px) and small screens (in height) where it is 8px. Both values can be overwritten using the [`$valenski-font-size-base` and `$valenski-font-size-small` values](#valenski-variables). Using this technique you can do this:

    @use "valenski/reset";

    p {
        font-size: 2rem; // Translates to 20px and 16px for mobile
    }

## Classes
**valenski** contains `buffer-*` classes that can be used for vertical spacing between elements. The spacing is based on the [`$valenski-base-unit` variable](#valenski-variables) (by default this is 10px). For example:

    <header class="buffer-3"> <!-- Add 15px margin add the top and bottom -->
        <h1 class="buffer-bottom-1">Header with 10px margin at the bottom</h1>
        <h2 class="buffer-top-0">Subheader with no margin at top</h2>
    </header>

There is also a `sr-only` class you can use to only display content to screen readers.

    <img src="logo.png" alt="Website logo" />
    <h1 class="sr-only">My briliant website</h1>

## Version history
* 2.0.0 switched from the old `@import` to `@use` syntax. It also set the `$valenski-use-small-font-size` variable to `false` by default.
* Version 1.5.0 was released on February 21 2022. Note that was the last version that used the `@import` syntax. [See the docs here if you still want to use that version](https://github.com/hay/valenski/blob/v1.5.0/README.md).
* The first version of Valenski (0.2.0) was released on January 16th 2015.