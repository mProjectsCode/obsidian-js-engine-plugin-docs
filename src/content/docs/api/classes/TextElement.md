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

### new TextElement(content, bold, cursive, underline)

```ts
new TextElement(
   content, 
   bold, 
   cursive, 
   underline): TextElement
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `content` | `string` |
| `bold` | `boolean` |
| `cursive` | `boolean` |
| `underline` | `boolean` |

#### Returns

[`TextElement`](TextElement.md)

#### Overrides

`AbstractMarkdownLiteral.constructor`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:126](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L126)

## Properties

### bold

```ts
bold: boolean;
```

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:122](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L122)

***

### content

```ts
content: string;
```

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:121](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L121)

***

### cursive

```ts
cursive: boolean;
```

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:123](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L123)

***

### underline

```ts
underline: boolean;
```

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:124](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L124)

## Methods

### getType()

```ts
getType(): MarkdownElementType
```

#### Returns

`MarkdownElementType`

#### Inherited from

`AbstractMarkdownLiteral.getType`

#### Source

[jsEngine/api/markdown/AbstractMarkdownLiteral.ts:8](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownLiteral.ts#L8)

***

### toMarkdown()

```ts
toMarkdown(): MarkdownString
```

Converts the element to a [MarkdownString](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownstring).

#### Returns

[`MarkdownString`](MarkdownString.md)

#### Inherited from

`AbstractMarkdownLiteral.toMarkdown`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElement.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownElement.ts#L21)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Overrides

`AbstractMarkdownLiteral.toString`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:135](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L135)
