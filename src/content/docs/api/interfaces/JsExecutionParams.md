---
editUrl: false
next: false
prev: false
title: "JsExecutionParams"
---

Parameters used to construct a [JsExecution](../../../../../obsidian-js-engine-plugin-docs/api/classes/jsexecution).

## Extends

- [`EngineExecutionParams`](EngineExecutionParams.md)

## Properties

### app

```ts
app: App;
```

#### Source

[jsEngine/engine/JsExecution.ts:71](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/JsExecution.ts#L71)

***

### code

```ts
code: string;
```

The JavaScript code to execute.

#### Inherited from

[`EngineExecutionParams`](EngineExecutionParams.md).[`code`](EngineExecutionParams.md#code)

#### Source

[jsEngine/engine/Engine.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/Engine.ts#L13)

***

### component

```ts
component: Component;
```

Obsidian Component for lifecycle management.

#### Inherited from

[`EngineExecutionParams`](EngineExecutionParams.md).[`component`](EngineExecutionParams.md#component)

#### Source

[jsEngine/engine/Engine.ts:17](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/Engine.ts#L17)

***

### container?

```ts
optional container: HTMLElement;
```

Optional container element to render results to.

#### Inherited from

[`EngineExecutionParams`](EngineExecutionParams.md).[`container`](EngineExecutionParams.md#container)

#### Source

[jsEngine/engine/Engine.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/Engine.ts#L21)

***

### context?

```ts
optional context: JsExecutionContext;
```

Optional context to provide to the JavaScript code.

#### Inherited from

[`EngineExecutionParams`](EngineExecutionParams.md).[`context`](EngineExecutionParams.md#context)

#### Source

[jsEngine/engine/Engine.ts:25](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/Engine.ts#L25)

***

### contextOverrides?

```ts
optional contextOverrides: Record<string, unknown>;
```

Optional extra context variables to provide to the JavaScript code.

#### Inherited from

[`EngineExecutionParams`](EngineExecutionParams.md).[`contextOverrides`](EngineExecutionParams.md#contextoverrides)

#### Source

[jsEngine/engine/Engine.ts:29](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/Engine.ts#L29)

***

### plugin

```ts
plugin: default;
```

#### Source

[jsEngine/engine/JsExecution.ts:72](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/JsExecution.ts#L72)
