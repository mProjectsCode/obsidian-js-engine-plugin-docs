---
editUrl: false
next: false
prev: false
title: "JsExecutionGlobalsConstructionOptions"
---

Defined in: [jsEngine/engine/JsExecution.ts:131](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/JsExecution.ts#L131)

Interface for constructing [JsExecutionGlobals](../../../../../obsidian-js-engine-plugin-docs/api/interfaces/jsexecutionglobals).

## Properties

### component

> **component**: `Component`

Defined in: [jsEngine/engine/JsExecution.ts:140](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/JsExecution.ts#L140)

Obsidian [component](https://docs.obsidian.md/Reference/TypeScript+API/Component) for lifecycle management.

***

### container?

> `optional` **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [jsEngine/engine/JsExecution.ts:148](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/JsExecution.ts#L148)

The container element that the execution can render to. This can be undefined.

***

### context

> **context**: [`ExecutionContext`](/obsidian-js-engine-plugin-docs/api/type-aliases/executioncontext/) & [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

Defined in: [jsEngine/engine/JsExecution.ts:144](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/JsExecution.ts#L144)

The context provided. This can be undefined and extended by other properties.

***

### engine?

> `optional` **engine**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

Defined in: [jsEngine/engine/JsExecution.ts:136](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/JsExecution.ts#L136)

Optional API instance.
If not provided, the one from which the execution globals are constructed is used.
