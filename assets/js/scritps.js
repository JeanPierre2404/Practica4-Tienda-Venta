document.getElementById("opciones-categoria").onchange=mostrandocontenidolistas;
//captura las categorias
//request 
//onryde permite guarfar             

function mostrandocontenidolistas() {
    if (document.getElementById("opciones-categoria").value =="") {
      document.getElementById("cargar-contenido").innerHTML ="";
      return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState == XMLHttpRequest.DONE){
        if(xhttp.status==200){
          document.getElementById("cargar-contenido").innerHTML = xhttp.responseText;
        }
        else if(xhttp.status="400"){
          alert('Hubo un error al 400');
        }else{
          alert('Error 200');
        }
      }
    }
    xhttp.open("GET",info_texto(),true);
    xhttp.send();
  
    function info_texto(){
      if(document.getElementById("opciones-categoria").value=="1"){
        return "assets/categoriastxt/figuras.txt";
      }else if(document.getElementById("opciones-categoria").value=="2"){
        return "assets/categoriastxt/vestidos.txt";
      }else if(document.getElementById("opciones-categoria").value=="3"){
        return "assets/categoriastxt/accesorios.txt";
      }
    }
  }




  let productos = [];
  // Agregar productos a la cesta
function agregar(sku, nombre, precio) {
  // Crear un objeto
  producto = {
      sku: sku,
      nombre: nombre,
      precio
  };
  // Agregar producto a lista
  productos.push(producto);
  // Crear la tabla
  let html=""
  for (var i = 0; i < productos.length; i++) {
      html += "<hr>"
      html += "<div class='row g-3' id='row'>"
      html += "<div class='col' id='imagenes'>"
      html += "<img src="+"'"+productos[i].sku+"'"+">"
      
      //html += "<p>"+productos[i].sku+"</p>"
      html += "</div>"
      html += "<div class='col'>"
      html += "<p>"+productos[i].nombre+"</p>"
      html += "</div>"
      html += "<div class='col'>"
      html += "<p>"+productos[i].precio+"</p>"
      html += "</div>"
      html += "</div>"
  }

  // Mostrar la tabla en html
  var mi_contenedor = document.getElementById("aggcarrito");
  mi_contenedor.innerHTML = html;
}