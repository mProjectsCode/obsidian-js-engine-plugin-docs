---
editUrl: false
next: false
prev: false
title: "JsExecutionGlobalsConstructionOptions"
---

Interface for constructing [JsExecutionGlobals](../../../../../obsidian-js-engine-plugin-docs/api/interfaces/jsexecutionglobals).

## Properties

### component

> **component**: `Component`

Obsidian [component](https://docs.obsidian.md/Reference/TypeScript+API/Component) for lifecycle management.

#### Defined in

[jsEngine/engine/JsExecution.ts:80](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/engine/JsExecution.ts#L80)

***

### container?

> `optional` **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The container element that the execution can render to. This can be undefined.

#### Defined in

[jsEngine/engine/JsExecution.ts:88](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/engine/JsExecution.ts#L88)

***

### context

> **context**: [`JsExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutioncontext/) & [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

The context provided. This can be undefined and extended by other properties.

#### Defined in

[jsEngine/engine/JsExecution.ts:84](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/engine/JsExecution.ts#L84)

***

### engine?

> `optional` **engine**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

Optional API instance.
If not provided, the one from which the execution globals are constructed is used.

#### Defined in

[jsEngine/engine/JsExecution.ts:76](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/engine/JsExecution.ts#L76)
