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