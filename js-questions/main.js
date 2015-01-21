// Question #1:

// var person = {firstName: "Bob", lastName: "Smith", age: 32};

// function listProperties() {

// 	console.log(person.firstName);
// 	console.log(person.lastName);
// 	console.log(person.age)

// };

// Question #2:

// var person = {firstName: "Bob", lastName: "Smith", age: 32, rollno: 12};

// function nameList(person) {
// 	console.log(person);

// 	delete person.rollno;
// 	console.log(person);

// }

// Question #3:

// Define an object that is stored
// var object1 = {
// 	firstName: 'alex',
// 	lastName: 'dave',
// 	address: 'amesbury',
// 	city: 'alexander'
// };

// // Create a variable that will store the counted letter inside the object
// var numberlog = 0;

// // Create a function that will search through every 'key' (property) in the object (as seen int he 'for' loop)
// function searchString(object) {
// 	for(var key in object) {
// 		// console.log(object[key][0]);
// 		// console.log(object[key].charAt(0));

// 		// This says, 'if the first position inside a key is 'a', continue to add to 'numberlog'
// 		if(object[key].charAt(0) == 'a') {
// 			numberlog = numberlog + 1;
// 		}
// 	}
// 	return numberlog;
// }

// Qustion #4:

// var cylinder = {radius: 3, height: 10};

// function object(cylinder) {
// 	var vol = (cylinder.radius) * (cylinder.height)
// 	return vol
// }

// Question 5:

// function nameList(fN, lN, a) {
// 	var names = {firstName: fN, lastName: lN, age: a}; 
// 	// var friends = friends: ["Joey", "Kim", "Tim"];
// 	// nameList.friends
// 	names.friends = [joey, kim, tim];
// 	return names
// }

// Question 6:

// var names = {firstName: "fN", lastName: "lN", age: "a", friends: ["Joey, Kim, Tim"]}; 

function nameList(name, y) {
	name.friends.push("y");

	return names
}



