# Adding a product category

Each product has its own Chinese and English directories, which reduces the mixing of model material and means that adding products later does not require restructuring the site-wide navigation.

## Suggested directory

```text
docs/
├── zh/products/<product-id>/
│   ├── index.md
│   ├── quick-start.md
│   ├── operation.md
│   ├── development.md
│   └── troubleshooting.md
├── en/products/<product-id>/
│   └── ... (same files as zh)
└── assets/                     # Shared product images, styles, and scripts
```

Only create pages that already have real content; when specifications or operating steps have not been confirmed by the product team, do not write speculative descriptions.

## Steps to add

1. Use a stable, short English `product-id` and create identically named directories under `docs/zh/products/` and `docs/en/products/`; use the official name as the product display name.
2. Write `docs/zh/products/<product-id>/index.md` and `docs/en/products/<product-id>/index.md`, stating the product scope, applicable models/versions, and current maintenance team.
3. Split verified quick start, operation, development, and troubleshooting material into separate pages, keeping the same file names in both languages.
4. In `mkdocs.yml`, add the navigation under "Product Documentation" and add the English titles to the English `nav_translations` under `plugins.i18n.languages`.
5. Register the entry in `docs/zh/products/index.md` and `docs/en/products/index.md`, and update the product tables on the home page in both languages.
6. Run `mkdocs build --strict` to check in-site links and page coverage in both languages; merge after review through a Pull Request. The deployment workflow publishes automatically.
