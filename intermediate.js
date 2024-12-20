//63.execution context

//global execution context=memory creation phase + code execution phase

//execution phase=memory creation+ code execution 

//if we create a function that will create a execution context under the global exectuion context.That function will have memory creation phase and code execution phase.

// const username="ahamathbasha"
// const userAge=25
// console.log(username)
// console.log(userAge)

//let and const will be shown in the scope under script

//global is a window object var will be inside the global
// function sayHi(){
//     console.log("hi")
// }//this function will be in the global 

//In callstact annonymous refers to the global


//execution context question
/* 
1.What is the global execution context in JavaScript?
The outermost execution context, created when a script is run

2.What happens when a function is used and the debugger is enabled?
The function is executed, and the debugger pauses execution at the function's entry point

3.What happens when a variable declaration inside a block using const is changed to var?
The variable's scope changes from block to function or global depending upon the location of that block

4.What is the local execution context in JavaScript?
The execution context within a function

5.What is the scope chain in JavaScript and its role within the execution context?
 It determines the visibility and accessibility of variables within a particular context, facilitating variable resolution.

 6.What is an execution context in JavaScript, and what are the different types of execution contexts?
Execution context defines the environment in this phase our code will get memory creation phase and code execution phase.Here we have two types of exectuion contexts one is global execution phase and another one is local execution phase.When a function is getting called that time a local exectuion context will be created with function name.

7.	
How is the execution context created and managed during the execution of JavaScript code?
execution context where created in callstack with in that local exectuion context will be created.With in the global execution contexts multiple execution context will be created at the code execution phase.After the execution of the local execution context it will be deleted from the call stack.After the overall execution is completed global execution context also be deleted from the callstack

//////////////////////EXECUTION CONTEXT/////////////////////////////////////
sayHi()

const username="ahamathbasha"
const age=25

function sayHi(){
    let a=10
    let b=20
    add(5,2)
}

function add(c,d){
    return c+d
}

//from the above program. An global exectuion context will be created .There memory creation phase and code execution phase will be created in memory creation the memory will be creted for the variable and for the function using the function name function code will be there.In code execution phase the starting line sayHi() will create the new execution constext namely local (sayHi) execution context.There will be a memory creation phase and code exectuion phase.In memory creation phase memory will be created for the variable and a function calling part:function code will be written there.In code execution phase the function will create a local execution context inside the sayHi local execution context inside the global execution context.after its executio one by one everything will be poped out including global execution context.

//see the visual representation of execution context image
*/

//65.callstack
//first global(or)annonymous execution context
//sayHi()
//add

//call stack is a mechanism through this way js engine track where is it now and where is it reached or in which function it is now .It tracks.It follows lifo principle.Last In First Out.After the execution one by one will be delted.Atlast global execution context also deleted.It shows the program is ended.call stack overflow shows that stack size limit reached and it is exceeded.
/*
function introduction(){
    console.log('Hi my name is ahamathbasha')
}
introduction()

//below program will be the example of callstack overflow because it continuously call itself.
function intro(){
    console.log(`hello world`)
    intro()
}
intro()
*/
///callstack questions////
/* 
1.What is execution context in JavaScript?
The environment in which JavaScript code is executed, including variable scope and function declarations

2.What is the call stack in JavaScript?
A mechanism for managing the order of function calls and their execution contexts

3.Why is understanding the call stack crucial for debugging and optimizing code in JavaScript?
It provides insights into the order of function calls and helps identify errors and performance bottlenecks 

4.What happens when the call stack becomes too large in JavaScript?
A call stack overflow error occurs, indicating that there are too many nested function calls

5.When is an execution context created for each function call in the call stack?
 For every function call, synchronous or asynchronous
*/

///67.HOISTING////

