// 1. precedency , how js runs our code,Read evaluate print loop.

/*
console.log("hello world")
console.log(5+6)

console.log(5+6 - 4/2)
console.log(5+5-4*5)
console.log(5+6-4/2*4)
console.log(8-(5+6))
*/

//2.primitive datatype

/*
let no=123
console.log(typeof no)
let pointno=12.34
console.log(typeof pointno)
let negativeno=-20
console.log(typeof negativeno)
let str="hello"
console.log(typeof str)
let emptystr=''
console.log(typeof emptystr)
let backtick=``
console.log(typeof backtick)
//backtick will print the output based on how we write it.
console.log(`hello my name is basha 
    ahamathbasha`)
console.log(typeof '100')
let checkNoOrString=+'100'
console.log(typeof checkNoOrString)
console.log(checkNoOrString)
let checkNoOrString2=100+''
console.log(typeof checkNoOrString2)
console.log(checkNoOrString2)
let checkNoOrString3=''+100
console.log(typeof checkNoOrString3)
console.log(checkNoOrString3)
console.log(typeof 100+'')
console.log(typeof (100+''))
console.log(+true)
console.log(+false)
let no
console.log(typeof no)
console.log(typeof undefined)
console.log(+undefined)
let no2=null
console.log(typeof no2)
console.log(typeof null)
console.log(+null)
let bigint=BigInt(123456789000000999999999)
console.log(bigint)
console.log(typeof bigint)
//console.log(+bigint) we cannot convert bigint to no because both are used for different purpose
console.log(''+bigint)
let symbol1=Symbol("description")
let symbol2=Symbol("description")
console.log(symbol1 === symbol2)
console.log(typeof symbol1)
//console.log(+symbol1)we cannot convert symbol into no
//console.log(''+symbol1)we cannot convert symbol into string also
*/


//3.variables

/*
let name="ahamathbasha"
let age=21
let desig="full stack developer"

let userIntro="Hi, my name is "+name+""+".F."+" I am "+age+" years old."+"My desgination is "+desig

console.log(userIntro)

let name1="rocky"
console.log(name1)
name1="rangan"
console.log(name1)
const hoursInADay=24
//hoursInADay=60 show error
console.log(hoursInADay)

{
    var no=10
}
console.log(no)
{
    let no1=10
    console.log(no1)
}
//console.log(no1) we use let which block scope outside the block it won't be accessible
{
    const no2=20
    console.log(no2)
}
//console.log(no2) we use const which block scope outside the block it won't be accessible

//undefined
let a
console.log(a)
//not defined
//console.log(value)

//before access of var gives undefined
console.log(b)
var b=10
//before access of let and const give reference or not defined error
//console.log(c)
let c="dhool"

//1.tricky

const num=5
//num++ show error const variable which means you can not change
console.log(num+5)

*/


//4.How our code executed
// console.log(firstName)

// var firstName="ahamathbasha"
// let lastName=".F"
// let age=21
// const yearOfBirth=2003

// console.log(firstName)

//5.Dialog boxes
/*
alert("your message is here")
console.log(alert("your message is here"))
const alertResult=alert("no more data")
console.log(alertResult)//alert return value is undefined
confirm("would you like to proceed")//its return value is true or false
console.log(confirm("would you like to proceed"))
console.log(confirm("would you like to proceed"))
const ans=confirm(5>3)
console.log(ans)
const correctAns=confirm("5 >3")
// console.log(correctAns)
let name=prompt("please enter your name")
console.log(name)
let novalue=prompt("please enter your thing")
console.log(novalue)
alert("your name is "+name)
*/

//6.script methods and properties

