const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//my solutions

const para = document.createElement("p");
const node1 =  document.createTextNode("Hey I'm Red!");
para.style.color= "red";
para.appendChild(node1);
const element1 = document.getElementById("container");
element1.appendChild(para);

const hhh =  document.createElement("h3");
const node2 = document.createTextNode("I'm a blue h3!");
hhh.style.color = "blue";
hhh.appendChild(node2);
const element2 = document.getElementById("container");
element2.appendChild(hhh);


const cont = document.querySelector("#container");
const content3 = document.createElement("div");
content3.setAttribute("id", "hello");
content3.style.borderColor = "black";
content3.style.backgroundColor = "pink";
cont.appendChild(content3);
const h = document.createElement("h1");
const node3 = document.createTextNode("I'm in a div");
h.appendChild(node3);
const element3 = document.getElementById("hello");
element3.appendChild(h);
const para2 = document.createElement("p");
const node4 = document.createTextNode("ME TOO!");
para2.appendChild(node4);
const element4 = document.getElementById("hello");
element4.appendChild(para2);


