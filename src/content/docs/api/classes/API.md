---
editUrl: false
next: false
prev: false
title: "API"
---

## Constructors

### new API()

> **new API**(`app`, `plugin`, `instanceId`): [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`app`

</td>
<td>

`App`

</td>
</tr>
<tr>
<td>

`plugin`

</td>
<td>

`JsEnginePlugin`

</td>
</tr>
<tr>
<td>

`instanceId`

</td>
<td>

[`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

</td>
</tr>
</tbody>
</table>

#### Returns

[`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

#### Defined in

[jsEngine/api/API.ts:50](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/API.ts#L50)

## Properties

### app

> `readonly` **app**: `App`

Reference to the obsidian app.

#### Defined in

[jsEngine/api/API.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/API.ts#L21)

***

### instanceId

> `readonly` **instanceId**: [`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

#### Defined in

[jsEngine/api/API.ts:26](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/API.ts#L26)

***

### internal

> `readonly` **internal**: [`InternalAPI`](/obsidian-js-engine-plugin-docs/api/classes/internalapi/)

API to interact with js engines internals.

#### Defined in

[jsEngine/api/API.ts:48](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/API.ts#L48)

***

### lib

> `readonly` **lib**: [`LibAPI`](/obsidian-js-engine-plugin-docs/api/classes/libapi/)

API to interact with packaged libraries.

#### Defined in

[jsEngine/api/API.ts:39](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/API.ts#L39)

***

### markdown

> `readonly` **markdown**: [`MarkdownAPI`](/obsidian-js-engine-plugin-docs/api/classes/markdownapi/)

API to interact with markdown.

#### Defined in

[jsEngine/api/API.ts:31](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/API.ts#L31)

***

### message

> `readonly` **message**: [`MessageAPI`](/obsidian-js-engine-plugin-docs/api/classes/messageapi/)

API to interact with the plugins message system.

#### Defined in

[jsEngine/api/API.ts:35](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/API.ts#L35)

***

### plugin

> `readonly` **plugin**: `JsEnginePlugin`

Reference the JS Engine plugin.

#### Defined in

[jsEngine/api/API.ts:25](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/API.ts#L25)

***

### prompt

> `readonly` **prompt**: [`PromptAPI`](/obsidian-js-engine-plugin-docs/api/classes/promptapi/)

#### Defined in

[jsEngine/api/API.ts:44](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/API.ts#L44)

***

### query

> `readonly` **query**: [`QueryAPI`](/obsidian-js-engine-plugin-docs/api/classes/queryapi/)

API to query your vault with simple javascript functions.

#### Defined in

[jsEngine/api/API.ts:43](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/API.ts#L43)

***

### validators

> `readonly` **validators**: `Validators`

#### Defined in

[jsEngine/api/API.ts:27](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/API.ts#L27)

## Methods

### getObsidianModule()

> **getObsidianModule**(): `__module`

Gets the obsidian module.
This allows you to access all things exported by the obsidian module.

#### Returns

`__module`

#### Example

```js
const obsidian = engine.getObsidianModule();
new obsidian.Notice('Hello World!');
```

#### Defined in

[jsEngine/api/API.ts:109](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/API.ts#L109)

***

### getPlugin()

> **getPlugin**(`pluginId`): `undefined` \| `Plugin`

Gets a plugin by its id. A plugin id can be found by looking at its manifest.
If the plugin is not enabled, this will return undefined.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`pluginId`

</td>
<td>

`string`

</td>
<td>

the id of the plugin.

</td>
</tr>
</tbody>
</table>

#### Returns

`undefined` \| `Plugin`

#### Defined in

[jsEngine/api/API.ts:93](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/API.ts#L93)

***

### importJs()

> **importJs**(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>

Loads an ECMAScript module from a vault relative path.
Everything you import via this function will be loaded as an ECMAScript module.

Since imports are cached by the browser (aka Obsidian),
you might need to reload Obsidian to see changes made to the imported file.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`path`

</td>
<td>

`string`

</td>
<td>

the vault relative path of the file to import

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>

#### Defined in

[jsEngine/api/API.ts:73](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/API.ts#L73)

***

### reactive()

> **reactive**(`fn`, ...`initialArgs`): [`ReactiveComponent`](/obsidian-js-engine-plugin-docs/api/classes/reactivecomponent/)

Creates a reactive component.
Reactive components are useful for creating dynamic content.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`fn`

</td>
<td>

[`JsFunc`](/obsidian-js-engine-plugin-docs/api/type-aliases/jsfunc/)

</td>
<td>

the function to rerun. It's return value will be rendered.

</td>
</tr>
<tr>
<td>

...`initialArgs`

</td>
<td>

`unknown`[]

</td>
<td>

the initial arguments (for the first render) to pass to the function.

</td>
</tr>
</tbody>
</table>

#### Returns

[`ReactiveComponent`](/obsidian-js-engine-plugin-docs/api/classes/reactivecomponent/)

#### Defined in

[jsEngine/api/API.ts:120](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/API.ts#L120)
