const userNameInput=document.querySelector("#username")
const paragraph=document.querySelector("p")
const form=document.querySelector("form")

// userNameInput.addEventListener('click',()=>{
//     console.log("single click")
// })

// userNameInput.addEventListener("dblclick",()=>{
//     console.log("double click")
// })

// userNameInput.addEventListener("input",(e)=>{
//     //console.log(e)
//     console.log(e.target.value)//what we type in that box it will show
//     paragraph.innerText=e.target.value
//     console.log("typing")
// })


// console.log(e)

// InputEvent {isTrusted: true, data: 'k', isComposing: false, inputType: 'insertText', dataTransfer: null, …}
// isTrusted
// : 
// true
// bubbles
// : 
// true
// cancelBubble
// : 
// false
// cancelable
// : 
// false
// composed
// : 
// true
// currentTarget
// : 
// null
// data
// : 
// "k"
// dataTransfer
// : 
// null
// defaultPrevented
// : 
// false
// detail
// : 
// 0
// eventPhase
// : 
// 0
// inputType
// : 
// "insertText"
// isComposing
// : 
// false
// returnValue
// : 
// true
// sourceCapabilities
// : 
// null
// srcElement
// : 
// input#username
// target
// : 
// input#username
// timeStamp
// : 
// 7683.5
// type
// : 
// "input"
// view
// : 
// null
// which
// : 
// 0
// [[Prototype]]
// : 
// InputEvent

//change event listener when give value and come out from that box that time it will triggered.It will do the work when we come out from the input box.

// userNameInput.addEventListener('change',(e)=>{
//     console.log(e)     
//     console.log(e.target.value)//what we type in that box it will show
//      paragraph.innerText=e.target.value
// })

//focus event when we click in the input box that time it will execute the work.What are the letters we write when we click in input it focuses that part
// userNameInput.addEventListener("focus",(e)=>{
//     console.log(e)    
//     console.log(e.target.value)
//     paragraph.innerText=e.target.value

// })

//if we write something in the input box that time it wont execute its work.When we type and came out from that box that time it will execute.
// userNameInput.addEventListener('blur',(e)=>{
//     console.log(e)
//     console.log(e.target.value)
//     paragraph.innerText=e.target.value
// })

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()//It stops the behaviour of the form
//     console.log(e)
//     console.log(e.type)
//     //form Data
//     const myFormData=new FormData(form)
//     for(const p of myFormData.entries()){
//         console.log(p)
//     }
// })

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     console.log("form submitted")
// })

// form.addEventListener("click",(e)=>{
//     e.preventDefault()
//     console.log(e.target)
//     console.log(e.currentTarget)
// })


//questions and answer

/*
1.What is the primary purpose of form events in JavaScript?
ANS:
To create interactive forms

2.What is the event object in JavaScript?
ANS:
An object that represents the event that occurred

3.What is the change event in JavaScript?
ANS:
Triggered when the value of a form element changes

4.What is the focus event in JavaScript?
ANS:
Triggered when a form element gains focus

5.What is the input event in JavaScript?
ANS:
Triggered when a form element's value changes

6.What is the difference between an event listener and an event handler in JavaScript?
ANS:
An event listener is a function that is called when an event occurs, while an event handler is a function that is called when an event is triggered
*/

