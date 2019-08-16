		/*
		This script gives the slideshow fade in effect
		*/
		var slides = document.getElementsByClassName('slide');//this defines where the slides is
		var slidesCounter = 0;//This is the variable that stores the slides number
		var preview = document.getElementsByClassName("preview");//This is to define the preview image
		function slideshow(showThis){
			if(isNaN(showThis) == false && showThis != null){//This function detects if there is any need for changing to any image that is not the next slide
				//showThis = slidesCounter; //this works
				slidesCounter = showThis-1;//This is to ensure that the slides are what they are and not +1 to whatever the user clicks, for example if the user click on image 0, the program will percive as image 0 and not image 0 + 1
			}
			//ensure that the stack order are correct and defines the stack order
			for(var stackOrder = 0; stackOrder < slides.length; stackOrder++){
			slides[stackOrder].style.zIndex = stackOrder;
			}
			if(slidesCounter < 0){//To ensure that the above code do not go beyond - 1 because the code above deducted 1, for example if the user click 0, they will not go -1, which will cause and error
				slidesCounter = 0;
			}
			slides[slidesCounter].classList.remove("show");//This is to remove show class css
			slides[slidesCounter].classList.add("remove");//This is to add the add class css, which will hide the image and have a fade in effect
			//thumbnails(slidesCounter, 0)
			preview[slidesCounter].style.border = "none";//This is to remove the style border of the image thumbnails
			slidesCounter++;//adds slide counter;
			//This chunk is to ensure, yet again that the number do not go below 0, because during the development of this program, certain specific circumstances will give slideCounter a negative number, which will cause bugs to the program
			if(showThis <= 0){
				showThis = 0;
				slidesCounter = showThis;
				
			}
			if(slidesCounter == slides.length){//This is to check if the slide Counter counts more than what the image have. It will revert back to 0 if the counter exits to whatever number it have. 
				slidesCounter = 0;
			}
//The reason why we need to if statments is because we want to do to different actions, if not, it will result in an error if only one of the two are done			
			slides[slidesCounter].classList.add("show");//add the class called show, to show the image and to ensure that the image is there
			slides[slidesCounter].classList.remove("remove");//remove the class called remove, so that the image will not remain hidden
			slides[slidesCounter].style.display = "flex";	//show the image, or the display will be none by default and nothing will be showing
			preview[slidesCounter].style.border = "3px solid #63fffa";//Draw a border for the thumbnail images
			setTimeout(function(){//this function is called ever 1.2seconds, to ensure that all images are remvoe and to ensure that the correct thumbnail is shown
				for(var i = 0; i <slides.length; i++){
					if(i != slidesCounter){
					slides[i].style.display = "none";		
					preview[i].style.border = "none";
					}	
				}
			},1200)
			//thumbnails(slidesCounter, 1)
			
		}
		
		
		
		setInterval(slideshow, 5000)//This will call the slideshow every 5 seconds.
		
		/*
		This is a time sensitive program, any difference in the timing will result in glitches. There are no bugs found at the time of development where user can induce a bug in the slideshow.
		*/
	
