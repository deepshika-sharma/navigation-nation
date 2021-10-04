const nav = document.querySelector("nav");
const button = document.querySelector("button");
const lis = document.querySelectorAll("li");
const icon = document.querySelector("i");
const atags = document.querySelectorAll("li a");

button.addEventListener("click", () => {
  // Changing icon
  if (icon.classList.contains("fa-bars")) {
    icon.style.transform = "rotate(90deg)";
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.style.transform = "rotate(180deg)";
    icon.classList.replace("fa-times", "fa-bars");
  }
  // translating navbar left and right
  nav.classList.toggle("translate-nav");
  lis.forEach((li) => {
    li.classList.toggle("translate-link");
  });

  // translating links in navbar and removing navbar after link has been clicked
  atags.forEach((a) => {
    a.addEventListener("click", () => {
      icon.style.transform = "rotate(180deg)";
      icon.classList.replace("fa-times", "fa-bars");
      nav.classList.remove("translate-nav");
      lis.forEach((li) => {
        li.classList.remove("translate-link");
      });
    });
  });
});
