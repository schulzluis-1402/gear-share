const items = [
  { name: "Mountainbike", price: "5€/Tag", location: "Innsbruck Zentrum" },
  { name: "Ski Set", price: "10€/Tag", location: "Höttinger Au" }
];

const list = document.getElementById("list");

items.forEach(item => {
  const el = document.createElement("div");
  el.innerHTML = `<strong>${item.name}</strong><br>${item.price}<br>${item.location}`;
  el.className = "item";
  list.appendChild(el);
});

