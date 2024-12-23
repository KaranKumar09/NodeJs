 /*function exampleFunction(){
    if(true){
        var functionScopevar="I am function-scoped";
        let blockScopedLet="I am block-scoped";
        const blockScopedConst=" I am constant and block-scoped";

    }
    console.log(functionScopevar);//"I am function-scoped"
    console.log(blockedScopedLet);//error
    console.log(blockScopedLet);//error

}


//SHADOWSHOWING
exampleFunction();
//console.log(functionScopevar); error: functionScopedvar is not defined
var shadowedVar="I am gobal";
function exampleFunction(){
    var shadowedvar="I am gobal";
    console.log(shadowedVar);//I am local
}
console.log(shadowedVar);// I am global


//HOISTING WITH VAR
console.log(x);//undefined
var x=5;
console.log(x);
*/
/*console.log(x);//undefined
//let x=5;
console.log(x);


//declaring objects
let person={
    name:"Alice",
    age:30,
    isStudent: false
};
console.log(person.name);
console.log(person["name"]);// we can also write in this way
console.log(person);// to print the whole objet*/
// Array
// let fruits=[1,"banana"," orange"];
//  console.log(fruits[0]);


//functions
// function add(a,b){
//     return a+b;
// }
// var a=add(2,3);
// console.log(a);
// //type of operator
// let exampleVar="Hello";
// console.log(typeof(exampleVar));


// //type coercion
// let result=5-"5";//it changes string into number
// console.log(result);
// let check=5*"5";//it changes string into number
// console.log(check);


//comparison opeartor
// let a=10;
// let b=5;
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a===b);//comparing the datatype
// console.log(a!==b);


//logical operator
// let p=true;
// let q=false;
// console.log(p && q);
// console.log(p || q);
// console.log(!p);


//Object
// let person={
//     name: "Alice",
//     age: 30,
//     isstudent:false 
// };
// console.log(person.name);


//Assignment operator
// let num=10;
// num+=5;
// console.log(num);
// num-=3;
// console.log(num);
// num*=2;
// console.log(num);
// num%=4;
// console.log(num);


//loop
// for(let i=0;i<5;i++){
//     console.log(i);
// }


//while loop
// let i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }


//do while loop
// let i=0;
// do{
//     console.log(i);
//     i++
// }while(i<5);


//for in loop
// let person={ name:"John",age:30,occupation: "Developer"};
// for(let key in person){
//     console.log(key+":"+person[key]);
// }

//object literal notation
// let car={
//     make: "Toyota",
//     model1:"Camry",
//     year: 2022,
//     iselectric: false,
//     start: function(){
//         console.log("Engine started");
//     }
// };
// console.log(car.make);
// console.log(car.year);
// car.start();

//object constructor
// function Book(title,author,year){
//     this.title=title;
//     this.author=author;
//     this.year;
// }
// let book1=new Book("The catcher in the Rye","J.D. Salingar",1951);
// let book2=new Book("To kill a Mockingbird","Harper Lee",1960);
// console.log(book1);

////////////////////////////////////////////////////////////////////////////////////
//Creating array
// let fruits=["apple","banana","orange","grapes"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// // //adding element to the end
// fruits.push("kiwi");
// console.log(fruits);
// //adding element to the begining
// fruits.unshift("mango");
// console.log(fruits);
// // //removing last element
// let removedlast=fruits.pop();
// //removing the first element
// let removefirst=fruits.shift();

// //finding index of the element
// // let IndexOfOrange=fruits.indexOf("orange");
// // //iterating using for loop
//  for(let i=0;i<fruits.lenght;i++){
//      console.log(fruits[i]);

//  }
// //slicing an array
// let citrus = fruits.slice(1,2);
// console.log(citrus);

// //splicing an array(modifying original array)
// let removed = fruits.splice(1,2,"pear","melon")


// //concatenting the array
// let moreFruits=["grapefruit","pineapple"];
// let allFruits=fruits.concat(moreFruits);

//function expression

// const multiply = function(a,b){
// return a*b;
// }
// //invocation
// const product=multiply(4,6);
// console.log(product);

// //Arrow fubnction
// const subtract =(a,b)=>a-b;
// //invocation
// const difference =subtract(8,3);
// console.log("Arrow function - Difference: ",difference);

// //try and catch
// try{
//     //code that may  throw error
//     throw new error("an error");

// }catch (error){
//     //catch to handale the error
//     console.error(error.message);
// }finally{
//     //code that will run regardless of whether there was an error
//     console.log("cleanup code");
// }


//set timeout function
 //const delayedFunction=()=>{
//     console.log("Delayed function executed!");
// }
// setTimeout(delayedFunction,2000);//executed after 2 seconds

//set interval function
// const repeatedFunction=()=>{
//     console.log("repeated function executed!");
// }
// const intervalId=setInterval(repeatedFunction,1000);//executes every 1 seconds

//in case you want to stop after some time
//function to be executed at intervals
function repeatedFunction(){
    console.log("Executed repeated function...");
}
//set an interal(executed repeatedFunction every 1000 miliseconds)
const intervalId=setInterval(repeatedFunction,1000);
//after some time (e.g 5000 miliseconds), stop the interval
setTimeout(()=>{
    clearInterval(intervalId);//stop the interval
    console.log("Interval stopped.");
},5000);