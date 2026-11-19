// 正文图片点击放大；支持 Escape、关闭按钮和点击背景关闭。
// Click-to-zoom for content images; supports Escape, the close button, and clicking the backdrop.
(() => {
  const isEnglish = document.documentElement.lang === "en";
  const labels = isEnglish
    ? {
        dialog: "Zoom image",
        close: "Close image",
        fallback: "Tutorial image",
        hint: ", click to zoom",
      }
    : {
        dialog: "放大查看图片",
        close: "关闭图片",
        fallback: "教程配图",
        hint: "，点击放大",
      };

  const dialog = document.createElement("dialog");
  dialog.className = "image-viewer";
  dialog.setAttribute("aria-label", labels.dialog);

  const close = document.createElement("button");
  close.type = "button";
  close.className = "image-viewer__close";
  close.textContent = "×";
  close.setAttribute("aria-label", labels.close);

  const image = document.createElement("img");
  dialog.append(close, image);
  document.body.append(dialog);

  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  function openImage(target) {
    image.src = target.currentSrc || target.src;
    image.alt = target.alt || labels.fallback;
    dialog.showModal();
  }

  function prepareImages() {
    document.querySelectorAll(".md-content .md-typeset img").forEach((target) => {
      // 带链接的图片保留原有跳转行为。
      if (target.closest("a") || target.dataset.imageViewer) return;
      target.dataset.imageViewer = "true";
      target.tabIndex = 0;
      target.setAttribute("role", "button");
      target.setAttribute("aria-label", `${target.alt || labels.fallback}${labels.hint}`);
      target.addEventListener("click", () => openImage(target));
      target.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openImage(target);
        }
      });
    });
  }

  // 兼容 Material 的即时导航及普通页面加载。
  if (typeof document$ !== "undefined") {
    document$.subscribe(prepareImages);
  } else {
    prepareImages();
  }
})();
