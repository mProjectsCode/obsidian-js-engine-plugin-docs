---
editUrl: false
next: false
prev: false
title: "MarkdownAPI"
---

Defined in: [jsEngine/api/MarkdownAPI.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L21)

The markdown API provides utilities for creating markdown using js.

## Constructors

### new MarkdownAPI()

> **new MarkdownAPI**(`apiInstance`): [`MarkdownAPI`](/obsidian-js-engine-plugin-docs/api/classes/markdownapi/)

Defined in: [jsEngine/api/MarkdownAPI.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L24)

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

[`MarkdownAPI`](/obsidian-js-engine-plugin-docs/api/classes/markdownapi/)

## Methods

### create()

> **create**(`markdown`): [`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

Defined in: [jsEngine/api/MarkdownAPI.ts:42](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L42)

Creates a markdown string form a normal string.
This does not modify the string.
It only wraps it in an object, so that the plugin can recognize and render it as markdown.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`markdown`

</td>
<td>

`string`

</td>
<td>

the string to wrap

</td>
</tr>
</tbody>
</table>

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

***

### createBlockQuote()

> **createBlockQuote**(): [`BlockQuoteElement`](/obsidian-js-engine-plugin-docs/api/classes/blockquoteelement/)

Defined in: [jsEngine/api/MarkdownAPI.ts:140](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L140)

Creates a new markdown block quote element.

#### Returns

[`BlockQuoteElement`](/obsidian-js-engine-plugin-docs/api/classes/blockquoteelement/)

***

### createBoldText()

> **createBoldText**(`text`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

Defined in: [jsEngine/api/MarkdownAPI.ts:64](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L64)

Creates a new markdown text element with bold formatting.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`text`

</td>
<td>

`string`

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

***

### createBuilder()

> **createBuilder**(): [`MarkdownBuilder`](/obsidian-js-engine-plugin-docs/api/classes/markdownbuilder/)

Defined in: [jsEngine/api/MarkdownAPI.ts:31](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L31)

Creates a markdown builder.

#### Returns

[`MarkdownBuilder`](/obsidian-js-engine-plugin-docs/api/classes/markdownbuilder/)

***

### createCallout()

> **createCallout**(`title`, `type`, `args`): [`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

Defined in: [jsEngine/api/MarkdownAPI.ts:151](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L151)

Creates a new markdown callout element.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`title`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

the title of the callout

</td>
</tr>
<tr>
<td>

`type`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

the type of the callout

</td>
</tr>
<tr>
<td>

`args`

</td>
<td>

`string`

</td>
<td>

`''`

</td>
<td>

the callout args, optional

</td>
</tr>
</tbody>
</table>

#### Returns

[`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

***

### createCode()

> **createCode**(`text`): [`CodeElement`](/obsidian-js-engine-plugin-docs/api/classes/codeelement/)

Defined in: [jsEngine/api/MarkdownAPI.ts:108](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L108)

Creates a new markdown code element.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`text`

</td>
<td>

`string`

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`CodeElement`](/obsidian-js-engine-plugin-docs/api/classes/codeelement/)

***

### createCodeBlock()

> **createCodeBlock**(`language`, `content`): [`CodeBlockElement`](/obsidian-js-engine-plugin-docs/api/classes/codeblockelement/)

Defined in: [jsEngine/api/MarkdownAPI.ts:177](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L177)

Creates a new markdown code block element.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`language`

</td>
<td>

`string`

</td>
<td>

the language of the code block

</td>
</tr>
<tr>
<td>

`content`

</td>
<td>

`string`

</td>
<td>

the content of the code block

</td>
</tr>
</tbody>
</table>

#### Returns

[`CodeBlockElement`](/obsidian-js-engine-plugin-docs/api/classes/codeblockelement/)

***

### createCollapsibleCallout()

> **createCollapsibleCallout**(`title`, `type`, `args`, `collapsed`): [`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

Defined in: [jsEngine/api/MarkdownAPI.ts:165](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L165)

Creates a new markdown collapsible callout element.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`title`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

the title of the callout

</td>
</tr>
<tr>
<td>

`type`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

the type of the callout

</td>
</tr>
<tr>
<td>

`args`

</td>
<td>

`string`

</td>
<td>

`''`

</td>
<td>

the callout args, optional

</td>
</tr>
<tr>
<td>

`collapsed`

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
<td>

whether the callout should be collapsed by default, optional

</td>
</tr>
</tbody>
</table>

#### Returns

[`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

***

### createCursiveText()

> **createCursiveText**(`text`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

Defined in: [jsEngine/api/MarkdownAPI.ts:75](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L75)

Creates a new markdown text element with cursive formatting.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`text`

</td>
<td>

`string`

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

***

### createHeading()

> **createHeading**(`level`, `content`): [`HeadingElement`](/obsidian-js-engine-plugin-docs/api/classes/headingelement/)

Defined in: [jsEngine/api/MarkdownAPI.ts:131](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L131)

Creates a new markdown heading element.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`level`

</td>
<td>

`number`

</td>
<td>

the level of the heading from 1 to 6

</td>
</tr>
<tr>
<td>

`content`

</td>
<td>

`string`

</td>
<td>

the text of the heading

</td>
</tr>
</tbody>
</table>

#### Returns

[`HeadingElement`](/obsidian-js-engine-plugin-docs/api/classes/headingelement/)

***

### createHighlightedText()

> **createHighlightedText**(`text`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

Defined in: [jsEngine/api/MarkdownAPI.ts:97](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L97)

Creates a new markdown text element with highlighted formatting.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`text`

</td>
<td>

`string`

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

***

### createList()

> **createList**(`ordered`): [`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

Defined in: [jsEngine/api/MarkdownAPI.ts:200](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L200)

Creates a new markdown list element.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`ordered`

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
<td>

whether the list should be ordered or not (use 1. or -), defaults to unordered

</td>
</tr>
</tbody>
</table>

#### Returns

[`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

***

### createOrderedList()

> **createOrderedList**(): [`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

Defined in: [jsEngine/api/MarkdownAPI.ts:209](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L209)

Creates a new ordered markdown list element.

#### Returns

[`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

***

### createParagraph()

> **createParagraph**(`content`): [`ParagraphElement`](/obsidian-js-engine-plugin-docs/api/classes/paragraphelement/)

Defined in: [jsEngine/api/MarkdownAPI.ts:119](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L119)

Creates a new markdown paragraph element.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
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
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`ParagraphElement`](/obsidian-js-engine-plugin-docs/api/classes/paragraphelement/)

***

### createTable()

> **createTable**(`header`, `body`): [`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

Defined in: [jsEngine/api/MarkdownAPI.ts:189](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L189)

Creates a new markdown table element.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`header`

</td>
<td>

`string`[]

</td>
<td>

the header row

</td>
</tr>
<tr>
<td>

`body`

</td>
<td>

`string`[][]

</td>
<td>

the table body

</td>
</tr>
</tbody>
</table>

#### Returns

[`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

***

### createText()

> **createText**(`text`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

Defined in: [jsEngine/api/MarkdownAPI.ts:53](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L53)

Creates a new markdown text element.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`text`

</td>
<td>

`string`

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

***

### createUnderlinedText()

> **createUnderlinedText**(`text`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

Defined in: [jsEngine/api/MarkdownAPI.ts:86](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/MarkdownAPI.ts#L86)

Creates a new markdown text element with underline formatting.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`text`

</td>
<td>

`string`

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)
