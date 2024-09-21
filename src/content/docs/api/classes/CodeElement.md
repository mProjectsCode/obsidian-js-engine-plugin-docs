---
editUrl: false
next: false
prev: false
title: "CodeElement"
---

Represents an inline markdown code block.

## Extends

- `AbstractMarkdownLiteral`

## Constructors

### new CodeElement()

> **new CodeElement**(`apiInstance`, `content`): [`CodeElement`](/obsidian-js-engine-plugin-docs/api/classes/codeelement/)

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

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:220](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L220)

## Properties

### apiInstance

> `readonly` **apiInstance**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

#### Inherited from

`AbstractMarkdownLiteral.apiInstance`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElement.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/markdown/AbstractMarkdownElement.ts#L9)

***

### content

> **content**: `string`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:218](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L218)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:226](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L226)
