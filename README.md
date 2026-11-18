# ZerothRobot 文档中心

此仓库独立维护 ZerothRobot 的产品文档，使用 MkDocs 和 Material for MkDocs 构建。品牌官网不在此仓库中。

## 产品分类

- `M1`：产品说明、快速开始、操作维护和故障排查。
- `Bridge`：产品说明、快速开始、操作维护和故障排查。
- `Roborigo`：产品说明、快速开始、操作维护和故障排查。
- `Joyin Arm`：中心入口链接到机械臂部门维护的现有教程。
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

文档源码仓库为 [`ZerothRobot/zerothrobot-docs`](https://github.com/ZerothRobot/zerothrobot-docs)，目标阅读地址是 `https://zerothrobot.github.io/docs/`。品牌官网仓库 `ZerothRobot.github.io` 负责发布根站点和 `/docs/` 路径，本文档仓库独立维护源码并负责严格构建检查。

当前仓库的 GitHub Actions 会在 Pull Request 和 `main` 更新时运行 `mkdocs build --strict`。GitHub Pages 项目站点由仓库名决定，直接从本仓库部署将使用 `/zerothrobot-docs/` 路径。若要从本仓库自动更新官网仓库中的 `/docs/` 发布内容，需要在官网仓库配置接收文档更新的部署流程，并在本仓库配置有权限触发该流程的凭据。

本地预览运行 `mkdocs serve`，默认入口为 `http://127.0.0.1:8000/docs/`。
