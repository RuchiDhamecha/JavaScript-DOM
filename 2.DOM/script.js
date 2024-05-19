const div = document.createElement('div')
console.log(div)

div.className="main"
// div.id="myID"
div.setAttribute('id','myID')
div.setAttribute('title',"main")
console.log(div)
    // <div class="main" id="myID" title="main"></div>

div.style.backgroundColor='red'
div.style.color='white'
div.style.padding='2rem'

//now this div is in memory, to bring this on page

//  div.innerText='helooooo';
//or better approach

const addtext=document.createTextNode("textNode");
div.appendChild(addtext);

//to display

document.body.appendChild(div)