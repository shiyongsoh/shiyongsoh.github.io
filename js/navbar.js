window.onscroll = function() {
	changeStyle();
	}
var navbar = document.getElementById('navbar');
var navul = document.getElementsByTagName('ul');
console.log(navbar)
console.log(screen.width);
var width;
function changeStyle(){
	if(document.documentElement.scrollTop > 50){
		//navbar.classList.remove('navbar-dark');
		if(screen.width > 994){
		navbar.classList.remove('bg-transparent');	
navul[0].classList.remove('yongnav');			
		}
		
		//navbar.style.display = "none";
		//navbar.classList.add('')
	}
	else{
		//navbar.classList.add('navbar-dark');
		navul[0].classList.add('yongnav');
		
		navbar.classList.add('bg-transparent');
	}
	
	width = document.body.clientWidth;
		if(width < 994){
	navbar.classList.remove('bg-transparent');	
	}
}
