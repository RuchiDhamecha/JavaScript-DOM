// dom

//run all these in console

console.log(window.document);
console.log(document);  // only imp info disply
console.dir(document);

//getELEMENT

const paragraph = document.getElementsByClassName('para')
paragraph.innerText;

//setELEMENt
document.querySelector('h1').setAttribute('id','myID');
//sets id to first h1 tag

document.querySelector('h1').textContent
//'heading0'
document.querySelector('h1').innerText
//'heading0'
document.querySelector('p').innerText
//'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugiat.'
document.querySelector('p').textContent
//'Lorem ipsum dolor sit amet abcdrconsectetur adipisicing elit. Obcaecati, fugiat.'

//textContent give hidden text also



const allh1 = document.querySelectorAll('h1');
allh1[1].style.color='pink';

allh1.forEach(function (h1) {
    h1.style.color='red';
    h1.style.padding='2rem';
    h1.style.backgroundColor='blue'
})





//to convert htmlCollection in Array or nodelit into array

Array.from(allh1);  //this will convert allh1 htmlCollection to array, so that we can use all functionality of array