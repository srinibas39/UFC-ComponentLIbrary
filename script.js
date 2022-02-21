const icon=document.querySelector("#comp-list");
const sidebar=document.querySelector(".sidebar");
const dark=document.querySelector("#dark");
const light=document.querySelector("#light");
const footer=document.querySelector(".footer");
const homepage=document.querySelector(".homepage");
const navBar=document.querySelector(".navBar");
const li=document.querySelector("#li");
const select=document.querySelector(".select")
const darkBgColor="#18181b";
const darkFontColor="#fff";
const lightBgColor="#fff";
const lightFontColor="#18181b";
const selectColor="#d20a0a";

window.addEventListener("resize",()=>{
     if(window.innerWidth>1000){
         sidebar.style.display="flex";
     }
})

icon.addEventListener("click",()=>{
    sidebar.style.display!=="flex"?sidebar.style.display="flex":sidebar.style.display="none"
})

light.addEventListener("click",()=>{

    light.style.display="none";
    dark.style.display="flex";
    footer.style.backgroundColor=darkBgColor;
    homepage.style.backgroundColor=darkBgColor;
    homepage.style.color=darkFontColor;
    sidebar.style.backgroundColor=darkBgColor;
    sidebar.style.color=darkFontColor;
    navBar.style.backgroundColor=darkBgColor;
    navBar.style.color=darkFontColor;
    li.style.color=darkFontColor;
    select.style.color=selectColor;

});

dark.addEventListener("click",()=>{
    light.style.display="flex";
    dark.style.display="none";
    footer.style.backgroundColor=lightBgColor;
    homepage.style.backgroundColor=lightBgColor;
    homepage.style.color=lightFontColor;
    sidebar.style.backgroundColor=lightBgColor;
    sidebar.style.color=lightFontColor;
    navBar.style.backgroundColor=lightBgColor;
    navBar.style.color=lightFontColor;
    li.style.color=lightFontColor;
    select.style.color=selectColor;
})


