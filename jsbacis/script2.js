//21.deepCopy vs shalowCopy
/*
const fruits=['mango','apple','orange']
const myFruits=fruits
myFruits.push("Dates")
myFruits.push('grapes')
console.log(fruits)
console.log(myFruits)
//here you add two fruits in the myFruits array but it change the fruits array also.because when you assigning value to the another variable it will share the same address.Here if you update the array bothe array will updated or changes will affect both.


const user1={
    firstName:"Anurag",
    lastName:"singh"
}

const user2=user1
user2.lastName="pandey"
console.log(user1)
console.log(user2)

//here you change the user2 object lastname property but it also change the user1 object also.

//here the variable point the same address when assigning the values to the another variables

const userpeyar1="Anurag" //@6683
let userpeyar2=userpeyar1 //@6683
console.log(userpeyar1)
console.log(userpeyar2)

const userpeyar3="Anurag"
let userpeyar4=userpeyar3
userpeyar4=userpeyar3+"singh"//it creates a new address
console.log(userpeyar4)

//here when you assigning the value to the another variable it share or point the same address

const user_One={
    firstName:'Anurag',
    lastName:'Singh',
}//This address @118619

const user_Two={}//Its address @118627

//By this way object address are different for two objects
Object.assign(user_Two,user_One)
//By Object.assign we assign the value for the object two but it gives new address to user_Two.Changes made in the one object does not affect the another one.
console.log(user_One)
console.log(user_Two)
user_One.lastName="procoder"
user_Two.lastName="Singham"
console.log(user_One)
console.log(user_Two)



//spread operator
//It also create a new addres when the assign the value to another variable

const developer1={firstName:"Anurag",lastName:"Singh"}
const developer2={...developer1}
console.log(developer1)
console.log(developer2)
developer2.firstName="Ahamathbasha"
console.log(developer1)
console.log(developer2)

//Both developer one object and developer two object is not same both are having different objects.


//for array

const vegetables=['chilli','potato','tomato']
const myVegetables=[]
Object.assign(myVegetables,vegetables)
console.log(myVegetables)//array uses Object.assign how? behind the scene arrays are also object which is non primitive datatype.so it uses the Object method


const juices=['apple juice','orange juice','tomato juice']//@6549
const myJuices=[...juices]//@6551
console.log(juices)
console.log(myJuices)
//if we change anything here it wont affect the other because address is different

//concat method also wont affect each other because its address will be different
const grocessary=['milk','Dhall','biscuits']//@82749
const myGrocessary=[].concat(grocessary)//@82797
console.log(grocessary)
console.log(myGrocessary)

//slice will create the newArray.By slice method also the method is creating the new address.So any changes made dont affect each other.

const school=['svm','ideal','siasc']//@114527
const mySchool=school.slice()//@114545
console.log(school)
console.log(mySchool)

// ////////////////////////Important note this///////////////////////////////////////
const object11={
    firstName:"Ahamath",
    lastName:"Singh",
    address:{
        city:'Delhi',
        pincode:606732,
    },
    subject:['physics','cs','maths']
}

const object12={...object11}
console.log(object11)
console.log(object12)
object12.firstName="Anurag"
console.log(object11)
console.log(object12)
object12.address.city="Mumbai"
//in nestedobject if we change the value it  affect each other.Why?because inside the nested object which located on the same address.If we change in nested thing which affect the original also.
console.log(object11)
console.log(object12)
console.log(object11.address.city)
console.log(object12.address.city)

//it is shallow copy because both are sharing the same address
//user object address @145775
const user={
    name:"Amit",
    address:{
        city:"Delhi",
        pincode:110001
    }
}//address id @145777
console.log(user.name)
//user2 object address @145775
const user2=user// user2 address id @145777 is also same 
console.log(user2)
user2.address.city="mumbai"
console.log(user)
console.log(user2)
//Above example is for shallow copy

//shallow copy example
const user={
    name:"Amit",
    address:{
        city:"Delhi",
        pincode:110001,
    }
}

const user2={...user}
user.name="Ahamath"
user.name="Anurag"
console.log(user)
console.log(user2)
user.address.city="namakkal"
console.log(user.address.city)//namakkal
console.log(user2.address.city)//namakkal

//deep copy example it wont affect the other variables
const user3=JSON.parse(JSON.stringify(user))
user3.address.city="tvm"
console.log(user)
console.log(user3)

//exercise
const original = {

    name: "Amit",
    
    address: {
    
    city: "Delhi",
    
    pincode: 110001
    
    }
    
    };
    
    const copy = Object.assign({}, original);
    
    copy.address.city = "Mumbai";
    
    console.log(original.address.city);

    //output:Mumbai

//exercise

const people = ["Rahul", { name: "Sita", address: { city: "Kolkata", pincode: 700001 } }];

const shallowCopy = people.slice();

shallowCopy[1].address.city = "Hyderabad";

console.log(people[1].address.city);

//output:"hyderabad"


//22.combined assignment operator or compound operators

//+=,-=.*=

let num=5
//num=num+2//or
num+=2
console.log(num)
num+=2
console.log(num)

//when you put debugger and hover on the vairable it will increase the value it is a bug.Just know about it.

let num2=2
num2*=2
console.log(num2)

let num3=10
num3-=2
console.log(num3)

let num4=10
num4/=2
console.log(num4)

let num5=10
num5%=2
console.log(num5)

let num6=2
num6**=2
console.log(num6)

//increment
let n=1
n++//increase one digit at a time
console.log(n)//

//check this line of code in chrome browser
//let no=5
//post increment
//no++//it will give result or current no after it increase the value and store in that place
//no++ 5
//no 6

//pre increment
// let no=5
// ++no//6
// no //6
//++n//it will increase the value and store in the place 

let number=5

const newNumber=number++//5++ 5 will be stored in newNumber.After that it increases the number variable
console.log(newNumber)
console.log(number)

let number2=5
const newNumber2=++number2//++5 6 will stored in that newNumber2 and number2 will be increased
console.log(newNumber2)
console.log(number2)

let postMinus1=5

const postMinus2=postMinus1--
console.log(postMinus2)//5
console.log(postMinus1)//4

let postMinus3=5
const postMinus4=--postMinus3
console.log(postMinus4)//4
console.log(postMinus3)//4

//Here when you decrease or increase the variable address will be changed always performing increment or decrement operation.

//23.while loop

//true or false
//in while conditon if we set true it won't stop until it got false
let num=1
while(num <= 10){
    console.log(num)
    num++
}

let no_One=1
while(no_One<100){
    console.log(no_One)
    no_One++ //(or) no_One=no_One+1
}
    
const friends=['Akash','Rahul','Adarsh','Arif','Gaurav']
let i=0
// let length=friends.length-1
// while(i<length){
//     console.log(friends[i])
//     i++
// }

while(i<friends.length){
    console.log(`${i+1}.${friends}`)
    i++
}


const friends=['Akash','Rahul','Adarsh','Arif','Gaurav']

let i=0

while(i<friends.length){
    friends[i]=(friends[i]+" "+"kumar")
    i++
}
console.log(friends)


//24.for loop 
//print no
console.log("program start")

for(let i=1;i<10;i++){
    console.log(i)
}

console.log("program ended")

//print array value
const brocampFriends=['nangopan','muthuthasan','vignesh','harrish','abin','lokesh','sathish','madhan']

for(let i=0;i<brocampFriends.length;i++){
    console.log(brocampFriends[i])
}

//print 1 to 100 even numbers 
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}

//fruits

const fruits=['apple','grapes','oranges','kiwi']
for(let i=0;i<fruits.length;i++){
    fruits[i]=fruits[i]+" is a fruit"
}
console.log(fruits)

//25 do while loop
//it will execute atleast one time if the condition is false.
//a normal example
let i=0
do{
    console.log(i)
    i++
}while(i<=5)


//do while correct use case example
let j=10
do{
    console.log(j)
    j++
}while(j<=5)


let k=0
do{
    console.log(k)
    k++
}while(k<=5)
console.log(k)//you will get k value

// for(let i=0;i<=5;i++){
//     console.log(i)
// }
//console.log(i)//here you will get reference error because i is not defined which is block scope.

// for(var i=0;i<=5;i++){
//     console.log(i)
// }
// console.log(i)//var is global scope so you can get the value of i


//print 1 to 100
for(let n=1;n<=100;n++){
    console.log(n)
}


//find the sum of 1000 numbers
let result=0
for(let i=1;i<=1000;i++){
    result=result+i
}
console.log(result)

//find the maximum no in an array
let numbers=[5,10,2,8,15]
let count=0
for(let i=0;i<numbers.length;i++){
    count++
}
console.log('The maximum no of elements in array',count)


//reverse the string
let string='hello'
for(let i=string.length-1;i>=0;i--){
    console.log(string[i])
}
//or
let str='hello'
let newStr=''
for(let i=str.length-1;i>=0;i--){
    newStr=newStr+str[i]
}
console.log(newStr)


//count no fo vowels in a string
let vowels=['a','e','i','o','u']
let string='javascript'
let count=0
for(let i=0;i<vowels.length;i++){
    for(let j=0;j<string.length;j++){
        if(vowels[i]===string[j]){
            count++
        }
    }
}
console.log(count)


//fibonacci series
let a=0
let b=1

for(let i=0;i<10;i++){
    console.log(a)
    let next=a+b
    a=b
    b=next
}


//find the factorial of the no
let n=5
let factorial=1
for(let i=1;i<=n;i++){
    factorial=factorial*i
}
console.log(factorial)

let no=[1,2,3,4,5]

let square=no.map((i)=>{
    return i*2
})

console.log(square)

//checking prime or non prime no

let a=9
let count=0
for(let i=2;i<=a;i++){
    if(a%i==0){
        count++
    }   
}
if(count==1){
    console.log("prime no")
}else{
    console.log("not a prime no")
}


//introduction to functions

//if a code is repeatedly used we will make that code as a function .If we call that it will execute the code 
//below line of code is repeatedly used
console.log('HI')
console.log('My name is Anurag Singh')
console.log("I am a webdeveloper")

console.log("*****************")

console.log('HI')
console.log('My name is Anurag Singh')
console.log("I am a webdeveloper")

console.log("*****************")

console.log('HI')
console.log('My name is Anurag Singh')
console.log("I am a webdeveloper")

console.log("*****************")

//create this as function
//function definition
function introduceMe(){
console.log('HI')
console.log('My name is Anurag Singh')
console.log("I am a webdeveloper")
console.log("*****************")
}
console.log(introduceMe)
introduceMe()//we call the function

//when you enter introduceMe() atlast we did not get any return  value so it gives undefined instead of value
// HI
// My name is Anurag Singh
//  I am a webdeveloper
// *****************
// undefined

//for default return value of the function is undefined

//without using return

function introduce(){
    console.log("HI")
    console.log("My name is Anurag")
}

const returnValue=introduce()//result will be undefined
console.log(returnValue)

function checkReturn(){
    console.log("Hi")
    console.log("My name is Ahamath") 
    return 2 //"value will be written"
}
const checkReturnValue=checkReturn()
console.log(checkReturnValue)

//when you calling the function where we we pass argument.User pass argument

//in function definition we should have parameters

function argPara(username){
    console.log('Hi')
    console.log(username)
}

argPara('Ahamathbasha')

//dynamic

function argPara2(username){
    console.log("HI")
    console.log(`my name is ${username}`)
}

argPara2("ahamathbasha")
argPara2("madhan")
argPara2("abin")


//check if we did pass any argument to the function definition
function argPara3(username){
    console.log("Hi")
    console.log(`my name is ${username}`)
}

argPara3()//here it would get undefined if we not pass any argument

//setting default value or default parameters 2015 introduced
function argPara4(username="web developer"){
    console.log('Hi')
    console.log(`my name is ${username}`)
}
argPara4()

//setting default parameter
function argPara5(username){
    if(!username){
        username="procoder"
    }
    console.log("hi")
    console.log(`My name is ${username}`)
}

argPara5()
argPara5("ahamathbasha")

//setting defalt value
function argPara6(username){
    console.log("hi")
    console.log(`My name is ${username || "procoder"}`)
}
argPara6()
argPara6("ahamathbasha")

//for two parameters or more
//here it will avoid the second parameter
function parameter(username){
    console.log(`my name is ${username}`)
}
parameter("ahamathbasha","software engineer")

//correct way
function parameter2(username,designation){
    console.log(`My name is ${username}`)
    console.log(`I am ${designation}`)
}

parameter2("ahamathbasha","software engineer")


//exercise

function exercise(username,designation,age){
    console.log(`my name is ${username}`)
    console.log(`I am a ${designation}`)
    console.log(`I am ${age} years old`)
}

exercise("ahamathbasha","software engineer",21)

//here what kind of value give to the argument will become the datatype of the parameter

function checkDatatype(username,designation,age){
    console.log(typeof username)
    console.log(typeof designation)
    console.log(typeof age)
}

checkDatatype("basha","software engineer",21)


//result of a function will be given return keyword

//question


// 1.What is the primary purpose of using functions in programming?
// To organize code and avoid repetitive tasks

// 2.What are arguments in JavaScript functions?
// Values passed to the function when it is called

// 3.What are default parameters in JavaScript functions?
//  Parameters that have default values assigned to them if no value is provided when the function is called 

// 4.How do functions with arguments contribute to code reusability in JavaScript?
// They allow functions to produce different results with different input

// 5.What are parameters in JavaScript functions?
// Named variables inside the parenthesis of the function definition


// let count=0
// for(let i=1;i<=100;i++){
//     if(i==1){
//         continue
//     }
//     for(let j=1;j<=i;j++){
//         if(i%j==0){
//             count++
//         }
//     }
//     if(count==2){
//         console.log(i)
//     }
//     count=0
// }


//generate a password length 8

let capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let small="abcdefghijklmnopqrstuvwxyz"
let no="0123456789"

let allCharacter=capital+small+no

let password=""

for(let i=0;i<8;i++){
    const randomIndex=Math.floor(Math.random()*allCharacter.length)
    password=password+allCharacter[randomIndex]
}
console.log(password)

//function result will be given by return 

//without using the return keyword in the function.The result will be undefined
function addTwoNumbers(){
    console.log(5+6)
}

const result=addTwoNumbers()
console.log(result)//undefined

function addTwoNumbers2(){
    return 5+6
}
const result1=addTwoNumbers2()
console.log(result1)//value will be printed

function add(a,b){
    return a+b
}
const result2=add(5,5)
console.log(result2)//value will be printed

//tricky
//if we only use return keyword without any expression it will also give undefined

function add2(){
    return
}

const result3=add2()
console.log(result3)//undefined

function subtractTwoNumbers(a,b){
    return a-b
}

const sub=subtractTwoNumbers(5,5)
console.log(sub)

//by using return we can return objects and arrays and functions also.

//calling a function we pass some values or empty in the argument.That if we use expressions in the argument .The expressions will be evaluated first then it will pass to the parameter.

function demo(a,b){
    return a+b
}

const result7=demo(56+4,2+2*4)
console.log(result7)

//tricky

function demo2(a,b){
    return a+b
}
const result9=demo2(demo2(4,6),demo2(8,12))//It first evaluate the expression.demo2(4,6) function will evaluate and return 10.another parameter demo2(8,12) it evaluated function will return 20 atlast outer demo2 have 10 and 20 as argument value.demo2(10,20)
console.log(result9)
*/

