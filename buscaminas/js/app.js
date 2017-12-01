var tableBuscaminas = [
                        " ",
                        "*",
                        "1",
                        " ",
                        "/n",
                        " ",
                        " ",
                        "*",
                        "2",
                        "/n",
                        "1",
                        "*",
                        " ",
                        " ",
                        "/n",
                        " ",
                        "3",
                        "*",
                        "/n",
                      ];

    var containerBuscaminas = document.getElementById('tablero-buscaminas');

    var playBombIt = document.getElementById('lockers');

    //función que reciba un arreglo

    var zoneGame = funtion(array){

    for(i = 0; i < tableBuscaminas.length; i++);{//acceder a cada indice del arreglo
      var cell = document.createElement("div")//por cada espacio crea algo
      var enter = document.createElement("br")//salto de línea

      if (array[i] == "1" || array[i] =="2" || array[i] == "3"){//si del conjunto de arreglos sale 1 ó 2 ó 3
        cell.className = "number"; //le pondra la clas
      }else if(array[i] == " "){
        cell.className == "emptySpace";
      }else if (array[i] == "*"){
        cell.className = "bomb";
      } else {
        continue;
      }
      }
      }
        }
      }

    }
