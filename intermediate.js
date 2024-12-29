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


//78.Returning functions with closures

//function which takes another function is higher order function.

//a function which is passed as an argument inside a function which is called as callback function.

//from a function we can return a function

//1.the variable is outside

// const a=4
// const b=6

// function add(){
//     console.log(a+b)
// }

// add()

// console.dir(add)

// //below function return a function 

// function parent(){
//     function add(){
//         console.log(a+b)
//     }
//     return add//It return the function namely add
// }

// const add1=parent()
// console.log(add1)

//2.The variable inside the function
//The variable in the parent function is used in the child function which is called closure that closure as a scope will be created
// function parent(){
//     const a=4
//     const b=6

//     function add(){
//         console.log(a+b)
//     }

//     return add
// }

// const add1=parent()
// console.log(add1)


/////////////////////ANOTHER EXAMPLE//////////////////////////////////////

// function outer(){
//     function parent(){
//         const a=4
//         const b=6
//         function add(){
//             console.log(a+b)
//         }
//         return add
//     }
//     return parent()
// }

// const callOuter=outer()
// console.log(callOuter)
// console.log(callOuter())


////////////////////////////DIRECTLY RETURN THE FUNCTION///////////////////////////////////

// function outer(){
//     function inner(){
//         const a=5
//         const b=5
//     return function add(){
//         console.log(a+b)
        
//     }
// }
// return inner()
// }

// const addition=outer()
// console.log(addition)
// console.log(addition())

///////////////////////////RETURN THE ANNONYMOUS FUNCTION//////////////////////////////////

// function outer(){
//     function inner(){
//         const a=5
//         const b=5
//        return function(){
//         console.log(a+b)
//         }
//     }
//     return inner()
// }

// const annonymous=outer()
// console.log(annonymous)
// console.log(annonymous())

///simple note about closure

//Outer functions variables are used in the inner functions that in scope section you can see  the closure.variables of outer functions is used in the inner functions which is called closure.

/*
    question about closure

1.What are closures?
Outer functions variables are used in the inner function which is closure. In the debugger side in scope section we will see the closure

2.What will be the output of the following code snippet?

function outerFunction() {

    let outerVar = 10;

    function innerFunction() {

        console.log(outerVar);

    }

    return innerFunction;

}

let closureFunc = outerFunction();

closureFunc();

//answer:
10 (Logged to console)

3.
What will be the output of the following code snippet?

function createCounter() {

    let count = 0;

    return function() {

        return ++count;

    };

}

let counter1 = createCounter();

let counter2 = createCounter();

console.log(counter1());

console.log(counter2());

//answer: 1 (Logged to console), 1 (Logged to console)

4.
What will be the output of the following code snippet?

let message = "Global";

function outerFunction() {

    let message = "Outer";

    function innerFunction() {

        console.log(message);

    }

    return innerFunction;

}

let closureFunc = outerFunction();

closureFunc();

//ans:outer (Logged to console)

5.
What will be the output of the following code snippet?

let num = 5;

function outerFunc() {

    let num = 10;

    setTimeout(function() {

        console.log(num);

    }, 1000);

}

outerFunc();

ans:10 (Logged to console)

6.
What will be the output of the following code snippet?

let a = 1;

function outerFunc() {

    let b = 2;

    function innerFunc() {

        let c = 3;

        console.log(a + b + c);

    }

    return innerFunc;

}

let closureFunc = outerFunc();

closureFunc();

//ans:6 (Logged to console)

7.What is the benefit of using closures in JavaScript?

They enable encapsulation and data privacy by hiding variables within function scopes.
*/

//81.FUNCTIONS AND METHODS DIFFERENCE

//every function is not a method.But every method is a function

//function
// function add(){
//     return a+b
// }

//if a function is within an object is called method

//const maths={}

// const maths={
//     E:2.7896523432,
//     a:function add(){
//         return 5+5
//     },
//     add:function(a,b){
//         return a+b
//     }
// }
//if a function is used with the dot which is called method
// console.log(maths.a)
// console.log(maths.add)
// console.log(maths.add(5,5))

// const maths2={
//     sub:function sub(a,b){
//         return a-b
//     },
//     square:function square(a){
//         return a*a
//     },
//     multi:function (a,b){
//         return a*b  
//     }
// }

// console.log(maths2.sub)
// console.log(maths2.square)
// console.log(maths2.sub(10,5))
// console.log(maths2.square(5))

//new syntax for this

