let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let agregar = document.getElementById("btn-agregar");
let calcular = document.getElementById("btn-calcular");
let lista = document.getElementById("lista");
let total = document.getElementById("total");
let vaciar = document.getElementById("vaciar");
let productos: string[] = [];
let precios: number[] = [];
let suma: number = 0;

//FUNCIONES PARA EVENTOS
const agregarAlCarrito = ():void => {
  //metodo push para agregar un elemento al final arreglo
  productos.push(producto.value);
  precios.push(Number(precio.value));

  lista?.innerHTML += `<li>${producto.value} : $${precio.value}</li>`;
  
  //vaciar los campos de entrada
  producto.value = "";
  precio.value = "";
};

const calcularTotal = ():void => {
  suma = 0;
  for (let i: number = 0; i < precios.length; i++) {
    suma += Number(precios[i]);
  }
  total?.innerHTML = suma;
};

const vaciarLista = (): void => {
  lista?.innerHTML = "";
  total?.innerHTML = "";
/*Método para vaciar los arreglos,
sino el arreglo queda cargado y el total 
sigue mostrando la suma de todos los productos.*/
  precios.fill(null);
  productos.fill(null);
  
};

//AGREGAR EVENTOS A LOS BOTONES
agregar?.addEventListener("click", agregarAlCarrito);
calcular?.addEventListener("click", calcularTotal);
vaciar?.addEventListener("click", vaciarLista);
