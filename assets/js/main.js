const searchIcon1 = document.querySelector("#search");
const searchIcon2 = document.querySelector(".fa-search");
const logoIcon = document.querySelector(".logo");
// console.log(searchbtn);
searchIcon2.addEventListener("mouseenter",function(){
    hiddenLogo()
})
searchIcon2.addEventListener("mouseleave",function(){
    showLogo();
})
searchIcon1.addEventListener("mouseenter",function(){
    hiddenLogo()
})
searchIcon1.addEventListener("mouseleave",function(){
    showLogo();
})
function showLogo(){
    logoIcon.style.display= "block";
}

function hiddenLogo(){
    logoIcon.style.display= "none";
}