import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { generateTypeDoc } from 'starlight-typedoc';

const typeDocSidebarGroup = await generateTypeDoc({
	entryPoints: ['obsidian-js-engine-plugin/jsEngine/api/*'],
	typeDoc: {
		entryPointStrategy: 'expand',
	},
	tsconfig: 'obsidian-js-engine-plugin/tsconfig.json',
});

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'JS Engine Docs',
			social: {
				github: 'https://github.com/mProjectsCode/obsidian-js-engine-plugin',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				typeDocSidebarGroup,
			],
		}),
	],
});
