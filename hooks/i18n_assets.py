"""Rewrite shared asset URLs for English pages at build time.

The English site is built one directory deeper (``/en/``) than the Chinese
site, but both source trees reference the shared ``docs/assets`` directory
with the same relative path. Adjust the rendered HTML for English pages so
that the browser resolves those URLs against the site root, without keeping a
second physical copy of the assets in the output.
"""
from __future__ import annotations

import re

from mkdocs.config.defaults import MkDocsConfig
from mkdocs.structure.files import Files
from mkdocs.structure.pages import Page

ASSET_LINK = re.compile(r'(?P<attr>src|href)="(?:\.\./)+assets/')


def on_page_content(html: str, page: Page, config: MkDocsConfig, files: Files) -> str:
    if not page.url.startswith("en/"):
        return html

    depth = len([part for part in page.url.split("/") if part])
    if not page.url.endswith("/"):
        depth -= 1  # a file URL such as en/foo.html
    prefix = "../" * max(depth, 0)
    return ASSET_LINK.sub(
        lambda match: f'{match.group("attr")}="{prefix}assets/', html
    )
