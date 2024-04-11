---
editUrl: false
next: false
prev: false
title: "Engine"
---

## Constructors

### new Engine(app, plugin)

```ts
new Engine(app, plugin): Engine
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `app` | `App` |
| `plugin` | `default` |

#### Returns

[`Engine`](Engine.md)

#### Source

[jsEngine/engine/Engine.ts:39](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/Engine.ts#L39)

## Properties

### activeExecutions

```ts
readonly activeExecutions: Map<string, JsExecution>;
```

#### Source

[jsEngine/engine/Engine.ts:37](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/Engine.ts#L37)

## Methods

### execute()

```ts
execute(params): Promise<JsExecution>
```

Execute JavaScript code.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`EngineExecutionParams`](../interfaces/EngineExecutionParams.md) |  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](JsExecution.md)\>

#### Source

[jsEngine/engine/Engine.ts:52](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/Engine.ts#L52)

***

### openExecutionStatsModal()

```ts
openExecutionStatsModal(jsExecution): void
```

Open the execution stats modal for a given [JsExecution](../../../../../obsidian-js-engine-plugin-docs/api/classes/jsexecution).

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `jsExecution` | [`JsExecution`](JsExecution.md) |  |

#### Returns

`void`

#### Source

[jsEngine/engine/Engine.ts:72](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/Engine.ts#L72)
