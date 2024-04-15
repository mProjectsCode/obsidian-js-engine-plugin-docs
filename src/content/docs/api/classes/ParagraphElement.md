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

### new ParagraphElement(content)

> **new ParagraphElement**(`content`): [`ParagraphElement`](/obsidian-js-engine-plugin-docs/api/classes/paragraphelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

[`ParagraphElement`](/obsidian-js-engine-plugin-docs/api/classes/paragraphelement/)

#### Overrides

`AbstractMarkdownElementContainer.constructor`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:284](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L284)

## Properties

### markdownElements

> **markdownElements**: `AbstractMarkdownElement`[]

#### Inherited from

`AbstractMarkdownElementContainer.markdownElements`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L9)

## Methods

### addBoldText()

> **addBoldText**(`text`): `AbstractMarkdownElementContainer`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addBoldText`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:46](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L46)

***

### addCode()

> **addCode**(`text`): `AbstractMarkdownElementContainer`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addCode`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:64](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L64)

***

### addCursiveText()

> **addCursiveText**(`text`): `AbstractMarkdownElementContainer`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addCursiveText`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:52](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L52)

***

### addElement()

> **addElement**(`element`): `void`

Adds a child element to the container.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `element` | `AbstractMarkdownElement` |  |

#### Returns

`void`

#### Inherited from

`AbstractMarkdownElementContainer.addElement`

#### Throws

Error if the element is not allowed in the container.

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:32](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L32)

***

### addText()

> **addText**(`text`): `AbstractMarkdownElementContainer`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addText`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:40](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L40)

***

### addUnderlinedText()

> **addUnderlinedText**(`text`): `AbstractMarkdownElementContainer`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addUnderlinedText`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:58](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L58)

***

### allowElement()

> **allowElement**(`element`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `element` | `AbstractMarkdownElement` |

#### Returns

`boolean`

#### Overrides

`AbstractMarkdownElementContainer.allowElement`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:294](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L294)

***

### createBlockQuote()

> **createBlockQuote**(): [`BlockQuoteElement`](/obsidian-js-engine-plugin-docs/api/classes/blockquoteelement/)

#### Returns

[`BlockQuoteElement`](/obsidian-js-engine-plugin-docs/api/classes/blockquoteelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createBlockQuote`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:82](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L82)

***

### createCallout()

> **createCallout**(`title`, `type`, `args`): [`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `title` | `string` | `undefined` |
| `type` | `string` | `undefined` |
| `args` | `string` | `''` |

#### Returns

[`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createCallout`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:88](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L88)

***

### createCodeBlock()

> **createCodeBlock**(`language`, `content`): [`CodeBlockElement`](/obsidian-js-engine-plugin-docs/api/classes/codeblockelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `language` | `string` |
| `content` | `string` |

#### Returns

[`CodeBlockElement`](/obsidian-js-engine-plugin-docs/api/classes/codeblockelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createCodeBlock`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:94](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L94)

***

### createHeading()

> **createHeading**(`level`, `content`): [`HeadingElement`](/obsidian-js-engine-plugin-docs/api/classes/headingelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `number` |
| `content` | `string` |

#### Returns

[`HeadingElement`](/obsidian-js-engine-plugin-docs/api/classes/headingelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createHeading`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:76](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L76)

***

### createList()

> **createList**(`ordered`): [`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ordered` | `boolean` |

#### Returns

[`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createList`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:106](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L106)

***

### createParagraph()

> **createParagraph**(`content`): [`ParagraphElement`](/obsidian-js-engine-plugin-docs/api/classes/paragraphelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

[`ParagraphElement`](/obsidian-js-engine-plugin-docs/api/classes/paragraphelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createParagraph`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:70](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L70)

***

### createTable()

> **createTable**(`header`, `body`): [`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `header` | `string`[] |
| `body` | `string`[][] |

#### Returns

[`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

#### Inherited from

`AbstractMarkdownElementContainer.createTable`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:100](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L100)

***

### getType()

> **getType**(): `MarkdownElementType`

#### Returns

`MarkdownElementType`

#### Inherited from

`AbstractMarkdownElementContainer.getType`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L22)

***

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

Converts the element to a [MarkdownString](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownstring).

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

#### Inherited from

`AbstractMarkdownElementContainer.toMarkdown`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElement.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElement.ts#L21)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Overrides

`AbstractMarkdownElementContainer.toString`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:290](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L290)
