//selecting sidenav
var sidenavbar = document.getElementById("sidenavbar")
var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click" ,function(){
sidenavbar.style.right=0
})

var closenav = document.getElementById("closenav")
closenav.addEventListener("click",function(){
    sidenavbar.style.right="-50%"
})