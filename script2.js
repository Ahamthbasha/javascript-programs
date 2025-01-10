// const container = document.querySelector('.container')

// for(let i = 1; i <= 100; i++) {
//     const imgContainer = document.createElement('div')
//     imgContainer.classList.add('img-container')

//     const newImage = document.createElement('img')
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

//     const paragraph = document.createElement('p')
//     paragraph.innerText = i

//     imgContainer.append(newImage, paragraph)
//     container.append(imgContainer)
// }

// let myHTML = ``

// for (let i = 1; i <= 100; i++) {
//   myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     </div>
//     `
// }

// container.innerHTML = myHTML

//now here we go to the remove elements in js.
 //we can easily select the div in the dev tools console and right click you see delete element option based on that way also you delete it.

//by using js we can delete this way

//select element-copy-copyjs path.It will give the selected element div.

//we can delete the element by two ways.One is remove() and another one is removeChild()

//1.remove()
// const myImg=document.querySelector("body > div > div:nth-child(5)")
// console.log(myImg)
//myImg.remove()//by this way we remove the image

//2.removeChild()
//if we use removeChild we need to pass a argument
//myImg.removeChild()
// console.log(myImg.parentElement)
// console.log(myImg.parentElement.removeChild(myImg))

//if we store in the variable.The memory has the data later if we want to append we can append it by the variable.Here container variable have the data.

/*
questions based on how to remove element using javascript

1.How do you completely delete an element using JavaScript?
ANSWER:
By using the remove method

2.What is the difference between remove and removeChild methods in JavaScript?
ANSWER:
remove removes the element from the DOM, while removeChild removes the element from the parent element

3.Why is it important to free memory by removing elements in JavaScript?
ANSWER:
To reduce memory usage

4.
<ul id="list">

    <li>Item 1</li>

    <li>Item 2</li>

    <li>Item 3</li>

</ul>

Write JavaScript code to remove the second <li> element from the <ul> element with the ID "list".

ANSWER:
document.querySelector("#list > li:nth-child(2)").remove()
*/

