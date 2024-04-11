---
title: Importing JS
description: Examples of importing JavaScript files.
---

You can import JavaScript files using the [`engine.importJs`](/obsidian-js-engine-plugin-docs/api/classes/api/#importjs) function.

```js
let lib = await engine.importJs('lib.js');
return lib.getGreeting();
```

With a file named `lib.js` in the root of the vault.

```js
export function getGreeting() {
	return 'Hello!';
}
```

> Hello!