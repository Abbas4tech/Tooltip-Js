console.log("App is Running!");

const removeAllTooltips = () =>
  document.querySelectorAll(".tooltip").forEach((e) => e.remove());

const tooltips = document.querySelectorAll("[data-tooltip-text]");
console.log(tooltips);
tooltips.forEach((tooltip) => {
  tooltip.addEventListener("mouseout", () => removeAllTooltips());
  tooltip.addEventListener("mouseover", (e) => {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    const tooltipText = e.currentTarget.getAttribute("data-tooltip-text");
    tooltipBox.textContent = tooltipText;
    removeAllTooltips();
    const cords = e.currentTarget.getBoundingClientRect();
    tooltipBox.style.left = `${cords.left + e.currentTarget.clientWidth + 5}px`;
    tooltipBox.style.top = `${cords.top}px`;
    document.body.append(tooltipBox);
  });
});
