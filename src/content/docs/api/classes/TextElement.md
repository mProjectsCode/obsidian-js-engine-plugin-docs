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

> **new TextElement**(`content`, `bold`, `cursive`, `underline`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

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
</tbody>
</table>

#### Returns

[`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

#### Overrides

`AbstractMarkdownLiteral.constructor`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:126](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L126)

## Properties

### bold

> **bold**: `boolean`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:122](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L122)

***

### content

> **content**: `string`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:121](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L121)

***

### cursive

> **cursive**: `boolean`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:123](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L123)

***

### underline

> **underline**: `boolean`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:124](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L124)

## Methods

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

Converts the element to a [MarkdownString](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownstring).

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

#### Inherited from

`AbstractMarkdownLiteral.toMarkdown`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElement.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/markdown/AbstractMarkdownElement.ts#L21)

***

### toString()

> **toString**(): `string`

Converts the element to a string.

#### Returns

`string`

#### Overrides

`AbstractMarkdownLiteral.toString`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:135](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L135)
