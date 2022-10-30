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