// const maths3={
//     sub(a,b){
//         return a-b
//     },
//     cube(a){
//         //return a*a*a
//         return a ** 3
//     }
// }

// console.log(maths3.sub)
// console.log(maths3.sub(10,3))
// console.log(maths3.cube)
// console.log(maths3.cube(2))

//array is a method behind the scene which is object
//string is also method we use upperCase(),lowerCase().String is not a object but we use that method how? string has a object wrapper.string has a object.Every string has related object based on that object the methods are used.string is not a object.Basically js gives methods to use on strings.It has created a object.Whenever we use dot with string it access that object within that object every methods are defined

/*
QUESTIONS BASED ON FUNCTIONS AND METHODS

1.What is the main distinction between functions and methods in JavaScript?
Functions are standalone blocks of code, while methods are functions defined inside objects. 

2.How are methods distinguished from functions in JavaScript syntax?
Methods are functions defined inside objects, while functions are standalone blocks of code.

3.When is a function considered a method in JavaScript?
When it is placed inside an object as a property.

4.What is the role of the return statement in both functions and methods in JavaScript?
It is used to return a value from the function or method back to the caller.

5.How do methods differ from functions in terms of invocation?
There is no difference in how methods and functions are invoked.

*/

//83.Arrow function in js
//function expression
//a function which is stored in the variable which is known as function expression

//example for function expression.If we call this it will show error
// const square=function(num){
//     return num*num
// }
// console.log(square(4))

//function declaration
//a function which using the function keyword and creating the function is called function declaration.

//example for function declaration.It wont show any error.
// function double(num){
//     return num*num
// }

// console.log(double(4))

//Arrow function expression

//we didnot use function keyword

// const doubled=(num)=>{
//     return num*num
// }
// console.log(doubled(4))
//Making the arrow function syntax easier
// const two=(num)=>{
//     num*num
// }

// console.log(two(2))//it shows undefined

//correct format.Arrow function implicitly return the output or value
// const squaren=(num)=>num*num
// console.log(squaren(5))

// const addN=(num1,num2)=>num1+num2
// console.log(addN(5,5))

//below is a annonymous function and arrow function
// setTimeout(()=>{
//     console.log("hii")
// },1000)

//In case we have one parameter or argument.We dont need bracket.

// const cube=n=>n*n*n
// console.log(cube(2))

//If we have two parameter or argument.We need bracket

//const sub=(a,b)=>a-b//if you dont use bracket in this case it shows missing initializer
// console.log(sub(10,5))

// const random=()=>Math.random()
// console.log(random())

// const random2=()=>(Math.floor(Math.random() *10)+1)
// console.log(random2())

/*
QUESTIONS FOR ARROW FUNCTIONS

1.What is an arrow function in JavaScript?
 A shorthand syntax for writing anonymous functions using the => arrow operator.

2.How do arrow functions differ from other function declarations in JavaScript?
They have a special syntax using the => arrow operator and do not require the function keyword. 

3.What is the primary advantage of using arrow functions in JavaScript?
They automatically bind to the this value of the enclosing scope.

4.Which of the following statements about arrow functions in JavaScript is true?
Arrow functions have a concise syntax and can omit curly braces for single-line expressions.

5.How do arrow functions handle the this keyword compared to regular functions?
Arrow functions automatically inherit the this value of the enclosing lexical scope.

*/

//85.for of vs for in loop

// const fruits=['banana','apple','peach','mango','grapes']

// for(let i=0;i<fruits.length;i++){
//     console.log(i)
//     console.log(fruits[i])
// }

//For of loop which iterates over iterable objects such as arrays,strings,maps,sets and more.
//the fruit variable will be in the global scope.The value will be changeable
// for(var fruit of fruits){
//     console.log(fruit)
// }

//by using let or const which will ne in block scope.The value will be changeable.After the loop finished it will be deleted from the scope or from the memory.
// for(let fruit of fruits){
//     console.log(fruit)
// }  

// const user="Anurag singh"

// for(const letter of user){
//     console.log(letter)
// }


//for iterate in object we use for in loop
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:'blue',
//     city:"Bangalore"
// }
//it will iterate based on the key
// for(const property in person){
//     console.log(property)
// }

//it will iterate on the key and get the value.By using bracket notation we access the loop.It is time consuming

// for(const property in person){
//     console.log(person[property])
// }

//The keys from the object will be stored in the array.
// const personKeys=Object.keys(person)
// console.log(personKeys)

