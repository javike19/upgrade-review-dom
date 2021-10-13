//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const div = document.querySelector("div");
const ul = document.createElement("ul");
div.appendChild(ul);

function display(){
    for (let i = 0; i < countries.length; i++) {
        let li = document.createElement("li");
        let text = document.createTextNode(`${countries[i]}`);
        li.appendChild(text);
        ul.appendChild(li);
        
    }
}
display();

//1.2
const deleted = document.querySelector(".fn-remove-me");
deleted.remove();

//1.3
