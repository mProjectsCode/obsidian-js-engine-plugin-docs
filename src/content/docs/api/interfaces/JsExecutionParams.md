---
editUrl: false
next: false
prev: false
title: "JsExecutionParams"
---

Parameters used to construct a [JsExecution](../../../../../obsidian-js-engine-plugin-docs/api/classes/jsexecution).

## Extends

- [`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/)

## Properties

### app

> **app**: `App`

#### Source

[jsEngine/engine/JsExecution.ts:71](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/JsExecution.ts#L71)

***

### code

> **code**: `string`

The JavaScript code to execute.

#### Inherited from

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/).[`code`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/#code)

#### Source

[jsEngine/engine/Engine.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/Engine.ts#L13)

***

### component

> **component**: `Component`

Obsidian Component for lifecycle management.

#### Inherited from

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/).[`component`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/#component)

#### Source

[jsEngine/engine/Engine.ts:17](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/Engine.ts#L17)

***

### container?

> **`optional`** **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Optional container element to render results to.

#### Inherited from

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/).[`container`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/#container)

#### Source

[jsEngine/engine/Engine.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/Engine.ts#L21)

***

### context?

> **`optional`** **context**: [`JsExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutioncontext/)

Optional context to provide to the JavaScript code.

#### Inherited from

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/).[`context`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/#context)

#### Source

[jsEngine/engine/Engine.ts:25](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/Engine.ts#L25)

***

### contextOverrides?

> **`optional`** **contextOverrides**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

Optional extra context variables to provide to the JavaScript code.

#### Inherited from

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/).[`contextOverrides`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/#contextoverrides)

#### Source

[jsEngine/engine/Engine.ts:29](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/Engine.ts#L29)

***

### plugin

> **plugin**: `default`

#### Source

[jsEngine/engine/JsExecution.ts:72](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/JsExecution.ts#L72)
