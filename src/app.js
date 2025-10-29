document.addEventListener('DOMContentLoaded', () => {
  const items = [
    { name: "Mountainbike", price: "5€/Tag", location: "Innsbruck Zentrum" },
    { name: "Ski Set", price: "10€/Tag", location: "Höttinger Au" }
  ];

  const list = document.getElementById("list");
  const form = document.getElementById("form");

  function render() {
    list.innerHTML = "";
    items.forEach(item => {
      const el = document.createElement("div");
      el.className = "item";
      el.innerHTML = `<strong>${item.name}</strong> — ${item.price} — ${item.location}`;
      list.appendChild(el);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const location = document.getElementById("location").value;

    if (name && price && location) {
      items.push({ name, price, location });
      render();
      form.reset();
    }
  });

  render();
});

