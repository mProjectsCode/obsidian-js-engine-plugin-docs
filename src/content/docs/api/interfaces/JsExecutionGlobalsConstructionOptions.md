---
editUrl: false
next: false
prev: false
title: "JsExecutionGlobalsConstructionOptions"
---

Defined in: [jsEngine/engine/JsExecution.ts:134](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L134)

Interface for constructing [JsExecutionGlobals](../../../../../obsidian-js-engine-plugin-docs/api/interfaces/jsexecutionglobals).

## Properties

### component

> **component**: `Component`

Defined in: [jsEngine/engine/JsExecution.ts:143](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L143)

Obsidian [component](https://docs.obsidian.md/Reference/TypeScript+API/Component) for lifecycle management.

***

### container?

> `optional` **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [jsEngine/engine/JsExecution.ts:151](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L151)

The container element that the execution can render to. This can be undefined.

***

### context

> **context**: [`ExecutionContext`](/obsidian-js-engine-plugin-docs/api/type-aliases/executioncontext/) & [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

Defined in: [jsEngine/engine/JsExecution.ts:147](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L147)

The context provided. This can be undefined and extended by other properties.

***

### engine?

> `optional` **engine**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

Defined in: [jsEngine/engine/JsExecution.ts:139](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L139)

Optional API instance.
If not provided, the one from which the execution globals are constructed is used.
