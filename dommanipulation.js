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