/*
var username="Ahamathbasha"
console.log(username)


console.log(username2)//undefined
var username2="basha"

let user1="ahamath"
console.log(user1)

// console.log(user2)//reference error
// let user2="dukaan"

const person1="anurag"
console.log(person1)

// console.log(person2)//reference error
// const person2="singh"

//cannot access the let and const variable before its initialization.If we try to access the variable it gives reference error.It won't be accessile


//Hoisting means the access of variables before in its initialization which does not give error.For var it is global scope it gives undefined and it is hoisted.But in case of const and let both are hoisted but js will put it in the zone called temporal dead zone at that time if we access the variable it gives error (reference error).We cannot access the variable without initialization.

//hoisting in function will work without error.
function hi(){
    console.log('hello')
}
hi()

hi2()
function hi2(){
    console.log("hello2")
}

//Hoisting is not a term normatively defined in the ECMASCRIPT specification.In memory creation phase the function will come under the memroy creation phase that time if we access it code execution phase will easily access it.

const sayHi=function (){
    console.log('Hi')
}
sayHi()

// sayHi2()
// const sayHi2=function (){
//     console.log("hi2")
// }
sayHi2 will give error because the function is assigned to the variable const.In Var variable case it gives undefined.But after that it will give error.

sayBye()//here it gives undefined if you try access you can get sayBye is not a function.But when type sayBye only you get undefined.

var sayBye=function(){
    console.log("bye")
}

*/

//function Definition
//function declaration
// function add(){
//     console.log(2+2)
// }
// add()

//function Definition
//function expression is not hoist.It will be variable hoist.But when it comes to function it wont be hoisted which means if we try to call it will give error.


//below example print will show error if it is not hoisted for further query comment out the line
// print()

// var print()=function abcd(){
//     console.log("abcd")
// }


// greet()

// var greet=function(){
//     console.log("hi")
// }

// we can define the function based on function expression and function declaration.Why we call function expression  because it has equal sign.
//when we create a function based on the function expression we will assign the function to a variable let,const,var.

//The function is annonymous function which assign to the variable and the function does not have the name .Based on that variable name we call the function

//iife-immediately invoked function

///HOISTING QUESTIONS////
/*
1.What is hoisting in JavaScript?
The process of moving variable and function declarations to the top of their containing scope

2.How does hoisting affect variable declarations in JavaScript?
It moves variable declarations to the top of their containing scope

3.Is it safe to access variables before their declaration in JavaScript?
No, accessing variables before their declaration will result in an error or undefined while functions declarations will work fine.

4.Does hoisting apply to function definitions as well as declarations in JavaScript?
Yes, hoisting applies to both function declarations and definitions

5.How does hoisting impact the order of execution of code in JavaScript?
It ensures that all variable and function declarations are processed before any code is executed */

/*
//69.global scope and local scope//
scriptscope and window object both are inside the global scope.

//let and const variable will be in script scope
//var and function variable will be in window object

//The variable in script scope cannot be accessed using window.username or window.userAge(or)window which shows undefined.In window if the variable is not exist it will show or return the value as undefined.

const username="Anurag"//it will show in script(value unavailable)
let userAge=25//it will show in script(value unavailable)
var a=50//global

function add(){
    const x=5//x and y will show in local under window with value unavailable
    const y=8//
    console.log(x+y)
    //console.log(username)//global scope it will show tdz 
}
//console.log(x+y)//it shows not defined.Here it shows error.Because both are in localscope which you cannot accessible outside the function.

add()

console.log('Program ended')

//when we call a function there will local execution context will be created with this:Window where memory creation and code execution will happen.

//questions//
1.What does local scope refer to in JavaScript?
Variables accessible only within a specific function

2.What is global scope in JavaScript?
Variables accessible anywhere in the code

3.When does a variable have global scope in JavaScript?
When it is declared outside any function or block

4.Which keyword can be used to declare a variable with local scope in JavaScript?
var,let and const.
*/

//71.lexical and block scope

// function subtract(){
//     const x=5
//     const y=4
//     console.log(x-y)

//     function cartoon(){
//         cartoonName="jackiechan"
//         console.log(cartoonName)
//         console.log(x)//if you debug the program when you reach this line you will get closure with function name x:5.Here it will print the value
//     }
//     cartoon()
// }

// subtract()

//in innerfunction can have ability to access its outer functions variable but outer function does not able to access the inner functions variable otherwise it will show errors.

