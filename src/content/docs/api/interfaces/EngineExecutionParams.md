---
editUrl: false
next: false
prev: false
title: "EngineExecutionParams"
---

Parameters for the [Engine.execute](../../../../../obsidian-js-engine-plugin-docs/api/classes/engine/#execute) method.

## Extended by

- [`JsExecutionParams`](JsExecutionParams.md)

## Properties

### code

```ts
code: string;
```

The JavaScript code to execute.

#### Source

[jsEngine/engine/Engine.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/Engine.ts#L13)

***

### component

```ts
component: Component;
```

Obsidian Component for lifecycle management.

#### Source

[jsEngine/engine/Engine.ts:17](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/Engine.ts#L17)

***

### container?

```ts
optional container: HTMLElement;
```

Optional container element to render results to.

#### Source

[jsEngine/engine/Engine.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/Engine.ts#L21)

***

### context?

```ts
optional context: JsExecutionContext;
```

Optional context to provide to the JavaScript code.

#### Source

[jsEngine/engine/Engine.ts:25](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/Engine.ts#L25)

***

### contextOverrides?

```ts
optional contextOverrides: Record<string, unknown>;
```

Optional extra context variables to provide to the JavaScript code.

#### Source

[jsEngine/engine/Engine.ts:29](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/engine/Engine.ts#L29)
