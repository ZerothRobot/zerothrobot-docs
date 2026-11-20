# Documentation contribution guide

Product documentation is maintained through Pull Requests. Before submitting, confirm that the product and version addressed by the content are clear, that the operating steps have been verified by the product team, and that screenshots, logs, or configuration examples do not contain credentials or personal information.

## Page conventions

- Each page focuses on only one product, version, or task; use product terminology that readers can recognize in the title.
- For content involving compatibility, parameters, power supply, safety, or firmware updates, state the applicable model and version.
- Operating steps should include prerequisites, execution steps, expected results, and how to check for failures.
- Place Chinese pages under `docs/zh` and English pages under `docs/en`, keeping the same directories and file names in both languages, and register the navigation and English titles in `mkdocs.yml`.
- Place shared resources such as images, stylesheets, and scripts under `docs/assets`, reference them with relative paths from pages, and provide captions for images.


## Adding product documentation

Create documentation only when real product material is available. Do not fill empty pages with speculative content. For each new product:

1. Choose a stable, short English `product-id` and create matching directories under `docs/zh/products/` and `docs/en/products/`.
2. Write Chinese and English product landing pages that state the product scope, applicable models and versions, and maintenance team.
3. Add quick-start, operation, development, or troubleshooting pages from verified material. Keep matching filenames in both languages.
4. Register the pages in the product navigation in `mkdocs.yml` and add the English titles to `nav_translations`.
5. Add the product entry to both language versions of the product overview and homepage.
6. Check language coverage and links, then submit a Pull Request.

Keep shared images, stylesheets, and scripts in `docs/assets/` instead of duplicating them in the language directories.

## Local checks

```bash
.venv/bin/python -m pip install -r requirements.txt
.venv/bin/python scripts/check_translations.py
.venv/bin/python -m mkdocs build --strict
```

The coverage check confirms that the Chinese and English pages correspond one-to-one, and the build command generates both the Chinese and English sites. Pull Requests automatically run the same strict build checks. After merging into `main`, the workflow publishes the site.
