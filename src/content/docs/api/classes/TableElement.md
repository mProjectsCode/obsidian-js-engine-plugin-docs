---
editUrl: false
next: false
prev: false
title: "TableElement"
---

Represents a markdown table.

## Extends

- `AbstractMarkdownLiteral`

## Constructors

### new TableElement()

> **new TableElement**(`apiInstance`, `header`, `body`): [`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

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

`header`

</td>
<td>

`string`[]

</td>
</tr>
<tr>
<td>

`body`

</td>
<td>

`string`[][]

</td>
</tr>
</tbody>
</table>

#### Returns

[`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

#### Overrides

`AbstractMarkdownLiteral.constructor`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:238](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L238)

## Properties

### apiInstance

> `readonly` **apiInstance**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

#### Inherited from

`AbstractMarkdownLiteral.apiInstance`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElement.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/markdown/AbstractMarkdownElement.ts#L9)

***

### body

> **body**: `string`[][]

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:236](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L236)

***

### header

> **header**: `string`[]

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:235](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L235)

## Methods

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

Converts the element to a [MarkdownString](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownstring).

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

#### Inherited from

`AbstractMarkdownLiteral.toMarkdown`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElement.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/markdown/AbstractMarkdownElement.ts#L28)

***

### toString()

> **toString**(): `string`

Converts the element to a string.

#### Returns

`string`

#### Overrides

`AbstractMarkdownLiteral.toString`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:245](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L245)
