# 新增产品分类

每个产品拥有独立目录，减少型号资料混放，并让后续新增产品不需要重构全站导航。

## 建议目录

```text
docs/products/<product-id>/
├── index.md
├── quick-start.md
├── operation.md
├── development.md
└── troubleshooting.md
```

只创建已有真实内容的页面；没有经产品团队确认的规格或操作步骤时，不要写推测性说明。

## 添加步骤

1. 使用稳定、简短的英文 `product-id` 建立目录，产品显示名称使用官方名称。
2. 编写 `index.md`，注明产品范围、适用型号/版本和当前维护团队。
3. 将已验证的快速开始、操作、开发和排障资料拆成独立页面。
4. 在 `mkdocs.yml` 的“产品文档”下添加对应导航，并在 `docs/products/index.md` 登记入口。
5. 更新首页产品表，运行 `mkdocs build --strict` 并检查站内链接。
6. 通过 Pull Request 审核后合并；部署工作流会自动发布。
