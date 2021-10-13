//1.1
/*const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
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
display();*/

//1.2
const deleted = document.querySelector(".fn-remove-me");
deleted.remove();

//1.3
/*const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div = document.querySelector(`div[data-function="printHere"]`);
const ul = document.createElement("ul");
div.appendChild(ul);

function display(){
    for (let i = 0; i < cars.length; i++) {
        let li = document.createElement("li");
        let text = document.createTextNode(`${cars[i]}`);
        li.appendChild(text);
        ul.appendChild(li);
    }
}
display();*/

//1.4
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
let body = document.querySelector("body");
let div = document.createElement("div");
body.appendChild(div);

function printed(){
    for (let i = 0; i < countries.length; i++) {
        let subDiv = document.createElement("div");
        let para = document.createElement("p");
        let title = document.createTextNode(`${countries[i].title}`)
        para.appendChild(title);
        subDiv.appendChild(para);
        let img = document.createElement("img");
        img.src = `${countries[i].imgUrl}`;
        subDiv.appendChild(img);
        div.appendChild(subDiv);
    }
}

printed();


//1.5
function click(){
    for (let i = 0; i < countries.length; i++) {
        if(countries[i] == countries.length){
            countries.pop;
            printed();
        }
    }
};

//1.6

//hasta luego...
