---
editUrl: false
next: false
prev: false
title: "EngineExecutionParams"
---

Parameters for the [Engine.execute](../../../../../obsidian-js-engine-plugin-docs/api/classes/engine/#execute) method.

## Extended by

- [`JsExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutionparams/)

## Properties

### code

> **code**: `string`

The JavaScript code to execute.

#### Defined in

[jsEngine/engine/Engine.ts:14](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/engine/Engine.ts#L14)

***

### component

> **component**: `Component`

Obsidian Component for lifecycle management.

#### Defined in

[jsEngine/engine/Engine.ts:18](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/engine/Engine.ts#L18)

***

### container?

> `optional` **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Optional container element to render results to.

#### Defined in

[jsEngine/engine/Engine.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/engine/Engine.ts#L22)

***

### context?

> `optional` **context**: [`JsExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutioncontext/)

Optional context to provide to the JavaScript code.

#### Defined in

[jsEngine/engine/Engine.ts:26](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/engine/Engine.ts#L26)

***

### contextOverrides?

> `optional` **contextOverrides**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

Optional extra context variables to provide to the JavaScript code.

#### Defined in

[jsEngine/engine/Engine.ts:30](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/engine/Engine.ts#L30)
