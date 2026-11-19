# ZerothRobot 文档中心

本网站集中整理 ZerothRobot 各产品的使用与开发资料。产品文档按产品型号独立归档，通用指南和维护规范单独管理。

## 产品

| 产品 | 文档入口 | 文档状态 |
| :--- | :--- | :--- |
| M1 | [M1 产品文档](products/m1/index.md) | 框架已建立，产品资料待补充 |
| Bridge | [Bridge 产品文档](products/bridge/index.md) | 框架已建立，产品资料待补充 |
| Roborigo | [Roborigo 产品文档](products/roborigo/index.md) | 框架已建立，产品资料待补充 |
| Joyin Arm | [Joyin Arm 产品文档](products/joyin-arm/index.md) | 已收录机械臂教程 |

## 通用资料

- [使用前须知](guides/index.md)：文档适用范围、版本标注和常见使用准备。
- [安全与维护](guides/safety.md)：跨产品的通用安全原则和维护记录建议。
- [常见问题](faq.md)：跨产品常见问题入口。

## 文档更新

本仓库负责维护文档源文件和产品目录。Pull Request 会运行严格构建检查；合并到 `main` 后，公开的官网仓库会读取本仓库并发布到 `https://zerothrobot.github.io/docs/`。官网仓库每小时同步一次，也可通过配置 `DOCS_PUBLISH_TOKEN` 在文档更新后立即触发发布。
