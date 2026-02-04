// 1. Select all the elements we need
const nameInput = document.getElementById('nameInput');
const techInput = document.getElementById('techInput');
const goalInput = document.getElementById('goalInput');

const updateBtn = document.getElementById('updateBtn');
const themeBtn = document.getElementById('themeBtn');
const resetBtn = document.getElementById('resetBtn');

const card = document.getElementById('card');
const cardName = document.getElementById('cardName');
const cardTech = document.getElementById('cardTech');
const cardGoal = document.getElementById('cardGoal');
const header = document.getElementById('header');

// 2. Update Card Logic
updateBtn.addEventListener('click', () => {
    // Update Text
    cardName.textContent = nameInput.value || "Your Name";
    cardTech.textContent = `Favorite Tech: ${techInput.value || "-"}`;
    cardGoal.textContent = `Goal: ${goalInput.value || "-"}`;

    // Apply 3 Style Changes
    card.style.border = "3px solid #4CAF50";
    card.style.padding = "20px";
    card.style.borderRadius = "15px";
    card.style.backgroundColor = "#f9f9f9";
});

// 3. Toggle Theme Logic
themeBtn.addEventListener('click', () => {
    // Check current background and toggle
    if (document.body.style.backgroundColor === "rgb(51, 51, 51)") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "white";
    }
});

// 4. Reset Logic
resetBtn.addEventListener('click', () => {
    // Clear Inputs
    nameInput.value = "";
    techInput.value = "";
    goalInput.value = "";

    // Restore Default Text
    cardName.textContent = "Your Name: -";
    cardTech.textContent = "Favorite Tech: -";
    cardGoal.textContent = "Goal: -";

    // Restore Default Styles
    card.style.border = "1px solid black";
    card.style.padding = "10px";
    card.style.borderRadius = "0px";
    card.style.backgroundColor = "transparent";
});