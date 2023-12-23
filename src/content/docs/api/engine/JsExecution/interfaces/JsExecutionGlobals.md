---
editUrl: false
next: false
prev: false
title: "JsExecutionGlobals"
---

Global variables provided to a [JsExecution](/obsidian-js-engine-plugin-docs/api/engine/jsexecution/classes/jsexecution/).

## Properties

### app

```ts
app: App;
```

Reference to the obsidian [app](https://docs.obsidian.md/Reference/TypeScript+API/App) (obsidian API).

#### Source

[jsEngine/engine/JsExecution.ts:41](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/JsExecution.ts#L41)

***

### component

```ts
component: Component;
```

Obsidian [component](https://docs.obsidian.md/Reference/TypeScript+API/Component) for lifecycle management.

#### Source

[jsEngine/engine/JsExecution.ts:49](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/JsExecution.ts#L49)

***

### container

```ts
container: undefined | HTMLElement;
```

The container element that the execution can render to. This can be undefined.

#### Source

[jsEngine/engine/JsExecution.ts:57](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/JsExecution.ts#L57)

***

### context

```ts
context: JsExecutionContext & Record<string, unknown>;
```

The context provided. This can be undefined and extended by other properties.

#### Source

[jsEngine/engine/JsExecution.ts:53](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/JsExecution.ts#L53)

***

### engine

```ts
engine: API;
```

Reference to this plugins API.

#### Source

[jsEngine/engine/JsExecution.ts:45](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/JsExecution.ts#L45)

***

### obsidian

```ts
obsidian: __module;
```

The entire obsidian module, e.g. a notice can be constructed like this: `new obsidian.Notice('Hello World')`.

#### Source

[jsEngine/engine/JsExecution.ts:61](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/JsExecution.ts#L61)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
