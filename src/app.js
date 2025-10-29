const items = [
  { name: "Mountainbike", price: "5€/Tag", location: "Innsbruck Zentrum" },
  { name: "Ski Set", price: "10€/Tag", location: "Höttinger Au" }
];

const list = document.getElementById("list");
const button = document.getElementById("add-item");

function renderItems() {
  if (!list) {
    return;
  }

  list.innerHTML = "";
  items.forEach(item => {
    const el = document.createElement("div");
    el.innerHTML = `<strong>${item.name}</strong><br>${item.price}<br>${item.location}`;
    el.className = "item";
    list.appendChild(el);
  });
}

renderItems();

if (button) {
  button.addEventListener("click", () => {
    items.push({
      name: "Neues Equipment",
      price: "0€/Tag",
      location: "Noch nicht angegeben"
    });

    renderItems();
  });
}
