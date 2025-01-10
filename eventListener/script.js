//2nd learning in script.js

// function sayHi(){
//     console.log('hii')
// }

//in properties section you can see the events.The event value will be null.If the event is used it will put the value for the event

//practice
// function sayHelloforCard(){
//     console.log("hello card")
// }

//3rd learning

// const h1=document.querySelector('h1')

// function sayHi(){
//     console.log('Hiii')
// }

// function secondHi(){
//     console.log('second hi')
// }

//set

// h1.onclick=sayHi//onclick: ƒ sayHi()
// h1.onclick=secondHi
//if we set two events here. One event will be executable.Here atlast what event set for the h1 which will be executed.It is overriding.

//4th learning

// const h1=document.querySelector('h1')

// function sayHi(){
//     console.log('hii')
// }

// h1.addEventListener('click',sayHi)//It does not set the event to the property it adds the event in another way.It set in the event listeners

//5th learning

// const h1=document.querySelector('h1')

// function sayHi(){
//     console.log('hi')
// }

// h1.addEventListener('click',sayHi)
// h1.addEventListener('click',function(){
//     console.log('second hi')
// })
//hi
//second hi
//if you click two functions will work

//6th learning

// const h1=document.querySelector('h1')
// function sayHi(){
//     console.log('hi')
// }
// function secondHi(){
//     console.log('second hii')
// }

// h1.addEventListener('click',sayHi)
// h1.addEventListener("click",secondHi)
//hi
//second hii
//both will be execute for that one addEventListener

//7th.practice based on the addEventListener

//const card=document.querySelector('.card')
// card.addEventListener('click',function(){
//     console.log("event listener practicing")
// })

//8th learning
// let count=1
// const card=document.querySelector('.card')
// const container=document.querySelector('.container')
// card.addEventListener('click',()=>{
//     const newCard=document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText=count
//     count++
//     container.append(newCard)
// })

//9th learning

// let count=1
// const card=document.querySelector('.card')
// const container=document.querySelector('.container')
// card.addEventListener('click',()=>{
//     const newCard=card.cloneNode()
//     newCard.classList.remove("add-card")
//     newCard.innerText=count++
//     container.append(newCard)
// })

/*
questions based on the event listener

1.What is the primary role of event listeners in JavaScript?
ANSWER:
Capturing and responding to user interactions and browser actions

2.Which method is commonly used to add event listeners to HTML elements in JavaScript?
ANSWER:
addEventListener

3. What is the difference between addEventListener and attachEvent methods in JavaScript?
ANSWER:
addEventListener and attachEvent are used for different purposes

4.What is the importance of specifying the event type before adding an event listener?
ANSWER:
 To ensure the event listener is added correctly
*/