

let mensajeInicio = alert("BIENVENIDO A LA PAGINA OFICIAL DE BIG MINERS");

let mensajeNombre = prompt("Ingresa tu nombre para comenzar");
 if( mensajeNombre == ""){
    alert("introduzca su nombre por favor")
    mensajeNombre = prompt("Ingresa tu nombre para comenzar");
 }

 let mensajeopciones = prompt("¿"+ mensajeNombre + 
 " en que estas interesado? \n \n01-Rigs de Mineria \n02-Placas de Video(Gpus) \n03- Servicio de Housing \n04-Otro \n05-Solo quiero navegar");

 
    

while((mensajeopciones == "01") || (mensajeopciones == "02") || (mensajeopciones == "03")){
 
    switch (mensajeopciones){
        case "01":
        alert("Te recomendamos que vayas a la seccion ´ ${}Rigs´ ");
            break;
        case "02":
            alert("Te recomendamos que vayas a la seccion");
            break;
        case "03":
            alert("Te recomendamos que vayas a la seccion");
            break;
        default:
            break;
    }
    
   break;
}


 




