/**
 * parse Markdown
 */

import { marked } from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    if (lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }

    return hljs.highlightAuto(code).value;
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  smartLists: true,
});

export default marked;
