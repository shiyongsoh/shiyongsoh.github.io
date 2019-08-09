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

		
	
			var slides = document.getElementsByClassName('slide');
			
		function hide(){
			
				//slides[i].classList.toggle("hidden");
				for(var i = 0; i<slides.length; i++){
					
				slides[i].classList.remove("show");
				
				console.log(i);
				}
			
		}
		function show(){
			
			console.log("show")
				slides[slidesCounter].classList.add("show");
				slides[slidesCounter].classList.remove("hidden");
				console.log(slides[slidesCounter]);
			
		} 
		var slidesCounter = 0;
		
		function slideshow(){
			for(var stackOrder = 0; stackOrder < slides.length; stackOrder++){
			slides[stackOrder].style.zIndex = stackOrder;
			console.log("stack")
			}
			slides[slidesCounter].classList.remove("show");
			slides[slidesCounter].classList.add("remove");
			//console.log(slidesCounter);
			
			//slides[slidesCounter].style.display = "none";	
			console.log("slides" + slidesCounter);
			//console.log("slides" + slidesCounter +"slides[slidesCounter].style.display === none =" + slides[slidesCounter].style.display === "none");
			slidesCounter++;
			console.log("slides" + slidesCounter);
			if(slidesCounter == slides.length){
				slidesCounter = 0;
			}
			var previousSlide = slidesCounter - 1;
			slides[slidesCounter].classList.add("show")
			slides[slidesCounter].classList.remove("remove")
			slides[slidesCounter].style.display = "flex";	
			
			setTimeout(function(){
				for(var i = 0; i <slides.length; i++){
					if(i != slidesCounter){
					slides[i].style.display = "none";		
					}
					
				}
				
			},1000)
			console.log("slides" + slidesCounter);
			
		}
		/*
			slides[slidesCounter].classList.remove("hide");
			slides[slidesCounter].classList.add("show");
				for(var i = 0; i<slides.length; i++){
					console.log(i == slidesCounter);
					if(i != slidesCounter){
						slides[i].classList.add("hide");
					}
				}
			setTimeout(function(){
				slides[previousSlide].classList.remove("show");
				console.log("previousSlide"+previousSlide);
			},time)
			
			
			
			
			-------------------------
			slides[currentSlide].classList.add("show");
			for(var i = 0; i < slides.length; i++){
				if(i != currentSlide){
				slides[i].classList.add("remove");
				}
			}
			setTimeout(function(){
				for(var j = 0; j <slides.length;j++){
					console.log("j"+j);
					console.log("currentSlide"+currentSlide);
					console.log(j != currentSlide);
					if(j != currentSlide){
						slides[j].classList.remove("show");
					}
					
				}
				
			},2000)
			slides[currentSlide].classList.remove("hide");
			
			currentSlide++;
			if(currentSlide == slides.length){
				currentSlide = 0;
			}
			
			
			*/
		
//setInterval(slideshow, 3000);

