
let sidebar2=document.querySelector(".aside-drawer");
let navopen=document.querySelector(".navopen");


navopen.addEventListener("click",()=>{
    if(sidebar2.style.display!=="none"){
        
        sidebar2.style.display="none";
        
    }
    else{
       sidebar2.style.display="flex";
       
    }
})



