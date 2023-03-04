let headers = document.querySelectorAll(".container button");
let contents = document.querySelectorAll(".container .panel");

headers.forEach(header=>{
    header.addEventListener("click", function(){
        let activeContent = document.querySelector(".active");
        this.classList.add("active");
        activeContent.classList.remove("active");
        contents.forEach(content=>{
             if (content.getAttribute("data-id")==this.getAttribute("data-id")) {
                content.classList.remove("d-none");
            }
             else{
                content.classList.add("d-none");
            }
        });
 

    })
})