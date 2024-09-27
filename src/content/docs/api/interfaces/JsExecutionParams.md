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

#### Defined in

[jsEngine/engine/JsExecution.ts:95](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/engine/JsExecution.ts#L95)

***

### code

> **code**: `string`

The JavaScript code to execute.

#### Inherited from

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/).[`code`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/#code)

#### Defined in

[jsEngine/engine/Engine.ts:14](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/engine/Engine.ts#L14)

***

### component

> **component**: `Component`

Obsidian Component for lifecycle management.

#### Inherited from

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/).[`component`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/#component)

#### Defined in

[jsEngine/engine/Engine.ts:18](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/engine/Engine.ts#L18)

***

### container?

> `optional` **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Optional container element to render results to.

#### Inherited from

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/).[`container`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/#container)

#### Defined in

[jsEngine/engine/Engine.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/engine/Engine.ts#L22)

***

### context?

> `optional` **context**: [`JsExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutioncontext/)

Optional context to provide to the JavaScript code.

#### Inherited from

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/).[`context`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/#context)

#### Defined in

[jsEngine/engine/Engine.ts:26](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/engine/Engine.ts#L26)

***

### contextOverrides?

> `optional` **contextOverrides**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

Optional extra context variables to provide to the JavaScript code.

#### Inherited from

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/).[`contextOverrides`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/#contextoverrides)

#### Defined in

[jsEngine/engine/Engine.ts:30](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/engine/Engine.ts#L30)

***

### plugin

> **plugin**: `JsEnginePlugin`

#### Defined in

[jsEngine/engine/JsExecution.ts:96](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/engine/JsExecution.ts#L96)
