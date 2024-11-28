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

//charCodeAt() gives the ascii value of the character
let name="munna bhai"
console.log(name.charCodeAt(0))

*/