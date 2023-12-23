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

[`Engine`](/obsidian-js-engine-plugin-docs/api/engine/engine/classes/engine/)

#### Source

[jsEngine/engine/Engine.ts:39](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/Engine.ts#L39)

## Methods

### execute()

```ts
execute(params): Promise<JsExecution>
```

Execute JavaScript code.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/engine/engine/interfaces/engineexecutionparams/) |  |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/engine/jsexecution/classes/jsexecution/)\>

#### Source

[jsEngine/engine/Engine.ts:52](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/Engine.ts#L52)

***

### openExecutionStatsModal()

```ts
openExecutionStatsModal(jsExecution): void
```

Open the execution stats modal for a given [JsExecution](/obsidian-js-engine-plugin-docs/api/engine/jsexecution/classes/jsexecution/).

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `jsExecution` | [`JsExecution`](/obsidian-js-engine-plugin-docs/api/engine/jsexecution/classes/jsexecution/) |  |

#### Returns

`void`

#### Source

[jsEngine/engine/Engine.ts:72](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/Engine.ts#L72)

## Properties

### activeExecutions

```ts
readonly activeExecutions: Map<string, JsExecution>;
```

#### Source

[jsEngine/engine/Engine.ts:37](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/Engine.ts#L37)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
