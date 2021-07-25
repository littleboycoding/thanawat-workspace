/**
 * Set favicon take href as first argument.
 */
function setIcon(href) {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  link.href = href;
}

export { setIcon };