//lexical scope is inner function have the accessibility of outer function.That outer function have the accessibility of outer outer function up to the global scope.

//If you debug the below given program you will get to see for all the function cartoon will be the closure.inner func can access team func and upto global scope.

// function cartoon(){
//     const name="jackiechan"
//     function character(){
//         const character="jackiechan"
//     }
//     function magic(){
//         const magic="bheema and uncle"
//     }
//     function team(){
//         const secret="agent black"
//     }
//     function inner(){
//         console.log(name)
//         console.log(character)
//         console.log(magic)
//         console.log(secret)
//     }
//     character()
//     magic()
//     team()
//     inner()

// }

// cartoon()

{
    //let and const are block 
}

//if you use 'use strict' in some cases if you miss the variable name(without using let,const, var) num2=10.It will print output to avoid those kinds of mistakes we use use strict mode which is really helpfull and show error.'use strict' should be in start of the program/

//questions

/*
1.What is the key difference between lexical scope and block scope in JavaScript?
 Lexical scope is determined by the location of variable declarations in the code, while block scope is limited to a specific block of code

2.How are lexical and block scopes related in JavaScript?
 Block scope is a subset of lexical scope

 3.What is lexical scope in JavaScript?
Collection of all scopes determined by the location of variable declarations in the code

4.When does a variable have block scope in JavaScript?
When it is declared using the let or const keywords within a block of code

 */

//71.higher order functions
//a function which will be created 

// function a(b){
//     console.log(typeof b)
//     console.log(b)
// }

// a('Hi')
// a({username:"Ahamathbasha",userAge:25})
// a([1,2,3,4,5])
// console.dir(a)//it print as object format
//functions are behind the scenes objects

//higher order function is a function which can be passed as an argument to the other function parameter.A function which return the other functions.A function can be assigned to the variable which all are higher order functions.

//we pass a function as a argumebt to the other function parameter.
// function a(b){
//     console.log(b)
//     b()
// }

// function sayHi(){
//     console.log('hi')
// }

// a(sayHi)


//Assigning the function to the variable
// function no(){
//     console.log(1,2,3)
// }

// no()
// const noFunction=no
//no()
// noFunction() 

//callback function
//when the time we call a function within the function we pass an argument.The function which is passed inside the function which is called callback function


// function add(fn){
//     console.log(5)
//     fn()
// }

// add(function (){
//     console.log("hello")
// })
//Annonymous function is a function which does not have name (callback function)

//Higher order function//

/*
1.What is a higher-order function in JavaScript?
A function that operates on other functions by taking them as arguments or returning them

2.What are callbacks in higher-order functions?
They are functions passed as arguments to higher order functions to be executed later

3.Which of the following is an example of a higher-order function in JavaScript?
Array.prototype.map()

4.Which of the following best describes a callback function in JavaScript?
A function passed as an argument to another function to be executed later
*/

//74.setTimeout and setInterval

//setTimeout("hii")//it treats like a variable so show error

// setTimeout('console.log(true)')
// setTimeout('console.log("ahamathbasha")')
//when we pass a string inside the setTimeout it will consider as a code behind the scene it will create a file there code will be written on that file or stored in that file.whatever we passed inside the setTimeout js consider it.For every settimeout function a new file will be created for that.

//setTimeout will delay the execution of the below given line here we need to mention how many seconds.For representing the time we mention it in milliseconds.
// setTimeout('console.log("Anurag Singh")',2000)

// setTimeout(`console.log("Hi") 
//     console.log("I am a damn good full stack developer")`,3000)
//setTimeout will return a value if you paste the above line in the browser which is the timer id.before executing the program it will return the timer id.

//by using the timer id we will stop the execution or clear the timeout

// setTimeout('console.log("Hi-2")',4000)
// setTimeout('console.log("Hi-4")',8000)
// setTimeout('console.log("Hi-6")',12000)

//15
//clearTimeout(15) it will the destroy or it wont execute the code when we pass it.

