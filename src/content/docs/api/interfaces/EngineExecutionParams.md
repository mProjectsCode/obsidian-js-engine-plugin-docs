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

[jsEngine/engine/Engine.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/engine/Engine.ts#L13)

***

### component

> **component**: `Component`

Obsidian Component for lifecycle management.

#### Defined in

[jsEngine/engine/Engine.ts:17](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/engine/Engine.ts#L17)

***

### container?

> `optional` **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Optional container element to render results to.

#### Defined in

[jsEngine/engine/Engine.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/engine/Engine.ts#L21)

***

### context?

> `optional` **context**: [`JsExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutioncontext/)

Optional context to provide to the JavaScript code.

#### Defined in

[jsEngine/engine/Engine.ts:25](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/engine/Engine.ts#L25)

***

### contextOverrides?

> `optional` **contextOverrides**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

Optional extra context variables to provide to the JavaScript code.

#### Defined in

[jsEngine/engine/Engine.ts:29](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/engine/Engine.ts#L29)
