		var slides = document.getElementsByClassName('slide');
		var slidesCounter = 0;
		var preview = document.getElementsByClassName("preview");
		function slideshow(showThis){
			if(isNaN(showThis) == false && showThis != null){
				//showThis = slidesCounter; //this works
				slidesCounter = showThis-1;
				console.log("Show this")
			}
			for(var stackOrder = 0; stackOrder < slides.length; stackOrder++){
			slides[stackOrder].style.zIndex = stackOrder;
			}
			if(slidesCounter < 0){
				slidesCounter = 0;
			}
			slides[slidesCounter].classList.remove("show");
			slides[slidesCounter].classList.add("remove");
			//thumbnails(slidesCounter, 0)
			preview[slidesCounter].style.border = "none";
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
			preview[slidesCounter].style.border = "3px solid #63fffa";
			setTimeout(function(){
				for(var i = 0; i <slides.length; i++){
					if(i != slidesCounter){
					slides[i].style.display = "none";		
					preview[slidesCounter].style.border = "none";
					}	
				}
			},1200)
			//thumbnails(slidesCounter, 1)
			
		}
		
		
		
		setInterval(slideshow, 5000)
	