// for(let keys of personKeys){
//     console.log(keys)
// }
//by the below way we can access the value
// for(let keys of personKeys){
//     console.log(person[keys])
// }

//The values from the object will be stored in the array.
// const personValues=Object.values(person)
// console.log(personValues)

// for(let values of personValues){
//     console.log(values)
// }

//The key and value will be stored inside array with multiple array

// const personEntries=Object.entries(person)
// console.log(personEntries)

//The output will be like this
//(5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0: (2) ['firstName', 'John']
// 1: (2) ['lastName', 'Doe']
// 2: (2) ['age', 50]
// 3: (2) ['eyeColor', 'blue']
// 4: (2) ['city', 'Bangalore']

//for in only used for iterating objects
//for of used for iterable objects like arrays,string etc.,

/*
questions for for of and for in loop

1.Why is a for...of loop preferred over a standard for loop?
It simplifies iterating over iterable objects such as arrays, strings, and sets.

2.What is the primary difference between the "for of" and "for in" loops in JavaScript?
For of loop is used for iterating the iterable objects like arrays, string and more.For in loop used only for iterating the object.

3.In which scope does "for of" loop create its variable in each iteration?
It depends upon which keyword is used for the variable when we create a for...of loop.

4.What is the significance of using the "for of" loop over the "for in" loop in JavaScript?
The "for of" loop provides better performance compared to the "for in" loop.

5.You are working on a JavaScript program where you have an object representing student information. The object student contains various properties such as name, age, and grade.

Your task is to write a JavaScript code snippet using the for...in loop to iterate over each property of the student object and concatenate the property names into a string separated by commas.

const student = {

    name: 'John Doe',

    age: 20,

    grade: 'A'

};

let properties = "";

// Write your code here

console.log(properties);
ANSWER:
const student = {

    name: 'John Doe',

    age: 20,

    grade: 'A'

};

let properties = "";

console.log(properties);

for(let key in student){
    properties+=key+","
}

properties=properties.slice(0,-1)//-1 refers last character.
console.log(properties)

6.Write a program to print all the keys and values of the below object.

 i. Using for...of loop along with Object.entries()

ii. Using for...in loop

const student = {

name: 'John Doe',

age: 20,

grade: 'A'

};

ANSWER:
const student = {

    name: 'John Doe',
    
    age: 20,
    
    grade: 'A'
    
    };

    const studentEntries=Object.entries(student)
    console.log(studentEntries)
    for(let value of studentEntries){
        console.log(value)
        console.log(`${value[0]}:${value[1]}`)
    }

    for(let key in student){
        console.log(`${key}:${student[key]}`)
    }
*/

//87.FOREACH array method.It is a higher order function.It is only used with array

//const fruits=['banana','apple','peach','mango','grapes']

// for(let fruit of fruits){
//     console.log(fruit)
// }

// fruits.forEach(function(){
//     console.log('hi')
// })

// fruits.forEach(function(fruit){
//     console.log(fruit)
// })

//fruits.forEach((fruit)=>console.log(fruit))

//forEach return value will be undefined.It iterates only.Its return value is undefined.

// fruits.forEach((fruit)=>{
//     console.log(fruit)
//     return fruit
// })
//It value will be undefined

// const numbers=[1,2,3,4,5]
// let sum=0
// numbers.forEach((no)=>sum+=no)
// console.log(sum)

/*
1.What is the primary purpose of the forEach method in JavaScript?
To loop through each element of an array

2.In what scenario might you use the forEach method in JavaScript?
When you need to iterate over the elements of an array and perform a specific operation on each element 

3.What is a callback function in the context of the forEach method?
A function that is passed as an argument to the forEach method and is executed for each element of the array

4.Can the forEach method be used with objects in JavaScript?
No, it is used only with arrays.

5.const numbers = [1, 2, 3, 4, 5];
Using the forEach loop, write a JavaScript code snippet to calculate the sum of all the numbers in the array.
ANSWER:
 const numbers=[1,2,3,4,5]
 let sum=0 
 numbers.forEach((no)=>sum+=no) 
 console.log(sum)

6.Given an array of strings, use the forEach method to count the number of times each string appears and store the result in an object.

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = {};

// Your code here

console.log(fruitCount);

// Expected Output: { apple: 3, banana: 2, orange: 1 }

ANSWER:
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let fruitCount = {};

fruits.forEach((fruit)=>{
    if(fruitCount[fruit]){
        fruitCount[fruit]++
    }else{
        fruitCount[fruit]=1
    }
})

console.log(fruitCount)


7.Given an array of strings, use the forEach method to find the sum of the lengths of all strings in the array.

const fruits = ['apple', 'banana', 'cherry'];

let totalLength = 0;

// Your code here

console.log(totalLength);

//Expected Output: 17
ANSWER:
const fruits = ['apple', 'banana', 'cherry'];
let totalLength=0
fruits.forEach((fruit)=>{
    for(let i=0;i<fruit.length;i++){
        totalLength++
    }
})
console.log(totalLength)

let length=0
fruits.forEach((fruit)=>{
    length+=fruit.length
})
console.log(length)
*/
//88.MAP,FILTER,REDUCE.This are non destructive methods which does not change the original array.

