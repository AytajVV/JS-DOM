let name = document.getElementById("exampleInputEmail1");
let pass = document.getElementById("exampleInputPassword1");
let btn = document.getElementById("submitBtn");
let check = document.getElementById("check");
let first = document.getElementById("first");
let second = document.getElementById("second");
let span = document.getElementById("span");


btn.addEventListener("click", function(e){
    e.preventDefault();
    let value = name.value;
    let valuePass = pass.value;
    if (value=="") {
        span.classList.add("showON");
        first.appendChild(span);
        
    }
    else if(valuePass==""){
        let span = document.createElement("span");
        span.innerText="Field must be filled out";
        span.classList.add("color");
        second.appendChild(span);
    }
    else{
        span.classList.add("showOFF");
        alert("Success");
        
    }
    
    
})
check.addEventListener("click", function(){
    if (pass.type == "password") {
        pass.type = "text";
      } 
    else{
        pass.type = "password";
    }
})
