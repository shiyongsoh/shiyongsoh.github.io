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
		var slidesCounter = 0;
		var preview = document.getElementsByClassName("preview");
		function slideshow(showThis){
			if(isNaN(showThis) == false && showThis != null){
				//showThis = slidesCounter; //this works
				slidesCounter = showThis-1;
			}
			for(var stackOrder = 0; stackOrder < slides.length; stackOrder++){
			slides[stackOrder].style.zIndex = stackOrder;
			}
			if(slidesCounter < 0){
				slidesCounter = 0;
			}
			slides[slidesCounter].classList.remove("show");
			slides[slidesCounter].classList.add("remove");
			thumbnails(slidesCounter, 0)
			slidesCounter++;
			if(showThis <= 0){
				showThis = 0;
				slidesCounter = showThis;
				
			}
			if(slidesCounter == slides.length){
				slidesCounter = 0;
			}
			
			slides[slidesCounter].classList.add("show")
			slides[slidesCounter].classList.remove("remove")
			slides[slidesCounter].style.display = "flex";	
			
			setTimeout(function(){
				for(var i = 0; i <slides.length; i++){
					if(i != slidesCounter){
					slides[i].style.display = "none";		
					}	
				}
			},1200)
			thumbnails(slidesCounter, 1)
		}
		
		function thumbnails(slideNumber, show){
			console.log("preview " + slideNumber+ "\nshow "+show)
			switch(show){
				case 0:
				
					preview[slideNumber].style.border = "none";
				break;
				/*case 1:
					for(var i = 0; i < preview.length; i++){
						
						if(i != slideNumber){
							console.log("This is running");
							preview[slideNumber].style.border = "none";
						}
					}
					preview[slideNumber].style.border = "3px solid #63fffa";
				break;*/
			}
			for(var i = 0; i < preview.length; i++){
						
						if(i != slideNumber){
							
							preview[slideNumber].style.border = "none";
						}
					}
		}
		
		setInterval(slideshow, 5000)
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

