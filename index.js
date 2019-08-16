var state;
var mode;
function findHighestZIndex(elem)
{
  var elems = document.getElementsByClassName(elem);
  var highest = 0;
  for (var i = 0; i < elems.length; i++)
  {
    var zindex=document.defaultView.getComputedStyle(elems[i],null).getPropertyValue("z-index");
    if ((zindex > highest) && (zindex != 'auto'))
    {
      highest = zindex;
	  console.log(highest);
	  console.log(zindex);
    }
  }
  console.log("zindex of"+ elem +" is" + highest);
  return highest;


}
var mode;
function popup(name){
	event.preventDefault();
	var contents = document.getElementById(name);
	var hide = document.getElementsByClassName('hidden');
	var main = document.getElementById('main');
	for(var i = 0; i<main.length; i++){
		console.log(main[i]);
	}
	var mode = 0;
	if(contents.style.display === "block"){
	contents.style.display = "none";
	main.style.opacity = "1";
	}
	else{
		contents.style.display = "block";
		main.style.opacity = "0.5";
	}
	//alert(name);
}
function nightmode(){
	console.log("Nightmode is working")
	var article = document.getElementsByClassName('content');
	document.body.classList.toggle("nightmode");
	for(var i = 0; i < article.length; i++){
	article[i].classList.toggle("bg-light");
	}
}


function validate(){
	
	event.preventDefault();
	console.log("hmm");
	var count =0;
	var checked = false;
	var input = document.getElementsByTagName("input");
	var phoneValid;
	var phone = document.getElementById("phone").value;
	var warn = document.getElementsByClassName("warn");
	console.log("phone" + isNaN(phone));
	
	var fieldDone = 0;
			while(count < input.length){
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
		if(isNaN(phone) == true){
			console.log("Phone is false");
			document.getElementById("phoneWarn").style.display = "block";
			phoneValid = false;
		}
		else{
			console.log("Phone is true");
			document.getElementById("phoneWarn").style.display = "none";
			phoneValid = true;
		}

		count++;
	}	
	
		
		//---
		var email = document.getElementById('email').value;
		console.log(email);
		var emailpattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		//var emailSupposeToHave = new RegExp("@[a-zA-Z0-9]");
		var emailSupposeToHave = new RegExp(emailpattern);
		var validEmail = emailSupposeToHave.test(email);
		console.log("Email is "+validEmail + " \nemail suppose to have" + emailSupposeToHave + "\nemail" + email);
		//---
		if(validEmail){
		//document.getElementById('email').style.background = "#51f542";
		document.getElementById('emailWarn').style.display = "none";
		
		}
		else{
			//document.getElementById('email').style.background = "#f55442";
			document.getElementById('emailWarn').style.display = "block";
		}
		var allOk;
		for(var i = 0; i<input.length-1;i++){
			checked = true;
		}
		console.log(phoneValid)
		 allOK = validEmail && checked && fieldDone== input.length && phoneValid;
		console.log(allOK)
	
	if(allOK){
		window.location.href = "thankyou.html";
	}
}


/*
Note to self
Javascript syntax for style toggle
this.style.[Insert css properties here]
*/
