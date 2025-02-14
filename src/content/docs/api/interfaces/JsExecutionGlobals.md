---
editUrl: false
next: false
prev: false
title: "JsExecutionGlobals"
---

Defined in: [jsEngine/engine/JsExecution.ts:101](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/JsExecution.ts#L101)

Global variables provided to a [JsExecution](../../../../../obsidian-js-engine-plugin-docs/api/classes/jsexecution).

## Properties

### app

> **app**: `App`

Defined in: [jsEngine/engine/JsExecution.ts:105](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/JsExecution.ts#L105)

Reference to the obsidian [app](https://docs.obsidian.md/Reference/TypeScript+API/App) (obsidian API).

***

### component

> **component**: `Component`

Defined in: [jsEngine/engine/JsExecution.ts:113](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/JsExecution.ts#L113)

Obsidian [component](https://docs.obsidian.md/Reference/TypeScript+API/Component) for lifecycle management.

***

### container

> **container**: `undefined` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [jsEngine/engine/JsExecution.ts:121](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/JsExecution.ts#L121)

The container element that the execution can render to. This can be undefined.

***

### context

> **context**: [`ExecutionContext`](/obsidian-js-engine-plugin-docs/api/type-aliases/executioncontext/) & [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

Defined in: [jsEngine/engine/JsExecution.ts:117](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/JsExecution.ts#L117)

The context provided. This can be undefined and extended by other properties.

***

### engine

> **engine**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

Defined in: [jsEngine/engine/JsExecution.ts:109](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/JsExecution.ts#L109)

Reference to this plugins API.

***

### obsidian

> **obsidian**: `__module`

Defined in: [jsEngine/engine/JsExecution.ts:125](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/JsExecution.ts#L125)

The entire obsidian module, e.g. a notice can be constructed like this: `new obsidian.Notice('Hello World')`.
