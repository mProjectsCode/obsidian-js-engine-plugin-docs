---
editUrl: false
next: false
prev: false
title: "QueryAPI"
---

Defined in: [jsEngine/api/QueryAPI.ts:7](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/QueryAPI.ts#L7)

## Constructors

### new QueryAPI()

> **new QueryAPI**(`apiInstance`): [`QueryAPI`](/obsidian-js-engine-plugin-docs/api/classes/queryapi/)

Defined in: [jsEngine/api/QueryAPI.ts:10](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/QueryAPI.ts#L10)

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

`apiInstance`

</td>
<td>

[`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

</td>
</tr>
</tbody>
</table>

#### Returns

[`QueryAPI`](/obsidian-js-engine-plugin-docs/api/classes/queryapi/)

## Properties

### apiInstance

> `readonly` **apiInstance**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

Defined in: [jsEngine/api/QueryAPI.ts:8](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/QueryAPI.ts#L8)

## Methods

### files()

> **files**\<`T`\>(`query`): `T`[]

Defined in: [jsEngine/api/QueryAPI.ts:29](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/QueryAPI.ts#L29)

This function will run the `query` callback on every markdown file in the vault and then return a list of the results, with `undefined` filtered out.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
</tr>
</tbody>
</table>

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

`query`

</td>
<td>

(`file`) => `undefined` \| `T`

</td>
</tr>
</tbody>
</table>

#### Returns

`T`[]

#### Examples

```typescript
// Find all markdown `TFiles` that start with the word "Foo"
const files = engine.query.files(file => file.name.startsWith("Foo") ? file : undefined);
```

```typescript
// Find all the names of all markdown files that are in the "Foo" folder
const fileNames = engine.query.files(file => file.path.startsWith("Foo/") ? file.name : undefined);
```

***

### filesWithMetadata()

> **filesWithMetadata**\<`T`\>(`query`): `T`[]

Defined in: [jsEngine/api/QueryAPI.ts:47](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/QueryAPI.ts#L47)

This function functions similarly tp [QueryAPI.files](../../../../../obsidian-js-engine-plugin-docs/api/classes/queryapi/#files), but also provides the cache and tags of each file to the `query` callback.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
</tr>
</tbody>
</table>

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

`query`

</td>
<td>

(`file`, `cache`, `tags`, `frontmatterTags`) => `undefined` \| `T`

</td>
</tr>
</tbody>
</table>

#### Returns

`T`[]

#### Example

```typescript
// Find the paths of all markdown files that have the tag "Foo"
const paths = engine.query.filesWithMetadata((file, cache, tags) => tags.includes("Foo") ? file.path : undefined);
```

***

### incomingLinks()

> **incomingLinks**(`file`): `object`[]

Defined in: [jsEngine/api/QueryAPI.ts:92](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/QueryAPI.ts#L92)

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

`file`

</td>
<td>

`TFile`

</td>
</tr>
</tbody>
</table>

#### Returns

`object`[]

***

### outgoingLinks()

> **outgoingLinks**(`file`): `object`[]

Defined in: [jsEngine/api/QueryAPI.ts:69](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/QueryAPI.ts#L69)

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

`file`

</td>
<td>

`TFile`

</td>
</tr>
</tbody>
</table>

#### Returns

`object`[]
