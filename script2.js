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
*/