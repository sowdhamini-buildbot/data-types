/*

Mainly there is 2 kind of data types in Javascript Programming Language

01) Primitivetypes
02) Referenecetypes

*/

//PRIMITIVE TYPES

// There are 7 kind of Primitive Data Types
// 01) Number [Integer || 4 && Float || 4.0]
// 02) String [In '' || "" || ``]
// 03) Bollean [true || false]
// 04) Undefined [Like something that not defined in code]
// 05) Null [Like something intentional absence of any object value in code]
// 06) bigInt
// 07) Object and symbols

//string -	represents sequence of characters
let person =" sowdhamini"


//number - 	represents numeric values 
let age = 24


//boolean - represents boolean value either false or true
const valueChecked= true


//null - 	represents undefined value
var person = null

//undefined - represents null i.e. no value at all
var person ;

//symbols



//bigint -BigInt type was recently added to the language to represent integers of arbitrary length.A BigInt value is created by appending n to the end of an integer:
const bigInt = 1234567890123456789012345678901234567890n;


//typeOf operator
let person = "sowdhamini"
let age = 24
console.log(typeof person)


//REFERENCE TYPES
// There are 3 data types
// 01) Arrays
// 02) objects
// 03) Functions

//Arrays : Arrays in JavaScript are the data type used to store a list of values.The items in an array are enclosed within square brackets.
let fruits = ["Apple", "Orange", "Plum"];

//objects :An object is an unordered collection of key-value pairs. Each key-value pair is called a property.

var personDetails = {
    name: "sowdhamini",
    age:24,
    
}

//function : function performs particular task
function hello(){
    alert("hello");
}