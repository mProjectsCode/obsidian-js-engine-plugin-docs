---
editUrl: false
next: false
prev: false
title: "JsExecutionGlobals"
---

Defined in: [jsEngine/engine/JsExecution.ts:104](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L104)

Global variables provided to a [JsExecution](../../../../../obsidian-js-engine-plugin-docs/api/classes/jsexecution).

## Properties

### app

> **app**: `App`

Defined in: [jsEngine/engine/JsExecution.ts:108](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L108)

Reference to the obsidian [app](https://docs.obsidian.md/Reference/TypeScript+API/App) (obsidian API).

***

### component

> **component**: `Component`

Defined in: [jsEngine/engine/JsExecution.ts:116](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L116)

Obsidian [component](https://docs.obsidian.md/Reference/TypeScript+API/Component) for lifecycle management.

***

### container

> **container**: `undefined` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [jsEngine/engine/JsExecution.ts:124](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L124)

The container element that the execution can render to. This can be undefined.

***

### context

> **context**: [`ExecutionContext`](/obsidian-js-engine-plugin-docs/api/type-aliases/executioncontext/) & [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

Defined in: [jsEngine/engine/JsExecution.ts:120](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L120)

The context provided. This can be undefined and extended by other properties.

***

### engine

> **engine**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

Defined in: [jsEngine/engine/JsExecution.ts:112](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L112)

Reference to this plugins API.

***

### obsidian

> **obsidian**: `__module`

Defined in: [jsEngine/engine/JsExecution.ts:128](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L128)

The entire obsidian module, e.g. a notice can be constructed like this: `new obsidian.Notice('Hello World')`.
