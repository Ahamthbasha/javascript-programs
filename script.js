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
console.log(alertResult)
confirm("would you like to proceed")
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
console.log(message[11])
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

//replace and replace all it also does not chang the string
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
console.log(name.split())
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

//Math.random gives value 0 to 1.If we multiply with any given no it won't come from that limit. 
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
console.log(result)

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

console.log('' & 'hello')
console.log('hi' &'hello')
console.log('hello' & 'hello')
console.log(2|6)
console.log(2|8)
console.log(0|8)
console.log(4|6)
console.log(-1|8)
console.log(-2|-8)
console.log(2|8)


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
*/
//tricky
// below answer will be false because datatype is different for each other.In case both are falsy value.
console.log(false==null)//false
console.log(false===null)//false