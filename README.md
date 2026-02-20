# Budget Van Life Affiliate Site (Hugo + Blowfish)

This repository contains a complete static affiliate site for budget van life content, built with [Hugo](https://gohugo.io/) and the [Blowfish theme](https://github.com/nunocoracao/blowfish).

## Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/gwinn092/van.affiliation.git
   cd van.affiliation
   ```
2. Ensure Blowfish is installed as a submodule (recommended):
   ```bash
   git submodule update --init --recursive
   ```
3. Start Hugo server with drafts:
   ```bash
   hugo server -D
   ```
4. Open the local URL shown by Hugo (usually `http://localhost:1313`).

## Install Blowfish as a Submodule (Recommended)

Use the official recommended method:

```bash
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

If the repo is already cloned and submodule is configured:

```bash
git submodule update --init --recursive
```

## Modify Content

- Homepage: `content/_index.md`
- Gear pages: `content/gear/*.md`
- Blog posts: `content/blog/*.md`
- Affiliates page: `content/affiliates.md`
- About page: `content/about.md`
- Main Hugo config: `config/_default/hugo.toml`

All content pages include SEO metadata (`title`, `description`, `keywords`) in front matter.

## Deploy with GitHub Actions

Deployment is configured in `.github/workflows/hugo.yml`.

Workflow behavior:
- Runs on push to `main`
- Checks out repository with submodules
- Builds site with `hugo --minify`
- Publishes `public/` via GitHub Pages action

To deploy, commit and push to `main`.
