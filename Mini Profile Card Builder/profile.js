// 1. Select elements using document.getElementById() (inputs, buttons, card text, card container, header).
// // document.getElementById('inputs').addEventListener('inputs', function() {
// });

// document.getElementById('button').addEventListener('click', function() {
// });

// document.getElementById('header').addEventListener('input', function() {
//     const header = document.getElementById('header').value;
//     document.getElementById('header').textContent = header || 'Mini Profile Card Builder';
// });

// 2. Update Card click: read input values → update card text using textContent → apply at least 3 style changes with .style.
document.getElementById('card').addEventListener('click', function() {
    const card = document.getElementById('card');
    card.style.backgroundColor = '#ccb5b5';
    card.style.color = '#333';
    card.style.padding = '20px';
});

// 3.Toggle Theme click: switch light/dark mode by changing page/card styles.
document.getElementById('themeBtn').addEventListener('click', function() {
});

// 4.Reset click: clear inputs (.value = "") + restore default card text (and styles if you changed them).
document.getElementById('resetBtn').addEventListener('click', function(_value = "") {
    document.getElementById('nameInput').value = "";
    document.getElementById('techInput').value = "";
    document.getElementById('goalInput').value = "";
    document.getElementById('card').textContent = "Mini Profile Card Builder";
    document.getElementById('card').style.backgroundColor = '';
    document.getElementById('card').style.color = '';
    document.getElementById('card').style.padding = '';
});