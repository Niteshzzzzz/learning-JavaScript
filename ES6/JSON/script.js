let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');

let person = JSON.parse(localStorage.getItem('myData')) || {};
h1.firstElementChild.textContent = person.name;
h2.firstElementChild.textContent = person.age;

input1.addEventListener('input', (e) => {
    person.name = e.target.value;
    localStorage.setItem("myData", JSON.stringify(person))
    h1.firstElementChild.textContent = person.name;
})

input2.addEventListener('input', (e) => {
    person.age = e.target.value;
    localStorage.setItem("myData", JSON.stringify(person))
    h2.firstElementChild.textContent = person.age;

})