//map returns a array

// const months=['january','february','march','april','may']

// let upperCase=months.map((month)=>{
//     console.log(month)
//     return month.toUpperCase()
// })

// console.log(upperCase)

//accessing the index
// let upper=months.map((month,index)=>{
//     console.log(index,month.toUpperCase())
//     return index

// })
// console.log(upper)

//for each return value will be undefined
// let forEachReturnValue=months.forEach((month)=>{
//     return month.toUpperCase()
// })
// console.log(forEachReturnValue)
//Third parameter will show the entire array
// let check=months.map((month,i,array)=>{
//     console.log(array)
// })

//FILTER

// const Months=['January','February','March','April','May','December']

// const filterMonths=Months.filter((month)=>{
//     console.log(month)
//     return true//it will put the value in the array.if i set to false it wont put the value in the array
// })

// console.log(filterMonths==Months)//false
// console.log(filterMonths)

// const filterMonth=Months.filter((month)=>{
//     return month.length <=5
// })
// console.log(filterMonth)

// const filterMonthGreaterThanFive=Months.filter((month)=>{
//     return month.length>=5
// })
// console.log(filterMonthGreaterThanFive)

// const filterMonthsm=Months.filter((month)=>{
//     for(let i=0;i<month.length;i++){
//         if(month[i]=='M'||month[i]=='m'){
//             return month
//         }
//     }
// })
// console.log("filterMonthsmWords",filterMonthsm)
//another approach

// const filterWordsM=Months.filter((month)=>{
//     return month.toLocaleLowerCase().includes('m')
// })
// console.log(filterWordsM)

// const students=[
//     {
//         name:'Akash',
//         age:21
//     },
//     {
//         name:'Anurag',
//         age:17
//     },
//     {
//         name:"Aravind",
//         age:21
//     },
//     {
//         name:'Raman',
//         age:23
//     },
//     {
//         name:"rohit",
//         age:18
//     }
// ]

// const studentAgeAbove18=students.filter((student)=>{
//     return student.age>=18
// })
// console.log(studentAgeAbove18)

// const checkReturn=studentAgeAbove18.map(()=>{
// //here it will return undefined
// })
// console.log(checkReturn)

// const checkReturn2=studentAgeAbove18.map((student)=>{
//     return student.name//here what you mention which only return
// })

// console.log(checkReturn2)

// const methodChaining=students.filter((student)=>{
//     return student.age>=18
// }).map((student)=>{
//     return student.name
// }).filter((student)=>{
//     return student.includes('A')
// })//Multiple method we used here(filter,map,filter).Atlast which value is return.It is the output of that variable.

// console.log(methodChaining)

//REDUCE gives a single output

//const nums=[1,2,3,4,5,6,7]

// const sum=nums.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue
// },0)//here if i put (zero)0.Accumulator value initially zero.currenValue(1,2,3,4,5,6,7).otherwise it takes first value(1)as the accumulator and every number will be currentValue.
// console.log(sum)

// const add=nums.reduce((acc,cur)=>{
//     return acc+cur
// },100)//if we put 100 here it will acc value then it add with other no.So,answer will be wrong here
// console.log(add)

/////////////////////SIMPLE//////////////////////

// const addition=nums.reduce((acc,nums)=>{
//     return acc+nums
// })
// console.log(addition)//you will get correct answer.You dont need put any no here.

// const multiplication=nums.reduce((acc,nums)=>{
//     return acc*nums
// })
// console.log(multiplication)

// const multi=nums.reduce((acc,cur)=>{
//     return acc*cur
// },0)//here you get wrong answer when multiply.Be aware where to initialize and where we should not initialize.
//console.log(multi)

