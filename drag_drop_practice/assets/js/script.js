let dragElements = document.querySelectorAll(".box");
let dropElements = document.querySelectorAll(".fields");

dragElements.forEach(b=>{
    b.addEventListener("dragstart", function(e){
        e.dataTransfer.setData("text", e.target.id)
    })
})


dropElements.forEach(dropElement=>{
    
    // dropElement.ondragover=function(e){
    //     e.preventDefault();
    // };

    dropElement.ondrop=function(e){
        this.append(dragElement);
    };
})