//question
/* 

1.What is a "return value" in the context of functions in JavaScript?
A value that is returned by the function after its execution

2.What is the purpose of the return keyword in JavaScript functions?
To terminate the function's execution and specify the value to be returned to the caller

3.What happens if a JavaScript function contains a return statement without specifying a value?
The function will return undefined

4.Can a JavaScript function have multiple return statements?
Yes, multiple return statements can be used to return different values based on conditions

*/
//simple questions
/*
01.
You are developing a web application that requires a function to calculate the area of various geometric shapes. Implement a JavaScript function named calculateArea that takes two parameters: shape and dimensions. The shape parameter will be a string specifying the type of shape (e.g., "rectangle", "circle", "right-triangle"), and the dimensions parameter will be an array containing the necessary dimensions for calculating the area of the specified shape.

Your task is to implement the calculateArea function in such a way that it can calculate the area for different shapes based on the input provided.

calculateArea("rectangle", [5, 10]); // should return 50

calculateArea("circle", [7]); // should return approximately 153.94 (rounded to two decimal places)

calculateArea("right-triangle", [3, 4]); // should return 6

Ensure that your function handles cases where incorrect or insufficient parameters are provided. If the shape parameter is not recognized or the required dimensions are not provided for a particular shape, the function should return an appropriate error message.

Write the calculateArea function in JavaScript.
FORMULA
1.RECTANGLE:LENGTH*WIDTH
2.CIRCLE:MATH.PI*R*R
3.RIGHTTRIANGLE:0.5*BASE*HEIGHT

function calculateArea(shape,dimensions){
    if(shape=="rectangle" && dimensions.length ===2){
        return dimensions[0]*dimensions[1]
    }
    else if(shape=="circle" && dimensions.length===1){
        return 3.14*Math.pow(dimensions[0],2)
    }
    else if(shape=="right-triangle" && dimensions.length===2){
        return 0.5*dimensions[0]*dimensions[1]
    }
    else{
        return "Error:the shape parameter does not exist"
    }
}

console.log(calculateArea("rectangle",[5,10]))
console.log(calculateArea("circle",[7]))
console.log(calculateArea("right-triangle",[3,4]))
console.log(calculateArea("dont know",[1,2]))


2.
You are developing a simple banking application and need to implement a function to calculate the interest earned on a savings account balance. Implement a JavaScript function named calculateInterest that takes two parameters: balance and rate. The balance parameter represents the current balance in the savings account, and the rate parameter represents the annual interest rate (in decimal form).

Your task is to implement the calculateInterest function to calculate the interest earned on the balance based on the provided interest rate.

calculateInterest(1000, 0.05); // should return 50

calculateInterest(5000, 0.03); // should return 150

Write the calculateInterest function in JavaScript.

FORMULA:
calculateInterest=balance*interest rate

SOLUTION:

function calculateInterest(balance,interest){
    return balance*interest
}

console.log(calculateInterest(1000,0.05))
console.log(calculateInterest(5000,0.03))

3.You are developing a simple calorie tracking application and need to implement a function to calculate the total calories burned during a workout session. Implement a JavaScript function named calculateCaloriesBurned that takes an array parameter activities, where each element represents the calories burned for a specific activity.

Your task is to implement the calculateCaloriesBurned function to calculate the total calories burned during the workout session based on the provided activities.

calculateCaloriesBurned([100, 150, 200]); // should return 450

calculateCaloriesBurned([50, 75, 100, 150]); // should return 375

Write the calculateCaloriesBurned function in JavaScript.

FORMULA:add the calories thats all

function calculateCaloriesBurned(caloriesburned){
    let sum=0
    for(let i=0;i<caloriesburned.length;i++){
        sum=sum+caloriesburned[i]
    }
    return sum
}
console.log("calories burned in workout session",calculateCaloriesBurned([100, 150, 200]))
console.log("calories burned in workout session",calculateCaloriesBurned([50, 75, 100, 150]))
*/


