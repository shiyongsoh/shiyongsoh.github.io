window.onscroll = function() {//To check if the user scrolled
	changeStyle();
	}
var navbar = document.getElementById('navbar');//To point the variable navbar to the navbar in the HTML document itself
var navul = document.getElementsByTagName('ul');//refers to navbarul, which will subsequently be defined below

var width;
function changeStyle(){
	if(document.documentElement.scrollTop > 50){
		//navbar.classList.remove('navbar-dark');
		if(screen.width > 994){
		navbar.classList.remove('bg-transparent');	//add bg transparent from bootstrap
		navul[0].classList.remove('yongnav');//removes own navigation property
		}
		
		//navbar.style.display = "none";
		//navbar.classList.add('')
	}
	else{
		//navbar.classList.add('navbar-dark');
		navul[0].classList.add('yongnav');//removes own navigation property
		
		navbar.classList.add('bg-transparent');//add bg-transparent from bootstrap
	}
	
	width = document.body.clientWidth;//Detects the width of the HTML document
		if(width < 994){
	navbar.classList.remove('bg-transparent');	//removes bg-transparents from bootstrap
	}
}
