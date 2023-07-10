document.addEventListener("DOMContentLoaded", (event) => {
	// Get the button element with class 'form-btn'
	var button = document.querySelector(".form-btn");

	// Get the div element to manipulate
	var formDiv = document.querySelector(".register-form");
	var postSubmitDiv = document.querySelector(".form-submitted");

	// Add an event listener to the button to listen for 'click' events
	button.addEventListener("click", function (event) {
		// Prevent default form submit action
		event.preventDefault();

		formDiv.classList.toggle("not-visible");
		postSubmitDiv.classList.toggle("not-visible");
	});
});
