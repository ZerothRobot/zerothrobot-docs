const productNavigationSections = document.querySelectorAll(
  ".md-sidebar--primary .md-nav--primary > .md-nav__list > .md-nav__item--section"
);

const productNavigationSection = [...productNavigationSections].find((section) => {
  const productNavigationLink = section.querySelector(
    ":scope > .md-nav__container > a.md-nav__link"
  );

  if (!productNavigationLink) {
    return false;
  }

  const productPath = new URL(productNavigationLink.href, document.baseURI)
    .pathname.replace(/\/+$/, "");

  return productPath.endsWith("/products");
});

const productNavigationToggle = productNavigationSection?.querySelector(
  ":scope > .md-nav__toggle"
);
const productSubnavigation = productNavigationSection?.querySelector(
  ":scope > .md-nav"
);

if (productNavigationToggle && productSubnavigation) {
  productNavigationToggle.indeterminate = false;
  productNavigationToggle.checked = true;
  productNavigationToggle.classList.remove("md-toggle--indeterminate");
  productSubnavigation.setAttribute("aria-expanded", "true");

  productNavigationToggle.addEventListener("change", () => {
    productSubnavigation.setAttribute(
      "aria-expanded",
      String(productNavigationToggle.checked)
    );
  });
}

const drawerToggle = document.querySelector("#__drawer");
const fixedSidebarViewport = window.matchMedia("(min-width: 60em)");

function closeDrawerWhenSidebarBecomesFixed(viewport) {
  if (viewport.matches && drawerToggle) {
    drawerToggle.checked = false;
  }
}

closeDrawerWhenSidebarBecomesFixed(fixedSidebarViewport);
fixedSidebarViewport.addEventListener("change", closeDrawerWhenSidebarBecomesFixed);
