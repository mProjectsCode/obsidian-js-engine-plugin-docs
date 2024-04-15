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

#### Source

[jsEngine/engine/JsExecution.ts:44](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/JsExecution.ts#L44)

***

### component

> **component**: `Component`

Obsidian [component](https://docs.obsidian.md/Reference/TypeScript+API/Component) for lifecycle management.

#### Source

[jsEngine/engine/JsExecution.ts:52](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/JsExecution.ts#L52)

***

### container

> **container**: `undefined` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The container element that the execution can render to. This can be undefined.

#### Source

[jsEngine/engine/JsExecution.ts:60](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/JsExecution.ts#L60)

***

### context

> **context**: [`JsExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutioncontext/) & [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

The context provided. This can be undefined and extended by other properties.

#### Source

[jsEngine/engine/JsExecution.ts:56](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/JsExecution.ts#L56)

***

### engine

> **engine**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

Reference to this plugins API.

#### Source

[jsEngine/engine/JsExecution.ts:48](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/JsExecution.ts#L48)

***

### obsidian

> **obsidian**: `__module`

The entire obsidian module, e.g. a notice can be constructed like this: `new obsidian.Notice('Hello World')`.

#### Source

[jsEngine/engine/JsExecution.ts:64](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/JsExecution.ts#L64)
