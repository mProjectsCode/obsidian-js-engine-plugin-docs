---
editUrl: false
next: false
prev: false
title: "JsExecutionParams"
---

Parameters used to construct a [JsExecution](/obsidian-js-engine-plugin-docs/api/engine/jsexecution/classes/jsexecution/).

## Extends

- [`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/engine/engine/interfaces/engineexecutionparams/)

## Properties

### app

```ts
app: App;
```

#### Source

[jsEngine/engine/JsExecution.ts:68](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/JsExecution.ts#L68)

***

### code

```ts
code: string;
```

The JavaScript code to execute.

#### Inherited from

[`engine/Engine.EngineExecutionParams.code`](/obsidian-js-engine-plugin-docs/api/engine/engine/interfaces/engineexecutionparams/#code)

#### Source

[jsEngine/engine/Engine.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/Engine.ts#L13)

***

### component

```ts
component: Component;
```

Obsidian Component for lifecycle management.

#### Inherited from

[`engine/Engine.EngineExecutionParams.component`](/obsidian-js-engine-plugin-docs/api/engine/engine/interfaces/engineexecutionparams/#component)

#### Source

[jsEngine/engine/Engine.ts:17](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/Engine.ts#L17)

***

### container?

```ts
container?: HTMLElement;
```

Optional container element to render results to.

#### Inherited from

[`engine/Engine.EngineExecutionParams.container`](/obsidian-js-engine-plugin-docs/api/engine/engine/interfaces/engineexecutionparams/#container)

#### Source

[jsEngine/engine/Engine.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/Engine.ts#L21)

***

### context?

```ts
context?: JsExecutionContext;
```

Optional context to provide to the JavaScript code.

#### Inherited from

[`engine/Engine.EngineExecutionParams.context`](/obsidian-js-engine-plugin-docs/api/engine/engine/interfaces/engineexecutionparams/#context)

#### Source

[jsEngine/engine/Engine.ts:25](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/Engine.ts#L25)

***

### contextOverrides?

```ts
contextOverrides?: Record<string, unknown>;
```

Optional extra context variables to provide to the JavaScript code.

#### Inherited from

[`engine/Engine.EngineExecutionParams.contextOverrides`](/obsidian-js-engine-plugin-docs/api/engine/engine/interfaces/engineexecutionparams/#contextoverrides)

#### Source

[jsEngine/engine/Engine.ts:29](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/Engine.ts#L29)

***

### plugin

```ts
plugin: default;
```

#### Source

[jsEngine/engine/JsExecution.ts:69](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/engine/JsExecution.ts#L69)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
