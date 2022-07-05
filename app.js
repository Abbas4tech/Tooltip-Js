console.log("App is Running!");

const tooltips = document.querySelectorAll("[data-tooltip-text]");
console.log(tooltips);
tooltips.forEach((tooltip) => {
  tooltip.addEventListener("mouseover", (e) => {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    const tooltipText = e.currentTarget.getAttribute("data-tooltip-text");
    tooltipBox.textContent = tooltipText;
    document.querySelectorAll(".tooltip").forEach((e) => e.remove());
    document.body.append(tooltipBox);
  });
});
