# ZerothRobot 文档中心

此仓库独立维护 ZerothRobot 的产品文档，使用 MkDocs 与 Material for MkDocs 构建。站点提供中文和英文两个版本，可通过顶部导航栏的语言按钮切换。品牌官网由 `ZerothRobot.github.io` 仓库独立维护。

## 本地开发

在 `zerothrobot-docs` 仓库根目录执行以下命令。GitHub Actions 使用 Python 3.13，本地可用同一版本复现构建环境。下面的命令适用于 Linux 和 macOS。

### 安装依赖

首次使用时创建仓库专用的虚拟环境，并从 `requirements.txt` 安装依赖。依赖清单更新后，重新执行安装命令即可。

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
```

### 启动和重启预览

```bash
.venv/bin/python -m mkdocs serve --config-file mkdocs.yml
```

MkDocs 会监听文件改动并刷新页面。按 `Ctrl+C` 停止预览，再运行同一条命令即可重启。[中文预览](http://127.0.0.1:8000/docs/) · [英文预览](http://127.0.0.1:8000/docs/en/)

如果在同级的 `ZerothRobot.github.io` 仓库中开发，用下面的命令显式指定文档仓库的 Python 环境和配置。在官网仓库直接运行 `mkdocs serve` 会读取它自己的旧文档配置。

```bash
../zerothrobot-docs/.venv/bin/python -m mkdocs serve \
  --config-file ../zerothrobot-docs/mkdocs.yml
```

如果 `8000` 上还在运行旧预览，在启动它的终端中按 `Ctrl+C`，再用上面的命令启动。如果需要同时运行两个预览，可以给启动命令加上 `--dev-addr 127.0.0.1:8001`。浏览器中的 `/docs/` 和 `/docs/en/` 路径保持一致，只需更换端口。

### 提交前验证与构建

```bash
.venv/bin/python scripts/check_translations.py &&
  .venv/bin/python -m mkdocs build --strict --config-file mkdocs.yml
```

翻译检查要求 `docs/zh/` 和 `docs/en/` 下的页面路径一一对应。检查通过后，MkDocs 以严格模式生成静态文件，构建警告也会导致失败。中文和英文首页分别输出到 `site/index.html` 和 `site/en/index.html`。Git 会忽略 `site/`。

## 目录结构

```text
docs/
├── assets/                  # 中英文共用资源
│   ├── images/
│   ├── stylesheets/
│   └── joyin-arm/tutorial/  # 教程图片、脚本与样式
├── zh/                      # 中文内容（默认语言，发布在站点根路径）
│   ├── index.md
│   ├── faq.md
│   ├── contributing/
│   └── products/
└── en/                      # 英文内容（发布在 /en/ 路径）
    ├── index.md
    ├── faq.md
    ├── contributing/
    └── products/
hooks/
└── i18n_assets.py           # 构建时修正英文页面的共享资源路径
```

`docs/zh` 与 `docs/en` 必须保持相同的目录和文件名，`mkdocs-static-i18n` 依赖这一点为每个页面生成语言切换链接。图片、样式表和脚本等共享资源统一放在 `docs/assets`，不要在语言目录中重复存放。英文页面构建在 `/en/` 下，`hooks/i18n_assets.py` 会在生成页面时把共享资源 URL 调整到站点根目录，避免复制整套资源。

## 语言配置

- 默认语言为中文，构建在站点根路径；英文构建在 `/en/`。
- 语言切换按钮使用 Material 的 alternate 选择器，图标配置为 `material/web`（互联网/地球图标）。
- 英文导航标题在 `mkdocs.yml` 的 `plugins.i18n.languages` 中通过 `nav_translations` 维护。
- 页面内的图片使用指向 `docs/assets` 的相对路径；中英文页面在源码中按相同层级引用，构建时由 hook 修正英文页面的输出路径。新增图片链接时请参考相邻页面的写法。

## 产品分类

- `M1`：产品说明、快速开始、操作维护和故障排查。
- `Bridge`：产品说明、快速开始、操作维护和故障排查。
- `Roborigo`：产品说明、快速开始、操作维护和故障排查。
- `Joyin Arm`：包含产品入口和机械臂使用、基础、进阶与应用教程。
- 后续产品：按贡献指南添加独立目录、中英文页面和导航分类。

产品参数和具体操作步骤只会在对应团队提供并确认后写入，不以占位内容代替正式说明。

## 翻译约定

- 修改中文页面时，同步更新 `docs/en` 下路径相同的英文页面。
- 英文翻译保持与中文原文一致的结构：标题层级、表格、代码块、公式、链接和图片说明。
- 代码、命令、变量名、文件路径、URL 和产品名称不翻译；代码注释和 Mermaid 节点文字需要翻译。
- 新增页面后，在 `mkdocs.yml` 的导航和 `nav_translations` 中登记。
- 提交前运行双语页面检查和严格构建。[提交前验证与构建](#提交前验证与构建)

## GitHub Pages 发布

目标阅读地址为 `https://zerothrobot.github.io/docs/`，英文入口为 `https://zerothrobot.github.io/docs/en/`。文档源文件由本仓库维护，`ZerothRobot.github.io` 仓库从本仓库读取文件、构建 MkDocs 并发布到 Pages。

GitHub Actions 会在 Pull Request 和 `main` 更新时运行双语文档覆盖检查和 `mkdocs build --strict`。官网仓库每小时同步一次文档。若需要在 `main` 更新后立即触发发布，可在本仓库的 Actions secrets 中配置 `DOCS_PUBLISH_TOKEN`，并授予该令牌对 `ZerothRobot.github.io` 仓库的 Contents 写入权限，用于发送 `repository_dispatch` 事件。

## English

This repository maintains the ZerothRobot product documentation with MkDocs and Material for MkDocs. The site is bilingual: Chinese is served from the site root and English from `/en/`, with a language switcher in the header.

Content lives in `docs/zh/` and `docs/en/` with matching paths. Shared images, styles, and scripts live in `docs/assets/`. The `hooks/i18n_assets.py` build hook adjusts shared asset links for English pages under `/en/`. When adding a page, update both language trees and register it in `nav` and `nav_translations` in `mkdocs.yml`.

### Local development

Run these commands from the `zerothrobot-docs` repository root on Linux or macOS. GitHub Actions builds with Python 3.13. Create the virtual environment and install dependencies before your first run.

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
```

```bash
.venv/bin/python -m mkdocs serve --config-file mkdocs.yml
```

Press `Ctrl+C` to stop the server. Run the same command to restart it. If port `8000` is serving the older site from `ZerothRobot.github.io`, stop that server first or add `--dev-addr 127.0.0.1:8001` to the command and open the same paths on port `8001`. [Chinese preview](http://127.0.0.1:8000/docs/) · [English preview](http://127.0.0.1:8000/docs/en/)

Before opening a pull request, check page parity and run the strict build. The generated site goes to `site/`.

```bash
.venv/bin/python scripts/check_translations.py &&
  .venv/bin/python -m mkdocs build --strict --config-file mkdocs.yml
```
