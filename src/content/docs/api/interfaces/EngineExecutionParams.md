---
editUrl: false
next: false
prev: false
title: "EngineExecutionParams"
---

Defined in: [jsEngine/engine/Engine.ts:10](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/Engine.ts#L10)

Parameters for the [Engine.execute](../../../../../obsidian-js-engine-plugin-docs/api/classes/engine/#execute) method.

## Extended by

- [`JsExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutionparams/)

## Properties

### code

> **code**: `string`

Defined in: [jsEngine/engine/Engine.ts:14](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/Engine.ts#L14)

The JavaScript code to execute.

***

### component

> **component**: `Component`

Defined in: [jsEngine/engine/Engine.ts:18](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/Engine.ts#L18)

Obsidian Component for lifecycle management.

***

### container?

> `optional` **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [jsEngine/engine/Engine.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/Engine.ts#L22)

Optional container element to render results to.

***

### context

> **context**: [`ExecutionContext`](/obsidian-js-engine-plugin-docs/api/type-aliases/executioncontext/)

Defined in: [jsEngine/engine/Engine.ts:26](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/Engine.ts#L26)

Context about the location the code was executed from.

***

### contextOverrides?

> `optional` **contextOverrides**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

Defined in: [jsEngine/engine/Engine.ts:30](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/Engine.ts#L30)

Optional extra context variables to provide to the JavaScript code.
