parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"e3Cr":[function(require,module,exports) {
function e(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}}function l(e){module.exports.defaults=e}module.exports={defaults:e(),getDefaults:e,changeDefaults:l};
},{}],"sUTH":[function(require,module,exports) {
var e=/[&<>"']/,r=/[&<>"']/g,t=/[<>"']|&(?!#?\w+;)/,n=/[<>"']|&(?!#?\w+;)/g,a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},i=function(e){return a[e]};function o(a,o){if(o){if(e.test(a))return a.replace(r,i)}else if(t.test(a))return a.replace(n,i);return a}var c=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function u(e){return e.replace(c,function(e,r){return"colon"===(r=r.toLowerCase())?":":"#"===r.charAt(0)?"x"===r.charAt(1)?String.fromCharCode(parseInt(r.substring(2),16)):String.fromCharCode(+r.substring(1)):""})}var s=/(^|[^\[])\^/g;function l(e,r){e=e.source||e,r=r||"";var t={replace:function(r,n){return n=(n=n.source||n).replace(s,"$1"),e=e.replace(r,n),t},getRegex:function(){return new RegExp(e,r)}};return t}var f=/[^\w:]/g,p=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function d(e,r,t){if(e){var n;try{n=decodeURIComponent(u(t)).replace(f,"").toLowerCase()}catch(a){return null}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return null}r&&!p.test(t)&&(t=x(r,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch(a){return null}return t}var g={},h=/^[^:]+:\/*[^\/]*$/,v=/^([^:]+:)[\s\S]*$/,m=/^([^:]+:\/*[^\/]*)[\s\S]*$/;function x(e,r){g[" "+e]||(h.test(e)?g[" "+e]=e+"/":g[" "+e]=A(e,"/",!0));var t=-1===(e=g[" "+e]).indexOf(":");return"//"===r.substring(0,2)?t?r:e.replace(v,"$1")+r:"/"===r.charAt(0)?t?r:e.replace(m,"$1")+r:e+r}var w={exec:function(){}};function C(e){for(var r,t,n=1;n<arguments.length;n++)for(t in r=arguments[n])Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e}function b(e,r){var t=e.replace(/\|/g,function(e,r,t){for(var n=!1,a=r;--a>=0&&"\\"===t[a];)n=!n;return n?"|":" |"}).split(/ \|/),n=0;if(t.length>r)t.splice(r);else for(;t.length<r;)t.push("");for(;n<t.length;n++)t[n]=t[n].trim().replace(/\\\|/g,"|");return t}function A(e,r,t){var n=e.length;if(0===n)return"";for(var a=0;a<n;){var i=e.charAt(n-a-1);if(i!==r||t){if(i===r||!t)break;a++}else a++}return e.substr(0,n-a)}function O(e,r){if(-1===e.indexOf(r[1]))return-1;for(var t=e.length,n=0,a=0;a<t;a++)if("\\"===e[a])a++;else if(e[a]===r[0])n++;else if(e[a]===r[1]&&--n<0)return a;return-1}function $(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}module.exports={escape:o,unescape:u,edit:l,cleanUrl:d,resolveUrl:x,noopTest:w,merge:C,splitCells:b,rtrim:A,findClosingBracket:O,checkSanitizeDeprecation:$};
},{}],"tlvE":[function(require,module,exports) {
var e=require("./helpers.js"),a=e.noopTest,l=e.edit,t=e.merge,n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:a,table:a,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};n.def=l(n.def).replace("label",n._label).replace("title",n._title).getRegex(),n.bullet=/(?:[*+-]|\d{1,9}\.)/,n.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,n.item=l(n.item,"gm").replace(/bull/g,n.bullet).getRegex(),n.list=l(n.list).replace(/bull/g,n.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+n.def.source+")").getRegex(),n._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n._comment=/<!--(?!-?>)[\s\S]*?-->/,n.html=l(n.html,"i").replace("comment",n._comment).replace("tag",n._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),n.paragraph=l(n._paragraph).replace("hr",n.hr).replace("heading"," {0,3}#{1,6} +").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",n._tag).getRegex(),n.blockquote=l(n.blockquote).replace("paragraph",n.paragraph).getRegex(),n.normal=t({},n),n.gfm=t({},n.normal,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),n.pedantic=t({},n.normal,{html:l("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",n._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:a,paragraph:l(n.normal._paragraph).replace("hr",n.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",n.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var r={escape:/^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:a,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:a,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};r.em=l(r.em).replace(/punctuation/g,r._punctuation).getRegex(),r._escapes=/\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g,r._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,r._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,r.autolink=l(r.autolink).replace("scheme",r._scheme).replace("email",r._email).getRegex(),r._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,r.tag=l(r.tag).replace("comment",n._comment).replace("attribute",r._attribute).getRegex(),r._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,r._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,r._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,r.link=l(r.link).replace("label",r._label).replace("href",r._href).replace("title",r._title).getRegex(),r.reflink=l(r.reflink).replace("label",r._label).getRegex(),r.normal=t({},r),r.pedantic=t({},r.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:l(/^!?\[(label)\]\((.*?)\)/).replace("label",r._label).getRegex(),reflink:l(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",r._label).getRegex()}),r.gfm=t({},r.normal,{escape:l(r.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),r.gfm.url=l(r.gfm.url,"i").replace("email",r.gfm._extended_email).getRegex(),r.breaks=t({},r.gfm,{br:l(r.br).replace("{2,}","*").getRegex(),text:l(r.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),module.exports={block:n,inline:r};
},{"./helpers.js":"sUTH"}],"GfVS":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}var n=require("./defaults.js"),l=n.defaults,i=require("./rules.js"),h=i.block,r=require("./helpers.js"),o=r.rtrim,a=r.splitCells,g=r.escape;module.exports=function(){function t(s){e(this,t),this.tokens=[],this.tokens.links=Object.create(null),this.options=s||l,this.rules=h.normal,this.options.pedantic?this.rules=h.pedantic:this.options.gfm&&(this.rules=h.gfm)}return s(t,[{key:"lex",value:function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)}},{key:"token",value:function(e,t){var s,n,l,i,r,p,u,c,f,k,d,x,b,y,m,$;for(e=e.replace(/^ +$/gm,"");e;)if((l=this.rules.newline.exec(e))&&(e=e.substring(l[0].length),l[0].length>1&&this.tokens.push({type:"space"})),l=this.rules.code.exec(e)){var v=this.tokens[this.tokens.length-1];e=e.substring(l[0].length),v&&"paragraph"===v.type?v.text+="\n"+l[0].trimRight():(l=l[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?l:o(l,"\n")}))}else if(l=this.rules.fences.exec(e))e=e.substring(l[0].length),this.tokens.push({type:"code",lang:l[2]?l[2].trim():l[2],text:l[3]||""});else if(l=this.rules.heading.exec(e))e=e.substring(l[0].length),this.tokens.push({type:"heading",depth:l[1].length,text:l[2]});else if((l=this.rules.nptable.exec(e))&&(p={type:"table",header:a(l[1].replace(/^ *| *\| *$/g,"")),align:l[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:l[3]?l[3].replace(/\n$/,"").split("\n"):[]}).header.length===p.align.length){for(e=e.substring(l[0].length),d=0;d<p.align.length;d++)/^ *-+: *$/.test(p.align[d])?p.align[d]="right":/^ *:-+: *$/.test(p.align[d])?p.align[d]="center":/^ *:-+ *$/.test(p.align[d])?p.align[d]="left":p.align[d]=null;for(d=0;d<p.cells.length;d++)p.cells[d]=a(p.cells[d],p.header.length);this.tokens.push(p)}else if(l=this.rules.hr.exec(e))e=e.substring(l[0].length),this.tokens.push({type:"hr"});else if(l=this.rules.blockquote.exec(e))e=e.substring(l[0].length),this.tokens.push({type:"blockquote_start"}),l=l[0].replace(/^ *> ?/gm,""),this.token(l,t),this.tokens.push({type:"blockquote_end"});else if(l=this.rules.list.exec(e)){for(e=e.substring(l[0].length),u={type:"list_start",ordered:y=(i=l[2]).length>1,start:y?+i:"",loose:!1},this.tokens.push(u),c=[],s=!1,b=(l=l[0].match(this.rules.item)).length,d=0;d<b;d++)k=(p=l[d]).length,~(p=p.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(k-=p.length,p=this.options.pedantic?p.replace(/^ {1,4}/gm,""):p.replace(new RegExp("^ {1,"+k+"}","gm"),"")),d!==b-1&&(r=h.bullet.exec(l[d+1])[0],(i.length>1?1===r.length:r.length>1||this.options.smartLists&&r!==i)&&(e=l.slice(d+1).join("\n")+e,d=b-1)),n=s||/\n\n(?!\s*$)/.test(p),d!==b-1&&(s="\n"===p.charAt(p.length-1),n||(n=s)),n&&(u.loose=!0),$=void 0,(m=/^\[[ xX]\] /.test(p))&&($=" "!==p[1],p=p.replace(/^\[[ xX]\] +/,"")),f={type:"list_item_start",task:m,checked:$,loose:n},c.push(f),this.tokens.push(f),this.token(p,!1),this.tokens.push({type:"list_item_end"});if(u.loose)for(b=c.length,d=0;d<b;d++)c[d].loose=!0;this.tokens.push({type:"list_end"})}else if(l=this.rules.html.exec(e))e=e.substring(l[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===l[1]||"script"===l[1]||"style"===l[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):g(l[0]):l[0]});else if(t&&(l=this.rules.def.exec(e)))e=e.substring(l[0].length),l[3]&&(l[3]=l[3].substring(1,l[3].length-1)),x=l[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[x]||(this.tokens.links[x]={href:l[2],title:l[3]});else if((l=this.rules.table.exec(e))&&(p={type:"table",header:a(l[1].replace(/^ *| *\| *$/g,"")),align:l[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:l[3]?l[3].replace(/\n$/,"").split("\n"):[]}).header.length===p.align.length){for(e=e.substring(l[0].length),d=0;d<p.align.length;d++)/^ *-+: *$/.test(p.align[d])?p.align[d]="right":/^ *:-+: *$/.test(p.align[d])?p.align[d]="center":/^ *:-+ *$/.test(p.align[d])?p.align[d]="left":p.align[d]=null;for(d=0;d<p.cells.length;d++)p.cells[d]=a(p.cells[d].replace(/^ *\| *| *\| *$/g,""),p.header.length);this.tokens.push(p)}else if(l=this.rules.lheading.exec(e))e=e.substring(l[0].length),this.tokens.push({type:"heading",depth:"="===l[2].charAt(0)?1:2,text:l[1]});else if(t&&(l=this.rules.paragraph.exec(e)))e=e.substring(l[0].length),this.tokens.push({type:"paragraph",text:"\n"===l[1].charAt(l[1].length-1)?l[1].slice(0,-1):l[1]});else if(l=this.rules.text.exec(e))e=e.substring(l[0].length),this.tokens.push({type:"text",text:l[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens}}],[{key:"lex",value:function(e,s){return new t(s).lex(e)}},{key:"rules",get:function(){return h}}]),t}();
},{"./defaults.js":"e3Cr","./rules.js":"tlvE","./helpers.js":"sUTH"}],"GGSY":[function(require,module,exports) {
function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}var r=require("./defaults.js"),i=r.defaults,o=require("./helpers.js"),u=o.cleanUrl,l=o.escape;module.exports=function(){function n(t){e(this,n),this.options=t||i}return t(n,[{key:"code",value:function(e,n,t){var r=(n||"").match(/\S*/)[0];if(this.options.highlight){var i=this.options.highlight(e,r);null!=i&&i!==e&&(t=!0,e=i)}return r?'<pre><code class="'+this.options.langPrefix+l(r,!0)+'">'+(t?e:l(e,!0))+"</code></pre>\n":"<pre><code>"+(t?e:l(e,!0))+"</code></pre>"}},{key:"blockquote",value:function(e){return"<blockquote>\n"+e+"</blockquote>\n"}},{key:"html",value:function(e){return e}},{key:"heading",value:function(e,n,t,r){return this.options.headerIds?"<h"+n+' id="'+this.options.headerPrefix+r.slug(t)+'">'+e+"</h"+n+">\n":"<h"+n+">"+e+"</h"+n+">\n"}},{key:"hr",value:function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}},{key:"list",value:function(e,n,t){var r=n?"ol":"ul";return"<"+r+(n&&1!==t?' start="'+t+'"':"")+">\n"+e+"</"+r+">\n"}},{key:"listitem",value:function(e){return"<li>"+e+"</li>\n"}},{key:"checkbox",value:function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}},{key:"paragraph",value:function(e){return"<p>"+e+"</p>\n"}},{key:"table",value:function(e,n){return n&&(n="<tbody>"+n+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+n+"</table>\n"}},{key:"tablerow",value:function(e){return"<tr>\n"+e+"</tr>\n"}},{key:"tablecell",value:function(e,n){var t=n.header?"th":"td";return(n.align?"<"+t+' align="'+n.align+'">':"<"+t+">")+e+"</"+t+">\n"}},{key:"strong",value:function(e){return"<strong>"+e+"</strong>"}},{key:"em",value:function(e){return"<em>"+e+"</em>"}},{key:"codespan",value:function(e){return"<code>"+e+"</code>"}},{key:"br",value:function(){return this.options.xhtml?"<br/>":"<br>"}},{key:"del",value:function(e){return"<del>"+e+"</del>"}},{key:"link",value:function(e,n,t){if(null===(e=u(this.options.sanitize,this.options.baseUrl,e)))return t;var r='<a href="'+l(e)+'"';return n&&(r+=' title="'+n+'"'),r+=">"+t+"</a>"}},{key:"image",value:function(e,n,t){if(null===(e=u(this.options.sanitize,this.options.baseUrl,e)))return t;var r='<img src="'+e+'" alt="'+t+'"';return n&&(r+=' title="'+n+'"'),r+=this.options.xhtml?"/>":">"}},{key:"text",value:function(e){return e}}]),n}();
},{"./defaults.js":"e3Cr","./helpers.js":"sUTH"}],"Qrlq":[function(require,module,exports) {
function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e}module.exports=function(){function n(){e(this,n),this.seen={}}return r(n,[{key:"slug",value:function(e){var n=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(n)){var r=n;do{this.seen[r]++,n=r+"-"+this.seen[r]}while(this.seen.hasOwnProperty(n))}return this.seen[n]=0,n}}]),n}();
},{}],"BbJD":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function i(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}var s=require("./Renderer.js"),r=require("./defaults.js"),n=r.defaults,l=require("./rules.js"),o=l.inline,u=require("./helpers.js"),h=u.findClosingBracket,a=u.escape;module.exports=function(){function t(i,r){if(e(this,t),this.options=r||n,this.links=i,this.rules=o.normal,this.options.renderer=this.options.renderer||new s,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=o.pedantic:this.options.gfm&&(this.options.breaks?this.rules=o.breaks:this.rules=o.gfm)}return i(t,[{key:"output",value:function(e){for(var i,s,r,n,l,o,u="";e;)if(l=this.rules.escape.exec(e))e=e.substring(l[0].length),u+=a(l[1]);else if(l=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(l[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(l[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(l[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(l[0])&&(this.inRawBlock=!1),e=e.substring(l[0].length),u+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):a(l[0]):l[0];else if(l=this.rules.link.exec(e)){var c=h(l[2],"()");if(c>-1){var p=(0===l[0].indexOf("!")?5:4)+l[1].length+c;l[2]=l[2].substring(0,c),l[0]=l[0].substring(0,p).trim(),l[3]=""}e=e.substring(l[0].length),this.inLink=!0,r=l[2],this.options.pedantic?(i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))?(r=i[1],n=i[3]):n="":n=l[3]?l[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),u+=this.outputLink(l,{href:t.escapes(r),title:t.escapes(n)}),this.inLink=!1}else if((l=this.rules.reflink.exec(e))||(l=this.rules.nolink.exec(e))){if(e=e.substring(l[0].length),i=(l[2]||l[1]).replace(/\s+/g," "),!(i=this.links[i.toLowerCase()])||!i.href){u+=l[0].charAt(0),e=l[0].substring(1)+e;continue}this.inLink=!0,u+=this.outputLink(l,i),this.inLink=!1}else if(l=this.rules.strong.exec(e))e=e.substring(l[0].length),u+=this.renderer.strong(this.output(l[4]||l[3]||l[2]||l[1]));else if(l=this.rules.em.exec(e))e=e.substring(l[0].length),u+=this.renderer.em(this.output(l[6]||l[5]||l[4]||l[3]||l[2]||l[1]));else if(l=this.rules.code.exec(e))e=e.substring(l[0].length),u+=this.renderer.codespan(a(l[2].trim(),!0));else if(l=this.rules.br.exec(e))e=e.substring(l[0].length),u+=this.renderer.br();else if(l=this.rules.del.exec(e))e=e.substring(l[0].length),u+=this.renderer.del(this.output(l[1]));else if(l=this.rules.autolink.exec(e))e=e.substring(l[0].length),r="@"===l[2]?"mailto:"+(s=a(this.mangle(l[1]))):s=a(l[1]),u+=this.renderer.link(r,null,s);else if(this.inLink||!(l=this.rules.url.exec(e))){if(l=this.rules.text.exec(e))e=e.substring(l[0].length),this.inRawBlock?u+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):a(l[0]):l[0]):u+=this.renderer.text(a(this.smartypants(l[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{if("@"===l[2])r="mailto:"+(s=a(l[0]));else{do{o=l[0],l[0]=this.rules._backpedal.exec(l[0])[0]}while(o!==l[0]);s=a(l[0]),r="www."===l[1]?"http://"+s:s}e=e.substring(l[0].length),u+=this.renderer.link(r,null,s)}return u}},{key:"outputLink",value:function(e,t){var i=t.href,s=t.title?a(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(i,s,this.output(e[1])):this.renderer.image(i,s,a(e[1]))}},{key:"smartypants",value:function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e}},{key:"mangle",value:function(e){if(!this.options.mangle)return e;for(var t,i=e.length,s="",r=0;r<i;r++)t=e.charCodeAt(r),Math.random()>.5&&(t="x"+t.toString(16)),s+="&#"+t+";";return s}}],[{key:"output",value:function(e,i,s){return new t(i,s).output(e)}},{key:"escapes",value:function(e){return e?e.replace(t.rules._escapes,"$1"):e}},{key:"rules",get:function(){return o}}]),t}();
},{"./Renderer.js":"GGSY","./defaults.js":"e3Cr","./rules.js":"tlvE","./helpers.js":"sUTH"}],"Xnzt":[function(require,module,exports) {
function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}module.exports=function(){function n(){e(this,n)}return t(n,[{key:"strong",value:function(e){return e}},{key:"em",value:function(e){return e}},{key:"codespan",value:function(e){return e}},{key:"del",value:function(e){return e}},{key:"text",value:function(e){return e}},{key:"link",value:function(e,n,t){return""+t}},{key:"image",value:function(e,n,t){return""+t}},{key:"br",value:function(){return""}}]),n}();
},{}],"Xd8K":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}var n=require("./Renderer.js"),s=require("./Slugger.js"),i=require("./InlineLexer.js"),o=require("./TextRenderer.js"),h=require("./defaults.js"),a=h.defaults,l=require("./helpers.js"),u=l.merge,k=l.unescape;module.exports=function(){function t(r){e(this,t),this.tokens=[],this.token=null,this.options=r||a,this.options.renderer=this.options.renderer||new n,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new s}return r(t,[{key:"parse",value:function(e){this.inline=new i(e.links,this.options),this.inlineText=new i(e.links,u({},this.options,{renderer:new o})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t}},{key:"next",value:function(){return this.token=this.tokens.pop(),this.token}},{key:"peek",value:function(){return this.tokens[this.tokens.length-1]||0}},{key:"parseText",value:function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)}},{key:"tok",value:function(){var e="";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,k(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var t,r,n,s,i="";for(n="",t=0;t<this.token.header.length;t++)n+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(i+=this.renderer.tablerow(n),t=0;t<this.token.cells.length;t++){for(r=this.token.cells[t],n="",s=0;s<r.length;s++)n+=this.renderer.tablecell(this.inline.output(r[s]),{header:!1,align:this.token.align[s]});e+=this.renderer.tablerow(n)}return this.renderer.table(i,e);case"blockquote_start":for(e="";"blockquote_end"!==this.next().type;)e+=this.tok();return this.renderer.blockquote(e);case"list_start":e="";for(var o=this.token.ordered,h=this.token.start;"list_end"!==this.next().type;)e+=this.tok();return this.renderer.list(e,o,h);case"list_item_start":e="";var a=this.token.loose,l=this.token.checked,u=this.token.task;if(this.token.task)if(a)if("text"===this.peek().type){var p=this.peek();p.text=this.renderer.checkbox(l)+" "+p.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(l)});else e+=this.renderer.checkbox(l);for(;"list_item_end"!==this.next().type;)e+=a||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(e,u,l);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var c='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(c);console.log(c)}}}],[{key:"parse",value:function(e,r){return new t(r).parse(e)}}]),t}();
},{"./Renderer.js":"GGSY","./Slugger.js":"Qrlq","./InlineLexer.js":"BbJD","./TextRenderer.js":"Xnzt","./defaults.js":"e3Cr","./helpers.js":"sUTH"}],"afg3":[function(require,module,exports) {
function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}var r=require("./Lexer.js"),t=require("./Parser.js"),n=require("./Renderer.js"),u=require("./TextRenderer.js"),i=require("./InlineLexer.js"),o=require("./Slugger.js"),l=require("./helpers.js"),s=l.merge,a=l.checkSanitizeDeprecation,f=l.escape,p=require("./defaults.js"),c=p.getDefaults,h=p.changeDefaults,d=p.defaults;function g(n,u,i){if(null==n)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof n)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");if(i||"function"==typeof u){var o=function(){i||(i=u,u=null),u=s({},g.defaults,u||{}),a(u);var e,o,l=u.highlight,f=0;try{e=r.lex(n,u)}catch(c){return{v:i(c)}}o=e.length;var p=function(r){if(r)return u.highlight=l,i(r);var n;try{n=t.parse(e,u)}catch(c){r=c}return u.highlight=l,r?i(r):i(null,n)};if(!l||l.length<3)return{v:p()};if(delete u.highlight,!o)return{v:p()};for(;f<e.length;f++)!function(e){"code"!==e.type?--o||p():l(e.text,e.lang,function(r,t){return r?p(r):null==t||t===e.text?--o||p():(e.text=t,e.escaped=!0,void(--o||p()))})}(e[f]);return{v:void 0}}();if("object"===e(o))return o.v}try{return u=s({},g.defaults,u||{}),a(u),t.parse(r.lex(n,u),u)}catch(l){if(l.message+="\nPlease report this to https://github.com/markedjs/marked.",(u||g.defaults).silent)return"<p>An error occurred:</p><pre>"+f(l.message+"",!0)+"</pre>";throw l}}g.options=g.setOptions=function(e){return s(g.defaults,e),h(g.defaults),g},g.getDefaults=c,g.defaults=d,g.Parser=t,g.parser=t.parse,g.Renderer=n,g.TextRenderer=u,g.Lexer=r,g.lexer=r.lex,g.InlineLexer=i,g.inlineLexer=i.output,g.Slugger=o,g.parse=g,module.exports=g;
},{"./Lexer.js":"GfVS","./Parser.js":"Xd8K","./Renderer.js":"GGSY","./TextRenderer.js":"Xnzt","./InlineLexer.js":"BbJD","./Slugger.js":"Qrlq","./helpers.js":"sUTH","./defaults.js":"e3Cr"}],"A2T1":[function(require,module,exports) {
"use strict";var e=u(require("../README.md")),r=u(require("marked"));function u(e){return e&&e.__esModule?e:{default:e}}var t=(0,r.default)(e.default);document.querySelector("main").innerHTML=t;
},{"../README.md":"OviO","marked":"afg3"}],"FheM":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"TUK3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"FheM"}],"A3BY":[function(require,module,exports) {
module.exports=function(t){return fetch(t).then(function(t){return t.text()})};
},{}],0:[function(require,module,exports) {
var b=require("TUK3");b.register("html",require("A3BY"));b.load([["README.78e7bab3.html","OviO"]]).then(function(){require("A2T1");});
},{}]},{},[0], null)
//# sourceMappingURL=/app.c328ef1a.js.map