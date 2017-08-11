(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("README.md", function(exports, require, module) {
var __templateData = "<h1 id=\"valenski\">valenski</h1>\n<p><strong>the minimal SASS library</strong></p>\n<p><strong>valenski</strong> is a lightweight set of <a href=\"http://sass-lang.com/\">SASS</a> mixins, classes, resets and values that simplify your workflow. By <a href=\"http://github.com/hay\">Hay Kranen</a>.</p>\n<aside class=\"aside\"></aside>\n\n<h2 id=\"philosophy\">Philosophy</h2>\n<p><strong>valenski</strong> was written because i needed it. I produce around a static website every week with very different requirements and designs, so something like <a href=\"http://getbootstrap.com/\">Bootstrap</a> is far too heavy and opinionated. After producing more than 100 websites in two years i discovered that the only things i always needed where:</p>\n<ul>\n<li>A very bare-bones CSS reset that puts an emphasis on using the <a href=\"https://www.sitepoint.com/understanding-and-using-rem-units-in-css/\">rem unit</a>.</li>\n<li>Some SASS variables for common responsive breakpoints.</li>\n<li>SASS utility mixins, for making responsive design easier and for reusing some common CSS hacks.</li>\n<li>Optional buffer classes for overwriting default margins on elements.</li>\n</ul>\n<h2 id=\"installation\">Installation</h2>\n<p><strong>valenski</strong> only works with <a href=\"http://sass-lang.com/\">SASS</a>. You&#39;ll probably want to use a package manager, such as <a href=\"https://www.npmjs.com/\">npm</a> or <a href=\"https://bower.io/\">bower</a>. Then add it to your project:</p>\n<pre><code>npm install valenski</code></pre>\n<p>And include the master file in your SASS file.</p>\n<pre><code>@import &quot;node_modules/valenski/valenski&quot;;</code></pre>\n<p>Optionally you can only include the reset without the classes:</p>\n<pre><code>@import &quot;node_modules/valenski/valenski-reset&quot;;</code></pre>\n<p>Or even just the values and mixins:</p>\n<pre><code>@import &quot;node_modules/valenski/values&quot;;\n@import &quot;node_modules/valenski/mixins&quot;;</code></pre>\n<h2 id=\"mixins\">Mixins</h2>\n<p><strong>valenski</strong> contains around 20 simple yet powerful utilities.</p>\n<h3 id=\"-respond-\"><code>respond-*</code></h3>\n<p>You can use <code>respond-from</code>, <code>respond-until</code> and <code>respond-between</code> to simplify the writing of media queries. Use these mixins in conjunction with the <a href=\"#screen-breakpoints\">screen breakpoint values</a>.</p>\n<pre><code>.grid {\n    display: flex;\n    flex-wrap: wrap;\n\n    @include respond-until($screen-sm) {\n        li {\n            width: 100%;\n        }\n    }\n\n    @include respond-between($screen-sm, $screen-md) {\n        li {\n            width: 50%;\n        }\n    }\n\n    @include respond-from($screen-md) {\n        li {\n            width: 25%;\n        }\n    }\n}</code></pre>\n<h3 id=\"-wh-\"><code>wh</code></h3>\n<p><code>wh</code> is a shortcut for the <code>width</code> and <code>height</code> properties. If you use only one argument <code>width</code> and <code>height</code> will get the same value.</p>\n<pre><code>header {\n    @include wh(100vw, 20vh);\n}\n\nheader h1 {\n    @include wh(20rem);\n}</code></pre>\n<h3 id=\"-pos-\"><code>pos</code></h3>\n<p><code>pos</code> is a shortcut for the <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code> properties.</p>\n<pre><code>.footer {\n    @include pos(50vh, 25%, 25%, 10rem);\n}</code></pre>\n<p>This is the same as writing</p>\n<pre><code>.footer {\n    top: 50vh;\n    right: 25%;\n    bottom: 25%;\n    left: 10rem;\n}</code></pre>\n<p>If only two arguments are given these will be used for the <code>left</code> and <code>top</code> properties (think of them as <code>x</code> and <code>y</code>)</p>\n<pre><code>.circle {\n    @include pos(300px, 200px);\n}\n\n.circle {\n    left: 300px;\n    top: 200px;\n}</code></pre>\n<p>If only one argument is given, <code>pos</code> will set the same value to all properties.</p>\n<pre><code>.overlay {\n    @include pos(0);\n}</code></pre>\n<p>This is the same as:</p>\n<pre><code>.overlay {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}</code></pre>\n<h3 id=\"-clearfix-\"><code>clearfix</code></h3>\n<p>A mixin for the famous <a href=\"https://css-tricks.com/snippets/css/clear-fix/\">clearfix</a> hack.</p>\n<pre><code>.clearfix {\n    @include clearfix;\n}</code></pre>\n<h3 id=\"-transform-center-\"><code>transform-center-*</code></h3>\n<p>Centers an element using the <a href=\"https://css-tricks.com/centering-percentage-widthheight-elements/\">transform</a> hack. Either horizontal (<code>transform-center-horizontal</code>), vertical (<code>transform-center-vertical</code>) or both (<code>transform-center</code>).</p>\n<pre><code>body {\n    position: relative;\n    @include wh(100vw, 100vh);\n}\n\nh1 {\n    @include transform-center; // center both horizontally and vertically\n}\n\nh2 {\n    @include transform-center-horizontal; // only center horizontally\n}\n\nh3 {\n    @include transform-center-vertically; // only center vertically\n}</code></pre>\n<h3 id=\"-flex-center-\"><code>flex-center</code></h3>\n<p>Center child elements using flexbox. Compare this to the <a href=\"#-transform-center-\">transform-center</a> mixins that centers the element you apply it to. If you have more than one child elements they will be aligned on the vertical axis. To align horizontally try <code>@include flex-center(row);</code></p>\n<pre><code>body {\n    @include flex-center;\n}\n\nh1 {\n    // this element will be centered\n}\n\nul {\n    // centers child elements on horizontal axis\n    @include flex-center(row);\n}</code></pre>\n<h3 id=\"-child-margins-\"><code>child-margins</code></h3>\n<p>Set <code>margin-top</code> on all child elements using the <a href=\"https://alistapart.com/article/axiomatic-css-and-lobotomized-owls\">lobotomized owl selector</a>. By default uses the <code>$valenski-base-unit</code> variable.</p>\n<pre><code>main {\n    @include child-margins(3rem);\n}</code></pre>\n<h3 id=\"-background-center-\"><code>background-center</code></h3>\n<p>Center the <code>background-image</code>, by default sizing with the <code>cover</code> option. If you want to size with the <code>contain</code> option you can give that as an option.</p>\n<pre><code>figure {\n    @include background-center;\n    background-image: url(&#39;img/figure.jpg&#39;);\n}\n\nbody {\n    @include background-center(contain);\n    background-image: url(&#39;img/background.jpg&#39;);\n}</code></pre>\n<h2 id=\"values\">Values</h2>\n<p><strong>valenski</strong> contains a couple of breakpoints variables for mediaqueries and some variables that set defaults for mixins, resets and classes.</p>\n<h3 id=\"screen-breakpoints\">Screen breakpoints</h3>\n<p>These are lifted from <a href=\"http://getbootstrap.com/css/#grid-options\">Bootstrap</a>.</p>\n<ul>\n<li><code>$screen-xs: 480px</code></li>\n<li><code>$screen-sm: 768px</code></li>\n<li><code>$screen-md: 992px</code></li>\n<li><code>$screen-lg: 1200px</code></li>\n</ul>\n<h3 id=\"valenski-variables\">Valenski variables</h3>\n<ul>\n<li><code>$valenski-screen-small-height: 650px</code><ul>\n<li>This is used to set a smaller size for the <code>rem</code> unit under this screen height</li>\n</ul>\n</li>\n<li><code>$valenski-base-unit: 10px</code><ul>\n<li>Used for spacing and the <code>buffer-*</code> classes</li>\n</ul>\n</li>\n<li><code>$valenski-font-size-base: 10px</code><ul>\n<li>What <code>1rem</code> should be</li>\n</ul>\n</li>\n<li><code>$valenski-font-size-small: 8px</code><ul>\n<li>What <code>1rem</code> should be on small devices (&lt;768px)</li>\n</ul>\n</li>\n</ul>\n<h2 id=\"reset\">Reset</h2>\n<p><strong>valenski</strong> contains a barebones reset. It only sets margins and paddings to zero, defaults to using <code>border-box</code> for <code>box-sizing</code> and does some common sense styling for elements like removing the border for the <code>img</code> element on Internet Explorer 9. It also sets up the <code>rem</code> element so <code>1rem = 10px</code>, except for mobile devices (under 768px) and small screens (in height) where it is 8px. Both values can be overwritten using the <a href=\"#valenski-variables\"><code>$valenski-font-size-base</code> and <code>$valenski-font-size-small</code> values</a>. Using this technique you can do this:</p>\n<pre><code>p {\n    font-size: 2rem; // Translates to 20px and 16px for mobile\n}</code></pre>\n<h2 id=\"classes\">Classes</h2>\n<p><strong>valenski</strong> contains <code>buffer-*</code> classes that can be used for vertical spacing between elements. The spacing is based on the <a href=\"#valenski-variables\"><code>$valenski-base-unit</code> variable</a> (by default this is 10px). For example:</p>\n<pre><code>&lt;header class=&quot;buffer-3&quot;&gt; &lt;!-- Add 15px margin add the top and bottom --&gt;\n    &lt;h1 class=&quot;buffer-bottom-1&quot;&gt;Header with 10px margin at the bottom&lt;/h1&gt;\n    &lt;h2 class=&quot;buffer-top-0&quot;&gt;Subheader with no margin at top&lt;/h2&gt;\n&lt;/header&gt;</code></pre>\n";
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("app.js", function(exports, require, module) {
var html = require('README.md');
// var aside = require('aside.md');
var $ = document.querySelector.bind(document);

$('main').innerHTML = html;
});

require.register("aside.md", function(exports, require, module) {
var __templateData = "<ul>\n    <li>\n        <a class=\"github-button\"\n           href=\"https://github.com/hay/valenski\"\n           data-icon=\"octicon-star\"\n           data-size=\"large\"\n           aria-label=\"Star hay/valenski on GitHub\">Star</a>\n    </li>\n</ul>";
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');

