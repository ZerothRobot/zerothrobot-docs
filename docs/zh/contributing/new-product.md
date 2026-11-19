# 新增产品分类

每个产品拥有独立的中英文目录，减少型号资料混放，并让后续新增产品不需要重构全站导航。

## 建议目录

```text
docs/
├── zh/products/<product-id>/
│   ├── index.md
│   ├── quick-start.md
│   ├── operation.md
│   ├── development.md
│   └── troubleshooting.md
├── en/products/<product-id>/
│   └── ...（与 zh 相同的文件）
└── assets/                     # 产品共用的图片、样式和脚本
```

只创建已有真实内容的页面；没有经产品团队确认的规格或操作步骤时，不要写推测性说明。

## 添加步骤

1. 使用稳定、简短的英文 `product-id`，在 `docs/zh/products/` 和 `docs/en/products/` 下建立同名目录，产品显示名称使用官方名称。
2. 分别编写 `docs/zh/products/<product-id>/index.md` 和 `docs/en/products/<product-id>/index.md`，注明产品范围、适用型号/版本和当前维护团队。
3. 将已验证的快速开始、操作、开发和排障资料拆成独立页面，并在两种语言中保持相同的文件名。
4. 在 `mkdocs.yml` 的“产品文档”下添加导航，并在 `plugins.i18n.languages` 的英文 `nav_translations` 中补充英文标题。
5. 在 `docs/zh/products/index.md` 和 `docs/en/products/index.md` 中登记入口，并同步更新两种语言首页的产品表。
6. 运行 `mkdocs build --strict` 检查站内链接和两种语言的页面覆盖情况，通过 Pull Request 审核后合并；部署工作流会自动发布。
