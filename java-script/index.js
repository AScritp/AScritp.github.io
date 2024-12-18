var btn_x=document.getElementById("btn_x")
var btn_open=document.getElementById("bt-menu")

function openMenu() {
    document.getElementById("menu-desplegable").style.left = "0%";
}
function closeMenu() {
   document.getElementById("menu-desplegable").style.left = "-100%";
}

btn_open.addEventListener('click', openMenu)
btn_x.addEventListener('click',closeMenu)