/*
QUESTIONS BASED ON MAP,FILTER,REDUCE
1.How can you access the index of each element inside the "forEach" and "map" methods in JavaScript?
By using the second argument of the callback function.

2.What is the primary purpose of the "filter" method in JavaScript?
To create a new array with only elements that pass a certain condition

3.How does chaining of array methods work in JavaScript?
It allows you to combine multiple array methods together to perform complex operations

4.What does the "reduce" method do in JavaScript?
 It applies a function against an accumulator and each element in the array to reduce it to a single value

5.
Given an array of numbers, create a new array that contains the squares of each number.

const numbers = [1, 2, 3, 4, 5];

// Your code here

// Expected Output: [1, 4, 9, 16, 25]
ANWER:
const numbers=[1,2,3,4,5]

const square=numbers.map((n)=>{
    return n*n
})
console.log(square)

6.Given an array of numbers, filter out the even numbers and return a new array with only odd numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your code here

// Expected Output: [1, 3, 5, 7, 9]
ANSWER:
const numbers=[1,2,3,4,5,6,7,8,9,10]

const oddNo=numbers.filter((n)=>{
    return n%2!=0
})
console.log(oddNo)

7.Given an array of numbers, find the product of all the elements in the array.

const numbers = [1, 2, 3, 4, 5];

// Your code here

// Expected Output: 120
ANSWER:
const numbers = [1, 2, 3, 4, 5];

const product=numbers.reduce((acc,cur)=>{
    return acc*cur
})
console.log(product)

8.Given an array of numbers, create a new array that contains the squares of only the odd numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your code here

// Expected Output: [1, 9, 25, 49, 81]
ANSWER:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddSquare=numbers.filter((n)=>{
    return n%2!=0
}).map((n)=>{
    return n*n
})

console.log(oddSquare)

9.Given an array of strings, count the number of times each string appears and return an object with the string as the key and the count as the value.

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// Your code here

// Expected Output: { apple: 3, banana: 2, orange: 1 }
ANSWER:
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCount={}

for(let i=0;i<fruits.length;i++){
    let count=fruits[i]
    if(fruitCount[count]){
        fruitCount[count]++
    }else{
        fruitCount[count]=1
    }
}
console.log(fruitCount)

10.Given an array of objects representing products with a price property, calculate the total cost of all products after applying a 10% discount.

const products = [

{ name: 'Product 1', price: 100 },

{ name: 'Product 2', price: 200 },

{ name: 'Product 3', price: 300 }

];

// Your code here

//Expected Output: 540
ANSWER:
const products = [
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 },
    { name: 'Product 3', price: 300 }
  ];

  let discount=10/100
  const totalAmount=products
  .map((product)=>{
    return product.price*(1-discount)
  })
  .reduce((acc,curr)=>{
    return acc+curr
  },0)
  console.log(totalAmount)  

11.Given three arrays, names, ages, and cities, write a program to combine them into one array of objects where each object contains a name, age, and city property.

const names = ['Alice', 'Bob', 'Charlie'];

const ages = [25, 30, 35];

const cities = ['New York', 'Los Angeles', 'Chicago'];

// Your code here

// Expected Output: [

// { name: 'Alice', age: 25, city: 'New York' },

// { name: 'Bob', age: 30, city: 'Los Angeles' },

// { name: 'Charlie', age: 35, city: 'Chicago' }

// ]

ANSWER:
let arr=[]
for(let i=0;i<names.length;i++){
    let obj={}
    obj.name=names[i]
    obj.age=ages[i]
    obj.city=cities[i]
    arr.push(obj)
}
console.log(arr)
*/
/*
APOCALYPSE QUESTIONS
1.So there is a Zombie Apocalypse and the military is checking everyone’s temperature to enter the refuge camp. But the military has made a major mistake. The thermometer shows the temperature lower by 2 degrees for each person but that could be fatal. Now fix the error by increasing the temperature of each person by 2 and generate a new array and assign the data to fixedTemperatures variable.

Save everyone, soldier!

Good Luck, with the mission!

const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35]

const fixedTemperatures = ....................
ANSWER:
const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35]

const fixedTemperatures =celsiusTemperatures.map((n)=>{
    return n+2
})
console.log(fixedTemperatures)

2.Good, Job soldier!

Here, is the solution to the problem before.

const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35]

const fixedTemperatures = celsiusTemperatures.map((temperature) => temperature + 2)

 Now, you need to send the data to the higher-ups but they only take the data in Fahrenheit. So, now you need to convert the data in fixedTemperatures to Fahrenheit.
 ANSWER:FAHRENHEIT FORMULA:(temperature*9/5)+32
const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35]

const fixedTemperatures = celsiusTemperatures
.map((temperature) => temperature + 2)
.map((n)=>{return (n*9/5)+32})
console.log(fixedTemperatures)

3.
Good job, soldier! 

Here, is the solution to the problem before.


const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35]

const fixedTemperatures = celsiusTemperatures.map((temp) => temp + 2)

const fahrenheitTemperatures = fixedTemperatures.map((celsius) => (celsius * 9) / 5 + 32)

Now, healthy people will be allowed to enter and people who are sick will be put in a quarantine for future checkups don’t worry.

Now, you need to pick the people that are healthy to enter. But their temperature should be less than 104 degrees Fahrenheit.

So, please filter out healthy people in a new array and save it in a variable called healthyPeople.

ANSWER:
const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35]

const fixedTemperatures = celsiusTemperatures.map((temp) => temp + 2)

const fahrenheitTemperatures = fixedTemperatures.map((celsius) => (celsius * 9) / 5 + 32)

const healthyPeople=fahrenheitTemperatures.filter((temperature)=>{
    return temperature<104
})
console.log(healthyPeople)

4.Good job, Soldier!

Here, is the solution to the problem before.

const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35]

const fixedTemperatures = celsiusTemperatures.map((temperature) => temperature + 2)

const fahrenheitTemperatures = fixedTemperatures.map((celsius) => (celsius * 9) / 5 + 32)

const healthyPeople = fahrenheitTemperatures.filter((temperature) => temperature < 104)

Now, you have to check how much food is there in the warehouse. You have the weight of each container that the food is kept in kgs you need to calculate the total kgs of food in the warehouse. Hint, you need a single value at the end from a whole set of data.

const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35]

const fixedTemperatures = celsiusTemperatures.map((temperature) => temperature + 2)

const fahrenheitTemperatures = fixedTemperatures.map((celsius) => (celsius * 9) / 5 + 32)

const healthyPeople = fahrenheitTemperatures.filter((temperature) => temperature < 104)

const warehouse = [86, 76, 98, 50, 12, 98, 85, 84, 81]

const totalFood = .................
ANSWER:
const warehouse = [86, 76, 98, 50, 12, 98, 85, 84, 81]

const totalFood =warehouse.reduce((acc,cur)=>{
    return acc+cur
})
console.log(totalFood)

5.You are Hero, Soldier!

Here, is the solution to the problem before.

const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35]

const fixedTemperatures = celsiusTemperatures.map((temperature) => temperature + 2)

const fahrenheitTemperatures = fixedTemperatures.map((celsius) => (celsius * 9) / 5 + 32)

const healthyPeople = fahrenheitTemperatures.filter((temperature) => temperature < 104)

const warehouse = [86, 76, 98, 50, 12, 98, 85, 84, 81]

const totalFood = warehouse.reduce((acc, curr) => acc + curr)

console.log(totalFood)

So, it turns out now one more person decided to join the camp. And you already checked he is healthy. Just need to update the list of healthyPeopledata and add his actual temperature which is 98.6 Fahrenheit showing he is healthy and is permitted to enter.

ANSWER:
healthyPeople.push(98.6)
console.log(healthyPeople)

6.Good job, Soldier!

Here, is the solution to the problem above.

const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35]

const fixedTemperatures = celsiusTemperatures.map((temperature) => temperature + 2)

const fahrenheitTemperatures = fixedTemperatures.map((celsius) => (celsius * 9) / 5 + 32)

const healthyPeople = fahrenheitTemperatures.filter((temperature) => temperature < 104)

healthyPeople.push(98.6)

So, some people from the quarantine are okay they just had normal fevers now they can enter the camp but to do that you need to enter their temperatures. And the data is given for the new people free from quarantine.

const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35]

const fixedTemperatures = celsiusTemperatures.map((temperature) => temperature + 2)

const fahrenheitTemperatures = fixedTemperatures.map((celsius) => (celsius * 9) / 5 + 32)

const healthyPeople = fahrenheitTemperatures.filter((temperature) => temperature < 104)

healthyPeople.push(98.6)

const newPeople = [95, 93.2, 100.4, 98.6, 102.2, 91.4, 95.5]
ANSWER:
const newPeople = [95, 93.2, 100.4, 98.6, 102.2, 91.4, 95.5]

for(let i=0;i<newPeople.length;i++){
    newPeople[i]=(newPeople[i]-32)*5/9
}
console.log(newPeople)

7.You are a SuperHero.

And here, is the solution.

const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35]

const fixedTemperatures = celsiusTemperatures.map((temperature) => temperature + 2)

const fahrenheitTemperatures = fixedTemperatures.map((celsius) => (celsius * 9) / 5 + 32)

let healthyPeople= fahrenheitTemperatures.filter((temperature) => temperature < 104)

healthyPeople.push(98.6)

const newPeople = [35, 34, 38, 37, 39, 33, 35]

healthyPeople= healthyPeople.concat(newPeople)
ANSWER:
healthyPeople= healthyPeople.concat(newPeople)
console.log(healthyPeople)
*/

