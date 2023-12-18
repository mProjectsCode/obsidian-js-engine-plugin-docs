---
editUrl: false
next: false
prev: false
title: "API"
---

## Constructors

### new API(app, plugin, instanceId)

> **new API**(`app`, `plugin`, `instanceId`): [`API`](/api/api/api/classes/api/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `app` | `App` |
| `plugin` | `default` |
| `instanceId` | [`InstanceId`](/api/api/instanceid/classes/instanceid/) |

#### Returns

[`API`](/api/api/api/classes/api/)

#### Source

[jsEngine/api/API.ts:38](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/API.ts#L38)

## Properties

### app

> **`readonly`** **app**: `App`

Reference to the obsidian app.

#### Source

[jsEngine/api/API.ts:15](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/API.ts#L15)

***

### instanceId

> **`readonly`** **instanceId**: [`InstanceId`](/api/api/instanceid/classes/instanceid/)

#### Source

[jsEngine/api/API.ts:20](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/API.ts#L20)

***

### internal

> **`readonly`** **internal**: [`InternalAPI`](/api/api/internal/classes/internalapi/)

API to interact with js engines internals.

#### Source

[jsEngine/api/API.ts:36](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/API.ts#L36)

***

### lib

> **`readonly`** **lib**: [`LibAPI`](/api/api/libapi/classes/libapi/)

API to interact with packaged libraries.

#### Source

[jsEngine/api/API.ts:32](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/API.ts#L32)

***

### markdown

> **`readonly`** **markdown**: [`MarkdownAPI`](/api/api/markdownapi/classes/markdownapi/)

API to interact with markdown.

#### Source

[jsEngine/api/API.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/API.ts#L24)

***

### message

> **`readonly`** **message**: [`MessageAPI`](/api/api/messageapi/classes/messageapi/)

API to interact with the plugins message system.

#### Source

[jsEngine/api/API.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/API.ts#L28)

***

### plugin

> **`readonly`** **plugin**: `default`

Reference the JS Engine plugin.

#### Source

[jsEngine/api/API.ts:19](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/API.ts#L19)

## Methods

### getPlugin()

> **getPlugin**(`pluginId`): `Plugin`

Gets a plugin by its id. A plugin id can be found by looking at its manifest.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `pluginId` | `string` | the id of the plugin. |

#### Returns

`Plugin`

#### Source

[jsEngine/api/API.ts:71](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/API.ts#L71)

***

### importJs()

> **importJs**(`path`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

Loads an ECMAScript module from a vault relative path.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | the vault relative path of the file to import |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

#### Source

[jsEngine/api/API.ts:55](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/API.ts#L55)

***

### reactive()

> **reactive**(`fn`, ...`initialArgs`): [`ReactiveComponent`](/api/api/reactive/reactivecomponent/classes/reactivecomponent/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fn` | [`JsFunc`](/api/engine/jsexecution/type-aliases/jsfunc/) |
| ...`initialArgs` | `unknown`[] |

#### Returns

[`ReactiveComponent`](/api/api/reactive/reactivecomponent/classes/reactivecomponent/)

#### Source

[jsEngine/api/API.ts:75](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/API.ts#L75)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
