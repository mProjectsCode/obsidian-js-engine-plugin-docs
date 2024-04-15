---
editUrl: false
next: false
prev: false
title: "Engine"
---

## Constructors

### new Engine(app, plugin)

> **new Engine**(`app`, `plugin`): [`Engine`](/obsidian-js-engine-plugin-docs/api/classes/engine/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `app` | `App` |
| `plugin` | `default` |

#### Returns

[`Engine`](/obsidian-js-engine-plugin-docs/api/classes/engine/)

#### Source

[jsEngine/engine/Engine.ts:39](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/Engine.ts#L39)

## Properties

### activeExecutions

> **`readonly`** **activeExecutions**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

#### Source

[jsEngine/engine/Engine.ts:37](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/Engine.ts#L37)

## Methods

### execute()

> **execute**(`params`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

Execute JavaScript code.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/) |  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

#### Source

[jsEngine/engine/Engine.ts:52](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/Engine.ts#L52)

***

### openExecutionStatsModal()

> **openExecutionStatsModal**(`jsExecution`): `void`

Open the execution stats modal for a given [JsExecution](../../../../../obsidian-js-engine-plugin-docs/api/classes/jsexecution).

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `jsExecution` | [`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/) |  |

#### Returns

`void`

#### Source

[jsEngine/engine/Engine.ts:72](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/engine/Engine.ts#L72)
