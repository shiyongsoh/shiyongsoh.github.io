var state;
var mode;
function findHighestZIndex(elem)
{
  var elems = document.getElementsByTagName(elem);
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
function popup(name){
	var contents = document.getElementById(name);
	var hide = document.getElementsByClassName('hidden');
	var mode = 0;
	if(contents.style.display === "flex"){
	contents.style.display = "none";
	hide.style.display = "none";
	}
	else{
		contents.style.display = "flex";
		hide.style.display = "flex";
	}
	//alert(name);
}

/*This is a discarded nightmode function
Starts from here*/
function nightmode(){

	var eyeprotect = document.querySelector("body");
	var navbar = document.getElementById("navbar");
	var contents = document.querySelector(".content");
	var table = document.querySelector('.table');
	var white = document.getElementsByClassName('white');
  var navwords = document.getElementsByClassName('a');
	var button = document.getElementById("nightmode");

	if(state == 1){
    state = 0;

	 eyeprotect.style.background ="white";
	 eyeprotect.style.color ="black";
	 navbar.style.background = "#90cec7";
   //navwords.style.color = "white";
	 //navbar.style.backgroundImage = "linear-gradient(#e0fff3,#baffe5)";
	 //contents.style.background = "#fff";
	 table.style.background = "#e5e5e5";
	 //white.style.backgroundColor = "white";
	 button.innerHTML = "Night Mode";
   /* for(var i=0; i <= navwords; i++){
     navwords[i].fontColor = "white";
      console.log(i);
   }*/
console.log("light mode");
	}
	else /*if(state !== 1)*/{
     state = 1;
    // console.log(state);

	 eyeprotect.style.background ="grey";
	 eyeprotect.style.color ="white";
	navbar.style.background = "#666666";
   navbar.style.fontcolor = "white";
	 //contents.style.background = "#1e1e1e";
	 table.style.background = "#1e1e1e";
    //navwords.style.color = "white";
	 //white.style.color = "#1e1e1e";
	 button.innerHTML = "Day Mode";
   console.log("dark mode");
  /* for(var i=0; i <= navwords; i++){
     navwords[i].fontColor = "white";
     console.log(i);
   }*/
console.log("dark mode");
	}


}
/*To here*/
function mobile(){

  var mobile = document.getElementById("mobile");
  var words = document.querySelectorAll("nav a");


  if(mode == 1){
	//mobile.style.display = "none";
	//hide.style.display = "none";

    mobile.style.display = "none";
    /*words.style.color = "white";
    words.style.display = "none";*/

      //words.display = "none";

    //mobile.style.color = "white";
  console.log("none");
  mode = 0;
	}
	else{
		mobile.style.display = "block";
  //  words.style.color = "white";
    //words.style.display = "flex"
    //words.display = "block";
		//hide.style.display = "flex";
    console.log("flex");
    mode = 1;
	}
  console.log(mobile);
}

/*
Note to self
Javascript syntax for style toggle
this.style.[Insert css properties here]
*/
