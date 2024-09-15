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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:132](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L132)

## Properties

### bold

> **bold**: `boolean`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:128](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L128)

***

### content

> **content**: `string`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:127](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L127)

***

### cursive

> **cursive**: `boolean`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:129](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L129)

***

### underline

> **underline**: `boolean`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:130](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L130)

## Methods

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

Converts the element to a [MarkdownString](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownstring).

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

#### Inherited from

`AbstractMarkdownLiteral.toMarkdown`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElement.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElement.ts#L21)

***

### toString()

> **toString**(): `string`

Converts the element to a string.

#### Returns

`string`

#### Overrides

`AbstractMarkdownLiteral.toString`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:141](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L141)
