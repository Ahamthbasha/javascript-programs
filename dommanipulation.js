//BOM BROWSER OBJECT MODEL

//window is a browser object model.It is a object.It is created by th browser.By this way we can interact with the browser.

//1.window.location 
//2.location.reload() by using this function we can reload the page manually.We did not need to refresh.

// setTimeout(()=>{
//     location.reload()
// },2000)

//location.href it gives the url
//3.location.href
// 'http://127.0.0.1:5500/index.html'
//4.location.href="filename"=>it will open that file with the filename.ex.location.href="intermediate.js".In route you will get like this 'http://127.0.0.1:5500/intermediate.js'

//by using 5.location.href="paste any url".The browser will go to the url

//6.window.history with in this we have prototype there we have back forward like options
//History {length: 2, scrollRestoration: 'auto', state: null.For history best understanding is in our browser we have forward and backward arrow.if we want to move back and forward in browser we do that by clicking on that icon.But instead of that we can use history.back() and history.forward().If there is no page in back and forward return undefined.
//7.history.back()
//8.history.forward()
//9.history.go(-1)//back
//10.history.go(1)//forward
//11.history.go(0)//no change will be in that page

//12.innerHeight
// innerHeight
// 664
//It gives the height of the window

//13.innnerwidth
//innerwidth
//593
//it gives the width of the window

//14.outerHeight
//outerHeight
//758
//It is full size of the screen

//15.open()
//open() it opens a new tab

//16.open("put any url")
//it will navigate to that route
//open("intermediate.js")

//17.open()here we can pass argument
// open("intermediate.js","name","resizable")

//18.close()//we can close the tab.Scripts may close only the windows that were opened by them.

//19.resizeTo()
//open("https://youtube.com/",'procodrr','resizable')//a new tab will be came out from the browser.in that tab use the developer tool to resize the window
//resizeTo(600,500).the window size will be customizable now
//20.moveTo(5,5).We can move the window like graph(x axis and y axis)

//21.scrollBy(0,50).By using this the scrolling will be top to bottom

//22.print().we can print by using this function

//23.document.It is a part of the document object model.To interact with the browser based on the js a method will be created which is called webapi.

//BOM=> A WINDOW OBJECT.To interact with the browser.The browser vendors gives a object model there has lots of methods and properties.By using it we can interact with the browser.
/*
QUESTIONS BASED ON THE BOM

1.Which of the following statements accurately describes the Browser Object Model (BOM) in JavaScript?
The BOM allows interaction with the browser and its functions, such as navigating through pages and manipulating browser history.

2.What functionality does the Window object provide in JavaScript?
Manipulation of browser history and navigation

3.How do you use the window object to determine the size of the browser window?
By using the 'window.innerHeight' property

4.What is the significance of the history object in the Browser Object Model (BOM)?
It enables navigation control by keeping track of the user’s browsing history in the Browser Object Model (BOM)
*/

//1-1-2025

//DOCUMENT OBJECT MODEL(DOM)
//in dom everything is object.
//dev tools enter window
//inside it you found document
//enter document only. you get the entire html.It is behind the scenes an object.

// console.log(typeof document)//'object'
// console.dir(document)//you get various methods and properties in key value pairs.There you see children namely html,head and body.Every element in the document is object.

//for element their will be corresponding object will be created.For that which are the children and how many children and who are the parents also be there stored in the array.This was done by HTML PARSER

//HTML PARSER is a component in our browser.It will understand our html line by line and see which are the elements here.Based on the elements it create a corresponding object in the js memory.And connection of the child and parent also given by it.Every information in the html will also be in the document object with key value pairs

//1.document.children
//HTMLCollection [html]

//2.document.children[0]
//you get the entire html

//3.document.children[0].children
//HTMLCollection(2) [head, body]

//4.document.children[0].children[0] or document.head
//you get the head tag all part of the html

//5.document.children[0].children[1] or document.body
//you get the body tag all part of the html

//6.document.body.children
//HTMLCollection(7) [h1, hr, p, img, ul, p, script]

