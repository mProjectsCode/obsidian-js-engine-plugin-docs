---
editUrl: false
next: false
prev: false
title: "TextElement"
---

Represents a piece of pure markdown text.

## Extends

- `AbstractMarkdownLiteral`

## Constructors

### new TextElement()

> **new TextElement**(`apiInstance`, `content`, `bold`, `cursive`, `underline`, `highlight`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

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
<tr>
<td>

`content`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`bold`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`cursive`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`underline`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`highlight`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

#### Overrides

`AbstractMarkdownLiteral.constructor`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:176](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L176)

## Properties

### apiInstance

> `readonly` **apiInstance**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

#### Inherited from

`AbstractMarkdownLiteral.apiInstance`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElement.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElement.ts#L9)

***

### bold

> **bold**: `boolean`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:171](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L171)

***

### content

> **content**: `string`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:170](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L170)

***

### cursive

> **cursive**: `boolean`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:172](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L172)

***

### highlight

> **highlight**: `boolean`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:174](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L174)

***

### underline

> **underline**: `boolean`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:173](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L173)

## Methods

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

Converts the element to a [MarkdownString](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownstring).

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

#### Inherited from

`AbstractMarkdownLiteral.toMarkdown`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElement.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElement.ts#L28)

***

### toString()

> **toString**(): `string`

Converts the element to a string.

#### Returns

`string`

#### Overrides

`AbstractMarkdownLiteral.toString`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:186](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L186)
