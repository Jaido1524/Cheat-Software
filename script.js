document.addEventListener("DOMContentLoaded", () => {
    const continueBtn = document.getElementById("continueBtn");
    const buyNowBtn = document.getElementById("buyNowBtn");
    const cheatSelector = document.getElementById("cheatSelector");
    const keySelector = document.getElementById("keySelector");

    continueBtn.addEventListener("click", () => {
        const selectedCheat = cheatSelector.value;
        if (!selectedCheat) {
            alert("Please select a product!");
            return;
        }

        document.getElementById("mainScreen").style.display = "none";
        document.getElementById("cheatScreen").style.display = "block";

        const title = document.getElementById("cheatTitle");
        const image = document.getElementById("cheatImage");

        keySelector.style.display = "block";
        keySelector.innerHTML = "";

        if (selectedCheat === "fortnite") {
            title.textContent = "🛡️ Ph4ze (Fortnite)";
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPF3ov5vYNem_m9qJEUfP0Y59Yik-IxNTKdg&s";
            keySelector.innerHTML = `
        <option value="">-- Select Key --</option>
        <option value="9">Day Key - $9 AUD</option>
        <option value="16">Week Key - $16 AUD</option>
        <option value="35">Month Key - $35 AUD</option>
      `;
        } else if (selectedCheat === "cs2") {
            title.textContent = "🔫 Eknode (CS2)";
            image.src = "https://securecheats.com/wp-content/uploads/2024/04/CS2-Hacks-Cheats-To-Download.jpg";
            keySelector.innerHTML = `
        <option value="">-- Select Key --</option>
        <option value="7">Day Key - $7 AUD</option>
        <option value="13">Week Key - $13 AUD</option>
        <option value="28">Month Key - $28 AUD</option>
      `;
        } else if (selectedCheat === "siege") {
            title.textContent = "🕵️ RuntClient (Siege)";
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSw1-3suV0-AEXE1hj5k1nuQ1-K81B9cmgMA&s";
            keySelector.innerHTML = `
        <option value="">-- Select Key --</option>
        <option value="8.65">Day Key - $8.65 AUD</option>
        <option value="15">Week Key - $15 AUD</option>
        <option value="32">Month Key - $32 AUD</option>
      `;
        } else if (selectedCheat === "pandanet") {
            title.textContent = "🐼 PandaNet (Botnet)";
            image.src = "https://static.vecteezy.com/system/resources/previews/005/530/020/non_2x/cute-panda-eating-bamboo-leaf-cartoon-icon-illustration-animal-nature-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg";
            keySelector.style.display = "none";
        }
    });

    buyNowBtn.addEventListener("click", () => {
        const selected = cheatSelector.value;
        if (selected !== "pandanet") {
            const key = keySelector.value;
            if (!key) {
                alert("Please select a key duration!");
                return;
            }
        }
        window.location.href = "https://discord.gg/VdvkQK4wuG";
    });
});
