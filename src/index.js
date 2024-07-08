// function sayHello() {
// 	alert("Hello World")
// }

// setTimeout(sayHello, 3000);

//The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

//The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
//First Example
function sayHello() {
	let helloBox = document.querySelector('#hello');
	helloBox.innerHTML = 'Bonjour le monde';
}

setTimeout(sayHello, 3000);

//Second Example

setTimeout(function () {
	let helloBox = document.querySelector('#hello');
	helloBox.innerHTML = 'Bonjour le monde';
}, 3000);

//Third Example

setTimeout(() => {
	let helloBox = document.querySelector('#hello');
	helloBox.innerHTML = 'Bonjour le monde';
}, 3000);