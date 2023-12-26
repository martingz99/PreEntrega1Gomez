const productos = [
    {
        id: "asd123",
        nombre: "Pineapple",
        descripcion: "Sabor piña",
        stock: 19,
        precio: "$ 1,100",
        imagen: "/img/anana.jpg",
        categoria: "conazucar",
    },
    {
        id: "asd124",
        nombre: "Mangoloco",
        descripcion: "Sabor mango",
        stock: 12,
        precio: "$ 1,100",
        imagen:"/img/mango.jpg",
        categoria:"conazucar",
    },
    {
        id: "asd125",
        nombre: "Paradise",
        descripcion: "Sabor kiwi",
        stock: 16,
        precio: "$ 1,100",
        imagen:"/img/paradise.png",
        categoria:"sinazucar",
    },
    {
        id: "asd13",
        nombre: "Ultra energy",
        descripcion: "Sabor citrico",
        stock: 10,
        precio: "$ 1,100",
        imagen: "/img/white.png",
        categoria:"sinazucar",
    },
    {
        id: "asd133",
        nombre: "Watermenlon",
        descripcion: "Sabor sandia",
        stock: 9,
        precio: "$ 1,100",
        imagen:"/img/sandiia.jpg",
        categoria:"sinazucar",
    },
    {
        id: "asd113",
        nombre: "Basico",
        descripcion: "Sabor frutos",
        stock: 29,
        precio: "$ 1,100",
        imagen:"/img/black.jpg",
        categoria:"conazucar",
    },
    {
        id: "asd126",
        nombre: "Lo carb",
        descripcion: "Sabor menta",
        stock: 10,
        precio: "$ 1,100",
        imagen:"/img/cele.jpeg",
        categoria:"sinazucar",
    },
    {
        id: "asd136",
        nombre: "Lewis Hamilton",
        descripcion: "Sabor melon",
        stock: 19,
        precio: "$ 1,100",
        imagen:"/img/lewis.avif",
        categoria:"conazucar",
    },
    {
        id: "asd163",
        nombre: "Doctor",
        descripcion: "Sabor naranja",
        stock: 8,
        precio: "$ 1,100",
        imagen:"/img/pomelo.jpg",
        categoria:"conazucar",
    },
    {
        id: "asd223",
        nombre: "Ultra Pineapple",
        descripcion: "Sabor piña",
        stock: "sin stock",
        precio: "$ 1,100",
        imagen:"/img/golden.avif",
        categoria:"conazucar",
    },
];


const obtenerProductos = new Promise ((resolve, reject) => {

    setTimeout(() => {
        resolve(productos);
    }, 2000);
});

export default obtenerProductos