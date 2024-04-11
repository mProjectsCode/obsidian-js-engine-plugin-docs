---
editUrl: false
next: false
prev: false
title: "ResultRenderer"
---

Attaches to a container and renders values.
Used to render the result of a [JsExecution](../../../../../obsidian-js-engine-plugin-docs/api/classes/jsexecution).

## Constructors

### new ResultRenderer(plugin, container, sourcePath, component)

```ts
new ResultRenderer(
   plugin, 
   container, 
   sourcePath, 
   component): ResultRenderer
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `plugin` | `default` |
| `container` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) |
| `sourcePath` | `string` |
| `component` | `Component` |

#### Returns

[`ResultRenderer`](ResultRenderer.md)

#### Source

[jsEngine/engine/ResultRenderer.ts:19](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/ResultRenderer.ts#L19)

## Properties

### component

```ts
readonly component: Component;
```

#### Source

[jsEngine/engine/ResultRenderer.ts:17](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/ResultRenderer.ts#L17)

***

### container

```ts
readonly container: HTMLElement;
```

#### Source

[jsEngine/engine/ResultRenderer.ts:15](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/ResultRenderer.ts#L15)

***

### plugin

```ts
readonly plugin: default;
```

#### Source

[jsEngine/engine/ResultRenderer.ts:14](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/ResultRenderer.ts#L14)

***

### sourcePath

```ts
readonly sourcePath: string;
```

#### Source

[jsEngine/engine/ResultRenderer.ts:16](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/ResultRenderer.ts#L16)

## Methods

### convertToSimpleObject()

```ts
convertToSimpleObject(value): unknown
```

Converts the given value to a simple object.
E.g. a [MarkdownBuilder](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownbuilder) will be converted to a string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to convert. |

#### Returns

`unknown`

The simple object.

#### Source

[jsEngine/engine/ResultRenderer.ts:87](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/ResultRenderer.ts#L87)

***

### render()

```ts
render(value): Promise<void>
```

Renders the given value to the container.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to render. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Source

[jsEngine/engine/ResultRenderer.ts:31](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/ResultRenderer.ts#L31)
