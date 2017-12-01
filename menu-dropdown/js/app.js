// crear eventos
var submenu = document.getElementsByClassName('submenu');
for (var i = 0; i < submenu.length; i++) {
  submenu[i].addEventListener("click", showMenu);//agregando un evento para que el usuario interactue
}

//toma como array al conjunto de elementos de nuestra listas

function showMenu(){
  var listMenu = this.getElementsByClassName("itemList")[0];

  if (listMenu.classList.contains("hide")){//si mi elemento tiene hide, muestrame
    //remove-add para agregar y quitar clases
    listMenu.classList.remove("hide");//quitamos la clase hide
    listMenu.classList.add("show");//agregamos la clase show
    console.log(listMenu);
    
  }
}
