---
editUrl: false
next: false
prev: false
title: "JsExecution"
---

## Constructors

### new JsExecution(params)

> **new JsExecution**(`params`): [`JsExecution`](/api/engine/jsexecution/classes/jsexecution/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`JsExecutionParams`](/api/engine/jsexecution/interfaces/jsexecutionparams/) |

#### Returns

[`JsExecution`](/api/engine/jsexecution/classes/jsexecution/)

#### Source

[jsEngine/engine/JsExecution.ts:42](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L42)

## Properties

### apiInstance

> **apiInstance**: [`API`](/api/api/api/classes/api/)

#### Source

[jsEngine/engine/JsExecution.ts:30](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L30)

***

### app

> **`readonly`** **app**: `App`

#### Source

[jsEngine/engine/JsExecution.ts:23](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L23)

***

### args

> **args**: `ExecutionArgument`[]

#### Source

[jsEngine/engine/JsExecution.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L28)

***

### code

> **code**: `string`

#### Source

[jsEngine/engine/JsExecution.ts:27](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L27)

***

### context

> **context**: `ExecutionContext` & [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `unknown`\>

#### Source

[jsEngine/engine/JsExecution.ts:29](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L29)

***

### func

> **func**: `undefined` \| [`JsFunc`](/api/engine/jsexecution/type-aliases/jsfunc/)

#### Source

[jsEngine/engine/JsExecution.ts:33](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L33)

***

### functionBuildError

> **functionBuildError**: `undefined` \| [`Error`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error )

#### Source

[jsEngine/engine/JsExecution.ts:36](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L36)

***

### functionBuildTime

> **functionBuildTime**: `undefined` \| `number`

#### Source

[jsEngine/engine/JsExecution.ts:39](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L39)

***

### functionRunError

> **functionRunError**: `undefined` \| [`Error`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error )

#### Source

[jsEngine/engine/JsExecution.ts:37](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L37)

***

### functionRunTime

> **functionRunTime**: `undefined` \| `number`

#### Source

[jsEngine/engine/JsExecution.ts:40](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L40)

***

### messages

> **messages**: `MessageWrapper`[]

#### Source

[jsEngine/engine/JsExecution.ts:31](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L31)

***

### plugin

> **`readonly`** **plugin**: `default`

#### Source

[jsEngine/engine/JsExecution.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L24)

***

### result

> **result**: `unknown`

#### Source

[jsEngine/engine/JsExecution.ts:34](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L34)

***

### uuid

> **uuid**: `string`

#### Source

[jsEngine/engine/JsExecution.ts:26](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L26)

## Methods

### buildFunction()

> **buildFunction**(): `void`

#### Returns

`void`

#### Source

[jsEngine/engine/JsExecution.ts:79](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L79)

***

### getMessages()

> **getMessages**(): `MessageWrapper`[]

#### Returns

`MessageWrapper`[]

#### Source

[jsEngine/engine/JsExecution.ts:135](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L135)

***

### isSuccessful()

> **isSuccessful**(): `boolean`

#### Returns

`boolean`

#### Source

[jsEngine/engine/JsExecution.ts:131](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L131)

***

### openStatsModal()

> **openStatsModal**(): `void`

#### Returns

`void`

#### Source

[jsEngine/engine/JsExecution.ts:139](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L139)

***

### runFunction()

> **runFunction**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Source

[jsEngine/engine/JsExecution.ts:100](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/JsExecution.ts#L100)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
