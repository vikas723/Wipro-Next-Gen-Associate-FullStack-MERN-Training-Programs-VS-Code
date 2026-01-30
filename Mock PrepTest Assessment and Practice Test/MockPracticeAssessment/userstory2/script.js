
const eventContainer = document.getElementById("eventContainer");
const categoryFilter = document.getElementById("categoryFilter");
const dateFilter = document.getElementById("dateFilter");
const resetBtn = document.getElementById("resetBtn");

let eventsData = [];

/* Fetch Events */
const fetchEvents = async () => {
    try {
        const response = await fetch("events.json");
        if (!response.ok) throw new Error("Failed to fetch events");
        eventsData = await response.json();
        renderEvents(eventsData);
    } catch (error) {
        eventContainer.innerHTML = `<p class="text-danger">${error.message}</p>`;
    }
};

/*  Render Events */
const renderEvents = (events) => {
    eventContainer.innerHTML = "";

    events.forEach(({ title, category, date, image, description }) => {
        const card = `
            <div class="col-md-4">
                <div class="card h-100 shadow">
                    <img src="${image}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${description}</p>
                        <span class="badge bg-primary">${category}</span>
                        <p class="mt-2"><strong>Date:</strong> ${date}</p>
                    </div>
                </div>
            </div>
        `;
        eventContainer.insertAdjacentHTML("beforeend", card);
    });
};

/*  Filter Logic */
const applyFilters = () => {
    let filtered = [...eventsData];

    const selectedCategory = categoryFilter.value;
    const selectedDate = dateFilter.value;

    if (selectedCategory !== "all") {
        filtered = filtered.filter(event => event.category === selectedCategory);
    }

    if (selectedDate) {
        filtered = filtered.filter(event => event.date === selectedDate);
    }

    renderEvents(filtered);
};

categoryFilter.addEventListener("change", applyFilters);
dateFilter.addEventListener("change", applyFilters);

resetBtn.addEventListener("click", () => {
    categoryFilter.value = "all";
    dateFilter.value = "";
    renderEvents(eventsData);
});

/*Init */
fetchEvents();
