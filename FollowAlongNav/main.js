const triggers = document.querySelectorAll(".cool>li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );
  setTimeout(() => {
    if (this.classList.contains("trigger-enter")) {
      this.classList.add("trigger-enter-active");
    }
  }, 150);
  background.classList.add("open");
  const dropdown = this.querySelector(".dropdown");
  const dropdownCords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  console.log(`nav cords: ${navCoords}`);
  const coords = {
    height: dropdownCords.height,
    width: dropdownCords.width,
    top: dropdownCords.top - navCoords.top,
    left: dropdownCords.left - navCoords.left
  };
  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty("top", `${coords.top}px`);
  background.style.setProperty("left", `${coords.left}px`);
}
function handleLeave() {
  console.log("leave");
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}
triggers.forEach(trigger =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach(trigger =>
  trigger.addEventListener("mouseleave", handleLeave)
);