//7.document.head.children
//HTMLCollection(5) [meta, meta, meta, title, script, viewport: meta]

//8.document.head.children[0]
//<meta charset=​"UTF-8">​

//9.document.body.children[0]
//<h1>Forntend Development</h1>

//10.console.dir(document.body.children[0]).Return value for this is undefined

//11.document.body.children[0].innerHTML//'Frontend Development'

//12.document.body.children[0].innerText//'Frontend Development'

//NOW TRY TO MODIFY THE INNERHTML AND INNERTEXT

//13.document.body.children[0].innerText="Ahamathbasha"
// document.body.children[0].innerText
// 'Ahamathbasha'

//14.document.body.children[0].innerHTML="Ahamathbasha"
//'Ahamathbasha'

//WHAT IS THE DIFFERENCE BETWEEN INNERHTML AND INNERTEXT

//INNERTEXT:innertext will show whatever we give.document..Inner text obey the css property.If it set display-none it wont show the text.
// body.children[0].innerText="<i>Ahamathbasha</i>"

//INNERHTML:innerhtml will update the text in the html tag usage.document.body.children[0].The text will support the html styles like italic and bold,etc.,innerHTML="<i>Ahamathbasha</i>"

//TEXTCONTENT:textcontent will show the text.If stylesheet sets display-none or css to hide the text.That time also it show the text. 
//document.body.children[0].textContent
//'Ahamathbasha'

//document.body.children[1].innertext="good developer"

//15.document.body.children[4]
//you will get the line of the tag

//here we need to change the image
//document.body.children[4].src="/javaScript-Compilers-2.webp"
//'/javaScript-Compilers-2.webp'

//dom manipulation:we can change the page.Document object model.In html we write in browser we have component namely html parser which will create a object according to the element.Atlast it will give a object in the name of document.it will be inside the window.window object represents the whole browser.Dom will be in the tree like structure.

//const myParagraph=document.body.children[6]
//you will get the tag
// console.log(myParagraph)
//by this way we can easily manipulate with the help of the variable

//in element tab go to a tag right click on it.There a option like store globally will create a variable with names like temp1..,

//self practice
//document.body.children[5].children[3].children[1].src="/javaScript-Compilers-2.webp"
/*
QUESTIONS BASED ON DOM

1.What is the primary purpose of the Document Object Model (DOM) in JavaScript?
To represent the structure of an HTML document.

2.Which of the following statements accurately describes the Document Object Model (DOM)?
The DOM stores information from HTML documents in JavaScript variables and allows for dynamic modification of the web page's structure and content.

3.What is the difference between textContent and innerHTML in HTML manipulation?
textContent' is used to retrieve or set the text content of an element, while 'innerHTML' is used to retrieve or set the HTML content of an element.

4.How do you create and access global variables in the DOM?
By using the window object
*/

//109.selecting elements in js

//1.getElementByTagName:Based on the tagname we can select the element.
//document.getElementsByTagName('Img')
// HTMLCollection(3) [img, img, img]
//document.getElementsByTagName('Img')[0]
//<img src="/images/css.png" alt="css roadmap" style="width: 100%; max-width: 600px"></img>

//2.getElementByClassName:It gives the result as an array which has the classname.Its return value is empty array.
//document.getElementsByClassName('css-image')
//HTMLCollection [img.css-image]

//3.getElementById:It is unique.The return value is null if nothing matches.If the name has given to other which one comes first in the html.It will display others are neglected.
// document.getElementById("css-image")
// <img src="/images/html-css-javascript.png" alt="html-css-javascript" style="width: 100%; max-width: 600px" title="Frontend Roadmap" class="css-image" id="css-image">

//4.document.querySelector
//If we pass class name put dot(.).If we pass id we should put (#).It also return the result which is comes first.
// const a=document.querySelector('.css-image')
// <img src="/images/html-css-javascript.png" alt="html-css-javascript" style="width: 100%; max-width: 600px" title="Frontend Roadmap" class="css-image" id="css-image2">

