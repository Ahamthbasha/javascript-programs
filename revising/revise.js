// console.log((typeof '100'));
// console.log(typeof +'100');
// console.log(typeof 100+'')
// const a= ''+100
// console.log(typeof a)
// console.log(a)
// const b=100+''
// console.log(typeof b)
// console.log(b)
// const c=(100+"")
// console.log(typeof c)
// console.log(c)
// console.log(typeof 100+'')

// console.log(+undefined);//NaN
// console.log(typeof null)
// console.log(+null)

// let value=alert("basha")
// console.log(value)//undefined

// console.log(confirm("5>3"));


// let name=prompt("please enter your name")
// console.log(name)

// const message="hello"
// console.log(message[11])

// let result="hello"-5
// console.log(result)

//and will not go to further expression if first one is true
//or will go further expresssion if value is falsy

//console.log('hello'&&null)

// let a='hello' && console.log("hello1")
// console.log(a)
// let b=undefined || console.log(undefined)
// console.log(b)


//in bitwise operator the string is converted into number so here the string 'hello' turn into Nan

// console.log('' & 'hello')
// console.log('hi'&'hello')
// console.log('hello'&'hello')

// console.log(2|6)
// console.log(0|8)
// console.log(-1|8)
// console.log(-2|-8)
// console.log(4|6)

// console.log(!null)
// console.log(Boolean(null))

// console.log(0||1 && 2||3)
// console.log(0||''||null||undefined||'default')
// let a=''
// let b=0
// let c=false
// console.log(a && b || c || "fallback")

// console.log(1 && 2 && null & 3)

// console.log(+'34kgf')
// console.log(+null);
// console.log(parseInt(null));
// console.log(+undefined);
// console.log(parseInt(undefined))

// console.log(null==undefined)
// console.log(null==null)
// console.log(null==false)

// const result=0?'Anurag':'Singh'
// console.log(result)

// const chaining=null?"Anurag":"singh"?12:0
// console.log(chaining)
// const chaining1=''?"hello":"hi"?0:1
// console.log(chaining1)

// const newArray=[]
// console.log(newArray)
// newArray.firstName="Anurag"
// console.log(newArray)
// console.log(newArray.length)
// console.log(newArray.firstName)

const pets2=["Dog","Cat","Cow","Elephant","Tiger","Rat"]
console.log(pets2.splice(1,1))//i specify first index start and 1 element should be deleted.