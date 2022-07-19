function validation(){
	var fname = document.getElementById("name");
	var checkname=/^[A-Za-z ]+$/;
	var checknumber=/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
	var checkemail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
	var email =  document.getElementById("email");
	var txtarea=document.getElementById("message");
	if(fname.value=="" || !checkname.test(fname.value) ){
	  alert("Kindly Check Your  Name");
	  fname.focus();
	  return false;
	}        
	
	if(email.value=="" || !checkemail.test(email.value)){
	  alert("Kindly Check Your Mail ID");
	  email.focus();
	  return false;
	}
	if(txtarea.value==""){
		alert("KIndly Type Your Message")
		return false;
	}
	alert("I Will Contact You ASAP!")
	return true;
}


















/*ye bacha h*/
/*$(document).ready(function() {
	Adding Sticky Navigation 
	$("js--myintro").waypoint(function(direction) {
		if(direction=="down") {
			$("nav").addClass('sticky-nav');
		}
		else {
			$("nav").removeClass('sticky-nav');
		}
	}); 
});*/