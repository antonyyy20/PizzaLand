
export interface promociones {
	id: number;
	nombre: string;
	imagen: string;
	price: number;
	description: string;
	estrellas: string;
}


export const promociones: promociones[] = [
    {
        id: 1,
        nombre: "PROMOCION 2X1",
        description: "Dos Pizzas familiar de un ingrediente al precio de una.",
        price: 19.99,
        imagen: '/promocion 2x1.webp',
        estrellas: '★★★★☆'
    },
    {
        id: 2,
        nombre: "PIZZA FAMILIAR + LITRO DE SODA",
        description: "Disfruta de una pizza familiar con un litro de soda incluido.",
        price: 999,
        imagen: '/Pizza Familiar + 1 Litro de Soda por $9.99.webp',
        estrellas: '★★★☆☆'
    },
    {
        id: 3,
        nombre: "CINCUENTA PORCIENTO DE DESCUENTO EN PIZZAS SELECCIONADAS",
        description: "",
        price: 9.99,
        imagen: '/CincuentaDescuento.jpg',
        estrellas: '★★★★★'
  },
   ];
