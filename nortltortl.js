window.addEventListener("load", () => {
  const $html = document.documentElement;

  if ($html.dir !== "rtl") {
    $html.dir = "rtl";
    $html.lang = "fa-IR";
  }
});
