---
title: API Guide
description: A guide on the JS Engine API.
---

## Global Variables

The following global variables are available in `js-engine` code blocks.

| Name      | Type                                                             |
| --------- |------------------------------------------------------------------|
| app       | `App` (Obsidian)                                                 |
| engine    | [`API`](/obsidian-js-engine-plugin-docs/api/api/api/classes/api) |
| context   | `ExecutionContext` (this plugin) or `undefined`                  |
| component | `Component` (Obsidian)                                           |
| container | `HTMLElement`                                                    |