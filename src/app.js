const items = [
  { name: "Mountainbike", price: "5€/Tag", location: "Innsbruck Zentrum" },
  { name: "Ski Set", price: "10€/Tag", location: "Höttinger Au" }
];

const list = document.getElementById("list");
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const locationInput = document.getElementById("location");

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

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    if (!nameInput || !priceInput || !locationInput) {
      return;
    }

    items.push({
      name: nameInput.value,
      price: priceInput.value,
      location: locationInput.value
    });

    renderItems();
    form.reset();
  });
}
