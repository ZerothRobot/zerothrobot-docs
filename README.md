# ZerothRobot 文档中心

此仓库独立维护 ZerothRobot 的产品文档，使用 MkDocs 和 Material for MkDocs 构建。品牌官网由 `ZerothRobot.github.io` 仓库独立维护。

## 产品分类

- `M1`：产品说明、快速开始、操作维护和故障排查。
- `Bridge`：产品说明、快速开始、操作维护和故障排查。
- `Roborigo`：产品说明、快速开始、操作维护和故障排查。
- `Joyin Arm`：包含产品入口和已迁入的机械臂使用、基础、进阶与应用教程。
- 后续产品：按贡献指南添加独立目录和导航分类。

产品参数和具体操作步骤只会在对应团队提供并确认后写入，不以占位内容代替正式说明。

## 本地预览

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
mkdocs serve
```

预览地址为 `http://127.0.0.1:8000/docs/`。

## 构建

```bash
mkdocs build --strict
```

静态文件生成在 `site/`，该目录不纳入版本控制。

## GitHub Pages 发布

目标阅读地址为 `https://zerothrobot.github.io/docs/`。文档源文件由本仓库维护，`ZerothRobot.github.io` 仓库从本仓库读取文件、构建 MkDocs 并发布到 Pages。

GitHub Actions 会在 Pull Request 和 `main` 更新时运行 `mkdocs build --strict`。官网仓库每小时同步一次文档。若需要在 `main` 更新后立即触发发布，可在本仓库的 Actions secrets 中配置 `DOCS_PUBLISH_TOKEN`，并授予该令牌对 `ZerothRobot.github.io` 仓库的 Contents 写入权限，用于发送 `repository_dispatch` 事件。
