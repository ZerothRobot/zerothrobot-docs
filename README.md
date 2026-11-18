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

目标地址是 `https://zerothrobot.github.io/docs/`。为使用 GitHub Pages 项目站点的默认路径，GitHub 上的文档仓库必须命名为 `docs`（本地工作目录仍可命名为 `zerothrobot-docs`）。将仓库 Pages 发布源设置为 **GitHub Actions**：Pull Request 自动构建和检查；合并到 `main` 后自动发布。

本地 `origin` 指向 `https://github.com/ZerothRobot/docs.git`。创建该远程仓库后，首次推送 `main`：

```bash
git push -u origin main
```

然后在仓库 **Settings → Pages → Build and deployment** 中将 Source 设为 **GitHub Actions**。部署工作流无需额外 PAT 或跨仓库写权限。
