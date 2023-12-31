---
editUrl: false
next: false
prev: false
title: "MarkdownBuilder"
---

Allows for easily building markdown using JavaScript.

## Extends

- `AbstractMarkdownElementContainer`

## Constructors

### new MarkdownBuilder()

```ts
new MarkdownBuilder(): MarkdownBuilder
```

#### Returns

[`MarkdownBuilder`](/obsidian-js-engine-plugin-docs/api/api/markdown/markdownbuilder/classes/markdownbuilder/)

#### Overrides

`AbstractMarkdownElementContainer.constructor`

#### Source

[jsEngine/api/markdown/MarkdownBuilder.ts:8](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/MarkdownBuilder.ts#L8)

## Methods

### addBoldText()

```ts
addBoldText(text): AbstractMarkdownElementContainer
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addBoldText`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:46](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L46)

***

### addCode()

```ts
addCode(text): AbstractMarkdownElementContainer
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addCode`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:64](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L64)

***

### addCursiveText()

```ts
addCursiveText(text): AbstractMarkdownElementContainer
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addCursiveText`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:52](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L52)

***

### addElement()

```ts
addElement(element): void
```

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:32](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L32)

***

### addText()

```ts
addText(text): AbstractMarkdownElementContainer
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addText`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:40](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L40)

***

### addUnderlinedText()

```ts
addUnderlinedText(text): AbstractMarkdownElementContainer
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`AbstractMarkdownElementContainer`

#### Inherited from

`AbstractMarkdownElementContainer.addUnderlinedText`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:58](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L58)

***

### allowElement()

```ts
allowElement(_): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_` | `AbstractMarkdownElement` |

#### Returns

`boolean`

#### Overrides

`AbstractMarkdownElementContainer.allowElement`

#### Source

[jsEngine/api/markdown/MarkdownBuilder.ts:16](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/MarkdownBuilder.ts#L16)

***

### createBlockQuote()

```ts
createBlockQuote(): BlockQuoteElement
```

#### Returns

`BlockQuoteElement`

#### Inherited from

`AbstractMarkdownElementContainer.createBlockQuote`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:82](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L82)

***

### createCallout()

```ts
createCallout(
   title, 
   type, 
   args): CalloutElement
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `title` | `string` | `undefined` |
| `type` | `string` | `undefined` |
| `args` | `string` | `''` |

#### Returns

`CalloutElement`

#### Inherited from

`AbstractMarkdownElementContainer.createCallout`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:88](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L88)

***

### createCodeBlock()

```ts
createCodeBlock(language, content): CodeBlockElement
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `language` | `string` |
| `content` | `string` |

#### Returns

`CodeBlockElement`

#### Inherited from

`AbstractMarkdownElementContainer.createCodeBlock`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:94](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L94)

***

### createHeading()

```ts
createHeading(level, content): HeadingElement
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `number` |
| `content` | `string` |

#### Returns

`HeadingElement`

#### Inherited from

`AbstractMarkdownElementContainer.createHeading`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:76](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L76)

***

### createParagraph()

```ts
createParagraph(content): ParagraphElement
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`ParagraphElement`

#### Inherited from

`AbstractMarkdownElementContainer.createParagraph`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:70](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L70)

***

### createTable()

```ts
createTable(header, body): TableElement
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `header` | `string`[] |
| `body` | `string`[][] |

#### Returns

`TableElement`

#### Inherited from

`AbstractMarkdownElementContainer.createTable`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:100](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L100)

***

### getType()

```ts
getType(): MarkdownElementType
```

#### Returns

`MarkdownElementType`

#### Inherited from

`AbstractMarkdownElementContainer.getType`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L22)

***

### toMarkdown()

```ts
toMarkdown(): MarkdownString
```

Converts the element to a [MarkdownString](/obsidian-js-engine-plugin-docs/api/api/markdown/markdownstring/classes/markdownstring/).

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/api/markdown/markdownstring/classes/markdownstring/)

#### Inherited from

`AbstractMarkdownElementContainer.toMarkdown`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElement.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/AbstractMarkdownElement.ts#L21)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Overrides

`AbstractMarkdownElementContainer.toString`

#### Source

[jsEngine/api/markdown/MarkdownBuilder.ts:12](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/MarkdownBuilder.ts#L12)

## Properties

### markdownElements

```ts
markdownElements: AbstractMarkdownElement[];
```

#### Inherited from

`AbstractMarkdownElementContainer.markdownElements`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L9)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
