const discordURL = "https://discord.gg/luxurygaming";
const owners = [
    { name: "Capo | @loosecapo | 251064236862734347", role: "Founder" },
    { name: "Berzerker | @berzerkeruk | 341751538294980620", role: "Owner" }
];

document.getElementById("discord-url").textContent = discordURL;
document.getElementById("discord-url").setAttribute("href", discordURL);

const ownersList = document.getElementById("owners-list");
owners.forEach(owner => {
    const listItem = document.createElement("li");
    listItem.textContent = `${owner.name} | ${owner.role}`;
    ownersList.appendChild(listItem);
});