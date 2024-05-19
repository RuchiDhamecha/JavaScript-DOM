//Create

function addlang(langName){
    const li = document.createElement('li');
    li.innerHTML=`${langName}`

    document.querySelector('.language').appendChild(li)
}

addlang('python')

addlang('typescript');
//in this approach it traverses the tree 
// to go to last child and then append new text
//this increases complexity so lets directly append child by.. 

// approach 2
// lets try with optimized approach


function addOptilang(langName){
    const li = document.createElement('li');
   li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}

addOptilang('Golang')

addOptilang('cpp');


//edit =========================================================

const secondlang = document.querySelector('li:nth-child(2)');
console.log(secondlang);

// secondlang.innerHTML="mojo"
// secondlang.outerHTML='<li> mojo </li>'

//or----

const newli= document.createElement('li');
newli.textContent='mojo';
// newli.appendChild(document.createTextNode('mojo'));


secondlang.replaceWith(newli)


//remove ===================================================

const lastlang=document.querySelector('li:last-child');

lastlang.remove()