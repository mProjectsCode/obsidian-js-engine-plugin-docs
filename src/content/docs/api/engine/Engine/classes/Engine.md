---
editUrl: false
next: false
prev: false
title: "Engine"
---

## Constructors

### new Engine(app, plugin)

> **new Engine**(`app`, `plugin`): [`Engine`](/api/engine/engine/classes/engine/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `app` | `App` |
| `plugin` | `default` |

#### Returns

[`Engine`](/api/engine/engine/classes/engine/)

#### Source

[jsEngine/engine/Engine.ts:15](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/Engine.ts#L15)

## Properties

### activeExecutions

> **activeExecutions**: [`Map`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map )\<`string`, [`JsExecution`](/api/engine/jsexecution/classes/jsexecution/)\>

#### Source

[jsEngine/engine/Engine.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/Engine.ts#L13)

## Methods

### execute()

> **execute**(`params`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`JsExecution`](/api/engine/jsexecution/classes/jsexecution/)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`EngineExecutionParams`](/api/engine/engine/type-aliases/engineexecutionparams/) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`JsExecution`](/api/engine/jsexecution/classes/jsexecution/)\>

#### Source

[jsEngine/engine/Engine.ts:23](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/Engine.ts#L23)

***

### openExecutionStatsModal()

> **openExecutionStatsModal**(`jsExecution`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `jsExecution` | [`JsExecution`](/api/engine/jsexecution/classes/jsexecution/) |

#### Returns

`void`

#### Source

[jsEngine/engine/Engine.ts:38](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/Engine.ts#L38)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
