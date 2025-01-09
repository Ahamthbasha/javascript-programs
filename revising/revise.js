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

// const pets2=["Dog","Cat","Cow","Elephant","Tiger","Rat"]
// console.log(pets2.splice(1,1))//i specify first index start and 1 element should be deleted.

//without constructor

// class car{
//     drive(){
//         return "I am driving"
//     }
//     stop(){
//         return "I am stop the car"
//     }
// }
// let myCar=new car()
// myCar.red="color"
// console.log(myCar)
// console.log(myCar.drive())

//with constructor

// class car{
//     constructor(brand,model){
//         this.brand=brand
//         this.model=model
//     }
//     displaybrand(){
//         return `my car brand is ${this.brand}`
//     }
//     displaymodel(){
//         return `my car model is ${this.model}`
//     }
// }

// let myCar=new car("maruthi suzuki","2024AD")
// console.log(myCar)
// console.log(myCar.displaybrand())
// console.log(myCar.displaymodel())

//inheritance with the use of super keyword.super keyword is used to call or intialize the constructor from the child class

// class Animal{
//     constructor(name,species){
//         this.name=name
//         this.species=species
//     }
//     displaySpecies(){
//         return `the species name is ${this.species}`
//     }
// }

// class Dog extends Animal{
//     constructor(name,species,breed){
//         //we call the parent constructor
//         super(name,species)
//         this.breed=breed
//     }
//     displayBreed(){
//         return `the breed name is ${this.breed}`
//     }
//     displayInfoOfSpecies(){
//         return `${super.displaySpecies()}`
//     }

// }

// let myDog=new Dog("tom","dog","goldern retriever")
// console.log(myDog)
// console.log(myDog.displayInfoOfSpecies())

//types of inheritance

//single level inheritance:When one child class inherits from the one super class
// class Animal{
//     constructor(name){
//         this.name=name
//     }
//     displayName(){
//         return `the name is ${this.name}`
//     }
// }

// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this.breed=breed
//     }
//     displayBreed(){
//         return `the breed is ${this.breed}`
//     }
// }

// let myDog=new Dog("shellby","golden retriever")
// console.log(myDog)
// console.log(myDog.displayBreed())
// console.log(myDog.displayName())

//multi level inheritance
//from a parent class a child class gets inherited.From the inherited child class a new child class is inherited which is called multi level inheritance

// class Animal{
//     constructor(name){
//         this.name=name
//     }
//     displayName(){
//         return `the animal name is ${this.name}`
//     }
// }

// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this.breed=breed
//     }
//     displayBreed(){
//         return `the breed name is ${this.breed}`
//     }
// }

// class puppy extends Dog{
//     constructor(name,breed,age){
//         super(name,breed)
//         this.age=age
//     }
//     displayAge(){
//         return ` the age is ${this.age}`
//     }
// }

// let puppy1=new puppy("shellby","labrador",12)
// console.log(puppy1)
// console.log(puppy1.displayAge());
// console.log(puppy1.displayBreed());
// console.log(puppy1.displayName());


//Third Multiple inheritance js does not support but by the way of mixins we can perform it.Mixins allow you to combine more functionality into one object or class.A class which is inherit from more than one class is known as multiple inheritance.

// let Animal={
//     speak:function(){
//         return `${this.name} speak`
//     }
// }

// let fetch={
//     fetch:function(){
//         return `${this.name} fetch the ball`
//     }
// }

// class Dog{
//     constructor(name){
//         this.name=name
//     }
// }

// Object.assign(Dog.prototype,Animal,fetch)

// let tom=new Dog("shellby")
// console.log(tom.speak())
// console.log(tom.fetch())

//hierarchial inheritance:Multiple child classes inherits from the single parent class

// class Animal{
//     constructor(name){
//         this.name=name
//     }
//     speak(){
//         return `${this.name} not speak`
//     }
// }

// class Dog extends Animal{
//     speak(){
//         return `${this.name} bark`
//     }
// }

// class Cat extends Animal{
//     speak(){
//         return `${this.name} meow`
//     }
// }

// let dog=new Dog("shellby")
// console.log(dog.speak())
// let tom=new Cat("tommy")
// console.log(tom.speak())

//Hybrid Inheritance: A combination of different types of inheritance,often combining single inheritance with mixins or other patterns.

// let Animal={
//     speak:function(){
//         return `${this.name} makes a sound`
//     }
// }

// class Dog{
//     constructor(name,breed){
//         this.name=name
//         this.breed=breed
//     }
//     displayInfo(){
//         return `${this.name} barks and my breed is ${this.breed}`
//     }
// }

// Object.assign(Dog.prototype,Animal)

// class puppy extends Dog{
//     constructor(name,breed,age){
//         super(name,breed)
//         this.age=age
//     }
//     displayAllInfo(){
//         return `${this.name} is name and breed is ${this.breed} and age is ${this.age}`
//     }
// }

// let puppy1=new puppy("shellby","labrador",12)
// console.log(puppy1)
// console.log(puppy1.displayAllInfo())
// console.log(puppy1.speak())
// console.log(puppy1.displayInfo())

//abstraction:hides the complex implementation details sshow only the necessary methods

// class vehicle{
//     constructor(name){
//         this.name=name
//     }
// }

// class car extends vehicle{
//     makeSound(){
//         return `the car name is ${this.name}`
//     }
// }

// let car1=new car("suzuki")
// console.log(car1.makeSound())

//encapsulation:It means bundling the methods and properties into single unit.It cannot be directly accessible

// class bank{
//     constructor(owner,_balance){
//         this.owner=owner
//         let balance=_balance

//         this.getBalance=function(){
//             return `balance is ${balance}`
//         }

//         this.deposit=function(amount){
//             if(amount > 0){
//                 balance+=amount
//             }
//             return balance
//         }

//         this.withdraw=function(amount){
//             if(amount > balance){
//                 return `insufficient balance! you have only ${balance}`
//             }else{
//                 balance-=amount
//                 return `amount is withdrawed.The balance you have now is ${balance}`
//             }
//         }
//     }
// }

// let kvb=new bank("ahamathbasha",1000)
// console.log(kvb)
// console.log(kvb.getBalance())
// console.log(kvb.deposit(1000))
// console.log(kvb.withdraw(1000))


//polymorphism :means many forms .It is a ability of a method or function to work in multiple ways, depending on the object it is applied to.
//compile time polymorphism method overloading
//same method name with different parameter
//js does not support compile time polymorphism

// class addition{
//     add(a,b){
//         if(b==undefined){
//             return a+a
//         }else{
//             return a+b
//         }
//     }
// }

// let cal=new addition()
// console.log(cal.add(5))
// console.log(cal.add(5,6))

//Runtime polymorphism:method overriding.child class override the parent class

// class animal{
//     speak(){
//         return `animal makes a sound`
//     }
// }

// class dog extends animal{
//     speak(){
//         return `dog makes a sound`
//     }
// }

// class cat extends animal{
//     speak(){
//         return `cat makes a sound`
//     }
// }

// let animal1=new animal()
// let dog1=new dog()
// let cat1=new cat()

// console.log(animal1.speak())
// console.log(dog1.speak())
// console.log(cat1.speak())

