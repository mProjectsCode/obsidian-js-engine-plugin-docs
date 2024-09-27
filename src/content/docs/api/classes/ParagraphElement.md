---
editUrl: false
next: false
prev: false
title: "ParagraphElement"
---

Represents a markdown paragraph.

## Extends

- `AbstractMarkdownElementContainer`

## Constructors

### new ParagraphElement()

> **new ParagraphElement**(`apiInstance`, `content`): [`ParagraphElement`](/obsidian-js-engine-plugin-docs/api/classes/paragraphelement/)

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

[`ParagraphElement`](/obsidian-js-engine-plugin-docs/api/classes/paragraphelement/)

#### Overrides

`AbstractMarkdownElementContainer.constructor`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:340](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L340)

## Properties

### apiInstance

> `readonly` **apiInstance**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

#### Inherited from

`AbstractMarkdownElementContainer.apiInstance`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElement.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElement.ts#L9)

***

### markdownElements

> **markdownElements**: `AbstractMarkdownElement`[]

#### Inherited from

`AbstractMarkdownElementContainer.markdownElements`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:12](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L12)

## Methods

### addBoldText()

> **addBoldText**(`text`): `AbstractMarkdownElementContainer`

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

`text`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addBoldText`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:53](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L53)

***

### addCode()

> **addCode**(`text`): `AbstractMarkdownElementContainer`

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

`text`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addCode`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:85](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L85)

***

### addCursiveText()

> **addCursiveText**(`text`): `AbstractMarkdownElementContainer`

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

`text`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addCursiveText`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:61](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L61)

***

### addElement()

> **addElement**(`element`): `void`

Adds a child element to the container.

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

`element`

</td>
<td>

`AbstractMarkdownElement`

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Throws

Error if the element is not allowed in the container.

#### Inherited from

`AbstractMarkdownElementContainer.addElement`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:35](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L35)

***

### addHighlightedText()

> **addHighlightedText**(`text`): `AbstractMarkdownElementContainer`

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

`text`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addHighlightedText`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:77](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L77)

***

### addText()

> **addText**(`text`): `AbstractMarkdownElementContainer`

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

`text`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addText`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:45](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L45)

***

### addUnderlinedText()

> **addUnderlinedText**(`text`): `AbstractMarkdownElementContainer`

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

`text`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addUnderlinedText`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:69](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L69)

***

### createBlockQuote()

> **createBlockQuote**(): [`BlockQuoteElement`](/obsidian-js-engine-plugin-docs/api/classes/blockquoteelement/)

#### Returns

[`BlockQuoteElement`](/obsidian-js-engine-plugin-docs/api/classes/blockquoteelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createBlockQuote`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:109](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L109)

***

### createCallout()

> **createCallout**(`title`, `type`, `args`): [`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
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
</tr>
</tbody>
</table>

#### Returns

[`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createCallout`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:115](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L115)

***

### createCodeBlock()

> **createCodeBlock**(`language`, `content`): [`CodeBlockElement`](/obsidian-js-engine-plugin-docs/api/classes/codeblockelement/)

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

`language`

</td>
<td>

`string`

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

[`CodeBlockElement`](/obsidian-js-engine-plugin-docs/api/classes/codeblockelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createCodeBlock`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:131](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L131)

***

### createCollapsibleCallout()

> **createCollapsibleCallout**(`title`, `type`, `args`, `collapsed`): [`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
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
</tr>
</tbody>
</table>

#### Returns

[`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createCollapsibleCallout`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:123](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L123)

***

### createHeading()

> **createHeading**(`level`, `content`): [`HeadingElement`](/obsidian-js-engine-plugin-docs/api/classes/headingelement/)

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

`level`

</td>
<td>

`number`

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

[`HeadingElement`](/obsidian-js-engine-plugin-docs/api/classes/headingelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createHeading`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:101](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L101)

***

### createList()

> **createList**(`ordered`): [`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
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
</tr>
</tbody>
</table>

#### Returns

[`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createList`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:147](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L147)

***

### createOrderedList()

> **createOrderedList**(): [`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

#### Returns

[`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createOrderedList`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:155](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L155)

***

### createParagraph()

> **createParagraph**(`content`): [`ParagraphElement`](/obsidian-js-engine-plugin-docs/api/classes/paragraphelement/)

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
</tbody>
</table>

#### Returns

[`ParagraphElement`](/obsidian-js-engine-plugin-docs/api/classes/paragraphelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createParagraph`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:93](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L93)

***

### createTable()

> **createTable**(`header`, `body`): [`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

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

#### Inherited from

`AbstractMarkdownElementContainer.createTable`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:139](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L139)

***

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

Converts the element to a [MarkdownString](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownstring).

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

#### Inherited from

`AbstractMarkdownElementContainer.toMarkdown`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElement.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElement.ts#L28)

***

### toString()

> **toString**(): `string`

Converts the element to a string.

#### Returns

`string`

#### Overrides

`AbstractMarkdownElementContainer.toString`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:346](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L346)