/*
const message='hello'
console.log(message[0])
console.log(message[11])//undefined
console.log(message.length)
//It wont change the original string or variable
console.log(message.toUpperCase())
console.log(message)
console.log(message.toLowerCase())
console.log(message)

//trim also wont change the original string
let cut="   hi   "
console.log(cut.trim())
console.log(cut)
console.log(cut.trimStart())
console.log(cut.trimEnd())
console.log(cut)

//chaining
let methodChaining="  hi  all  ".trim().toLowerCase().toUpperCase()
console.log(methodChaining)

//Includes true or false it is case sensitive
let check="Hi i am ahamathbasha"
console.log(check.includes("i"))
console.log(check.includes("I"))
//indexOf return index value of the character
let name="shahrukhan"
console.log(name.indexOf("h"))
console.log(name.indexOf("g"))//if the character or word not there gives -1

//replace and replace all it also does not change the string

let message="hi , i am basha"
console.log(message.replace("hi","hello"))
console.log(message)
console.log(message.replace("bye","hello"))//if it is not matched there will be no change
console.log(message.replace("a","A"))
console.log(message)
console.log(message.replaceAll("a","A"))
console.log(message)

//concat

let name="ahamathbasha"+" F"
console.log(name)
let movie="dark knight rises"
let director=" directed by christopher nolan"
console.log(movie.concat(director))

//padStart and padEnd also does not change the original string

let lastFourDigit="8654"
console.log(lastFourDigit.padStart(16,"@"))
console.log(lastFourDigit)
console.log(lastFourDigit.padEnd(16,"@"))
console.log(lastFourDigit)

//charAt return the character of the specified index
let moviename="vasool raja"
console.log(moviename[3])
console.log(moviename.charAt(3))

//charCodeAt() gives the unicode value of the index of the character not ascii value
let name="munna bhai"
console.log(name.charCodeAt(0))


//split it does not also change the original string
let name="My name is Anurag"
console.log(name.split())//[ 'My name is Anurag' ]
console.log(name.split(''))
console.log(name.split(' '))
console.log(name.split("a"))
console.log(name)

const name="ahamathbasha"
const templateString=`Hi my name is ${name}`
console.log(templateString)


const greet=" Horray! "
console.log(greet.indexOf("r"))
console.log(greet.trim())

const name="kgf rockybhai"
console.log(name.replace("kgf","bagheera"))
console.log(name)

const name2="vicky hi vicky"
console.log(name2.replaceAll("vicky","bye"))
console.log(name2)



//7.MathObject

console.log(13/2);
console.log(13%2)
console.log(5 ** 2)// exponential 5*5=25
//Math is a builtin Object
console.log(Math.PI)
console.log(Math.sqrt(16))
console.log(Math.pow(2,5))
console.log(2 ** 5)
// () is method without () is property
//downward
console.log(Math.floor(2.4))
console.log(Math.floor(2.9))
console.log(Math.floor(2.5))
console.log(Math.floor(-2.5))

//upwards
console.log(Math.ceil(2.1))
console.log(Math.ceil(-2.1))

//round(0.1 to 0.4 downwards otherwise upwards)
console.log(Math.round(2.1))
console.log(Math.round(2.4))
console.log(Math.round(2.5))
console.log(Math.round(2.6))
console.log(Math.round(-2.1))
console.log(Math.round(-2.5))

//Math.random gives value 0 to 1. If we multiply with any given no it won't come from that limit. 
for(let i=1;i<=5;i++){
console.log(Math.random())
}

for(let i=1;i<=5;i++){
console.log(Math.random()*20)
}

//To get the number in integer we use Math.floor

for(let i=1;i<=5;i++){
console.log(Math.floor(Math.randrom()*20))
}

//infinity , -infinity ,nan
console.log(8/0)
console.log(typeof(8/0))
console.log(-8/0)
console.log(typeof(-8/0))
console.log(0/0)
console.log(typeof(0/0))


//when we get value using prompt it will store as a string datatype
let height=prompt("enter height")
let width=prompt("enter width")
console.log(height)
console.log(typeof height)
console.log(width)
console.log(typeof width)
//type conversion
console.log(`area of a rectangle is ${height*width}`)
//It print the output in the document
document.write(`area of the rectangle ${height * width}`)

//tricky
let result="hello"-5
console.log(result)//NaN

//8.Truthy falsy values

//truthy values
console.log(Boolean(10))
console.log(Boolean(-10))
console.log(Boolean(' '))
console.log(Boolean(Infinity))
console.log(Boolean(-Infinity))
console.log(Boolean(0.1))

//falsy values
console.log(Boolean(''))//empty string
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(NaN))
console.log(Boolean(undefined))
console.log(Boolean(null))
//Boolean we can also use!!
console.log(!!0)

//9.comparison operator

//equality
console.log(7==7)

const userAge1=18
const userAge2=24
console.log(userAge1==userAge2)

//Implicit conversion or automatic conversion
const age1='18'
const age2=24
console.log(age1==age2)//it converts the age1 string into number

//strict equality

const n1='18'
const n2=18
console.log(n1===n2)//it checks type of the value of the variable if both are not  matched it does not evaluate.

//Here we need to perform explicit conversion

const num1='20'
const num2=20
console.log(+num1 === num2)//explicit conversion does not change the original datatype of the variable.For evaluation purpose only it supports this.
console.log(parseInt(num1)===num2)//explicit conversion
console.log(typeof num1)

const coderAge1=21
const coderAge2=25

console.log(coderAge1!=coderAge2)

const price1=100
const price2=100
console.log(price1!=price2)

const str='20'
const number=20
console.log(str!=number)

//explicit conversion strict not equal to

const java="100"
const js=100
console.log(java!==js)//string !== no true
console.log(+java!==js)//no!=no 100!=100 false

//here after everything supports implicit type conversion
const mark1=100
const mark2=200
console.log(mark1>mark2)
console.log(mark2>mark1)
console.log(mark2<mark1)
console.log(mark2>=mark1)
console.log(mark2<=mark1)


//tricky
console.log(5>6>7)//5>6 false.false numeric value is (0)false>7 false.Answer will be false


//10.logical operator(checking two or more conditions)
//&& true && true =true otherwise false
console.log((5<7)&&(8>4))

const userAge=21
console.log(userAge>=18 && userAge<=24)
const isSchoolStudent=userAge>=18 && userAge<=24
console.log(isSchoolStudent)
const isCollegeStudent=userAge>=18 && userAge<=24
console.log(isCollegeStudent);

//|| both side is false=false otherwise true
const student=isSchoolStudent||isCollegeStudent
console.log(student)

console.log(true || false)
console.log(true && false)

//It gives truthy or falsy values

console.log(1 && 2)//starting 1 is truthy so it gives truthy values.It means it checks the another value.
console.log(0 && 1) //starting 0 is falsy so it gives falsy value and does not go to other condition or no
console.log(1||2)//starting truthy so it gives the starting value does not move to other no.Give 1 as a result
console.log(0||2)////starting value is falsy goes to other no or condition to check or find the truthy values.Give 2 as a result

console.log(''&&'hello')//no gap empty string which is falsy value so give ('')
console.log(" "&& "hello")//there is a gap in the empty string which is truthy so got to next value give output as 'hello'
console.log(""||"hello")//hello
console.log(" "||"hello")//" "
console.log('Hello'&&null)//first truthy value come it move forward
console.log('hello'||null)//or got truthyvalue first it does not go move forward
console.log('hello' && 4+8)
console.log('hello' || 4+8)
console.log('hello' && -4+4)
console.log(undefined || 4+4)

const logResult=console.log('hello')
console.log(logResult)//undefined

console.log('hello' && console.log("hello1"))
console.log(undefined ||console.log("hello1"))


//bitwise and or operator mostly not used

console.log('' & 'hello')0
console.log('hi' &'hello')0
console.log('hello' & 'hello')0
console.log(2|6)6
console.log(2|8)8
console.log(0|8)8
console.log(4|6)6
console.log(-1|8)-1
console.log(-2|-8)-2
console.log(2|8)10


//not truthy -falsy falsy-truthy

console.log(!null)
console.log(Boolean(!null))
console.log(!!null)
//practice
const logicalOperator=5&&6
console.log(logicalOperator)

const logicalOperator1=5||6
console.log(logicalOperator1)

console.log(true && false ||true)

console.log(0||1 && 2||3)
console.log(0||''||null||undefined||'default')

let a=''
let b=0
let c=false
console.log(a && b || c || "fallback")

console.log(1 && 2 && null & 3)


//11.decision making or conditional making statement

const userAge=28

//if(true) console.log(userAge)
//if(false) console.log("wont be executed")

if(userAge>=28)
    console.log("working professional")
    console.log("see the output")

if(userAge>=28){
    console.log("working professional")
}

if(userAge>=25 && userAge<=50){
    console.log("working professional")
}else{
    console.log("retired")
}

//exercise
//prompt take input as string datatype
let username=prompt("enter your name")
let age=prompt("enter your age")
console.log(username)
console.log(age)

if(age>=25 && age<=45){
    console.log(`Mr.${username} you are working professional`)
}else{
    console.log(`you are not working professional`)
}

console.log(+null)
console.log('34k')
console.log(+'34 k')//Nan
console.log(parseInt('34 df'))//convert string into number and eliminate the letters if no is start
console.log(parseInt('34444'))
console.log(parseInt('sdf 34 asdf'))//it give Nan because if letters in start
console.log(parseInt(null))//Nan


//exercise 
const nameDefault=prompt("enter your name")||"procoder"
const ageDefault=prompt("enter your age")||20

console.log(nameDefault)
console.log(ageDefault)

//exercise

const userName="ahamathbasha"
const userAge=20

if(userAge >=18 && userAge<=24){
    console.log(`Mr. ${userName} is college student`)
}

if(userAge >=25 && userAge<= 45){
    console.log(`Mr.${userName} is working professional`)
}

if(userAge >45){
    console.log(`Mr.${userName} reads newspaper`)
}

//exercise

const num=10

if(num %2 == 0){
    console.log("even")
}

if(num %2 != 0){
    console.log("odd")
}

const number1=10
const number2=20
const number3=30

if ((number1 > number2) && (number1 > number3)){
    console.log(`number 1 is largest ${number1}`)
}

if((number2 > number1) && (number2 >number3)){
    console.log(`number 2 is largest ${number2}`)
}

if((number3 >number1)&&(number3 >number2)){
    console.log(`number 3 is largest ${number3}`)
}



//12.if else in javascript

//In if condition if we give 5 if condition js will check all five conditions but in there will be one and only condition will going to be true but it check all conditions

//Else if will avoid checking all the conditions if one condition is true does not check all other conditions
 
//else if above conditions are not working run this else.

//exercise
const username2=prompt("enter your name")||"procoder"
const userAge2=prompt("enter your age")||20

if((userAge2>=0) && (userAge2<=4)){
    console.log(`Mr.${username2} you are a child`)
}else if((userAge2>4) && (userAge2<=17)){
    console.log(`Mr.${username2} you are a school student`)
}else if((userAge2>17) && (userAge2<=25)){
    console.log(`Mr.${username2} you are a college student`)
}else if((userAge2>25) && (userAge2<=45)){
    console.log(`Mr.${username2} you are a wroking professional`)
}else if(userAge2>45){
    console.log(`Mr.${username2} you are a retired professional`)
}else{
    console.log(`Mr.${username2} please enter a valid age`)
}

//condition with truthy and falsy values
console.log(!null)//true
//exercise
if(10){
    console.log("given value is truthuy")
}

if(0){
    console.log("given value is falsy")
}

if(0){
    console.log("given value is truthy")
}else{
    console.log("given value is falsy")
}

//exerccise
if condition can be executed based on the truthy and falsy.Here when the user does not put any information at that time null we receive which is falsy value but with the help of not(!)operator we convert it into truthy value.

let userName3=prompt("enter your name")
let userAge3=prompt("enter your age")

if(!userName3){
    userName3="burma"
}
console.log(`username is ${userName3}`)

if(!userAge3){
    userAge3=20
}
console.log(`userAge is ${userAge3}`)


//exercise
if the user enter input then only it will execute otherwise it wont execute because it receives falsy values or null.
let userName4=prompt("enter your name")
let userAge4=prompt("enter your age")

if(userName4){
    console.log(`your name is ${userName4}`)
}

if(userAge4){
    console.log(` your age is ${userAge4}`)
}


//13.switch condition (it performs strict equality)

//exercise else if based program

const dayNumber=0
if(dayNumber==1){
    console.log("sunday")
}else if(dayNumber==2){
    console.log("monday")
}else if(dayNumber==3){
    console.log("tuesday")
}else if(dayNumber==4){
    console.log("wednesday")
}else if(dayNumber==5){
    console.log("Thursday")
}else if(dayNumber==6){
    console.log("Friday")
}else if(dayNumber==7){
    console.log("saturday")
}else{
    console.log("there will be no day like that")
}


//switch statement
//here if you did not put break statement in any case at that where the condition gets satisfied there it start printing every condition and print output until the last.To avoid that we use break in cases.Atlast default keyword used if any condition is not matched. 
//in defining the cases it does not follow any structure like 1 to 10 we can write the case in  unorder structure.
// exercise
const day=parseInt(prompt("enter a day between 1 to 7"))
//here swith compare with the values so we put the variable name
switch(day){
    case 1:
        console.log("sunday")
        break;
    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("tuesday")
        break;
    case 4:
        console.log("wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("saturday")
        break;
    default:
        console.log("There is no day like that")
}
        

//exercise

const age_1=parseInt(prompt("enter your age"))
//switch(true) we use because in case we evaluate the conditions either true or false.
switch(true){
    case (age_1 >0 && age_1<=4):
        console.log("you are a kid")
        break
    case (age_1>4 && age_1<=17):
        console.log("you are a school student")
        break
    case (age_1>17 && age_1<=25):
        console.log("you are a college student")
        break
    case (age_1>25 && age_1<=45):
        console.log("you are a working professional")
        break
    case (age_1>45):
        console.log("you are a retired professional")
        break
    default:
        console.log("please enter a valid age")
}

//Note:In switch statement we were comparing with the values or characters but in the above example with in the case we perform boolean expression conditions either true or false.In that manner we make the switch(true) otherwise within the bracket we put the variable name


//exercise 

//in the below example i understand switch case only return one case value or default value if multiple condition is true.
//It will give the first true condition output others are neglected
//if i give age_2=18.before condition i set as true so it give output as you are a school student but the correct answer is college student understand it.
const age_2=parseInt(prompt("enter your age"))

switch(true){
    case (age_2 >0 && age_2<=4):
        console.log("you are a kid")
        break
    case (true):
        console.log("you are a school student")
        break
    case (age_2>17 && age_2<=25):
        console.log("you are a college student")
        break
    case (age_2>25 && age_2<=45):
        console.log("you are a working professional")
        break
    case (age_2>45):
        console.log("you are a retired professional")
        break
    default:
        console.log("please enter a valid age")
}
        

//exercise

const grade="C"

switch(grade){
    case "A":
        console.log('you got marks between 90 to 100')
        break
    case "B":
        console.log("you got mark between 80 to 90")
        break
    case "C":
        console.log("you got marks between 70 to 80")
        break
    case "D":
        console.log("you got mark betweeen 60 to 70")
        break
    case "E":
        console.log("you got marks between 50 to 60")
        break
    case "F":
        console.log("you got mark between 40 to 50")
        break
    default:
        console.log("Restart")
}



//const grade=false
const grade=null

switch(grade){
    case "A":
        console.log('you got marks between 90 to 100')
        break
    case "B":
        console.log("you got mark between 80 to 90")
        break
    case false:
        console.log("you got marks between 70 to 80")
        break
    case null:
        console.log("you got mark betweeen 60 to 70")
        break
    case "E":
        console.log("you got marks between 50 to 60")
        break
    case "F":
        console.log("you got mark between 40 to 50")
        break
    default:
        console.log("Restart")
}

//tricky
// below answer will be false because datatype is different for each other.In case both are falsy value.
console.log(false==null)//false
console.log(false===null)//false

//exercise 
Ask favColor from user if favColor is not matched with the given condition.You display favColor is also my favorite color

const favColor=prompt("enter your favorite color")
//toLocaleLowerCase() convert the given input into lowercase without affecting the original
switch(favColor.toLocaleLowerCase()){
    case "red":
        console.log("red is a passionate color")
        break
    case "blue":
        console.log("blue is calming and serene")
        break
    case "green":
        console.log("green symbolizes nature and growth")
    default:
        console.log(`${favColor} is also my favorite color`)
}


//14.Ternary operator(if else)

console.log(true ? "Anurag":100)//anurag (first value)
console.log(false? "Anurag":100)//100(second value)
console.log(5>2?"Anurag":100)
console.log(5>12?"Anurag":100)

//exercise
const gender="F"
const userMessage=`${gender === "F" ? "she":"he"} is a college student`
console.log(userMessage)

//exercise
const gender="F"
const userMessage1=`${gender.toLocaleLowerCase()=="f"? "she":"he"} is a college student`
console.log(userMessage1)

//here we can use truthy and falsy values

console.log(`${0?"she":"he"} is a college student`)
console.log(`${''?"she":"he"} is a college student`)
console.log(`${" "?"she":"he"} is a college student`)
console.log(`${"0"?"she":"he"} is a college student`)

const result=0?'Anurag':'Singh'
console.log(result)

const chaining=null?"Anurag":"singh"?12:0
console.log(chaining)
const chaining1=''?"hello":"hi"?0:1
console.log(chaining1)

const a=5
const b=8
const c=6

// if(a>b && a>c){
//     console.log(` a is largest ${a}`)
// }
// else if(b>c){
//     console.log(`b is largest ${b}`)
// }else{
//     console.log(`c is largest`)
// }

let largest=a>b && a>c ? a:b>c ?b:c
console.log(largest)


//15.visualize the variable address

//devtools-memory-take snapshot-find with variablevalue-you can see the variable value with its address and you can also see the variable name with its system context address

//you can also see the address of the variables based on the system context.In system context it shows every variable value with its address

//for boolean it does not have any storage name it shows only system@75.

//Interesting part is variable can share same address if it has same value.for example take the two line of below code.But it depends on how it created.

const name="basha"//@174841
const name1="basha"//@174841

//another example

const movie="kgf"
const movie1="k"+"g"+"f"
console.log(movie)   //@207453
console.log(movie1) //@273213

//above example is the best reason because address will shared based on how a variable value is created.If we console movie,movie1 both will give same answer.But how it is created that defines the address.Here address is different.

const firstName="Akash"
const lastName="singh"
const number=15

//for null,undefined,true,false,empty string address will be not changed anywhere.
//for number, string address will be changeable.

//Below both have same value so both address are @75
const isGraduate=false
const hasjob=false
//for true address will be @73
const check2=true
const check3=true

const myNull=null//@71
const myUndefined=undefined//@67
const myEmptyString=''//@77

//when variables are created in memory.Variables will be in different side and values will be in different side.The value has address based on the address we connect it to the variable.by help of the address the variable will get the value.For better clarity see the visualize-variable address image.

Address will be changeable.

//16.Non-primitive datatypes
//There is only one type of non primitive datatype that is called object.It is further divided into three categories.

Arrays,functions,object literals


//object are created with key-value pairs
const user={} //empty object
//user1 address 6543
const user1={
    firstName:"Akash",
    lastName:"singh",
    age:26,
    education:12,
    city:"Banglore"
}
//user2 address 6545
const user2={
    firstName:"Akash",
    lastName:"singh",
    age:26,
    education:12,
    city:"Banglore"
}
console.log(user)
console.log(user1)
console.log(user2)
console.log(user1===user2)

//In reference type or non-primitive type.It does not compare key and values.It compare the address.If address is equal value will be true otherwise false.

const myName='Anurag'

//for the below two object the addresses wont be same
const myName1={}//@107823
const myName2={}//@107825

//but here the string has same address
const user_Name1=''//@77
const user_Name2=''//@77

const object1={
    firstName:"Adharsh"
}

const object2={
    firstName:"ideal",
    lastName:"school"
}
console.log(object2)
//accessing the value based on two ways
console.log(object2.lastName)//dot method
console.log(object2["lastName"])//within the bracket we give key name

const userDetail={
    firstName:"Adarsh",
    'last-Name':"singh",
    Anurag:'Developer'
}

console.log(userDetail.firstName)
//console.log(userDetail.last-Name)//here you will get reference error
console.log(userDetail["last-Name"])
console.log(userDetail["Anurag"])
//If fields are not exists in the object it will give undefined

console.log(userDetail.age)//undefined
console.log(userDetail.networth)//undefined

//with in the bracket we can also evaluate variables and expressions

const movie="kgf"
console.log(userDetail[movie])
console.log(userDetail["first"+"Name"])


const student={
    firstName:"Ahamathbasha",
    lastName:"procoder"
}
//updating your object
//adding new fields with values
student.age=26// first method
//student.is-Present=20
student["is-present"]=true

console.log(student)

const studentDetails={
    firstName:"vattaram",
    lastName:"burma",
    address:{
        city:"Bangalore",
        pinCode:"876876",
        state:"karnataka",
    },
    moreDetails:{
        population:9080706050,
        area:"787 sq km"
    }
}

console.log(studentDetails)
console.log(studentDetails.firstName)
console.log(studentDetails.address)
console.log(studentDetails.address.city)
console.log(studentDetails.address.state)

//every nested objects create a variable address individually.

//Nested objects helps in create a hierachy structure.BY the way we can easily manipulate the data in the object.

//object can hold multiple datatypes values.

//Address is only for the value not for the variables.Address of the value is given to the variables.

//17.Object.freeze() and Object.seal()

//context address @34393 

let username="Anurag" //@12565 address
//if we change the value of the username what will happen? value will be change .It sounds funny.Lets debug it.
username="Rahul"//@83455 address.Behind the scenes "We change the address".So it change the value for the variables.
console.log(username)
//address will be changeable for one time you visit you see one address another time you visit you see another address.

//object

const user={
    firstName:"Adarsh",
    lastName:"singh",
    Address:{
        city:"Bangalore",
        pincode:876876,
        state:"karnataka",
        moreDetails:{
            population:909000090,
            area:"787 sq km"
        },
    },
    age:15,
    isGraduate:false
}

//in the user object if you add a new property does the object address will change?No object address will be the same but the new property is also added in the object with its address

user.mobileno=9080776050
user.Address.street="Annanagar mudhal street"
//In video my mentor told that if we add new property to the existing object.It does not change the address of the value or variable. In the given address the variable will be stored object addres or value or variable address wont be changed

//I check the above mentioned statement.When i add the new property to the existing object it change the address of the object.I also think address value is not constant it will changeable so by the way of thinking based on the object address the new property is stored on the object address.


const user_0={
    firstName:"Adarsh",
    lastName:"singh",
    Address:{
        city:"Bangalore",
        pincode:876876,
        state:"karnataka",
        moreDetails:{
            population:909000090,
            area:"787 sq km"
        },
    },
    age:15,
    isGraduate:false
}

user_0={}//it shows error because for const we did not reassign the value.

// At first the below object address is @300877 
let user_5={
    firstName:"Adarsh",
    lastName:"singh",
    Address:{
        city:"Bangalore",
        pincode:876876,
        state:"karnataka",
        moreDetails:{
            population:909000090,
            area:"787 sq km"
        },
    },
    age:15,
    isGraduate:false
}
console.log(user_5)

//if we reassign the value to the object it will change the address of the object behind the scenes.
//After reassigning the value to the object its address is changed.@330685.Address of the object is changed after reassigning the value to the object.
user_5={}
console.log(user_5)

let movieName="basha"
console.log(movieName)
// delete property from the object
let user_7={
    firstName:"Adarsh",
    lastName:"singh",
    Address:{
        city:"Bangalore",
        pincode:876876,
        state:"karnataka",
        moreDetails:{
            population:909000090,
            area:"787 sq km"
        },
    },
    age:15,
    isGraduate:false
}
console.log(user_7)
//By the below way we can delete the property from the object
console.log(delete user_7.firstName)
console.log(user_7)
console.log(delete user_7.Address.moreDetails)
console.log(user_7)


//Object.seal will does not allow new property added to the object.Existing property modification allowed and deletion of the property won't be allowed.

let user_8={
    firstName:"Adarsh",
    lastName:"singh",
    Address:{
        city:"Bangalore",
        pincode:876876,
        state:"karnataka",
        moreDetails:{
            population:909000090,
            area:"787 sq km"
        },
    },
    age:15,
    isGraduate:false
}

//Object.seal will directly seal only the top level properties.It does not directly seal the entire Object if it is a nested object.
Object.seal(user_8) 
console.log(delete user_8.Address.city)//In the above description you can understand nested object properties will be deletable and modifiable and we can add new properties to the nested objects
console.log(user_8)
user_8.Address.city="TamilNadu"
console.log(user_8)
//To avoid nested objects behaviour we include seal for them also
Object.seal(user_8.Address)
Object.seal(user_8.Address.moreDetails)
console.log(delete user_8.Address.city)//false

//These are things done by Object.seal

//Object.freeze we cannot modify or delete or adding new property
let user_9={
    firstName:"Adarsh",
    lastName:"singh",
    Address:{
        city:"Bangalore",
        pincode:876876,
        state:"karnataka",
        moreDetails:{
            population:909000090,
            area:"787 sq km"
        },
    },
    age:15,
    isGraduate:false
}

Object.freeze(user_9)
//console.log(delete user_9.Address.moreDetails)//nested Object moreDetails will be deletable true
console.log(delete user_9.firstName)//cannot delete
user_9.firstName="lion"//wont be modified
console.log(user_9)
console.log(delete user_9.Address)//false it wont be deletable for better understanding see the variable address picture. It is in the top level object address
console.log(delete user_9.Address.city)//true it will be deletable because it is in another address
console.log(user_9)
//After this it will comes under the Object.freeze property
Object.freeze(user_9.Address)
Object.freeze(user_9.Address.moreDetails)
console.log(delete user_9.Address.moreDetails)


//checking if the property is exist in the object or not
//in keyword checks the key in present in the object or not.If it exists it gives true and if it is not exists it gives false.in keyword is case-sensitive.

console.log('firstName' in user_9)//true
console.log('username' in user_9)//false



//18.Array

//arrays are behind the scenes it is objects.Inside the array we store the same data

const fruitsCollection=['Apple',"Banana","Grapes","Dates"]
console.log(fruitsCollection)//here see the prototype there will be object inside it.
console.log(typeof fruitsCollection)//object=>fruit collection is array but its datatype is Object
console.log(typeof [])//object
console.log(typeof {})//object

//behind the scenes these are non-primitive datatype so it gives object
console.log([].concat)//it is a function
console.log(typeof [].concat)//it gives function but here is should be like Object.There is no datatype namely function.

//NOTE:array,function and object are non-primitive datatype

const fruitsCollection1=['Apple',"Banana","Grapes","Dates"]
console.log(fruitsCollection1)
console.log(fruitsCollection1[2])
fruitsCollection1[2]="Mango"//It change the original because it gives reference of the address
console.log(fruitsCollection1)

//here we create an array with variable const but the value of the array is updated how?
//For example:In case of object created with const it can also modify or new or update the value which is based on the address.In that address we can store the new values and property. Here we did not update the address of the variable.Thats why it does not give any error.

const fruitsCollection2=['Apple','Banana','Grapes','Dates']
//fruitsCollection2=[]//if you try to update the address of the array you should get error because const wont allow to update.
//update
fruitsCollection2[3]='kiwi'
console.log(fruitsCollection2)
//add
fruitsCollection2[4]="orange"
console.log(fruitsCollection2)
console.log(fruitsCollection2.length)

//Array is commonly used to hold the same kind of data but array also supports to store different kinds of datatypes

const movies=["kgf","vattaram",23,null,undefined,true,false,{}]
console.log(movies)

const fruits=["Apple","Banana","Grapes",{name:"Anurag",as:{age:23}}]
console.log(fruits)

const multiDArray=['Apple','Banana','Grapes',[2,3]]
console.log(multiDArray)

const favoriteMovies=["vattaram","vtk","Leo"]
favoriteMovies[10]="vasoolraja mbbs"
favoriteMovies[1000]="pk"
console.log(favoriteMovies)
//value will be added to its index specification in between the other index have undefined value
console.log(favoriteMovies[7])

//adding value at the end of the arry.How to do that
const fruitCollection=["Apple","Grapes","Kiwi","Orange"]
fruitCollection[fruitCollection.length]="papaaya"
console.log(fruitCollection)
fruitCollection[fruitCollection.length]="water melon"
console.log(fruitCollection)
//by the above way we can add elements at the end of the array.

//another method push will put elements at the end of the array
fruitCollection.push("jackfruit")
console.log(fruitCollection)
fruitCollection.push("sevvaazhai",88,null,undefined)//by using push method we can add multiple values at the end of the array
console.log(fruitCollection)

//remove the elements from the last Pop method

console.log(fruitCollection.pop())
console.log(fruitCollection)
console.log(fruitCollection.pop())
console.log(fruitCollection)
console.log(fruitCollection.pop())
console.log(fruitCollection)

//here you can see the same behaviour of object in array also
const newArray=[]
console.log(newArray)
newArray.firstName="Anurag"
console.log(newArray)
console.log(newArray.length)
console.log(newArray.firstName)

const newObject={}
newObject.firstName="Anurag"
console.log(newObject.firstName)

//indexOf
const name__1="vikram"
console.log(name__1.indexOf("i"))

//create one object and add one array inside it for the key 'array'

const obj={arr:[1,2,3,4,5]}

//Is it common to add key-value pairs directly to an array in JavaScript? Why or why not?

//answer
//Your understanding is partially correct — arrays are indeed special objects, but it's important to note that using key-value pairs with non-numeric keys in an array is uncommon and not recommended. Arrays should be used for ordered lists with numeric indices, and objects should be used when you need to store key-value pairs with named keys.

//So, the better practice would be:
//Use an array when you have an ordered collection of items.
//Use an object when you need to store key-value pairs.


Your understanding is partially correct — arrays are indeed special objects, but it's important to note that using key-value pairs with non-numeric keys in an array is uncommon and not recommended. Arrays should be used for ordered lists with numeric indices, and objects should be used when you need to store key-value pairs with named keys.

So, the better practice would be:

Use an array when you have an ordered collection of items.
Use an object when you need to store key-value pairs.

//19.ArrayMethods
//shift change the original array remove element from the start.
const evenNumbers=[0,2,4,6,8]
console.log(evenNumbers.shift())
console.log(evenNumbers)

//Incase of pop we delete the last element from the array but when you use the shift operator which delete the element from the first number.In js shift will affect the js engine.In starting you delete a no then the js engine will put index for every element in the array.Index of the array will changed.IN push we just delete the last element here you can't change the index just delete the element or index from the last

console.log(evenNumbers.unshift(0))//add the element in the starting.
console.log(evenNumbers)
//here duplicate values are also be allowed

console.log(evenNumbers.unshift(0))
console.log(evenNumbers)

//concat does not change the original array.It gives a new Array 
const odd=[1,3,5,7]
const even=[2,4,6,8]
console.log(odd.concat(even))//[1, 3, 5, 7, 2, 4, 6, 8]
console.log(odd + even)//1,3,5,72,4,6,8

const divisibleBy2=[0,2,4,6,8]
const animals=['Dogs','Cat','Rat']

const addedArray1=divisibleBy2.concat(animals)
const addedArray2=animals.concat()
console.log(addedArray1)
console.log(addedArray2)
const oddNo=[1,2,3]
const addedArray3=divisibleBy2.concat(animals,oddNo)//we can concatenate multiple values
console.log(addedArray3)

//indexOf array method
// if the element is with in the array it give the index of the element otherwise it give -1 which denotes there is no element in the array.
//Incase two element we have same like['a','b','c','a'].It gives the first index value of the array

const n=[1,2,3,4,5,6,7,1]
console.log(n)
console.log(n.indexOf(1))
console.log(n.indexOf(8))

//includes which give true or false whether the element has present in the array or not
console.log(n.includes(5))

//reverse modify the original array
console.log(n.reverse())
console.log(n)

//sort also modify the original array
const char=['Dog','Cow',"Elephant"]
console.log(char.sort())//['Cat', 'Cow', 'Dog']
console.log(char)
char.push("Cat")
console.log(char.sort())//['Cat', 'Cow', 'Dog', 'Elephant']
console.log(char)

//Tricky
//First of all it convert the character into utf-16 then it sort based on the utf no

const names=['salmankhan',"Shahrukhhan","Amitab bacchan","rana"]
console.log(names.sort())//here when you sort capital letters will comes first and lowercase letter will come last.
console.log(names)

//when you sort the no it will come like this it won't work for sorting in the no.To make it fit we use functions inside it.
const numberss=[1,10,5,9,13,11,21,30,39,29,50]
console.log(numberss.sort())
console.log(numberss)//[1, 10, 11, 13, 21, 29, 30, 39, 5, 50, 9]


//slice(start(includes),end(excludes)).It does not change the original array

const pets=["Dog","Cat","Cow","Elephant","Tiger","Rat"]
console.log(pets.slice())//It does not do anything empty
console.log(pets)
console.log(pets.slice(1))//from starting first index to end it will print because i did not specify the end index.
//['Cat', 'Cow', 'Elephant', 'Tiger', 'Rat']
console.log(pets.slice(1,4))//['Cat', 'Cow', 'Elephant']

//splice(start,delete,include) will change the original array
const pets2=["Dog","Cat","Cow","Elephant","Tiger","Rat"]
console.log(pets2.splice(1,1))//i specify first index start and 1 element should be deleted.
//['Cat']
console.log(pets2)//['Dog', 'Cow', 'Elephant', 'Tiger', 'Rat']
console.log(pets2.splice(2,2,'rabbit','tortoise'))//['Elephant', 'Tiger']
console.log(pets2)//['Dog', 'Cow', 'rabbit', 'tortoise', 'Rat']


//exercise

let ages = [83, 26, 32, 13, 23, 3, 36, 28, 64, 48]

ages.push(19)
console.log(ages)
ages.shift(22)
console.log(ages)
ages.splice(3,0,17)
console.log(ages)
ages.sort()
console.log(ages)
//ascending order
for(let i=0;i<ages.length;i++){
    for(let j=0;j<ages.length;j++){
        if(ages[i]<ages[j]){
            let temp=ages[i]
            ages[i]=ages[j]
            ages[j]=temp
        }
    }
}
console.log(ages)
//descending order
for(let i=0;i<ages.length;i++){
    for(let j=0;j<ages.length;j++){
        if(ages[i]>ages[j]){
            let temp=ages[i]
            ages[i]=ages[j]
            ages[j]=temp
        }
    }
}

console.log(ages)
ages.pop()
console.log(ages)
ages.shift()
console.log(ages)
console.log(ages.includes(19))
console.log(ages.indexOf(19))

//exercise

const event1Participants = ["Alice", "Bob", "Charlie"];
const event2Participants = ["David", "Eve", "Frank"];
const newsLetter=event1Participants.concat(event2Participants)
console.log(newsLetter)

//exercise
//You have a list of daily temperatures recorded over a week. You want to extract the temperatures from the middle of the week (Tuesday to Thursday) for analysis. Use the slice method to get the sub-array of temperatures for these days.
//const weeklyTemperatures = [72, 75, 79, 83, 78, 74, 70];
// Write your code here
// Expected Output: [75, 79, 83]
const weeklyTemperatures = [72, 75, 79, 83, 78, 74, 70];
console.log(weeklyTemperatures.slice(1,4))

//20.Multidimensional array
 //multidimesnsional arrays are also called as arrays inside array.

//ex:
const multidimesnsional=[[], ]
console.log(multidimesnsional)
const multiD=[['Adarsh',75],['Akash',90],['Anurag',100]]
console.log(multiD)
console.log(multiD[1])
console.log(multiD[1][0])
multiD[1][5]=100
console.log(multiD)
//Here it add value on the specified index others are empty if you access it you get undefined

const ticTacToe=[["x",null,null],[null,null,"o"],["o",null,"x"]]
ticTacToe[0]
console.log(ticTacToe[0])// ['x', null, null]
console.log(ticTacToe[0][0])//x

//exercise
//	
// Given an array of nested arrays up to 3 levels deep. Write the code to print all the values of the innermost array.

// const nestedArray = [

// [[1, 2], 3, 4],

// [5, [6, 7], 8],

// [9, 10, [11, 12]],

// ];

// Write your code here

// Expected Output //

// 1, 2

// 6,7

// 11, 12

// const nestedArray = [

//     [[1, 2], 3, 4],
    
//     [5, [6, 7], 8],
    
//     [9, 10, [11, 12]],
    
//     ];

//     console.log(nestedArray[0][0])
//     console.log(nestedArray[1][1])
//     console.log(nestedArray[2][2])

*/