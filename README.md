# ZerothRobot Documentation

[简体中文](README_zh.md)

This repository maintains ZerothRobot product documentation. The site is built with MkDocs and Material for MkDocs and provides Chinese and English versions with a language switcher in the header. The company website is maintained separately in the `ZerothRobot.github.io` repository.

## Local development

Run the following commands from the root of the `zerothrobot-docs` repository. GitHub Actions uses Python 3.13. Use the same version locally to reproduce the CI environment. The commands below are for Linux and macOS.

### Install dependencies

Create a virtual environment for this repository and install the dependencies from `requirements.txt`. Run the install command again when the dependency list changes.

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
```

### Preview the site

```bash
.venv/bin/python -m mkdocs serve --config-file mkdocs.yml
```

MkDocs watches for file changes and refreshes the preview. Press `Ctrl+C` to stop the server, then run the command again to restart it. Open the [Chinese preview](http://127.0.0.1:8000/docs/) or the [English preview](http://127.0.0.1:8000/docs/en/).

When working from a sibling `ZerothRobot.github.io` checkout, explicitly use this repository's Python environment and configuration. Running `mkdocs serve` directly from the website repository would load its older documentation configuration.

```bash
../zerothrobot-docs/.venv/bin/python -m mkdocs serve \
  --config-file ../zerothrobot-docs/mkdocs.yml
```

If port `8000` is serving an older preview, stop that server with `Ctrl+C` before starting this one. To run both previews at once, add `--dev-addr 127.0.0.1:8001` and use port `8001` in the browser. The `/docs/` and `/docs/en/` paths stay the same.

### Validate and build

```bash
.venv/bin/python scripts/check_translations.py &&
  .venv/bin/python -m mkdocs build --strict --config-file mkdocs.yml
```

The translation check requires matching page paths under `docs/zh/` and `docs/en/`. MkDocs then builds in strict mode, where warnings fail the build. The Chinese and English home pages are generated at `site/index.html` and `site/en/index.html`. Git ignores `site/`.

## Repository structure

```text
docs/
├── assets/                  # Shared resources for Chinese and English
│   ├── images/
│   ├── stylesheets/
│   └── joyin-arm/tutorial/  # Tutorial images, scripts, and styles
├── zh/                      # Chinese content, served at the site root
│   ├── index.md
│   ├── faq.md
│   └── products/
└── en/                      # English content, served under /en/
    ├── index.md
    ├── faq.md
    └── products/
hooks/
└── i18n_assets.py           # Adjusts shared asset paths for English pages
```

`docs/zh/` and `docs/en/` must have matching directory structures and filenames. `mkdocs-static-i18n` uses these paths to pair pages and generate language-switch links. Shared images, stylesheets, and scripts belong in `docs/assets/`. Do not duplicate them in the language directories. English pages are built under `/en/`, and `hooks/i18n_assets.py` adjusts shared asset URLs so the site does not need a second copy of those assets.

## Language configuration

- Chinese is the default language and is served at the site root. English is served under `/en/`.
- The language selector uses Material's alternate selector with the `material/web` icon.
- English navigation labels are maintained in `nav_translations` under `plugins.i18n.languages` in `mkdocs.yml`.
- Pages reference shared assets in `docs/assets/` with relative paths. Keep the same source paths in both languages and follow nearby pages when adding image links. The build hook adjusts asset paths in the generated English pages.

## Product areas

- `M1` covers product information, quick start, operation, maintenance, and troubleshooting.
- `Bridge` covers product information, quick start, operation, maintenance, and troubleshooting.
- `Roborigo` covers product information, quick start, operation, maintenance, and troubleshooting.
- `Joyin Arm` includes its product landing page and robotic-arm tutorials for operation, fundamentals, advanced topics, and applications.
- Add future products with matching Chinese and English pages, then update the navigation and product overview using verified product materials.

Product specifications and operating procedures are added only after the relevant product team has provided and confirmed the information. Empty placeholder pages are not used in place of verified content.

## Translation conventions

- When changing a Chinese page, update the page at the matching path under `docs/en/`.
- Keep the structure of the English translation aligned with the Chinese source, including heading levels, tables, code blocks, formulas, links, and image captions.
- Keep code, commands, variable names, file paths, URLs, and product names unchanged. Translate code comments and Mermaid node labels.
- Register new pages in the `nav` and `nav_translations` sections of `mkdocs.yml`.
- Run the bilingual page check and strict build before submitting changes. See [Validate and build](#validate-and-build).

## GitHub Pages deployment

The published site is available at `https://zerothrobot.github.io/docs/`, with the English version at `https://zerothrobot.github.io/docs/en/`. This repository maintains the documentation source. The `ZerothRobot.github.io` repository retrieves the source, builds the MkDocs site, and publishes it to GitHub Pages.

GitHub Actions runs the bilingual page coverage check and `mkdocs build --strict` on Pull Requests and updates to `main`. The website repository synchronizes this documentation every hour. To trigger deployment immediately after an update to `main`, configure the `DOCS_PUBLISH_TOKEN` Actions secret in this repository and grant the token Contents write access to `ZerothRobot.github.io`. The workflow uses it to send a `repository_dispatch` event.
