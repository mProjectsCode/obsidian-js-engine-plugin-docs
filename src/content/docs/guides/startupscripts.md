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
There you will see a list of all JavaScript files detected inside the vault and
you can enable the ones you want to run at startup.

### Setting a folder for startup-scripts

To reduce the list of shown files you can define the name of a folder you use to store your scripts.
JS-Engine will only check that folder and only list files inside it as options.

## Global Variables

JS-Engine runs the scripts in the same context as all other code-blocks.
So the available global variable are the same and can be found [here](/obsidian-js-engine-plugin-docs/api/classes/api/).
