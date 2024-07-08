// function sayHello() {
// 	alert("Hello World")
// }

// setTimeout(sayHello, 3000);

//The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

//The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
//First Example of setTimeout
function sayHello() {
	let helloBox = document.querySelector('#hello');
	helloBox.innerHTML = 'Bonjour le monde';
}

setTimeout(sayHello, 3000);

//Second Example of setTimeout

setTimeout(function () {
	let helloBox = document.querySelector('#hello1');
	helloBox.innerHTML = 'Hallo!';
}, 3000);

//Third Example of setTimeout

setTimeout(() => {
	let helloBox = document.querySelector('#hello2');
	helloBox.innerHTML = 'Hola Mundo!';
}, 3000);

//clearTimeout() Method

//The clearTimeout() method clears a timer set with the setTimeout() method.
setTimeout(function () {
	let helloBox = document.querySelector('#hello3');
	helloBox.innerHTML = 'Ahoj světe!';
}, 3000);
clearTimeout(3000);

// setInterval() Method

//The setInterval() method calls a function or evaluates an expression
//at specified intervals(in milliseconds).
setInterval(function () {
	let helloBox = document.querySelector('#hello4');
	helloBox.innerHTML = 'Kumusta sa mundo!';
}, 3000);

// setInterval() Method with clearInterval() Method

//The setInterval() method will continue calling the function until
//clearInterval() is called, or the window is closed.
setInterval(function () {
	let helloBox = document.querySelector('#hello5');
	helloBox.innerHTML = 'Guten tag Welt!';
}, 3000);


//The clearInterval() method clears a timer set with the setInterval() method.
setInterval(function () {
	let helloBox = document.querySelector('#hello6');
	helloBox.innerHTML = 'Aloha Honua!';
}, 3000);
clearInterval(3000);

//Example of using setTimeout() and setInterval() together

function sayHello() {
	let helloBox = document.querySelector('#hello7');
	helloBox.innerHTML = 'Namaste Duniya!';
}

setTimeout(sayHello, 3000);









