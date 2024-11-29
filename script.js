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
*/