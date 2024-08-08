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

> **new CodeElement**(`content`): [`CodeElement`](/obsidian-js-engine-plugin-docs/api/classes/codeelement/)

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

`content`

</td>
<td>

`string`

</td>
</tr>
</table>

#### Returns

[`CodeElement`](/obsidian-js-engine-plugin-docs/api/classes/codeelement/)

#### Overrides

`AbstractMarkdownLiteral.constructor`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:164](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L164)

## Properties

### content

> **content**: `string`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:162](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L162)

## Methods

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

Converts the element to a [MarkdownString](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownstring).

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

#### Inherited from

`AbstractMarkdownLiteral.toMarkdown`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElement.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/api/markdown/AbstractMarkdownElement.ts#L21)

***

### toString()

> **toString**(): `string`

Converts the element to a string.

#### Returns

`string`

#### Overrides

`AbstractMarkdownLiteral.toString`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:170](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L170)
