
let sidebar=document.querySelector(".aside-drawer");
let navopen=document.querySelector(".navopen");


navopen.addEventListener("click",()=>{
    if(sidebar.style.display!=="none"){
        
        sidebar.style.display="none";
        
    }
    else{
       sidebar.style.display="flex";
       
    }
})



