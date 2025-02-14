---
editUrl: false
next: false
prev: false
title: "CalloutElement"
---

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:395](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L395)

Represents a markdown callout.

## Extends

- `AbstractMarkdownElementContainer`

## Constructors

### new CalloutElement()

> **new CalloutElement**(`apiInstance`, `title`, `type`, `args`, `collapsible`, `collapsed`): [`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:402](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L402)

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

`apiInstance`

</td>
<td>

[`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

</td>
<td>

`undefined`

</td>
</tr>
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

`undefined`

</td>
</tr>
<tr>
<td>

`collapsible`

</td>
<td>

`boolean`

</td>
<td>

`false`

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

#### Overrides

`AbstractMarkdownElementContainer.constructor`

## Properties

### apiInstance

> `readonly` **apiInstance**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElement.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElement.ts#L9)

#### Inherited from

`AbstractMarkdownElementContainer.apiInstance`

***

### args

> **args**: `string`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:398](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L398)

***

### collapsed

> **collapsed**: `boolean`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:400](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L400)

***

### collapsible

> **collapsible**: `boolean`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:399](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L399)

***

### markdownElements

> **markdownElements**: `AbstractMarkdownElement`[]

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:12](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L12)

#### Inherited from

`AbstractMarkdownElementContainer.markdownElements`

***

### title

> **title**: `string`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:396](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L396)

***

### type

> **type**: `string`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:397](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L397)

## Methods

### addBoldText()

> **addBoldText**(`text`): `AbstractMarkdownElementContainer`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:53](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L53)

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

***

### addCode()

> **addCode**(`text`): `AbstractMarkdownElementContainer`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:85](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L85)

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

***

### addCursiveText()

> **addCursiveText**(`text`): `AbstractMarkdownElementContainer`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:61](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L61)

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

***

### addElement()

> **addElement**(`element`): `void`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:35](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L35)

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

***

### addHighlightedText()

> **addHighlightedText**(`text`): `AbstractMarkdownElementContainer`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:77](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L77)

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

***

### addText()

> **addText**(`text`): `AbstractMarkdownElementContainer`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:45](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L45)

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

***

### addUnderlinedText()

> **addUnderlinedText**(`text`): `AbstractMarkdownElementContainer`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:69](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L69)

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

***

### createBlockQuote()

> **createBlockQuote**(): [`BlockQuoteElement`](/obsidian-js-engine-plugin-docs/api/classes/blockquoteelement/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:109](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L109)

#### Returns

[`BlockQuoteElement`](/obsidian-js-engine-plugin-docs/api/classes/blockquoteelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createBlockQuote`

***

### createCallout()

> **createCallout**(`title`, `type`, `args`): [`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:115](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L115)

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

***

### createCodeBlock()

> **createCodeBlock**(`language`, `content`): [`CodeBlockElement`](/obsidian-js-engine-plugin-docs/api/classes/codeblockelement/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:131](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L131)

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

***

### createCollapsibleCallout()

> **createCollapsibleCallout**(`title`, `type`, `args`, `collapsed`): [`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:123](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L123)

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

***

### createHeading()

> **createHeading**(`level`, `content`): [`HeadingElement`](/obsidian-js-engine-plugin-docs/api/classes/headingelement/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:101](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L101)

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

***

### createList()

> **createList**(`ordered`): [`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:147](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L147)

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

***

### createOrderedList()

> **createOrderedList**(): [`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:155](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L155)

#### Returns

[`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createOrderedList`

***

### createParagraph()

> **createParagraph**(`content`): [`ParagraphElement`](/obsidian-js-engine-plugin-docs/api/classes/paragraphelement/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:93](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L93)

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

***

### createTable()

> **createTable**(`header`, `body`): [`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:139](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L139)

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

[`TableElementType`](/obsidian-js-engine-plugin-docs/api/type-aliases/tableelementtype/)[][]

</td>
</tr>
</tbody>
</table>

#### Returns

[`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createTable`

***

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

Defined in: [jsEngine/api/markdown/AbstractMarkdownElement.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElement.ts#L28)

Converts the element to a [MarkdownString](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownstring).

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

#### Inherited from

`AbstractMarkdownElementContainer.toMarkdown`

***

### toString()

> **toString**(): `string`

Defined in: [jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:412](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L412)

Converts the element to a string.

#### Returns

`string`

#### Overrides

`AbstractMarkdownElementContainer.toString`
