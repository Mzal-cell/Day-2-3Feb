// Arrow functions
const peace = (country) => {
    console.log(`Peace in ${country}`);
}

peace('Nigeria');

// javascript dom manipulation
let about = document.getElementById('about');
about.style.color = 'blue';
about.style.fontSize = '20px';

// Document object model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page content dynamically.

let person = {
    name: 'John',
    age: 30,
    occupation: 'Software Engineer'
}

console.log(person.occupation);

// Event handling
let functionElement = document.getElementById('Function');
functionElement.addEventListener('click', () => {
    functionElement.style.color = 'maroon';
    alert('deep state!');
});