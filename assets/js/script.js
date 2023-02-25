let btn = document.getElementById("addBtn");
let input = document.getElementById("TextInput");
let list = document.getElementById("itemList");


btn.addEventListener("click", function(){
    list.innerHTML="";
    let n=0;
    let value = input.value;
    if (value=="") {
        alert("empty!!!")
        return;
    }

    while (n<value){
        n++;
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.style.cursor="pointer";
        li.innerText=n;
        list.appendChild(li);
    }
    
})

