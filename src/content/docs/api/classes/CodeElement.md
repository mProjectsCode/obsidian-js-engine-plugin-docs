---
editUrl: false
next: false
prev: false
title: "CodeElement"
---

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:217](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L217)

Represents an inline markdown code block.

## Extends

- `AbstractMarkdownLiteral`

## Constructors

### new CodeElement()

> **new CodeElement**(`apiInstance`, `content`): [`CodeElement`](/obsidian-js-engine-plugin-docs/api/classes/codeelement/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:220](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L220)

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
</tbody>
</table>

#### Returns

[`CodeElement`](/obsidian-js-engine-plugin-docs/api/classes/codeelement/)

#### Overrides

`AbstractMarkdownLiteral.constructor`

## Properties

### apiInstance

> `readonly` **apiInstance**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElement.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/markdown/AbstractMarkdownElement.ts#L9)

#### Inherited from

`AbstractMarkdownLiteral.apiInstance`

***

### content

> **content**: `string`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:218](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L218)

## Methods

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElement.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/markdown/AbstractMarkdownElement.ts#L28)

Converts the element to a [MarkdownString](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownstring).

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

#### Inherited from

`AbstractMarkdownLiteral.toMarkdown`

***

### toString()

> **toString**(): `string`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:226](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L226)

Converts the element to a string.

#### Returns

`string`

#### Overrides

`AbstractMarkdownLiteral.toString`
