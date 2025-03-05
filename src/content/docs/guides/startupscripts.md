---
title: Startup-Scripts
description: A guide on how to use startup-scripts.
---

JS-Engine supports startup-scripts, similar to the CSS-snippets from Core-Obsidian.

You can select the script-file you want to use as startup-scripts and JS-Engine will run them for you when never Obsidian starts up.

:::note
Different from Core-Obsidian, JS-Engine startup-scripts can not be stored inside the `.obsidian/` folder.
They need to be somewhere inside your vault.
:::

## Configuring Startup-Scripts

You can configure which files you want to have run from JS-Engines settings tab.

## Global Variables

JS-Engine runs the scripts in the same context as all other code-blocks.
So the available global variable are the same and can be found [here](/obsidian-js-engine-plugin-docs/api/classes/api/).
