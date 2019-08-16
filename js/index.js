var state;
var mode;

var mode;
function popup(name){//This will control the modal. It will toggle between hide and show
	event.preventDefault();//This is to prevent default functionality of the web browser
	var contents = document.getElementById(name);
	var hide = document.getElementsByClassName('hidden');
	var main = document.getElementById('main');
	for(var i = 0; i<main.length; i++){
		console.log(main[i]);
	}
	var mode = 0;
	if(contents.style.display === "block"){//If there are no modals
	contents.style.display = "none";
	main.style.opacity = "1";
	}
	else{//If there is a modal
		contents.style.display = "block";
		main.style.opacity = "0.5";
	}
	//alert(name);
}


function validate(){//This is used to validate the form
	event.preventDefault();//This is to prevent default functionality of the web browser
	console.log("hmm");
	var count =0;//question count
	var checked = false;//To check if everything is filled up
	var input = document.getElementsByTagName("input");
	var phoneValid;
	var phone = document.getElementById("phone").value;
	var warn = document.getElementsByClassName("warn");
	console.log("phone" + isNaN(phone));
	
	var fieldDone = 0;
	//This checks all inputs
			while(count < input.length){
					if(isNaN(phone) == true){//This line checks the phone, what happen if its not valid
			document.getElementById("phoneWarn").style.display = "block";
			phoneValid = false;
		}
		else{//If the phone that keyed in by the user is valid
			document.getElementById("phoneWarn").style.display = "none";
			phoneValid = true;
		}

		if(input[count].value == ""){
			console.log("this is null");
			//input[count].style.display = "#f55442";
			warn[count].style.display = "block";
		}
		else if(input[count].value != null){
			console.log("this is not null");
			//input[count].style.background = "#51f542";
			warn[count].style.display = "none";
			fieldDone++
		}
	
		count++;
	}	
	
		
		//Check if the user email is valid
		var email = document.getElementById('email').value;
		var emailpattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  //Email regex
		var emailSupposeToHave = new RegExp(emailpattern);
		var validEmail = emailSupposeToHave.test(email);
		console.log("Email is "+validEmail + " \nemail suppose to have" + emailSupposeToHave + "\nemail" + email);
		//---
		if(validEmail){//If this is a valid email
		document.getElementById('emailWarn').style.display = "none";
		
		}
		else{//If this is not a valid email
			document.getElementById('emailWarn').style.display = "block";
		}
		var allOk;//A way to store all boolean variables
		for(var i = 0; i<input.length-1;i++){
			checked = true;
		}
		 allOK = validEmail && checked && fieldDone== input.length && phoneValid;//to store all input variables
	
	if(allOK){//If everything is ok
		window.location.href = "thankyou.html";
	}
}


/*
Note to self
Javascript syntax for style toggle
this.style.[Insert css properties here]
*/
