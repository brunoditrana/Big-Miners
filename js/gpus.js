(async () => {

const {value: gpus} = await Swal.fire({
    title: "Placas de Videos",
    text: "Consulte por el precio y el stock de las Gpus escibiendo su nombre (ej: 3070 TI)",
    
    input: "text",
    inputPlaceholder:"Gpus",
    customClass:{
        popup: "alertVentana"
    },
    imageUrl: "/imagenes/logo diseñado 1.png",
    imageWidth:"20rem",
    position: "center-end",
    toast: true
})

const productoGpus = [
    {id: 1, nombre:"Placa de Video 1660 Super" , precio: 110.000, stock: 3 },
    {id: 2, nombre:"Placa de Video 2060 Super" , precio: 120.000, stock: 2  },
    {id: 3, nombre:"Placa de Video RTX 3070 TI" , precio: 150.000, stock: 7 },
    {id: 4, nombre:"RTX 3080 TI ZOTAC LHR" , precio: 180.000, stock: 1  },
    {id: 5, nombre:"RTX 3060 TI LHR" , precio: 200.000, stock: 0  },
    {id: 6, nombre:"RTX 3070 PHOENIX GS" , precio: 220.000, stock: 10  },
];


if(gpus == "1660 Super" ){
    const resultado = productoGpus.filter((el) => el.nombre.includes("1660 Super"));
    alert(`EL resultado es : \n\n${resultado.map(el => el.nombre , ).join(', ')} \nPrecio: ${resultado.map(el => el.precio )}.000\nStock: ${resultado.map(el => el.stock )} `);
    
} else if(gpus == "2060 Super"){
    const resultado = productoGpus.filter((el) => el.nombre.includes("2060 Super"));
    alert(`EL resultado es : \n\n${resultado.map(el => el.nombre , ).join(', ')} \nPrecio: ${resultado.map(el => el.precio )}.000\nStock: ${resultado.map(el => el.stock )} `);

}else if(gpus == "3070 TI"){
    const resultado = productoGpus.filter((el) => el.nombre.includes("3070 TI"));
    alert(`EL resultado es : \n\n${resultado.map(el => el.nombre , ).join(', ')} \nPrecio: ${resultado.map(el => el.precio )}.000\nStock: ${resultado.map(el => el.stock )} `);

}else if(gpus == "3080 TI"){
    const resultado = productoGpus.filter((el) => el.nombre.includes("3080 TI"));
    alert(`EL resultado es : \n\n${resultado.map(el => el.nombre , ).join(', ')} \nPrecio: ${resultado.map(el => el.precio )}.000\nStock: ${resultado.map(el => el.stock )} `);

}else if(gpus == "3060 TI"){
    const resultado = productoGpus.filter((el) => el.nombre.includes("3060 TI"));
    alert(`EL resultado es : \n\n${resultado.map(el => el.nombre , ).join(', ')} \nPrecio: ${resultado.map(el => el.precio )}.000\nStock: ${resultado.map(el => el.stock )} `);

}else if(gpus == "3070 PHOENIX"){
    const resultado = productoGpus.filter((el) => el.nombre.includes("3070 PHOENIX"));
    alert(`EL resultado es : \n\n${resultado.map(el => el.nombre , ).join(', ')} \nPrecio: ${resultado.map(el => el.precio )}.000\nStock: ${resultado.map(el => el.stock )} `);
}


})();







// timer: 4000,
//timerProgressBar: true,