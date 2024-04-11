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

### new CodeElement(content)

```ts
new CodeElement(content): CodeElement
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

[`CodeElement`](CodeElement.md)

#### Overrides

`AbstractMarkdownLiteral.constructor`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:164](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L164)

## Properties

### content

```ts
content: string;
```

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:162](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L162)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:170](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L170)