//91.some and every methods return true or false.If we return truthy true will be value otherwise falsy

// const evenNumbers=[0,2,4,6,8]

// const value=evenNumbers.some((n)=>{
//     return 'hello'//true will be the return value
// })

// console.log(value)

// const result=evenNumbers.some((n)=>{
//     return n > 4
// })
// console.log(result)

// const even=[10,1,3,5,6,8]
// const result2=even.some((n)=>{
//     return n%2==0
// })
// console.log(result2)

////////////////////////SOME//////////////////////////////////
//A note about some method which check if there is any possible values which return true.If the array has only one true value or satisfy the condition it show or return true.if the true value found at first it does not iterate the array.The value true will stored and returned.

// const n=[0,3,4,6,8]

// const result=n.some((n,i)=>{
//     if(n%2==1){
//         console.log(i)
//     }
//     return n%2==1
// })
// console.log(result)

//////////////////////////EVERY////////////////////////////////
//Every method check every no or values in the array should be true otherwise it will return false.In every method if it got false stop checking the other no.
// const n=[0,2,4,10,8]

// const result3=n.every((no)=>{
//     return no%2==0
// })
// console.log(result3)

//Another example
// const no=[0,2,1,3,5,6,8]
// const result4=no.every((n)=>{
//     return n%2==0
// })
// console.log(result4)

