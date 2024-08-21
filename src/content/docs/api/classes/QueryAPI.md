---
editUrl: false
next: false
prev: false
title: "QueryAPI"
---

## Constructors

### new QueryAPI()

> **new QueryAPI**(`apiInstance`): [`QueryAPI`](/obsidian-js-engine-plugin-docs/api/classes/queryapi/)

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

#### Defined in

[jsEngine/api/QueryAPI.ts:7](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/QueryAPI.ts#L7)

## Properties

### apiInstance

> `readonly` **apiInstance**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

#### Defined in

[jsEngine/api/QueryAPI.ts:5](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/QueryAPI.ts#L5)

## Methods

### files()

> **files**\<`T`\>(`query`): `T`[]

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

#### Defined in

[jsEngine/api/QueryAPI.ts:26](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/QueryAPI.ts#L26)

***

### filesWithMetadata()

> **filesWithMetadata**\<`T`\>(`query`): `T`[]

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

(`file`, `cache`, `tags`) => `undefined` \| `T`

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

#### Defined in

[jsEngine/api/QueryAPI.ts:42](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/QueryAPI.ts#L42)
