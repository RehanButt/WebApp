
"use strict";

//global variables



//prototype

function Person (){
	this.firstName	 =	 "";
	this.lastName	 =	 "";
};


//Form variables and methods

var submitButton = document.getElementById("submitButton");
var firstNameInput = document.getElementById("firstNameInput");




submitButton.onclick = function () {
	
	
	
	var person = new Person();
	person.firstName 	=	firstNameInput.value;
	person.lastName 	=	lastNameInput.value;
	
	
	alert(person.firstName + person.lastName);
	
};


$(document).ready(function(){
	
	var lastNameInput = $("#lastNameInput");
	
	
});
