---
title: Usage
description: A guide in my new Starlight docs site.
---

Start by creating a code block with the `js-engine` plugin.
Inside the code block you can write what ever JavaScript code that you want.
The plugin will run the JavaScript and render the returned value in place of the code block.

The following example will render a simple plain text string.

```js
let str = '*test*';
return str;
```

> \*test\*

We can use the [`engine.markdown.create`](/obsidian-js-engine-plugin-docs/api/classes/markdownapi/#create) function to render the string as markdown.

```js
let str = '*test*';
return engine.markdown.create(str);
```

> _test_

When you return nothing or `undefined`, the plugin will not render anything and the code block will be invisible.

:::note
If you are modifying the `container` element, you need to return nothing or `undefined`.
Otherwise, the plugin will overwrite your changes to the `container` element.
:::
