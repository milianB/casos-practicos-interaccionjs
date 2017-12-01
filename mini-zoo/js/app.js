document.addEventListener("click")

function crearContenedor(){

}
function pasarAlgo(event){
  var selectedIndex = event.target.selectedIndex;
  var filtroAplicar = event.target[selectedIndex]dataser.
  console.log(event.target.selectedIndex);//selectedIndex me muestra la posiciòn en la que esta un item
   //elemento que detona el evento event.target
   if (filtroAplicar == "gray") {
     cambiarGray();
   } else if (filtroAplicar == "sepia") {
     cambiarSepia()
   } else if (filtroAplicar == "negative") {
     cambiarNegative();
   } else if (filtroAplicar == "original") {
     quitarFiltro();
   }
}

function cambiarGray(){
  var imagenesACambiar = document.getElementsByTagName('img');//seleccionar todos los elementos img
  console.log(imagenesACambiar);//los convierte a un arreglo y puedo recorrerlos uno por uno
  for (var i = 0; i < imagenesACambiar.length; i++) {//para hacerlo declaro un for que inicie en 0 y hasta el ultimo elemento, y va a incrementar de uno en uno
    console.log(imagenesACambiar);//
    imagenesACambiar[i].ClassName = "gray"{//cada elemento va a cambiar la clase segun sea el cambio
    }
  }
}


var image = document.getElementsByClassName('animal');//mandamos llamar todos los elementos que tengan la clase "animal"

var select = document.getElementById('select');
select.onchange = function(){
  if (select.value == "original") {
    for(var i = 0; i < image.length; i++) {
      image[1].classList.remove("white-black");
      image[1].classList.remove("negative-colors");
      image[1].classList.remove("sepia");
    }
  }
}
