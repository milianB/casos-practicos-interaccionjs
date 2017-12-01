var boton = document.getElementById('button')

function verMenu() {
  var menu = document.getElementById("menu-item");

  if(menu.classList.contains("disabled-menu")){
    menu.classList.remove("disabled-menu");
    menu.classList.add("enabled-menu");
  }
  else {
    menu.classList.remove("enabled-menu")
    menu.classList.add("disabled-menu")
  }
}

boton.addEventListener("click", verMenu);
