let slr = (o) => document.querySelector(o),
  slrA = (o) => document.querySelectorAll(o);
let nav = `<div class="nav-logo"">logo-text</div><button class="mobile-toggle"><div class="line l1"></div><div class="line l2"></div></button><div class="nav-links flex"></div>`;
slr("nav").innerHTML = nav;
function navState() {
  slr(".l1").classList.toggle("l1-click");
  slr(".l2").classList.toggle("l2-click");
  slr(".nav-links").classList.toggle("display-nav");
}
slr(".mobile-toggle").addEventListener("click", () => {
  navState();
});
function addNavLink(text = `define this link!`, link = "#") {
  let div = document.createElement("div");
  div.classList.add("page-target");
  div.innerHTML = `<a class="no-a" href="${link}">${text}</a>`;
  slr(".nav-links").appendChild(div);
}
function setMainUrl(text = `define this link!`, url = window.location.origin) {
  slr(".nav-logo").innerHTML = `<a class="no-a" href="${url}">${text}</a>`;
}
function navDark() {
  slr("nav").style.color = "#fff";
  slrA(".line").forEach((l) => (l.style.backgroundColor = "#fff"));
  slr("nav").style.backgroundColor = "#242b2e";
  slr(".nav-links").style.backgroundColor = "#242b2e";
  slr(".nav-links").style.color = "#fff";
}
//nav state to close
