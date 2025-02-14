---
editUrl: false
next: false
prev: false
title: "TableElement"
---

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:236](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L236)

Represents a markdown table.

## Extends

- `AbstractMarkdownLiteral`

## Constructors

### new TableElement()

> **new TableElement**(`apiInstance`, `header`, `body`): [`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:240](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L240)

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

[`TableElementType`](/obsidian-js-engine-plugin-docs/api/type-aliases/tableelementtype/)[][]

</td>
</tr>
</tbody>
</table>

#### Returns

[`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

#### Overrides

`AbstractMarkdownLiteral.constructor`

## Properties

### apiInstance

> `readonly` **apiInstance**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElement.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElement.ts#L9)

#### Inherited from

`AbstractMarkdownLiteral.apiInstance`

***

### body

> **body**: `string`[][]

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:238](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L238)

***

### header

> **header**: `string`[]

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:237](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L237)

## Methods

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElement.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElement.ts#L28)

Converts the element to a [MarkdownString](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownstring).

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

#### Inherited from

`AbstractMarkdownLiteral.toMarkdown`

***

### toString()

> **toString**(): `string`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:247](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L247)

Converts the element to a string.

#### Returns

`string`

#### Overrides

`AbstractMarkdownLiteral.toString`
