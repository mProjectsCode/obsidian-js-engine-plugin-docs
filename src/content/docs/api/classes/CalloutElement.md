---
editUrl: false
next: false
prev: false
title: "CalloutElement"
---

Represents a markdown callout.

## Extends

- `AbstractMarkdownElementContainer`

## Constructors

### new CalloutElement()

> **new CalloutElement**(`title`, `type`, `args`, `collapsible`, `collapsed`): [`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

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

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:350](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L350)

## Properties

### args

> **args**: `string`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:346](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L346)

***

### collapsed

> **collapsed**: `boolean`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:348](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L348)

***

### collapsible

> **collapsible**: `boolean`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:347](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L347)

***

### markdownElements

> **markdownElements**: `AbstractMarkdownElement`[]

#### Inherited from

`AbstractMarkdownElementContainer.markdownElements`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L9)

***

### title

> **title**: `string`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:344](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L344)

***

### type

> **type**: `string`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:345](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L345)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:46](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L46)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:64](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L64)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:52](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L52)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:32](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L32)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:40](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L40)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:58](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L58)

***

### createBlockQuote()

> **createBlockQuote**(): [`BlockQuoteElement`](/obsidian-js-engine-plugin-docs/api/classes/blockquoteelement/)

#### Returns

[`BlockQuoteElement`](/obsidian-js-engine-plugin-docs/api/classes/blockquoteelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createBlockQuote`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:82](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L82)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:88](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L88)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:100](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L100)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:94](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L94)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:76](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L76)

***

### createList()

> **createList**(`ordered`): [`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

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

`ordered`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createList`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:112](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L112)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:70](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L70)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:106](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L106)

***

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

Converts the element to a [MarkdownString](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownstring).

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

#### Inherited from

`AbstractMarkdownElementContainer.toMarkdown`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElement.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElement.ts#L21)

***

### toString()

> **toString**(): `string`

Converts the element to a string.

#### Returns

`string`

#### Overrides

`AbstractMarkdownElementContainer.toString`

#### Defined in

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:364](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L364)
