---
editUrl: false
next: false
prev: false
title: "EngineExecutionParams"
---

Parameters for the [Engine.execute](/obsidian-js-engine-plugin-docs/api/engine/engine/classes/engine/#execute) method.

## Extended By

- [`JsExecutionParams`](/obsidian-js-engine-plugin-docs/api/engine/jsexecution/interfaces/jsexecutionparams/)

## Properties

### code

```ts
code: string;
```

The JavaScript code to execute.

#### Source

[jsEngine/engine/Engine.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/0278a4c/jsEngine/engine/Engine.ts#L13)

***

### component

```ts
component: Component;
```

Obsidian Component for lifecycle management.

#### Source

[jsEngine/engine/Engine.ts:17](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/0278a4c/jsEngine/engine/Engine.ts#L17)

***

### container?

```ts
container?: HTMLElement;
```

Optional container element to render results to.

#### Source

[jsEngine/engine/Engine.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/0278a4c/jsEngine/engine/Engine.ts#L21)

***

### context?

```ts
context?: JsExecutionContext;
```

Optional context to provide to the JavaScript code.

#### Source

[jsEngine/engine/Engine.ts:25](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/0278a4c/jsEngine/engine/Engine.ts#L25)

***

### contextOverrides?

```ts
contextOverrides?: Record<string, unknown>;
```

Optional extra context variables to provide to the JavaScript code.

#### Source

[jsEngine/engine/Engine.ts:29](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/0278a4c/jsEngine/engine/Engine.ts#L29)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
