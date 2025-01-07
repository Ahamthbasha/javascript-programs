 const container = document.querySelector(".container")
 const card = document.querySelector('.card')

// console.log(container)//<div class="container">…</div>flex

// console.log(card)//<div class="card">1</div>flex

//const h1=document.querySelector('h1')

//append:Its meaning is to add something at the end of the document.

// container.appendChild(h1)

//clone node:we can copy element it is duplicate.it does not affect the original

// console.log(h1.cloneNode())//<h1></h1>
// console.log(h1.cloneNode(true))//<h1>appendchild and append</h1>.It will give the text including

// container.appendChild(h1.cloneNode(true))

// container.appendChild(card)
// card.appendChild(card.cloneNode(true))
// card.appendChild(card.cloneNode(true))

// const newCard=card.cloneNode()
// console.log(newCard)
// newCard.innerText=2
// console.log(newCard)

// container.appendChild(newCard)

//definitely do this

// for(let i=2;i<=100;i++){
//     const newCard=card.cloneNode()
//     newCard.innerText=i
//     container.appendChild(newCard)
// }

//we can append any element inside any element.except the parent.you will get error like this append.js:42 Uncaught HierarchyRequestError: Failed to execute 'appendChild' on 'Node': The new child element contains the parent.Below is the example

//container.appendChild(document.body)

///////////////////////DIFFERENCE BETWEEN APPEND AND APPENDCHILD///////////////////////////////

//container.appendChild(h1)//It has the return value which element is used the appendChild it return the value.

//container.append(h1)//It does not return the value.The value you get will be undefined

//container.append("hello")//It works.Text will be displayed or string type data will be executed by append.

//container.appendChild("hello")//Here the text wont be displayed or string type data wont be executed by appendChild.
// //append.js:49 Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.

//Use appendchild this way to display the text type data
//const nextTextNode=document.createTextNode("hello world")
//console.log(nextTextNode)
//container.appendChild(nextTextNode)

//container.append('hello',h1,'world')//multiple data will be appended

//container.appendChild(h1,nextTextNode)//It ignore others.It will execute only one.

/*
questions based on the append and appendChild

1.What is the primary difference between the append and appendChild methods in JavaScript?
answer:
The append method appends elements as the last child of a parent element, while the appendChild method appends elements as the next sibling of the last child of a parent element.


2.When you want to append elements as the next sibling of the last child of a parent element in the DOM, which method or approach would you use?
answer:
parentElement.lastElementChild.insertAdjacentElement('afterend', newElement)

3.	
<ul id="myList">

    <li>Item 1</li>

    <li>Item 2</li>

</ul>

How can you use the append method to add a new <li> element with text content "Item 3" after the last <li> element in the <ul> element using JavaScript?
Answer:
const myList = document.getElementById('myList');

const newLi = document.createElement('li');

4.<div id="parent">

    <p>This is a paragraph</p>

    <span>This is a span</span>

</div>

How can you use the appendChild method to add a new <h1> element with text content "Heading" inside the <div> element with the ID "parent" using JavaScript?
answer:
const parent = document.getElementById('parent');

const newHeading = document.createElement('h1');

newHeading.textContent = 'Headin
*/