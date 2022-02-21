 let button=document.querySelector(".button");
        let icon2=document.querySelector(".button-badge");
        const toggleFn=()=>{
            if(icon2.style.display!=="none"){
                icon2.style.display="none";
                button.innerText="SHOW"
            }
            else{
                icon2.style.display="flex";
                button.innerText="HIDE"
            }
        }
        button.addEventListener("click",toggleFn);