//storing the timer id in a variable
//js decides its id
// const timer1=setTimeout(`console.log("true")`,2000)
// const timer2=setTimeout(`console.log("hello")`,4000)
// const timer3=setTimeout(`console.log("bye")`,6000)

// clearTimeout(timer2)
// clearInterval(timer1)
//////////////////TRICKY////////////////////////////////////////
// function a(){
//     console.log("Hello world!")
// }

// setTimeout(a,3000)//it is a higher order function here a function is passed as an argument into the setTimeout function.Here we did not call the function but the function a is called and also there is no separate file created for the setTimeout here if you execute the above program the file name will be intermediate.js


////////////////////TRICKY////////////////////////////////////////
// setTimeout(b,2000,'finish',999)

// function b(){
//     console.log(arguments)
// }

//After the time whatever you give it will be inside an array
//Arguments(2) ['finish', 999, callee: ƒ, Symbol(Symbol.iterator): ƒ]


////////////////////WHICH ONE COMES FIRST///////////////////////////////

// setTimeout('console.log("hello")',2000)
// setTimeout('console.log("bye")',0)
// setTimeout('console.log("hi")',6000)

// console.log("without setTimeout bye")


//setInterval will repeatedly print or execute the program or work after a certain period of time.It will execute infinitely.To stop this we use clear Interval to destroy this.

//const timer4=setInterval('console.log("hello")',1000)
//clearInterval(timer4)
//for clearing this we use clearInterval and clearTimeout

//we pass a annonymous function inside the setTimeout function
// setTimeout(function() {
//     console.log('hiii 1')
// },0)

// console.log("hiii 2")

//////////////////////////QUESTIONS////////////////////////////////

/*
1.What is the purpose of the setTimeout function in JavaScript?
 It is used to delay the execution of a function by a specified amount of time.

2.How does setInterval differ from setTimeout in JavaScript?
setInterval executes a function repeatedly at specified intervals, while setTimeout executes a function once after a delay.

3.What does the second parameter of setTimeout represent?
The delay time before executing the function

4.In setInterval, how can you stop the repeated execution of a function?
By using the clearInterval method

5.Which of the following is a correct usage of setInterval in JavaScript?
setInterval(myFunction, 1000)

6.What happens if the delay time specified in setTimeout is negative?
The function is executed immediately

7.What will be the output of the following code?
setTimeout(() => console.log("World"), 0);
console.log("Hello");
Hello World

8.let counter=0
const intervalid=setInterval(()=>{
    console.log(counter)
    counter++
    if(counter === 5){
        clearInterval(intervalid)
    }
 },1000)

//  0 1 2 3 4  will be printed after 5 it will be destroyed
*/

//76.Event Loop and callback Queue

// console.log("hi-1")
// console.log("hi-2")

// function hello(){
//     console.log("hello")
// }

// for(let i=0;i<i<=4;i++){
//     console.log(i)
// }

// hello()//when we call a function it will go to the callstack and it will execute

// console.log("hi-3")

// setTimeout(function(){
//     console.log("hi-3")
// },0)//it will be ignored by the js engine atlast the result will be printed.setTimeout won't go to the callstack directly.It will go to the web Apis after the a period of time it will go to the callback queue.Then it will go to the callstack to execute it.

// console.log("hi-4")

//event loop duty is to check the callstack and callback queue .If the call stack is empty it takes function from callback queue and put it on the call stack for the execution.one by one function will be executed.

//The code which goes to the webapi directly which are asynchronous function or code.Why it is stored there? because it will stop the execution of the function.so it will be waiting time otherwise the code will wait (or) for the function which makes our application without freezing the functionality.

/*
questions based on event loop and callback queue
1.What is the role of the event loop in JavaScript?
Ensuring JavaScript remains single-threaded and non-blocking. It puts functions in callback queue to the callstack whenever callstack it free.

2.What happens during synchronous code execution in JavaScript?
JavaScript remains single-threaded, and each line of code is executed one after the other, blocking further execution until completion.

3.How are asynchronous tasks managed in JavaScript?
They are scheduled in the callback queue and event loop, allowing them to be processed when the main thread is free.
*/