//document.querySelector('#css-image')
//<img src="/images/html-css-javascript.png" alt="html-css-javascript" style="width: 100%; max-width: 600px" title="Frontend Roadmap" class="css-image" id="css-image2"></img>

//5.document.querySelectorAll('css-image')
//It gives the entire matching elements including class and id.It gives a nodeList.Here we can use some methods like forEach like functions.

//6.Attribut selector we will write in [].For example:[alt="javascript roadmap"]{border:4px solid pink}
//document.querySelector('[alt="javascript roadmap"]')
//<img src="/images/javascript.png" alt="javascript roadmap" style="width: 100%; max-width: 600px"></img>

//7.Nestedselector
//document.querySelector('ul li')
//const image1=document.querySelectorAll('.css-image')
//It will give the output as nodeList.
//image1[0].src="link of the image"


//Another approach to modify the image
// const imageUrl=[
//     "https://winnersstory.com/wp-content/uploads/2021/11/1-Shah-Rukh-Khan-Motivational-Quotes.jpg",
//     "https://winnersstory.com/wp-content/uploads/2021/11/1-Shah-Rukh-Khan-Motivational-Quotes.jpg",
//     "https://winnersstory.com/wp-content/uploads/2021/11/1-Shah-Rukh-Khan-Motivational-Quotes.jpg"
// ]

// const image1=document.querySelectorAll('.css-image')
// console.log(image1)
// image1[0].src=imageUrl[0]

//By looping way

// for(let i=0;i<imageUrl.length;i++){
//     image1[i].src=imageUrl[i]
// }

//By using forEach loop

// const imageUrl=[
//     "https://winnersstory.com/wp-content/uploads/2021/11/1-Shah-Rukh-Khan-Motivational-Quotes.jpg",
//     "https://winnersstory.com/wp-content/uploads/2021/11/1-Shah-Rukh-Khan-Motivational-Quotes.jpg",
//     "https://winnersstory.com/wp-content/uploads/2021/11/1-Shah-Rukh-Khan-Motivational-Quotes.jpg"
// ]
// const image1=document.querySelectorAll('.css-image')
// console.log(image1)

// imageUrl.forEach((url,i)=>{
//     image1[i].src=url
// })

//By using forEach in another approach

// const imageUrl=[
//     "https://winnersstory.com/wp-content/uploads/2021/11/1-Shah-Rukh-Khan-Motivational-Quotes.jpg",
//     "https://winnersstory.com/wp-content/uploads/2021/11/1-Shah-Rukh-Khan-Motivational-Quotes.jpg",
//     "https://winnersstory.com/wp-content/uploads/2021/11/1-Shah-Rukh-Khan-Motivational-Quotes.jpg"
// ]
// const allImages=document.querySelectorAll('.css-image')

// allImages.forEach((image,i)=>{
//     image.src=imageUrl[i]
// })

// in html collection we did not use methods like foreach.map or filter.In nodelist we can use the array methods

//Below method shows that document.querySelector will search in whole document.The particular ul querySelector will search in that zone only.
// const ul=document.querySelector('ul')
// console.log(ul)
// ul.querySelector('img')
// <img src="/images/css.png" alt="css roadmap" style="width: 100%; max-width: 600px" class="css-image">

//document.getElementById will give output.But when you use it with an element like (li.getElementById give error).

//select a element in the dev tools.Right click copy.copy js path will give the querySelector command.

/*
question based on selecting elements in js

1.Which method is commonly used to select multiple elements in the DOM using their tag names in JavaScript?
getElementsByTagName()

2.What is the purpose of the querySelectorAll() method in JavaScript?
It selects all elements that match a specified CSS selector and returns them as a static NodeList.

3.How can you select an element with the ID "example" using JavaScript?
document.getElementById("#example")

4.What does the querySelector() method return in JavaScript if no matching element is found?
null

5.Which method is used to select elements by their class name in JavaScript?
getElementsByClassName()

*/