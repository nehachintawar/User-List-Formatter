let userArray = [];

function formatList() {
    const input = document.getElementById("userInput").value;

    userArray = input.split(/[\n,]+/)

    userArray = userArray.map(name => name.trim())
    .filter(name => name.length > 0)
    .map(name =>name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());

    displayList();
}

function displayList() {
    const output = document.getElementById("outputList");
    output.innerHTML = "";

    userArray.forEach((user, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${user}`;
        output.appendChild(li);
    });
}

function sortList() { 
    userArray.sort();
    displayList();
}

function removeDuplicates() {
    userArray = [...new Set(userArray)];
    displayList();
}

function clearList() {
    document.getElementById("userInput").value = "";
    userArray = [];
    document.getElementById("outputList").innerHTML = "";
}


