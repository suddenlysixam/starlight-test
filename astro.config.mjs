// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { starlightBasePath } from "starlight-base-path";
import starlightTags from 'starlight-tags';

// https://astro.build/config
export default defineConfig({
	site: 'https://suddenlysixam.github.io',
	base: '/starlight-test',
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [
				starlightBasePath(),
				starlightTags({
					configPath: 'src/config/tags.yml',
					tagsPagesPrefix: 'tags',
					tagsIndexSlug: 'tags',
					onInlineTagsNotFound: 'create',
					itemsPerPage: 12,
					sidebar: {
						enabled: true,
						position: 'bottom',			// 'top', 'bottom'
						limit: 10,				// (0 = all)
						sortBy: 'priority',			// 'count', 'alphabetical', or 'priority'
						showCount: true,
						collapsed: false,
						showViewAllLink: true
					}
				}),
			],
		}),
	],
});