/*
QUESTIONS BASED ON SOME AND EVERY

1.What is the primary purpose of the "some()" method in JavaScript?
To check if at least one element in an array satisfies a condition.

2.Which method in JavaScript is used to check if all elements in an array satisfy a condition?
every()

3.What is the main difference between the some() and every() methods in JavaScript?
some() checks if at least one element satisfies the condition, while every() checks if all elements satisfy the condition.

4.How do you use the some() method in JavaScript to check if an array contains at least one element that is greater than 5?
arr.some(x => x > 5)

5.What is the return value of the every() method in JavaScript when all elements in the array satisfy the condition?
 true

6.const searchResults = [

    { name: 'Laptop', price: 1200, onSale: false },

    { name: 'Smartphone', price: 800, onSale: true },

    { name: 'Tablet', price: 500, onSale: false }

];

// Use the any method to check if any product in the search results is on sale.

const isAnyProductOnSale = ..................................................................;

console.log(isAnyProductOnSale);

ANSWER:
const isAnyProductOnSale=searchResults.some((product)=>{return product.onSale})
console.log(isAnyProductOnSale);

7.
const examScores = [75, 80, 85, 90, 95];

// Use the any method to check if all student passed the exam (scored 70 or higher).

const didEveryStudentPass = ......................................................................;

console.log(didEveryStudentPass);
ANSWER:
const didEveryStudentPass = examScores.every((scores)=>{
    return scores >70
})

console.log(didEveryStudentPass);
*/

//95.argument keywords in js

//It will found inside the every function.In arrow function does not have argument.

// function add(a,b){
//     console.log(arguments)//Arguments(2) [1, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ].It is a array of objects.
//     return a+b
// }
// add(1,5)
//whatever arguments we pass it will be stored in the array of objects.Incase if we define two parameter in a function.Two parameter will be taken but others will be in the argument.Thats why in a function the parameter is defined or not.The argument will be there

// function sub(a,b){
//     console.log(arguments)//Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//     return a-b
// }

// console.log(sub(1,2,3,4,5))//-1

//arguments will accessed based on the index

///////////////EXERCISE//////////////////

// function add(...arguments){
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i]
//     }
//     return sum
// }

// console.log(add(1,2,3,4,5,6,7,8,9,10))

//////////////////EXERCISE////////////////////////////////

// function add(){
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i]
//     }
//     return sum
// }
// console.log(add(1,2,3,4,5,6,7,8,9,10))



//FUNCTION EXPRESSION

// const add=function(){
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i]
//     }
//     return sum
// }
// console.log(add(1,2,3,4,5))

