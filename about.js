console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully!");
}

const complimentUser = (event) => {
	alert("You are prettier than this crystal covered ducky.")
}
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
let blingDuck = document.querySelector("#rubberducky");
blingDuck.addEventListener("mouseover", (complimentUser))