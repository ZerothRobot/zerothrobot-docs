# ZerothRobot Documentation Center

This site brings together the usage and development material for each ZerothRobot product. Product documentation is archived separately by product model, while general guides and maintenance standards are managed separately.

## Products

| Product | Documentation entry | Documentation status |
| :--- | :--- | :--- |
| M1 | [M1 product documentation](products/m1/index.md) | Framework established, product material to be added |
| Bridge | [Bridge product documentation](products/bridge/index.md) | Framework established, product material to be added |
| Roborigo | [Roborigo product documentation](products/roborigo/index.md) | Framework established, product material to be added |
| Joyin Arm | [Joyin Arm product documentation](products/joyin-arm/index.md) | Robotic arm tutorial included |

## General material

- [Before you begin](guides/index.md): documentation scope, version labeling, and common preparation.
- [Safety and maintenance](guides/safety.md): cross-product general safety principles and maintenance record recommendations.
- [FAQ](faq.md): entry point for cross-product frequently asked questions.

## Documentation updates

This repository maintains the documentation source files and the product catalog. Pull Requests run strict build checks; after merging into `main`, the public website repository reads this repository and publishes to `https://zerothrobot.github.io/docs/`. The website repository synchronizes once per hour, and publishing can also be triggered immediately after a documentation update by configuring `DOCS_PUBLISH_TOKEN`.
