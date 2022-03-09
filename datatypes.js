/*

Mainly there is 2 kind of data types in Javascript Programming Language

01) Primitivetypes
02) Referenecetypes

*/

//PRIMITIVE TYPES : Primitive data types can store only a single value

// There are 7 kind of Primitive Data Types
// 01) Number [Integer || 4 && Float || 4.0]
// 02) String [In '' || "" || ``]
// 03) Bollean [true || false]
// 04) Undefined [Like something that not defined in code]
// 05) Null [Like something intentional absence of any object value in code]
// 06) bigInt
// 07) Object and symbols

//string -	 It represents a series of characters and is written with quotes. A string can be represented using a single or a double quote.
let person = "sowdhamini"


//number - 	It represents a number and can be written with or without decimals.
let age = 24
let x=3.6


//boolean -  It represents a logical entity and can have only two values : true or false
var a = 2;
var b =  3;
var c =  2;
(a == b) // returns false
(a == c) //returns true


//null - represents undefined value
var person = null

//undefined - When a variable is declared but not assigned, it has the value of undefined and it’s type is also undefined.
var x; // value of x is undefined
var y = undefined; // we can also set the value of a variable as undefined


//symbols -It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value.
var symbol1 = Symbol('symbol');



//bigint - This data type is used to store numbers which are above the limitation of the Number data type. It can store large integers and is represented by adding “n” to an integer literal.
const bigInt = 1234567890123456789012345678901234567890n;


//typeOf operator
let person = "sowdhamini"
let age = 24
console.log(typeof person)


//REFERENCE TYPES : To store multiple and complex values, non-primitive data types are used.
// There are 3 data types
// 01) Arrays
// 02) objects
// 03) Functions

//Arrays : Arrays in JavaScript are the data type used to store a list of values.array starts with [0] and end with [n] value.The items in an array are enclosed within square brackets.
let fruits = ["Apple", "Orange", "Plum"];

//get array length
console.log(fruits.length);

//get array value
console.log(fruits[1]);

//change array element
fruits[0]= "guva";
console.log(fruits[0]);


//objects :An object is an unordered collection of key-value pairs. Each key-value pair is called a property. object literal syntax {}.

const person = {
name: "raju", //key and value - property
age:34  //key - age , 34- value
}
console.log(person);

//delete the property
delete person.age;
console.log(person);


//function : function performs particular task
function hello(){
    alert("hello");
}
