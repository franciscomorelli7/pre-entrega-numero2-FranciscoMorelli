const SALIDA_1 = 4
const SALIDA_2 = 3

alert('Bienvenido a Mundo Cuervo')
//Productos
const productosEnVenta = [
          {
            numero: 1,
            producto: 'Camiseta titular',
            precio: 25000,
            categoria: 'Equipacion del equipo'
          },
          {
            numero: 2,
            producto: 'Camiseta alternativa',
            precio: 22000,
            categoria: 'Equipacion del equipo'
          },
          {
            numero: 3,
            producto: 'Short blanco',
            precio: 10000,
            categoria:'Equipacion del equipo'
          },
          {
            numero: 4,
            producto: 'Short azul',
            precio:10000,
            categoria: 'Equipacion del equipo'
          },
          {
            numero: 5,
            producto: 'Medias largas',
            precio: 2500,
            categoria: 'Equipacion del equipo'
          },
          {
            numero: 6,
            producto: 'Campera de entrenamiento',
            precio: 50000,
            categoria: 'Abrigos'
          },
          {
            numero: 7,
            producto: 'Camperon del club',
            precio: 60000,
            categoria: 'Abrigos'
          },
          {
            numero: 8,
            producto: 'Buzo de entrenamiento',
            precio: 45000,
            categoria: 'Abrigos'
          },
          {
            numero: 9,
            producto: 'Gorra con escudo',
            precio: 7500,
            categoria: 'Accesorios'
          },
          {
            numero:10,
            producto: 'Gorro de lana',
            precio: 5000,
            categoria: 'Accesorios'
          }

]
const carrito = []
const historial=[]
const mostrarEquipacion = () =>{
      let anuncio = 'Nuestros productos \n' ;
      productosEnVenta.forEach(seleccion =>{
        if (seleccion.categoria === "Equipacion del equipo"){
          anuncio = anuncio + `${seleccion.numero}-${seleccion.producto} $${seleccion.precio}`+ " "
        }
      });

      const opciones = parseInt(prompt(anuncio));
      if(opciones== 1 || opciones == 2  || opciones == 3  || opciones == 4  || opciones == 5){
      const prendaElegida = productosEnVenta.find (prenda => prenda.numero === opciones);
      carrito.push(prendaElegida);
      alert ('El producto se agrego al carrito');
      }else{
        alert('Ingrese una opcion correcta')
      }
}


const mostrarAbrigos = () =>{
      let anuncio = 'Nuestros productos \n' ;
      productosEnVenta.forEach(seleccion =>{
        if (seleccion.categoria=== "Abrigos"){
          anuncio = anuncio + `${seleccion.numero}-${seleccion.producto} $${seleccion.precio}`
        }
      })

      const opciones = parseInt(prompt(anuncio))

      if(opciones== 6 || opciones == 7 || opciones == 8  ){
        const prendaElegida = productosEnVenta.find (prenda => prenda.numero === opciones);
        carrito.push(prendaElegida);
        alert ('El producto se agrego al carrito');
        }else{
          alert('Ingrese una opcion correcta')
        }
}

const mostrarAccesorios = () =>{
      let anuncio = 'Nuestros productos \n' ;
      productosEnVenta.forEach(seleccion =>{
        if (seleccion.categoria=== "Accesorios"){
          anuncio = anuncio + `${seleccion.numero}-${seleccion.producto} $${seleccion.precio}`
        }
      })

      const opciones = parseInt(prompt(anuncio))

      if(opciones== 9 || opciones == 10 ){
        const prendaElegida = productosEnVenta.find (prenda => prenda.numero === opciones);
        carrito.push(prendaElegida);
        alert ('El producto se agrego al carrito');
        }else{
          alert('Ingrese una opcion correcta')
        }
}


const detallesDeCompra= () =>{

    carrito.forEach(seleccion=>
      alert ("Primer producto " + seleccion.producto + ", precio" + seleccion.precio)
    )

}
const  menuProductos =() =>{
  let opcion;
   opcion = parseInt(prompt('Seleccione categoria del producto que deseé comprar: \n 1- Equipacion del equipo \n 2- Abrigos \n 3-Accesorios \n4-Volver atras' ));
        while (opcion != SALIDA_1){
            switch(opcion){
              case 1:
                mostrarEquipacion();
                break;
              case 2:
                mostrarAbrigos();
                break;
              case 3:
                mostrarAccesorios();
                break;
                case 5: detallesDeCompra();
                break;
                default:
                  alert('Ingreso una opcion incorrecta. Intente nuevamente.');
                break;
            }
            opcion = parseInt(prompt('Seleccione categoria del producto que deseé comprar: \n 1- Equipacion del equipo \n 2- Abrigos \n 3-Accesorios \n4-Volver atras' ));
        }
    
} 

const mostrarCarrito = () =>{
    let anuncio = 'Carrito \n';
    const seguimiento = Math.round(Math.random()* 10000 + 1000000)

    carrito.forEach(seleccion =>{
      anuncio = anuncio + `${seleccion.numero}-${seleccion.producto} $${seleccion.precio} \n`
    })
    const total = carrito.reduce((acumulador,producto)=>acumulador + producto.precio, 0);
    anuncio += ` PRECIO TOTAL                    $${total}`;
    anuncio += 'Confirmar compra (Si/No)';
    const confirmacion =prompt(anuncio)

    if(confirmacion.toLowerCase()=='si'){
        historial.push ({
          numero: seguimiento,
          nombre: prompt("Ingrese su nombre"),
          direccion: prompt('Ingrese su direccion'),
        })
        alert('Su compra fue confirmada con exito \n Seguimiento:' + seguimiento)
        carrito.splice();

    }

}
let operacion = parseInt(prompt('Elija la operacion que desea realizar \n 1- Ver nuestros productos \n 2-Ver carrito \n Salir'))
while(operacion != SALIDA_2){

      switch(operacion){
        case 1:
            menuProductos();
            break;
        case 2:
            mostrarCarrito();
            break;
        default:
          alert('Ingrese una opcion correcta');
          break;
      }
      operacion = parseInt(prompt('Elija la operacion que desea realizar \n 1- Ver nuestros productos \n 2-Ver carrito \n Salir'))
}
alert('Gracias por visitar mundo cuervo!')


  
  


    

