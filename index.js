// Write your code here!
const newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.textContent = "Ana is the champion";

const element = document.getElementById("main");

element.remove()
document.body.append(newHeader);
