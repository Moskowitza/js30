const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];
const clearItems = document.querySelector("#clear");
function clearMemory(e) {
  e.preventDefault();
  console.log("Removing Items from memory");
  localStorage.removeItem("items");
  itemsList.innerHTML = "";
}

function addItem(e) {
  e.preventDefault();

  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  console.log(items);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map(
      (plate, i) => `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }/>
    <label for="item${i}">${plate.text}</label>
    </li>
    `
    )
    .join("");
}
function toggleDone(e) {
  if (e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index.done];
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}
addItems.addEventListener("submit", addItem);
// delegate listen for clicks through the parent
itemsList.addEventListener("click", toggleDone);
clearItems.addEventListener("click", clearMemory);
populateList(items, itemsList);
