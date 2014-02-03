
"use strict";

//global variables



//prototype

function Person (){
	this.firstName	 =	 "";
	this.lastName	 =	 "";
};


//Form variables and methods





submitButton.onclick = function () {
	
	
	
	var person = new Person();
	person.firstName 	=	firstNameInput.value;
	person.lastName 	=	lastNameInput.value;
	
	
	alert(person.firstName + person.lastName);
	
};


$(document).ready(function(){
	var submitButton = $("#submitButton");
	var firstNameInput = $("#firstNameInput");
	var lastNameInput = $("#lastNameInput");
	
	
});
