---
editUrl: false
next: false
prev: false
title: "InternalAPI"
---

The internal API provides access to some of js engines internals.

## Constructors

### new InternalAPI(apiInstance)

```ts
new InternalAPI(apiInstance): InternalAPI
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `apiInstance` | [`API`](API.md) |

#### Returns

[`InternalAPI`](InternalAPI.md)

#### Source

[jsEngine/api/Internal.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/Internal.ts#L13)

## Methods

### createRenderer()

```ts
createRenderer(
   container, 
   sourcePath, 
   component): ResultRenderer
```

Creates a result renderer.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `container` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) |  |
| `sourcePath` | `string` |  |
| `component` | `Component` |  |

#### Returns

[`ResultRenderer`](ResultRenderer.md)

#### Source

[jsEngine/api/Internal.ts:33](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/Internal.ts#L33)

***

### execute()

```ts
execute(params): Promise<JsExecution>
```

Executes the given code.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`EngineExecutionParams`](../interfaces/EngineExecutionParams.md) |  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](JsExecution.md)\>

#### Source

[jsEngine/api/Internal.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/Internal.ts#L22)

***

### executeFile()

```ts
executeFile(path, params): Promise<JsExecution>
```

Load and execute the given file.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` |  |
| `params` | [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`EngineExecutionParams`](../interfaces/EngineExecutionParams.md), `"code"`\> |  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](JsExecution.md)\>

#### Source

[jsEngine/api/Internal.ts:43](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/Internal.ts#L43)

***

### executeFileSimple()

```ts
executeFileSimple(path, params?): Promise<JsExecution>
```

Lead and execute the given file.
This method also handles the lifetime of the execution.
The component for the execution is created and destroyed automatically.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` |  |
| `params`? | [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`EngineExecutionParams`](../interfaces/EngineExecutionParams.md), `"code"` \| `"component"`\> |  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](JsExecution.md)\>

#### Source

[jsEngine/api/Internal.ts:61](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/Internal.ts#L61)

***

### getContextForFile()

```ts
getContextForFile(path): Promise<JsExecutionContext>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecutionContext`](../interfaces/JsExecutionContext.md)\>

#### Source

[jsEngine/api/Internal.ts:71](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/Internal.ts#L71)
