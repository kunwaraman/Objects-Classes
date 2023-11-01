// we are making key value type thing 


class Vehicle {
    constructor(model,wheels) {
        this.model = model;
        this.wheels = wheels;
    }

    start() {
        console.log('vehicle starting');
    }
}
const obj1 = new Vehicle("Sedan",6);
const obj2 = new  Vehicle ('Hatchback',4);
console.log(obj1); 
console.log(obj2);
obj1.start();
console.log(typeof Vehicle);
// const y ={
//     name:'Aman',
//     age:22,
//     hobbies:['Coding','cricket','Riding']
// }
// //y.skill = "cosing";
// // console.log(y); 
// // console.log(y.age);
// // console.log(y.name);
 
// for(const key in y) {
//     console.log(key);
// }

// function getVehicle() {
//     return {
//         type: 'Car',
//         wheels: 4
//     }
// }

// const myVechicle1 = getVehicle();
// const myVechicle2 = getVehicle();
// myVechicle2.wheels = 3;
// console.log(myVechicle1);
// console.log(myVechicle2);
//  console.log(typeof getVehicle);

// //object destructring ES6

// const person = {
//     name:'sara',
//     age: 25,
//     gender: 'female'

// }
// // destructing Assignment
// let {name,age,gender}= person;
// console.log(name);
// console.log(age);
// console.log(gender);

// const person1 ={
//     name: 'john',
//     greet: function() {console.log('hello');}
// };

 