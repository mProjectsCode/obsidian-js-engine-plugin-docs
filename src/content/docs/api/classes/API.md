---
editUrl: false
next: false
prev: false
title: "API"
---

## Constructors

### new API(app, plugin, instanceId)

> **new API**(`app`, `plugin`, `instanceId`): [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `app` | `App` |
| `plugin` | `default` |
| `instanceId` | [`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/) |

#### Returns

[`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

#### Source

[jsEngine/api/API.ts:38](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/API.ts#L38)

## Properties

### app

> **`readonly`** **app**: `App`

Reference to the obsidian app.

#### Source

[jsEngine/api/API.ts:15](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/API.ts#L15)

***

### instanceId

> **`readonly`** **instanceId**: [`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

#### Source

[jsEngine/api/API.ts:20](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/API.ts#L20)

***

### internal

> **`readonly`** **internal**: [`InternalAPI`](/obsidian-js-engine-plugin-docs/api/classes/internalapi/)

API to interact with js engines internals.

#### Source

[jsEngine/api/API.ts:36](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/API.ts#L36)

***

### lib

> **`readonly`** **lib**: [`LibAPI`](/obsidian-js-engine-plugin-docs/api/classes/libapi/)

API to interact with packaged libraries.

#### Source

[jsEngine/api/API.ts:32](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/API.ts#L32)

***

### markdown

> **`readonly`** **markdown**: [`MarkdownAPI`](/obsidian-js-engine-plugin-docs/api/classes/markdownapi/)

API to interact with markdown.

#### Source

[jsEngine/api/API.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/API.ts#L24)

***

### message

> **`readonly`** **message**: [`MessageAPI`](/obsidian-js-engine-plugin-docs/api/classes/messageapi/)

API to interact with the plugins message system.

#### Source

[jsEngine/api/API.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/API.ts#L28)

***

### plugin

> **`readonly`** **plugin**: `default`

Reference the JS Engine plugin.

#### Source

[jsEngine/api/API.ts:19](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/API.ts#L19)

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

[jsEngine/api/API.ts:70](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/API.ts#L70)

***

### importJs()

> **importJs**(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>

Loads an ECMAScript module from a vault relative path.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | the vault relative path of the file to import |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>

#### Source

[jsEngine/api/API.ts:54](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/API.ts#L54)

***

### reactive()

> **reactive**(`fn`, ...`initialArgs`): [`ReactiveComponent`](/obsidian-js-engine-plugin-docs/api/classes/reactivecomponent/)

Creates a reactive component.
Reactive components are useful for creating dynamic content.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`JsFunc`](/obsidian-js-engine-plugin-docs/api/type-aliases/jsfunc/) | the function to rerun. It's return value will be rendered. |
| ...`initialArgs` | `unknown`[] | the initial arguments (for the first render) to pass to the function. |

#### Returns

[`ReactiveComponent`](/obsidian-js-engine-plugin-docs/api/classes/reactivecomponent/)

#### Source

[jsEngine/api/API.ts:81](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/API.ts#L81)
