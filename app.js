console.log("App is Running!");

const tooltips = document.querySelectorAll(".tooltip");
console.log(tooltips);
tooltips.forEach((tooltip) => {
  tooltip.addEventListener("mouseover", () =>
    console.log("You are hovered over me!")
  );
});
