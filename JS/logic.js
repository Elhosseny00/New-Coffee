let links = [
  { link: "Home", href: "#home" },
  { link: "About", href: "#about" },
  { link: "Services", href: "#services" },
  { link: "contact", href: "#contact" },
];
let nav = document.getElementById("nav");
let unOrderList = document.createElement("ul");
links.forEach((item) => {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.setAttribute("href", item.href);
  a.innerText = item.link;
  li.appendChild(a);
  unOrderList.appendChild(li);
});
nav.appendChild(unOrderList);
let myLinks = document.querySelectorAll("nav ul li a");
myLinks.forEach((link) => {
  link.addEventListener("click", () => {
    myLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
    // let target = document.querySelector(link.getAttribute("href"));
    // target.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
  });
  link.addEventListener("click", () => {
    burgerBtn.classList.remove("burger");
    nav.classList.remove("active");
    burgerBtn.setAttribute("aria-expanded", false);
  });
});
let burgerBtn = document.querySelector(".btn");
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger");
  nav.classList.toggle("active");
  burgerBtn.setAttribute(
    "aria-expanded",
    burgerBtn.classList.contains("active")
  );
});
document.addEventListener("click", (e) => {
  if (!burgerBtn.contains(e.target) && !nav.contains(e.target)) {
    burgerBtn.classList.remove("burger");
    nav.classList.remove("active");
    burgerBtn.setAttribute("aria-expanded", false);
  }
});
let myCartIcon = document.querySelector(".cart-icon");
let closeCart = document.querySelector(".close");
let cartDiv = document.querySelector(".cart");
myCartIcon.addEventListener("click", () => {
  cartDiv.classList.add("active");
});
closeCart.addEventListener("click", () => {
  cartDiv.classList.remove("active");
});
