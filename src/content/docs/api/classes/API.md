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
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
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
</table>

#### Returns

[`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

#### Defined in

[jsEngine/api/API.ts:45](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/c8107c135035ea9518f13c9859a322a46eebe15e/jsEngine/api/API.ts#L45)

## Properties

### app

> `readonly` **app**: `App`

Reference to the obsidian app.

#### Defined in

[jsEngine/api/API.ts:17](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/c8107c135035ea9518f13c9859a322a46eebe15e/jsEngine/api/API.ts#L17)

***

### instanceId

> `readonly` **instanceId**: [`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

#### Defined in

[jsEngine/api/API.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/c8107c135035ea9518f13c9859a322a46eebe15e/jsEngine/api/API.ts#L22)

***

### internal

> `readonly` **internal**: [`InternalAPI`](/obsidian-js-engine-plugin-docs/api/classes/internalapi/)

API to interact with js engines internals.

#### Defined in

[jsEngine/api/API.ts:43](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/c8107c135035ea9518f13c9859a322a46eebe15e/jsEngine/api/API.ts#L43)

***

### lib

> `readonly` **lib**: [`LibAPI`](/obsidian-js-engine-plugin-docs/api/classes/libapi/)

API to interact with packaged libraries.

#### Defined in

[jsEngine/api/API.ts:34](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/c8107c135035ea9518f13c9859a322a46eebe15e/jsEngine/api/API.ts#L34)

***

### markdown

> `readonly` **markdown**: [`MarkdownAPI`](/obsidian-js-engine-plugin-docs/api/classes/markdownapi/)

API to interact with markdown.

#### Defined in

[jsEngine/api/API.ts:26](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/c8107c135035ea9518f13c9859a322a46eebe15e/jsEngine/api/API.ts#L26)

***

### message

> `readonly` **message**: [`MessageAPI`](/obsidian-js-engine-plugin-docs/api/classes/messageapi/)

API to interact with the plugins message system.

#### Defined in

[jsEngine/api/API.ts:30](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/c8107c135035ea9518f13c9859a322a46eebe15e/jsEngine/api/API.ts#L30)

***

### plugin

> `readonly` **plugin**: `JsEnginePlugin`

Reference the JS Engine plugin.

#### Defined in

[jsEngine/api/API.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/c8107c135035ea9518f13c9859a322a46eebe15e/jsEngine/api/API.ts#L21)

***

### prompt

> `readonly` **prompt**: [`PromptAPI`](/obsidian-js-engine-plugin-docs/api/classes/promptapi/)

#### Defined in

[jsEngine/api/API.ts:39](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/c8107c135035ea9518f13c9859a322a46eebe15e/jsEngine/api/API.ts#L39)

***

### query

> `readonly` **query**: [`QueryAPI`](/obsidian-js-engine-plugin-docs/api/classes/queryapi/)

API to query your vault with simple javascript functions.

#### Defined in

[jsEngine/api/API.ts:38](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/c8107c135035ea9518f13c9859a322a46eebe15e/jsEngine/api/API.ts#L38)

## Methods

### getPlugin()

> **getPlugin**(`pluginId`): `Plugin`

Gets a plugin by its id. A plugin id can be found by looking at its manifest.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

`Plugin`

#### Defined in

[jsEngine/api/API.ts:79](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/c8107c135035ea9518f13c9859a322a46eebe15e/jsEngine/api/API.ts#L79)

***

### importJs()

> **importJs**(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>

Loads an ECMAScript module from a vault relative path.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>

#### Defined in

[jsEngine/api/API.ts:63](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/c8107c135035ea9518f13c9859a322a46eebe15e/jsEngine/api/API.ts#L63)

***

### reactive()

> **reactive**(`fn`, ...`initialArgs`): [`ReactiveComponent`](/obsidian-js-engine-plugin-docs/api/classes/reactivecomponent/)

Creates a reactive component.
Reactive components are useful for creating dynamic content.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

[`ReactiveComponent`](/obsidian-js-engine-plugin-docs/api/classes/reactivecomponent/)

#### Defined in

[jsEngine/api/API.ts:90](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/c8107c135035ea9518f13c9859a322a46eebe15e/jsEngine/api/API.ts#L90)
