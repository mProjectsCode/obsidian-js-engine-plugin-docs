import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { generateTypeDoc } from 'starlight-typedoc';

const typeDocSidebarGroup = await generateTypeDoc({
	entryPoints: ['obsidian-js-engine-plugin/jsEngine/api/*', 'obsidian-js-engine-plugin/jsEngine/engine/*'],
	typeDoc: {
		entryPointStrategy: 'expand',
		parametersFormat: 'table',
		propertiesFormat: 'list',
		enumMembersFormat: 'table',
		typeDeclarationFormat: 'table',
		excludePrivate: true,
		excludeProtected: true,
		useCodeBlocks: false,
		plugin: ['typedoc-plugin-mdn-links'],
	},
	tsconfig: 'obsidian-js-engine-plugin/tsconfig.json',
	sidebar: {
		label: 'API Reference',
		collapsed: true,
	},
});

// https://astro.build/config
export default defineConfig({
	site: 'https://www.moritzjung.dev',
	base: '/obsidian-js-engine-plugin-docs',
	integrations: [
		starlight({
			title: 'JS Engine Docs',
			social: {
				github: 'https://github.com/mProjectsCode/obsidian-js-engine-plugin',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				typeDocSidebarGroup,
			],
		}),
	],
});
