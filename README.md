# starlight-test
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## GitHub Pages Deployment

1. [GitHub Docs: Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
1. [GitHub Docs: Publishing with a custom GitHub Actions workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
1. [Astro Docs: Deploy your Astro Site to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)

Other:

1. [GitHub Docs: Skipping workflow runs](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/skip-workflow-runs)
    - Add `[skip actions]` to the commit message, or the HEAD commit of a pull request

## Plugin Documentation
### [starlight-announcement](https://frostybee.github.io/starlight-announcement/)
`npm install starlight-announcement`
### [starlight-base-path](https://github.com/andriygm/starlight-base-path/)
`npm install starlight-base-path`
### [starlight-blog](https://starlight-blog-docs.vercel.app/)
`npm install starlight-blog`
### [starlight-tags](https://frostybee.github.io/starlight-tags/)
`npm install starlight-tags`
### [starlight-ui-tweaks](https://starlight-ui-tweaks.dlcastillop.com/)
`npm install starlight-ui-tweaks`

## Starlight Basics

### Starlight Basics: 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

### Starlight Basics: 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Starlight Basics: 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

