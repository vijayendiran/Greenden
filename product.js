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
var productContainer= document.getElementById("Productcontainer")
var searchValue= document.getElementById("search")
var productList = Productcontainer.querySelectorAll("div")

searchValue.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();
    for (count = 0; count < productList.length; count = count + 1) {
        var productname = productList[count].querySelector("h1").textContent
        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display="none"
        } else {
            productList[count].style.display="block"
        }
    }
})
