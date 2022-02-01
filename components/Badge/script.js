 let button=document.querySelector(".button");
        let icon=document.querySelector(".button-badge");
        const toggleFn=()=>{
            if(icon.style.display!=="none"){
                icon.style.display="none";
                button.innerText="SHOW"
            }
            else{
                icon.style.display="flex";
                button.innerText="HIDE"
            }
        }
        button.addEventListener("click",toggleFn);