const cheatData = {
    ph4ze: {
        name: "Ph4ze (Fortnite)",
        image: "https://i.ytimg.com/vi/EuNa0lk7gJs/maxresdefault.jpg",
        links: {
            day: "https://discord.gg/VdvkQK4wuG",   // <-- Replace YOUR_INVITE here
            week: "https://discord.gg/VdvkQK4wuG",
            month: "https://discord.gg/VdvkQK4wuG"
        }
    },
    eknode: {
        name: "Eknode (CS2)",
        image: "https://securecheats.com/wp-content/uploads/2024/04/CS2-Hacks-Cheats-To-Download.jpg",
        links: {
            day: "https://discord.gg/VdvkQK4wuG",
            week: "https://discord.gg/VdvkQK4wuG",
            month: "https://discord.gg/VdvkQK4wuG"
        }
    },
    runtclient: {
        name: "RuntClient (Siege)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSw1-3suV0-AEXE1hj5k1nuQ1-K81B9cmgMA&s",
        links: {
            day: "https://discord.gg/VdvkQK4wuG",
            week: "https://discord.gg/VdvkQK4wuG",
            month: "https://discord.gg/VdvkQK4wuG"
        }
    }
};

const pageSelect = document.getElementById("page-select");
const pageOptions = document.getElementById("page-options");
const cheatSelect = document.getElementById("cheat-select");
const goToOptionsBtn = document.getElementById("go-to-options");
const optionsTitle = document.getElementById("options-title");
const optionsImg = document.getElementById("options-img");
const keySelect = document.getElementById("key-select");
const buyNowBtn = document.getElementById("buy-now");
const homeLink = document.getElementById("home-link");

// Enable Next button only when a cheat is selected
cheatSelect.addEventListener("change", () => {
    goToOptionsBtn.disabled = !cheatSelect.value;
});

goToOptionsBtn.addEventListener("click", () => {
    const cheatKey = cheatSelect.value;
    if (!cheatKey) return;

    const cheat = cheatData[cheatKey];

    optionsTitle.textContent = cheat.name;
    optionsImg.src = cheat.image;
    optionsImg.alt = cheat.name + " image";

    function updateBuyLink() {
        const duration = keySelect.value;
        buyNowBtn.href = cheat.links[duration];
    }

    keySelect.value = "day"; // default selection
    updateBuyLink();

    keySelect.onchange = updateBuyLink;

    pageSelect.classList.remove("active");
    pageOptions.classList.add("active");
});

// Home button returns to first page & resets selection
homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    pageOptions.classList.remove("active");
    pageSelect.classList.add("active");
    cheatSelect.value = "";
    goToOptionsBtn.disabled = true;
});
