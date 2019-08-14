window.onscroll = function() {
	changeStyle();
	}
var navbar = document.getElementById('navbar');
console.log(navbar)
console.log(screen.width);
var width;
function changeStyle(){
	if(document.documentElement.scrollTop > 50){
		//navbar.classList.remove('navbar-dark');
		if(screen.width > 994){
		navbar.classList.remove('bg-transparent');	
		}
		
		//navbar.style.display = "none";
		//navbar.classList.add('')
	}
	else{
		//navbar.classList.add('navbar-dark');
		
		navbar.classList.add('bg-transparent');
	}
	
	width = document.body.clientWidth;
		if(width < 994){
	navbar.classList.remove('bg-transparent');	
	}
}
