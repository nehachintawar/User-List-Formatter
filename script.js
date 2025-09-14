let userArray = [];

function formatList() {
    const input = document.getElementById("userInput").value;

    userArray = input.split(/[\n,]+/)

    userArray = userArray.map(name => name.trim())
    .filter(name => name.length > 0)
    .map(name =>charAt(0).toUpperCase() + name.slice(1).toLowerCase());

    displayList();
}