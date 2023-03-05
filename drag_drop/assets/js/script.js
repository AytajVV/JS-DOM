let dragElement = document.querySelector(".img-container");
let dropElements = document.querySelectorAll(".box");


dropElements.forEach(dropElement=>{
    dropElement.ondragover=function(e){
        e.preventDefault();
    };

    dropElement.ondrop=function(e){
        this.append(dragElement);
    };
});




