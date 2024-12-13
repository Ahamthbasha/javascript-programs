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