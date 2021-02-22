// 
	
// 	after duplicating like a mad man, I think I am just going to make a script to duplicate all my certs instead.....
// 	so just by copying and pasting the name repeatedly, I would be able to continue doing this until everything is up!
// 
function thingsToShow(name,achivementName, alternateText = 0, modalContent, modalTitle,moreContent){
    displayAt = document.getElementById("contentToShow");
    certShow = document.createElement("a");
    certShow.setAttribute("class", "col-sm-4 col-lg-3 mr-5 certificate");
    certShow.setAttribute("onclick", "popup('"+name+"')");
    certShow.setAttribute("href", '#'+name);

    
    //add figure tag
    certContent = document.createElement("figure");
    certImage = document.createElement("img");
    certFigCaption = document.createElement("figcaption");

    //image of the product
    certImage.setAttribute("src",achivementName);
    certImage.setAttribute("alt", alternateText)
    certImage.setAttribute("class", "carousel-inner")
    

    //modal of the image
    certModal = document.getElementById('noshow')
    certModalSection = document.createElement('section');
    certModalFigure = document.createElement('figure');
    certModalCaption = document.createElement('figcaption');
    modalHeader = document.createElement('div');
    modalBody = document.createElement('div');
    modalFooter = document.createElement('div');

    //appending whatever was created
    displayAt.appendChild(certShow);
    certShow.appendChild(certContent);
    certContent.appendChild(certImage);
    certShow.appendChild(certFigCaption);
    
    

    //onclick content
    certImage = document.createElement("img");
    var content = document.createElement('p');
    content.innerHTML = moreContent
    var title = document.createElement('h1');
    title.innerHTML = modalTitle
    //properties and captions of the modal content
    certModalSection.setAttribute("class","portfolio-modal modal")
    certModalSection.setAttribute("id",name)
    certModalSection.setAttribute("onclick","popup('"+name+"')")
    certModalFigure.setAttribute("class","modal-dialog modal-lg")
    modalHeader.setAttribute('class','modal-header')
    modalBody.setAttribute('class','modal-body d-flex')
    modalFooter.setAttribute('class','modal-footer')
    certImage.setAttribute("src",achivementName);
    certImage.setAttribute("alt", alternateText)
    certImage.setAttribute("class", "carousel-inner")
    certModalCaption.setAttribute('class','modal-content')


    
    //appending to no show
    certModal.appendChild(certModalSection)
    certModalSection.appendChild(certModalFigure)
    certModalFigure.appendChild(certModalCaption)
    certModalCaption.appendChild(modalHeader)
    modalHeader.appendChild(title)
    certModalCaption.appendChild(modalBody)
    modalBody.appendChild(certImage)
    modalBody.appendChild(content)
    certModalCaption.appendChild(modalFooter)
    
}
