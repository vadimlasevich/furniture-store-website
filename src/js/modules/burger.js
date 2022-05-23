export const burger = () => {
  const burger = document.querySelector(".burger");
  const aside = document.querySelector(".aside");
  const asideLinks = document.querySelectorAll(".aside__link");
  const shadowed = document.querySelector(".shadowed");

  asideLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burger.click();
    });
  });

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger-rotate");
    aside.classList.toggle("aside-active");
    shadowed.classList.toggle("shadowed-active");
    document.body.classList.toggle("stop-scroll");
  });

  shadowed.addEventListener("click", () => {
    burger.click();
  });
};
