
"use strict";

//global variables



//prototype

function Person (){
	this.firstName	 =	 "";
	this.lastName	 =	 "";
};


//Form variables and methods

<<<<<<< HEAD
var submitButton = document.getElementById("submitButton");
var firstNameInput = document.getElementById("firstNameInput");
=======
>>>>>>> trying-jQuery




submitButton.onclick = function () {
	
	
	
	var person = new Person();
	person.firstName 	=	firstNameInput.value;
	person.lastName 	=	lastNameInput.value;
	
	
	alert(person.firstName + person.lastName);
	
};


$(document).ready(function(){
<<<<<<< HEAD
	
=======
	var submitButton = $("#submitButton");
	var firstNameInput = $("#firstNameInput");
>>>>>>> trying-jQuery
	var lastNameInput = $("#lastNameInput");
	
	
});
