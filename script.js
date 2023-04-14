const filterOptions = document
  .querySelector(".filter")
  .querySelectorAll("span");

filterOptions.forEach((filter) => {
  filter.addEventListener("click", () => {
    filterOptions.forEach((flt) => {
      flt.classList.remove("selected");
      filter.classList.add("selected");
    });
  });
});
