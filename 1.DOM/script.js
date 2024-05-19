const parent=document.querySelector('.parent');

console.log(parent);
    /* <div class="parent">
    <div class="day">Mon</div>
    <div class="day">Tues</div>
    <div class="day">wed</div>
    <div class="day">Thurs</div>
    </div> */

console.log(parent.children);
// HTMLCollection(4) [div.day, div.day, div.day, div.day]

console.log(parent.children[1]);
//<div class="day">Tues</div>

console.log(parent.children[1].innerText);
//Tues
console.log(parent.children[1].innerHTML);
//Tues
console.log(parent.children[1].textContent);
//Tues


//to print all children in console

//and change style in screen
for(let i = 0;i<parent.children.length;i++){
    console.log(parent.children[i].innerHTML);
    parent.children[i].style.color='red';
    parent.children[i].style.padding='2rem'
}


//to elect 1st or last eleemnt of child from parent

console.log(parent.firstElementChild)
//<div class=​"day" style=​"color:​ red;​ padding:​ 2rem;​">​Mon​</div>​

console.log(parent.lastElementChild);
//script.js:40 <div class=​"day" style=​"color:​ red;​ padding:​ 2rem;​">​Thurs​</div>​

//here we are moving from parrent to cild


//to move from child to parent

const child1 = document.querySelector('.day')

console.log(child1);
//<div class=​"day" style=​"color:​ red;​ padding:​ 2rem;​">​Mon​</div>​

// to move to next sibling
const child2=child1.nextElementSibling
console.log("2nd child",child2)
//<div class=​"day" style=​"color:​ red;​ padding:​ 2rem;​">​tues​</div>​



//to move to parent from any child
console.log(child1.parentElement)

console.log(parent.childNodes)
// NodeList(9) [text, div.day, text, div.day, text, div.day, text, div.day, text]

//line break(enter ) in html also counts