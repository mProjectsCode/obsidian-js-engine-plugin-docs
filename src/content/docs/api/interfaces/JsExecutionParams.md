---
editUrl: false
next: false
prev: false
title: "JsExecutionParams"
---

Defined in: [jsEngine/engine/JsExecution.ts:154](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/JsExecution.ts#L154)

Parameters used to construct a [JsExecution](../../../../../obsidian-js-engine-plugin-docs/api/classes/jsexecution).

## Extends

- [`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/)

## Properties

### app

> **app**: `App`

Defined in: [jsEngine/engine/JsExecution.ts:155](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/JsExecution.ts#L155)

***

### code

> **code**: `string`

Defined in: [jsEngine/engine/Engine.ts:14](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/Engine.ts#L14)

The JavaScript code to execute.

#### Inherited from

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/).[`code`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/#code)

***

### component

> **component**: `Component`

Defined in: [jsEngine/engine/Engine.ts:18](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/Engine.ts#L18)

Obsidian Component for lifecycle management.

#### Inherited from

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/).[`component`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/#component)

***

### container?

> `optional` **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [jsEngine/engine/Engine.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/Engine.ts#L22)

Optional container element to render results to.

#### Inherited from

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/).[`container`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/#container)

***

### context

> **context**: [`ExecutionContext`](/obsidian-js-engine-plugin-docs/api/type-aliases/executioncontext/)

Defined in: [jsEngine/engine/Engine.ts:26](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/Engine.ts#L26)

Context about the location the code was executed from.

#### Inherited from

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/).[`context`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/#context)

***

### contextOverrides?

> `optional` **contextOverrides**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

Defined in: [jsEngine/engine/Engine.ts:30](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/Engine.ts#L30)

Optional extra context variables to provide to the JavaScript code.

#### Inherited from

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/).[`contextOverrides`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/#contextoverrides)

***

### plugin

> **plugin**: `JsEnginePlugin`

Defined in: [jsEngine/engine/JsExecution.ts:156](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/engine/JsExecution.ts#L156)
