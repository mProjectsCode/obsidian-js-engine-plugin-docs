---
editUrl: false
next: false
prev: false
title: "MarkdownAPI"
---

The markdown API provides utilities for creating markdown using js.

## Constructors

### new MarkdownAPI()

> **new MarkdownAPI**(`apiInstance`): [`MarkdownAPI`](/obsidian-js-engine-plugin-docs/api/classes/markdownapi/)

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

#### Defined in

[jsEngine/api/MarkdownAPI.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/MarkdownAPI.ts#L22)

## Methods

### create()

> **create**(`markdown`): [`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

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

#### Defined in

[jsEngine/api/MarkdownAPI.ts:40](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/MarkdownAPI.ts#L40)

***

### createBlockQuote()

> **createBlockQuote**(): [`BlockQuoteElement`](/obsidian-js-engine-plugin-docs/api/classes/blockquoteelement/)

Creates a new markdown block quote element.

#### Returns

[`BlockQuoteElement`](/obsidian-js-engine-plugin-docs/api/classes/blockquoteelement/)

#### Defined in

[jsEngine/api/MarkdownAPI.ts:111](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/MarkdownAPI.ts#L111)

***

### createBoldText()

> **createBoldText**(`text`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

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

#### Defined in

[jsEngine/api/MarkdownAPI.ts:58](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/MarkdownAPI.ts#L58)

***

### createBuilder()

> **createBuilder**(): [`MarkdownBuilder`](/obsidian-js-engine-plugin-docs/api/classes/markdownbuilder/)

Creates a markdown builder.

#### Returns

[`MarkdownBuilder`](/obsidian-js-engine-plugin-docs/api/classes/markdownbuilder/)

#### Defined in

[jsEngine/api/MarkdownAPI.ts:29](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/MarkdownAPI.ts#L29)

***

### createCallout()

> **createCallout**(`title`, `type`, `args`): [`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

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

#### Defined in

[jsEngine/api/MarkdownAPI.ts:122](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/MarkdownAPI.ts#L122)

***

### createCode()

> **createCode**(`text`): [`CodeElement`](/obsidian-js-engine-plugin-docs/api/classes/codeelement/)

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

#### Defined in

[jsEngine/api/MarkdownAPI.ts:85](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/MarkdownAPI.ts#L85)

***

### createCodeBlock()

> **createCodeBlock**(`language`, `content`): [`CodeBlockElement`](/obsidian-js-engine-plugin-docs/api/classes/codeblockelement/)

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

#### Defined in

[jsEngine/api/MarkdownAPI.ts:132](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/MarkdownAPI.ts#L132)

***

### createCursiveText()

> **createCursiveText**(`text`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

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

#### Defined in

[jsEngine/api/MarkdownAPI.ts:67](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/MarkdownAPI.ts#L67)

***

### createHeading()

> **createHeading**(`level`, `content`): [`HeadingElement`](/obsidian-js-engine-plugin-docs/api/classes/headingelement/)

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

#### Defined in

[jsEngine/api/MarkdownAPI.ts:104](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/MarkdownAPI.ts#L104)

***

### createList()

> **createList**(`ordered`): [`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

Creates a new markdown list element.

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

`ordered`

</td>
<td>

`boolean`

</td>
<td>

whether the list should be ordered or not (use 1. or -)

</td>
</tr>
</tbody>
</table>

#### Returns

[`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

#### Defined in

[jsEngine/api/MarkdownAPI.ts:151](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/MarkdownAPI.ts#L151)

***

### createParagraph()

> **createParagraph**(`content`): [`ParagraphElement`](/obsidian-js-engine-plugin-docs/api/classes/paragraphelement/)

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

#### Defined in

[jsEngine/api/MarkdownAPI.ts:94](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/MarkdownAPI.ts#L94)

***

### createTable()

> **createTable**(`header`, `body`): [`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

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

#### Defined in

[jsEngine/api/MarkdownAPI.ts:142](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/MarkdownAPI.ts#L142)

***

### createText()

> **createText**(`text`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

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

#### Defined in

[jsEngine/api/MarkdownAPI.ts:49](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/MarkdownAPI.ts#L49)

***

### createUnderlinedText()

> **createUnderlinedText**(`text`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

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

#### Defined in

[jsEngine/api/MarkdownAPI.ts:76](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/MarkdownAPI.ts#L76)
