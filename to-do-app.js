const input = document.getElementById("input-box");
const text = document.querySelector(".text");

function add() {
    if (input.value === "") {
        alert("Please write something in the input field");
    } else {
        let newElement = document.createElement("div");
        newElement.classList.add("item");
        newElement.innerHTML = `
            <input type="checkbox" onclick="toggleComplete(this)">
            <span>${input.value}</span>
            <button onclick="deleteItem(this)">Delete</button>`;
        text.appendChild(newElement);
        input.value = ""; // Clear the input field after adding the item
    }
}

function deleteItem(element) {
    element.parentElement.remove();
}

function toggleComplete(element) {
    element.parentElement.classList.toggle("completed");
}

function showCompleted() {
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        let checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function showUncompleted() {
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        let checkbox = item.querySelector('input[type="checkbox"]');
        if (!checkbox.checked) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}
