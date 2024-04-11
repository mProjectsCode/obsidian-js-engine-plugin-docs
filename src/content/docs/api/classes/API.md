---
editUrl: false
next: false
prev: false
title: "API"
---

## Constructors

### new API(app, plugin, instanceId)

```ts
new API(
   app, 
   plugin, 
   instanceId): API
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `app` | `App` |
| `plugin` | `default` |
| `instanceId` | [`InstanceId`](InstanceId.md) |

#### Returns

[`API`](API.md)

#### Source

[jsEngine/api/API.ts:38](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/API.ts#L38)

## Properties

### app

```ts
readonly app: App;
```

Reference to the obsidian app.

#### Source

[jsEngine/api/API.ts:15](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/API.ts#L15)

***

### instanceId

```ts
readonly instanceId: InstanceId;
```

#### Source

[jsEngine/api/API.ts:20](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/API.ts#L20)

***

### internal

```ts
readonly internal: InternalAPI;
```

API to interact with js engines internals.

#### Source

[jsEngine/api/API.ts:36](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/API.ts#L36)

***

### lib

```ts
readonly lib: LibAPI;
```

API to interact with packaged libraries.

#### Source

[jsEngine/api/API.ts:32](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/API.ts#L32)

***

### markdown

```ts
readonly markdown: MarkdownAPI;
```

API to interact with markdown.

#### Source

[jsEngine/api/API.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/API.ts#L24)

***

### message

```ts
readonly message: MessageAPI;
```

API to interact with the plugins message system.

#### Source

[jsEngine/api/API.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/API.ts#L28)

***

### plugin

```ts
readonly plugin: default;
```

Reference the JS Engine plugin.

#### Source

[jsEngine/api/API.ts:19](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/API.ts#L19)

## Methods

### getPlugin()

```ts
getPlugin(pluginId): Plugin
```

Gets a plugin by its id. A plugin id can be found by looking at its manifest.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `pluginId` | `string` | the id of the plugin. |

#### Returns

`Plugin`

#### Source

[jsEngine/api/API.ts:70](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/API.ts#L70)

***

### importJs()

```ts
importJs(path): Promise<unknown>
```

Loads an ECMAScript module from a vault relative path.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | the vault relative path of the file to import |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>

#### Source

[jsEngine/api/API.ts:54](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/API.ts#L54)

***

### reactive()

```ts
reactive(fn, ...initialArgs): ReactiveComponent
```

Creates a reactive component.
Reactive components are useful for creating dynamic content.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`JsFunc`](../type-aliases/JsFunc.md) | the function to rerun. It's return value will be rendered. |
| ...`initialArgs` | `unknown`[] | the initial arguments (for the first render) to pass to the function. |

#### Returns

[`ReactiveComponent`](ReactiveComponent.md)

#### Source

[jsEngine/api/API.ts:81](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/API.ts#L81)
