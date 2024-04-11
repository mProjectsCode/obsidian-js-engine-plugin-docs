---
title: Rendering LaTeX
description: Examples of rendering LaTeX.
---

You can render LaTeX using the [`engine.markdown.create`](/obsidian-js-engine-plugin-docs/api/classes/markdownapi/#create) function.
You just have to keep in mind that you need to surround everything with `$` and escape the backslash character.

```js
let str = '$$\\frac{1}{2}$$';
return engine.markdown.create(str);
```

> $$
> \frac{1}{2}
> $$
