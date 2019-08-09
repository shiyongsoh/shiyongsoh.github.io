/*var hmm = document.getElementsByClassName("hmm");
console.log(hmm);
for(){}
hmm[0].style.display = "none";*/
/* function slideshow(){
	var slides = document.getElementsByClassName("slide");
	for(var hid = 0; hid < slides.length;hid++){
		slides[hid].classList.toggle("hidden");
	}
	console.log("hmm")
	
	
}
setInterval(slideshow, 3000); */


		var slidesCounter = 0;
		function slideshow(){
			slidesCounter++;
			var slides = document.getElementsByClassName('slide');
			
			for(var i = 0; i<slides.length; i++){
				//slides[i].classList.toggle("hidden");
				slides[i].classList.remove("show");
				slides[i].classList.add("hidden");
				console.log(slides[i]);
			}
			
			console.log(slidesCounter);
			
			console.log(slidesCounter == slides.length)
			if(slidesCounter == slides.length){
				slidesCounter = 0;
			}
			//slides[slidesCounter].style.display = "block";
			slides[slidesCounter].classList.remove("hidden");
			slides[slidesCounter].classList.add("show");
			
		}
setInterval(slideshow, 3000);