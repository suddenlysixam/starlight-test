// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Plugin imports
import { starlightBasePath } from "starlight-base-path";
import starlightBlog from 'starlight-blog'

// Plugin imports with custom configurations
import { custom_starlightTags } from './config/plugins/custom_starlightTags.mjs'
import { custom_starlightUiTweaks } from './config/plugins/custom_starlightUiTweaks.mjs'
import { custom_starlightAnnouncement } from './config/plugins/custom_starlightAnnouncement.mjs';
import { custom_starlightSidebarTopics } from './config/plugins/custom_starlightSidebarTopics.mjs';

// Custom configurations
import { BASE_PATH } from './config/basePath.mjs';
import { sidebar } from './config/sidebar.mjs';
import { authors } from './config/authors.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://suddenlysixam.github.io',
	base: BASE_PATH,
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			// sidebar,
			plugins: [
				starlightBasePath(),
				starlightBlog({
					title: 'Meetings',
					prefix: 'meetings',
					navigation: 'none',
					authors,
				}),
				custom_starlightTags,
				custom_starlightUiTweaks,
				custom_starlightAnnouncement,
				custom_starlightSidebarTopics,
			],
		}),
	],
});
