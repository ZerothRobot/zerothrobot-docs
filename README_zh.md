# ZerothRobot 文档中心

[English](README.md)

此仓库独立维护 ZerothRobot 的产品文档，使用 MkDocs 与 Material for MkDocs 构建。站点提供中文和英文两个版本，可通过顶部导航栏的语言按钮切换。品牌官网由 `ZerothRobot.github.io` 仓库独立维护。

## 本地开发

在 `zerothrobot-docs` 仓库根目录执行以下命令。GitHub Actions 使用 Python 3.13，本地可使用相同版本复现构建环境。下面的命令适用于 Linux 和 macOS。

### 安装依赖

首次使用时创建仓库专用的虚拟环境，并从 `requirements.txt` 安装依赖。依赖清单更新后，重新执行安装命令即可。

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
```

### 启动预览

```bash
.venv/bin/python -m mkdocs serve --config-file mkdocs.yml
```

MkDocs 会监听文件改动并刷新页面。按 `Ctrl+C` 停止预览，再运行同一条命令即可重启。[中文预览](http://127.0.0.1:8000/docs/) · [英文预览](http://127.0.0.1:8000/docs/en/)

如果在同级的 `ZerothRobot.github.io` 仓库中开发，请显式指定本仓库的 Python 环境和配置。在官网仓库直接运行 `mkdocs serve` 会读取它自己的旧文档配置。

```bash
../zerothrobot-docs/.venv/bin/python -m mkdocs serve \
  --config-file ../zerothrobot-docs/mkdocs.yml
```

如果 `8000` 端口还在运行旧预览，请在对应终端按 `Ctrl+C` 停止后再启动。如果需要同时运行两个预览，可以添加 `--dev-addr 127.0.0.1:8001`，并在浏览器中使用 `8001` 端口。`/docs/` 和 `/docs/en/` 路径保持不变。

### 提交前验证与构建

```bash
.venv/bin/python scripts/check_translations.py &&
  .venv/bin/python -m mkdocs build --strict --config-file mkdocs.yml
```

翻译检查要求 `docs/zh/` 和 `docs/en/` 下的页面路径一一对应。随后 MkDocs 以严格模式构建，构建警告会导致失败。中文和英文首页分别生成到 `site/index.html` 和 `site/en/index.html`。Git 会忽略 `site/`。

## 仓库结构

```text
docs/
├── assets/                  # 中英文共用资源
│   ├── images/
│   ├── stylesheets/
│   └── joyin-arm/tutorial/  # 教程图片、脚本与样式
├── zh/                      # 中文内容，发布在站点根路径
│   ├── index.md
│   ├── faq.md
│   └── products/
└── en/                      # 英文内容，发布在 /en/
    ├── index.md
    ├── faq.md
    └── products/
hooks/
└── i18n_assets.py           # 调整英文页面的共享资源路径
```

`docs/zh/` 与 `docs/en/` 必须保持相同的目录结构和文件名。`mkdocs-static-i18n` 使用这些路径配对页面并生成语言切换链接。图片、样式表和脚本等共享资源统一放在 `docs/assets/`，不要在语言目录中重复存放。英文页面构建在 `/en/` 下，`hooks/i18n_assets.py` 会调整生成页面中的共享资源 URL，因此无需复制整套资源。

## 语言配置

- 中文为默认语言，发布在站点根路径。英文发布在 `/en/`。
- 语言选择器使用 Material 的 alternate 选择器，图标为 `material/web`。
- 英文导航标题在 `mkdocs.yml` 的 `plugins.i18n.languages` 配置中的 `nav_translations` 维护。
- 页面通过相对路径引用 `docs/assets/` 中的共享资源。中英文页面使用相同的源码路径，新增图片链接时请参考相邻页面的写法。构建 hook 会调整生成后的英文页面资源路径。

## 产品分类

- `M1`：产品说明、快速开始、操作维护和故障排查。
- `Bridge`：产品说明、快速开始、操作维护和故障排查。
- `Roborigo`：产品说明、快速开始、操作维护和故障排查。
- `Joyin Arm`：产品入口，以及机械臂操作、基础、进阶和应用教程。
- 后续产品：基于已确认的产品资料添加中英文对应页面，并同步更新导航和产品总览。

产品参数和具体操作步骤只会在对应团队提供并确认后写入，不以占位内容代替正式说明。

## 翻译约定

- 修改中文页面时，同步更新 `docs/en/` 下路径相同的英文页面。
- 英文翻译保持与中文原文相同的结构，包括标题层级、表格、代码块、公式、链接和图片说明。
- 代码、命令、变量名、文件路径、URL 和产品名称不翻译。代码注释和 Mermaid 节点文字需要翻译。
- 新增页面后，在 `mkdocs.yml` 的 `nav` 和 `nav_translations` 中登记。
- 提交前运行双语页面检查和严格构建，详见[提交前验证与构建](#提交前验证与构建)。

## GitHub Pages 发布

站点地址为 `https://zerothrobot.github.io/docs/`，英文入口为 `https://zerothrobot.github.io/docs/en/`。文档源文件由本仓库维护，`ZerothRobot.github.io` 仓库负责读取文档、构建 MkDocs 并发布到 GitHub Pages。

GitHub Actions 会在 Pull Request 和 `main` 分支更新时运行双语页面覆盖检查和 `mkdocs build --strict`。官网仓库每小时同步一次文档。若要在 `main` 更新后立即触发发布，可在本仓库的 Actions secrets 中配置 `DOCS_PUBLISH_TOKEN`，并授予该令牌对 `ZerothRobot.github.io` 仓库的 Contents 写入权限。工作流会使用该令牌发送 `repository_dispatch` 事件。
