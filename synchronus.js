// function parentFunction(name,callback){
//     callback();
//     console.log("Hey "+name);
// }
// function randomFunction(){
//     console.log("hey i am callBackFunction");
// }
// parentFunction("random string ",randomFunction);

//Asynchronus function
// function parentFunction(name,callback){
//     setTimeout(callback,1000);
//     console.log("Hey "+name);
// }
// function randomFunction(){
//     console.log("hey i am callBackFunction");
// }
// parentFunction("random string ",randomFunction);

//anonymus function
// function parentFunction(name ,callback ){
//     setTimeout(callback,1000);
//     console.log("hey "+ name);
// }
// parentFunction("Random String",function(){
//     console.log("hey I am a callBack function");
// });

//shorter using arrow function
function parentFunction(name ,callback ){
    setTimeout(callback,1000);
    console.log("hey "+ name);
}
parentFunction("Random String",()=>
    console.log("hey I am a callBack function")
);