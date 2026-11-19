#!/usr/bin/env python3
"""Fail when docs/zh and docs/en do not contain the same Markdown pages."""
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ZH = ROOT / "docs" / "zh"
EN = ROOT / "docs" / "en"


def pages(base: Path) -> set[Path]:
    return {path.relative_to(base) for path in base.rglob("*.md")}


def main() -> int:
    zh_pages = pages(ZH)
    en_pages = pages(EN)
    missing_en = sorted(zh_pages - en_pages)
    missing_zh = sorted(en_pages - zh_pages)

    print(f"Chinese pages: {len(zh_pages)}")
    print(f"English pages: {len(en_pages)}")

    for rel in missing_en:
        print(f"Missing English translation: docs/en/{rel}")
    for rel in missing_zh:
        print(f"Missing Chinese source: docs/zh/{rel}")

    if missing_en or missing_zh:
        return 1
    print("Bilingual page coverage OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
