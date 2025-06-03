// Discord redirect URLs per product (example URLs, replace with your actual)
const discordLinks = {
    fortnite: "https://discord.gg/FJYvQU45YT",
    cs2: "https://discord.gg/FJYvQU45YT",
    siege: "https://discord.gg/FJYvQU45YT",
    pandanet: "https://discord.gg/FJYvQU45YT",
    "electrum-public": "https://discord.gg/FJYvQU45YT",
    "electrum-private": "https://discord.gg/FJYvQU45YT"
};

document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const select = document.querySelector(`select[data-product="${product}"]`);
        const duration = select.value;

        alert(`You selected ${product} - ${duration}. Redirecting to Discord...`);
        // Redirect to Discord invite for that product
        const url = discordLinks[product];
        if (url) {
            window.open(url, '_blank');
        } else {
            alert("Discord link not set up for this product.");
        }
    });
});
