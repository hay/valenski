import markdown from 'bundle-text:../README.md';
import { marked } from 'marked';

const html = marked.parse(markdown);
document.querySelector('main').innerHTML = html;