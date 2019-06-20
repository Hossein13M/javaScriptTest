// dastan: template for declaring an object:
// const test = {
//     color: "black",
// };



// dastan: this was the first training of mine
// "use strict"
// // so let's do this now!
// // let's do another one
// function Person(fName, lName, age, height, weight) {
//     this.firstName = fName;
//     this.lastName = lName;
//     this.height = height;
//     this.weight = weight;
//     this.stateChecker = function(money, mentalHealth) {
//         const Earnedmoney = money;
//         const healthState = mentalHealth;
//         if (Earnedmoney > 100) {
//             console.log('you are rich');
//         } else {
//             console.log('you are fucked up');
//         }
//     };
//     console.log("your name is:" + fName + ' ' + lName);
//     console.log('and you are: ' + height + 'cm and ' + weight + 'kg')
// };
// const person = new Person('hossein', 'mousavi', 20, 150, 90);
// const stats = person.stateChecker(10, "good");

// dastan: this is the second training of mine



// dastan: exercise number1:

// const address = function(st, ct, zc) {
//     this.st = st;
//     this.ct = ct;
//     this.zc = zc;
// }

// address.prototype.showDirection = function(add) {
//     console.log(add.st, " ", this.st);
// }
// address.prototype.showAddress = function() {
//     console.log(this.st, " ", this.ct, " ", this.zc, " ");
// }

// address.prototype.showStreet = function() {
//     console.log("street : ", this.st);
// }

// const add = new address("a", "b", "c");
// console.log(add);
// add.showAddress();
// add.showStreet();
// let newAddress = new address("z", "x", "y");
// newAddress.showAddress();
// console.log(newAddress);
// add.showDirection(newAddress);

// console.log(add.showDirection === newAddress.showDirection);
// console.log(add.showAddress === newAddress.showAddress);


// class g {
//     test() {
//         console.log("?");
//     }
// }

// let gg = new g();
// let ggg = new g();
// gg.test();

// console.log(g.prototype);

// console.log(gg.test === ggg.test);

// // const addObj = {
// //     function showAddress(st, ct, zc) {

// //     };
// // };


// dastan: test number one:
// TODO: I need to come back at check this code



// let addressObj = {
//     st: "",
//     ct: "",
//     zc: "",
//     showAddress(st, ct, zc) {
//         this.st = st;
//         this.st = st;
//         this.st = st;
//         console.log(`here is your address: ${st} ${ct} ${zc}`)
//     },
// }

//dastan: exercise number 1:


// let address = {
//     street: "shademan",
//     city: "tehran",
//     zipCode: 103,
// }

// function showaddress() {
//     for (const key in address) {
//         console.log(key);


//     }
// }

// showaddress();


// dastan: exercise number2:


// TODO: factory function:

// let address = {
//     street: "shademan",
//     city: "tehran",
//     zipCode: 103,
// }

// function showaddress(address) {
//     console.log(address.street + address.city + address.zipCode);

// }

// let myAddress = new showaddress(address);

// const proto = {
//     drive(name) {
//         console.log('vroom!!!');
//     }
// }

// function createCar() {
//     return Object.create(proto);
// }

// var a = createCar()
// console.log(a)
// Object.create(a)
// proto.drive('car')

// class test {
//     constructor(name) {
//         this.name = name + " 123 ";
//     }
//     showName() {
//         console.log(this.name)
//     }
//     showThis() {
//         console.log(this)
//         return this
//     }
// }

// var a = new test('ali')
// console.log(a.showThis())

// function test(name) {
//     this.name = name;
//     this.showName = function () {
//         console.log(this.name)

//     }

// // }

// var obj = {
//     show: function() {
//         return this;
//     }
// }

// console.log(obj.show())
// var b = new Object(obj)
// console.log(b)

// var c = Object.create(obj)
// console.log(c)
// console.log(c === b)


// // this is the exercise number 3:

// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;

// }

// let address1 = new Address('a', 'b', 'c');
// let address2 = new Address('a', 'b', 'c');

// function areEqaul(firstAddress, secondAddress) {

//     if (firstAddress.street === secondAddress.street && firstAddress.city === secondAddress.city && firstAddress.zipCode === secondAddress.zipCode) {
//         console.log("they are the same address")
//     } else
//         console.log("these two addresses are not equal")
// }
// areEqaul(address1, address2);

// function areSame(add1, add2) {

//     if (add1 === add2) {
//         console.log("the are exactly the same")
//     } else
//         console.log("they are not exactly the same")
// }
// areSame(address1, address2);

// TODO: exercise number four:

// const postBlock = {
//     title: "titleValue",
//     body: "bodyValue",
//     author: "authorValue",
//     views: 50,
//     comment: {
//         author: "CommentAuthorValue",
//         body: "commentBodyValue",
//     },
//     isLive: true,
// };

// function nestingPrint(obj, deps = 0) {
//     const keyArray = Object.keys(obj);
//     console.log(keyArray);
//     keyArray.forEach(key => {
//         if (typeof obj[key] == "object")
//             nestingPrint(obj[key], deps + 1)
//         else console.log(`deps:${deps} key:${key} value:${obj[key]}`)
//     });
// }

// nestingPrint(postBlock);

//Object.keys(postBlock).forEach(key => console.log(key, " : ", postBlock[key]));

function animal(name) {
    this.name = name;
};

animal.prototype.eat = function(obj) {
    console.log(name + ": object " + obj + " ate");
};
//------------------------
function wildAnimal(name) {
    animal.bind(this)(name);
};
wildAnimal.prototype = Object.create(animal.prototype);
wildAnimal.prototype.constructor = wildAnimal;

wildAnimal.prototype.hunt = function(obj) {
    console.log("hunted", obj);
};
// //-------------------------
// function yusAnimal() {};

// function aliYousefi() {};

// function khashayar() {};


const test = new wildAnimal("eshak");
console.log(test);