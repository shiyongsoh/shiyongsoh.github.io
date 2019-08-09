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
	
	 if(mode == 0){
	contents.style.display = "none";
	hide.style.display = "none";
	mode = 1;
	}
	else{
		contents.style.display = "block";
		hide.style.display = "block";
		mode = 0;
	} 
	console.log(contents);
	//alert(name);*/

	console.log("This is running");
}
function nightmode(){
	console.log("Nightmode is working")
	document.body.classList.toggle("nightmode");
}


function validate(){
	var isEmpty="";
	event.preventDefault();
	console.log("hmm");
	var count =0;
	var checked = false;
	var input = document.getElementsByTagName("input");
	
			while(count < input.length-1){
		if(input[count].value == ""){
			console.log("this is null");
			input[count].style.background = "#f55442";
		}
		else if(input[count].value != null){
			console.log("this is not null");
			input[count].style.background = "#51f542";
		}
		count++;
	}
		//---
		var email = document.getElementById('email').value;
		console.log(email);
		var emailSupposeToHave = new RegExp("@[a-zA-Z0-9]");
		var validEmail = emailSupposeToHave.test(email);
		console.log("Email is "+validEmail + " \nemail suppose to have" + emailSupposeToHave + "\nemail" + email);
		//---
		if(validEmail){
		document.getElementById('email').style.background = "#51f542";
		}
		else{
			document.getElementById('email').style.background = "#f55442";
		}
		var allOk;
		for(var i = 0; i<input.length-1;i++){
			checked = true;
		}
		 allOK = validEmail && checked;
		console.log(allOK+validEmail+checked)
	
	if(allOK){
		window.location.href = "https://www.example.com";
	}
}

/*
Note to self
Javascript syntax for style toggle
this.style.[Insert css properties here]
*/