//For ARROW FUNCTION you will get Uncaught ReferenceError: arguments is not defined.Argument keyword won't work here.Here we use rest parameter.
// const add=(()=>{
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i]
//     }
// })

// console.log(add(1,2,3,4,5))

///////ARROW FUNCTION USING REST PARAMETER///////
// const add=((...arguments)=>{
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i]
//     }
//     return sum
// })

// console.log(add(1,2,3,4,5))

/*
QUESTIONS BASED ON ARGUMENT KEYWORD

1.What is automatically created within every function in JavaScript?
The 'arguments' keyword

2.What is the primary purpose of the 'arguments' keyword in JavaScript?
To access all the arguments passed to a function.

3.Is the arguments keyword an array in JavaScript?
No, it is an array-like object.

4.How do you convert the 'arguments' object to an array in JavaScript?
Using the 'Array.from()' method

5.What is the significance of the 'arguments' keyword in JavaScript for old browsers?
It is a necessary feature for backward compatibility with older browsers.
 */

//97.DEFAULT PARAMETER

// function multiply(a,b){
//     return a*b
// }
// console.log(multiply(2,5))
//console.log(multiply(5))//NAN because two argument is required.To avoid this kind of scenario we use default parameter.b becomes undefined

//default parameter used in the below function
// function multi(a,b=2){
//     return a*b
// }
// console.log(multi(1,2))//2
// console.log(multi(10))//10
// console.log(multi(2,undefined))//4
// console.log(multi(2,null))//0
// console.log(multi(2,''))//0

// function rollDice(){
//     return Math.floor(Math.random()*6)+1//give no between 1 to 6
// }
// console.log(rollDice())

// function rollDice2(no=1){
//     return Math.floor(Math.random()*no)+1
// }
// console.log(rollDice2(6))
// console.log(rollDice2())//if you did not use default parameter you get NaN.

// function roll(n){
//     if(n==undefined){
//         n=1
//     }
//     return Math.floor(Math.random()*n)+1
// }

// console.log(roll(5))
// console.log(roll())
// console.log(roll(undefined))

/*
QUESTIONS BASED ON DEFAULT PARAMETER

1.What feature introduced in ES6 allows setting default values for function parameters?
Default Parameters

2.Default parameters in JavaScript are used when:

 A function is called without passing any arguments AND 
A function is called with undefined arguments

3.What happens to null or false values in JavaScript multiplication?
They are converted to zero

4.How are default parameters set in JavaScript functions?
By assigning values directly to parameters

5.Write a JavaScript function called sendMessage that returns a message. Set the default value of name to "Myself" and the default value of msg to "Good Morning".

// Write your code here

console.log(sendMessage());
ANSWER:
function sendMessage(name="Myself",msg="Good Morning"){
 return name+" "+msg
}
console.log(sendMessage())
*/

//99.spread operator works both in array and string and objects and function.It splits the string into separate character or it split the given argument into single character.
// const nums1=[1,2,3,4,5]
// const nums2=[6,7,8,9,10]
//array usage
// const joinedArray=nums1.concat(nums2)
// console.log(joinedArray)
// const spread=[...nums1,...nums2]
// console.log(spread)

//string usage
// const myName="hello"
// const spread2=[...nums1,...nums2,myName]
// console.log(spread2)

//object usage
// const user={
//     name:"Anurag",
//     age:25
// }

// const updatedUser={...user}//spread:it copy first leverl property only
// console.log(updatedUser)

//function usage(use arguments keyword)
// function add(){
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i]
//     }
//     return sum
// }
// console.log(add(1,2,3,4,5))
// let numbers=[1,2,3,4,5,6,7,8,9,10]
// console.log(add(...numbers))//in function calling time we use spread parameter
//spread syntax requires iterable it does not iterate normal objects

/*
questions based on the spread operator

1.What does the spread operator allow in JavaScript?
 Merging arrays and objects

2.How is the spread operator used for object copying in JavaScript?
By creating shallow copies

3.In JavaScript, where can the spread operator be used while calling a function?
For passing arguments to the function

4.What is one common use of the spread operator in JavaScript functions?
For passing large argument lists

5.What will be the output of this function when using the spread operator to pass arguments?

function sum(x, y, z) {

return x + y + z;

}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
ANSWER:
6

6.What will be the output when using the spread operator with strings?

const str = "hello";

const chars = [...str];

console.log(chars);

ANSWER:
["h", "e", "l", "l", "o"]

*/

