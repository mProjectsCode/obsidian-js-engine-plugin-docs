---
editUrl: false
next: false
prev: false
title: "JsExecutionGlobals"
---

Global variables provided to a [JsExecution](../../../../../obsidian-js-engine-plugin-docs/api/classes/jsexecution).

## Properties

### app

```ts
app: App;
```

Reference to the obsidian [app](https://docs.obsidian.md/Reference/TypeScript+API/App) (obsidian API).

#### Source

[jsEngine/engine/JsExecution.ts:44](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/JsExecution.ts#L44)

***

### component

```ts
component: Component;
```

Obsidian [component](https://docs.obsidian.md/Reference/TypeScript+API/Component) for lifecycle management.

#### Source

[jsEngine/engine/JsExecution.ts:52](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/JsExecution.ts#L52)

***

### container

```ts
container: undefined | HTMLElement;
```

The container element that the execution can render to. This can be undefined.

#### Source

[jsEngine/engine/JsExecution.ts:60](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/JsExecution.ts#L60)

***

### context

```ts
context: JsExecutionContext & Record<string, unknown>;
```

The context provided. This can be undefined and extended by other properties.

#### Source

[jsEngine/engine/JsExecution.ts:56](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/JsExecution.ts#L56)

***

### engine

```ts
engine: API;
```

Reference to this plugins API.

#### Source

[jsEngine/engine/JsExecution.ts:48](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/JsExecution.ts#L48)

***

### obsidian

```ts
obsidian: __module;
```

The entire obsidian module, e.g. a notice can be constructed like this: `new obsidian.Notice('Hello World')`.

#### Source

[jsEngine/engine/JsExecution.ts:64](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/JsExecution.ts#L64)
