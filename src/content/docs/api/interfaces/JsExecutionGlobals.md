---
editUrl: false
next: false
prev: false
title: "JsExecutionGlobals"
---

Global variables provided to a [JsExecution](../../../../../obsidian-js-engine-plugin-docs/api/classes/jsexecution).

## Properties

### app

> **app**: `App`

Reference to the obsidian [app](https://docs.obsidian.md/Reference/TypeScript+API/App) (obsidian API).

#### Defined in

[jsEngine/engine/JsExecution.ts:45](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/engine/JsExecution.ts#L45)

***

### component

> **component**: `Component`

Obsidian [component](https://docs.obsidian.md/Reference/TypeScript+API/Component) for lifecycle management.

#### Defined in

[jsEngine/engine/JsExecution.ts:53](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/engine/JsExecution.ts#L53)

***

### container

> **container**: `undefined` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The container element that the execution can render to. This can be undefined.

#### Defined in

[jsEngine/engine/JsExecution.ts:61](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/engine/JsExecution.ts#L61)

***

### context

> **context**: [`JsExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutioncontext/) & [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

The context provided. This can be undefined and extended by other properties.

#### Defined in

[jsEngine/engine/JsExecution.ts:57](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/engine/JsExecution.ts#L57)

***

### engine

> **engine**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

Reference to this plugins API.

#### Defined in

[jsEngine/engine/JsExecution.ts:49](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/engine/JsExecution.ts#L49)

***

### obsidian

> **obsidian**: `__module`

The entire obsidian module, e.g. a notice can be constructed like this: `new obsidian.Notice('Hello World')`.

#### Defined in

[jsEngine/engine/JsExecution.ts:65](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/engine/JsExecution.ts#L65)
