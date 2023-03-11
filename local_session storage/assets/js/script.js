// let a=5;
// localStorage.setItem("name", "Aytac");
// console.log(localStorage.getItem("name"));
let buttonProducts = document.querySelectorAll(".btn-primary");
buttonProducts.forEach(btn=>{
    btn.addEventListener("click", function(e){
        e.preventDefault();
        let id = btn.parentNode.getAttribute("data-id");
        if (localStorage.getItem("basket")==null) {
            localStorage.setItem("basket", JSON.stringify([]))
        }
        let arr = JSON.parse(localStorage.getItem("basket"));
        let existProduct = arr.find(p=>p.id==id);
        if (existProduct==undefined) {
            arr.push({
                id:id,
                imgUrl:btn.parentNode.previousElementSibling.getAttribute("src"),
                name:btn.parentNode.firstElementChild.innerText,
                price:btn.previousElementSibling.innerText,
                count:1
            })
            
        }
        else{
            existProduct.count++;
        }
        localStorage.setItem("basket", JSON.stringify(arr));


    })
})