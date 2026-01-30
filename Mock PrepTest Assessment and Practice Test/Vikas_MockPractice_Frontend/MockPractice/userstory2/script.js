const eventContainer = document.getElementById("events");
const categorySelect = document.getElementById("category");

const loadEvents = async () => {
  try {
    const response = await fetch("events.json");
    const data = await response.json();
    renderEvents(data);
  } catch (error) {
    console.error("Failed to load events");
  }
};

const renderEvents = (events) => {
  eventContainer.innerHTML = "";

  events.forEach(({ name, category, date }) => {
    const card = document.createElement("div");
    card.className = "card m-2 p-3";

    card.innerHTML = `
      <h5>${name}</h5>
      <p>${category}</p>
      <small>${date}</small>
    `;

    eventContainer.appendChild(card);
  });
};

categorySelect.addEventListener("change", async (e) => {
  const response = await fetch("events.json");
  const data = await response.json();

  const filtered =
    e.target.value === "All"
      ? data
      : data.filter(event => event.category === e.target.value);

  renderEvents(filtered);
});

loadEvents();
