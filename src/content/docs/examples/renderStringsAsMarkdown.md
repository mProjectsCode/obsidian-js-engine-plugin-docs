---
title: Render Strings as Markdown
description: Examples of rendering strings as markdown.
---

Normally strings returned from code blocks are rendered as plain text.

```js
let str = '*test*';
return str;
```

> \*test\*

With the [`engine.markdown.create`](/obsidian-js-engine-plugin-docs/api/api/markdownapi/classes/markdownapi/#create) function, you can render strings as markdown.

```js
let str = '*test*';
return engine.markdown.create(str);
```

> _test_