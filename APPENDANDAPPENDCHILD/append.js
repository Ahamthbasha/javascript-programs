//const container = document.querySelector(".container")
//  const card = document.querySelector('.card')

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
//124.creating elements using javascript
//const container=document.querySelector(".container")
// const firstImage=document.querySelector('img')
// console.log(firstImage)

// for(let i=2;i<=100;i++){
//     const newImg=firstImage.cloneNode()
//     newImg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.append(newImg)
// }

//if we did not have the image element then we need to create the element.

//console.log(document.createElement)
//console.log(document.createElement())//append.js:121 Uncaught TypeError: Failed to execute 'createElement' on 'Document': 1 argument required, but only 0 present.
//console.log(document.createElement('p'))//it will create a paragraph tag//<p></p>
//console.log(document.createElement("Ahamathbasha"))//<ahamathbasha></ahamathbasha>.We give in uppercase but the tag we get in small case.

//const paragraph=document.createElement('P')
//document.body.append(p)
// paragraph.innerText="hello"
// paragraph.classList.add('my-para')
// paragraph.id="unique"
// container.append(paragraph)
// console.log(paragraph)//<p class="my-para" id="unique">hello</p>



// const h1=document.querySelector('h1')
// h1.innerText="hi"//in browser we have memory.In that memory every elements is stored.In that memory values will get updated and reflect in our page.

//creating 100 images and append in the container

// const img=document.createElement('img')
// img.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
// container.append(img)
// console.log(img)

// for(let i=1;i<=100;i++){
//     let newImg=document.createElement('img')
//     newImg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.append(newImg)
// }

// const unknownElement=document.createElement("threeidiots")
// console.dir(unknownElement)//in prototype it store in the name of html unknown element.[[Prototype]]: HTMLUnknownElement

//statically append a child in the end of the doucment

// const imgContainer=document.createElement('div')
// imgContainer.classList.add('img-container')

// const newImg=document.createElement('img')
// newImg.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"

// const newPara=document.createElement('p')
// newPara.innerText=1

// imgContainer.append(newImg,newPara)

// container.append(imgContainer)

//for showing multiple images

// for(let i=1;i<=10;i++){
// const imgContainer=document.createElement('div')
// imgContainer.classList.add('img-container')

// const newImg=document.createElement('img')
// newImg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

// const newPara=document.createElement('p')
// newPara.innerText=i

// imgContainer.append(newImg,newPara)

// container.append(imgContainer)
// }

//another approach to do the same thing

// for(let i=1;i<=10;i++){
// const imgContainer=document.createElement('div')
// imgContainer.classList.add('img-container')

// const myHTML=`
// <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
// <p>${i}</p>
// `
// imgContainer.innerHTML=myHTML
// container.append(imgContainer)
// }

//by this way you will get everything in vertical order

// let myHTML=``

// for(let i=1;i<=10;i++){
//     myHTML+=`<div class="img-container">
//       <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//       <p>${i}</p>`
// }

// container.innerHTML=myHTML

/*
questions based on create element in js

1.When creating elements dynamically in JavaScript using document.createElement, which method is commonly used to add these newly created elements to the DOM?
Answer:
appendchild
2.
<ul id="listContainer">

    <!-- List items will be dynamically added here -->

</ul>

Write JavaScript code to dynamically create and append three <li> elements inside the <ul> element with the ID "listContainer". Each <li> element should contain a different text content: "Item 1", "Item 2", and "Item 3".

ANSWER:
const ul=document.createElement('ul')
ul.classList.add('listContainer')

for(let i=1;i<=3;i++){
    const li=document.createElement('li')
    li.textContent=`Item ${i}`
   ul.append(li)
   document.body.append(ul)
}

3.You have a <div> element with the ID "container" in your HTML file. Write JavaScript code to create an <img> element dynamically, set its src attribute to "image.jpg", its alt attribute to "Sample Image", and append it to the <div> element with the ID "container".
answer:
const container=document.querySelector('#container')
for(let i=1;i<=10;i++){
    let img=document.createElement('img')
    img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.jpg`
    img.alt="sample Image"

    container.append(img)
}
*/
