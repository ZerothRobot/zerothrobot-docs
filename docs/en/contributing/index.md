# Documentation contribution guide

Product documentation is maintained through Pull Requests. Before submitting, confirm that the product and version addressed by the content are clear, that the operating steps have been verified by the product team, and that screenshots, logs, or configuration examples do not contain credentials or personal information.

## Page conventions

- Each page focuses on only one product, version, or task; use product terminology that readers can recognize in the title.
- For content involving compatibility, parameters, power supply, safety, or firmware updates, state the applicable model and version.
- Operating steps should include prerequisites, execution steps, expected results, and how to check for failures.
- Place Chinese pages under `docs/zh` and English pages under `docs/en`, keeping the same directories and file names in both languages, and register the navigation and English titles in `mkdocs.yml`.
- Place shared resources such as images, stylesheets, and scripts under `docs/assets`, reference them with relative paths from pages, and provide captions for images.
- For a new product, follow the [guide for adding a product category](new-product.md) to create the directory and navigation entry.

## Local checks

```bash
python -m pip install -r requirements.txt
python scripts/check_translations.py
mkdocs build --strict
```

The coverage check confirms that the Chinese and English pages correspond one-to-one, and the build command generates both the Chinese and English sites. Pull Requests automatically run the same strict build checks. After merging into `main`, the workflow publishes the site.
