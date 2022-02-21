const dark=document.querySelector("#dark");
const light=document.querySelector("#light");
const footer=document.querySelector(".footer");
const navBar=document.querySelector(".navBar");
const iContainer=document.querySelector(".installation-container");
const main=document.querySelector("main");



const darkBgColor="#18181b";
const darkFontColor="#fff";
const lightBgColor="#fff";
const lightFontColor="#18181b";
const lightBgColor2="#f3f4f6"



light.addEventListener("click",()=>{

    light.style.display="none";
    dark.style.display="flex";
    footer.style.backgroundColor=darkBgColor;
    navBar.style.backgroundColor=darkBgColor;
    navBar.style.color=darkFontColor;
    iContainer.style.backgroundColor=darkBgColor;
    iContainer.style.color=darkFontColor;
    main.style.backgroundColor=darkBgColor;
    main.style.color=darkFontColor;
  




});

dark.addEventListener("click",()=>{
    light.style.display="flex";
    dark.style.display="none";
    footer.style.backgroundColor=lightBgColor;
    navBar.style.backgroundColor=lightBgColor;
    navBar.style.color=lightFontColor;
    iContainer.style.backgroundColor=lightBgColor;
    iContainer.style.color=lightFontColor;
    main.style.backgroundColor=lightBgColor2;
    main.style.color=lightFontColor;
   
})