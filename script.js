
// =========================
// DARK MODE
// =========================

const darkModeButton = document.querySelector(".dark.mode");

darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});


// =========================
// SEARCH
// =========================

const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const cards = document.querySelectorAll(".sections > .card");

function searchCards() {
    const searchText = searchInput.value.toLowerCase().trim();

    cards.forEach(function (card) {
        const cardText = card.innerText.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

// Search when clicking the button
searchButton.addEventListener("click", searchCards);

// Search while typing
searchInput.addEventListener("input", searchCards);
```


// =========================
// FILTER
// =========================

const filterButton = document.querySelector(".links a:nth-child(3)");

if (filterButton) {
    filterButton.addEventListener("click", function (event) {
        event.preventDefault();

        cards.forEach(function (card) {
            card.style.display = "";
        });

        if (searchInput) {
            searchInput.value = "";
        }
    });
}
```