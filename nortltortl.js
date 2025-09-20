window.addEventListener("load", () => {
  const $html = document.documentElement;
  const $body = document.body;

  if ($html.dir !== "rtl") {
    $html.dir = "rtl";
    $html.lang = "fa-IR";
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "style.css";
    document.head.appendChild(link);
    $body.style.fontFamily = "Vazirmatn, sans-serif";
  }
});
