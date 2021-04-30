const mockjson = [
    {
        "id": 1,
        "title": "ESCRITORIO OM",
        "price": 105.220,
        "description": "Material: Realizado en madera enchapada en Laurel con patas de hierro negro. Opciones: Madera enchapada en petiribi y paraíso. Medidas 150x50x75h. Producto que realizamos a medida, solicitar presupuesto. Origen: Nacional. Cuidados: Limpieza con paño semi-húmedo o seco.",
        "category": "escritorios",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_5253-2_1800x1800.jpg?v=1593804405"
    },
    {
        "id": 2,
        "title": "ESCRITORIO STUDIODESK",
        "price": 61.347,
        "description": "Material: Realizado con madera paraíso. Medidas: 120x60x72H. Origen: Nacional. Cuidados: Limpieza con paño semi-húmedo o seco.",
        "category": "escritorios",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_4981_2_1800x1800.jpg?v=1578952403"
    },
    {
        "id": 3,
        "title": "ESCRITORIO WEEKENDER",
        "price": 49.434,
        "description": "Material: Realizado consus caballetes en madera petiribi maciza combinado con su tapa laqueada blanca poliuretánica (Base de MDF). Opciones: Con sus patas en madera paraíso combinado con su tapa blanca. Medidas: 140x60x75H o 160x60x75H. Producto que realizamos a medida, solicitar presupuesto. Origen: Nacional. Cuidados: Limpieza con paño semi-húmedo o seco.",
        "category": "escritorios",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    },
    {
        "id": 4,
        "title": "ESCRITORIO WORKSPACE",
        "price": 66.864,
        "description": "Material: Realizado en madera enchapada en petiribi. Opciones:  Madera enchapada en paraíso, laurel o blanco laqueado. Medidas: 140x50x75h. Producto que realizamos a medida, consultar presupuesto. Origen: Nacional. Cuidados: Limpieza con paño semi-húmedo o seco.",
        "category": "escritorios",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_7987_1800x1800.jpg?v=1578951375"
    },
    {
        "id": 5,
        "title": "ESCRITORIO NONNA",
        "price": 89.295,
        "description": "Material: Realizado en madera laurel maciza con patas de hierro negro. Medidas 180x66x75H. Producto que realizamos a medida, consultar presupuesto. Origen: Nacional. Cuidados: Limpieza con paño semi-húmedo o seco.",
        "category": "escritorios",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_5268-2_1400x.jpg?v=1594141403"
    },
    {
        "id": 6,
        "title": "ESCRITORIO BOHEMIAN",
        "price": 91.482,
        "description": "Material: Realizado en madera guayubira maciza con tratamiento artesanal que simula el envejecimiento natural de la madera. Opciones: color negro, gris o natural. Medidas:  210x60x76h Origen: Nacional. Cuidados: Limpieza con paño semi-húmedo o seco.",
        "category": "escritorios",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_7827_1400x.jpg?v=1578337449"
    },
    {
        "id": 7,
        "title": "SILLA LONDRES",
        "price": 59.804,
        "description": "Material: Petiribi, tapizado en lienzo crudo + funda a eleccion. Medidas: Origen: Nacional",
        "category": "sillas",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_4626_1800x1800.jpg?v=1615479823"
    },
    {
        "id": 8,
        "title": "SILLA FIYI TAPIZADA",
        "price": 24.677,
        "description": "Material: Realizada en madera paraíso. Producto que se realiza tapizado a elección, solicitar muestrario de tela. Opciones: Madera Petiribi. Medidas 40x42x87H *Altura hasta el asiento 46 cm. Origen: Nacional. Cuidados: Limpieza con paño semi-húmedo o seco",
        "category": "sillas",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_2670_1800x1800.jpg?v=1575922715"
    },
    {
        "id": 9,
        "title": "SILLA CHIC",
        "price": 28.650,
        "description": "Material: Realizada en teca y esterilla. Medidas: 67x52x80H. Origen: Indonesia. Cuidados: Limpieza con paño semi-húmedo o seco",
        "category": "sillas",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/WoodMarket202006250049-3_1800x1800.jpg?v=1594354527"
    },
    {
        "id": 10,
        "title": "SILLA PAUSA CABECERA",
        "price": 71.575,
        "description": "Material: Realizada en madera petiribi. Producto que se realiza tapizado a elección, solicitar muestrario de tela. Origen: Nacional. Cuidados: Limpieza con paño semi-húmedo o seco.",
        "category": "sillas",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/WhatsAppImage2020-07-13at16.32.23_1013x1013.jpg?v=1594674853"
    },
    {
        "id": 11,
        "title": "SILLA MILANO",
        "price": 41.212,
        "description": "Material: Realizada en caña de bambú y rattan sintético. Medidas: 50x42x85h. Altura hasta el asiento 45 cm. Origen: India. Cuidados: Limpieza con paño semi-húmedo o seco",
        "category": "sillas",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_9081_1400x.jpg?v=1575846475"
    },
    {
        "id": 12,
        "title": "SILLA TERTULIA",
        "price": 62.644,
        "description": "Material: Realizada en madera petiribi. Producto que se realiza tapizado a elección, solicitar muestrario de tela. Medidas: 55x55x80H. Altura hasta el asiento 48cm. Origen: Nacional. Cuidados: Limpieza con paño semi-húmedo o seco.",
        "category": "sillas",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_7221_1400x.jpg?v=1598042511"
    },
    {
        "id": 13,
        "title": "SILLÓN CHILLING",
        "price": 347.875,
        "description": "Medidas 240X90. También se realiza a medida",
        "category": "sillones",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_3529-2_1800x1800.jpg?v=1612884839"
    },
    {
        "id": 14,
        "title": "SILLÓN DOHA",
        "price": 139.755,
        "description": "Material: Madera Guindo + Almohadon de asiento y respaldo a eleccion. Medidas: 120x66x77h. Origen: Nacional",
        "category": "sillones",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_4545-2_1800x1800.jpg?v=1615838612"
    },
    {
        "id": 15,
        "title": "SILLÓN SUR",
        "price": 179.712,
        "description": "Material: Tapizado y funda en tussor a elección. Medidas: 220x90, 260x90, 300x90 cm. Origen: Nacional. Cuidados: Funda apta para lavado en lavarropas con agua fría.",
        "category": "sillones",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_5553_1400x.jpg?v=1594784772"
    },
    {
        "id": 16,
        "title": "SILLÓN NAUFRAGIO",
        "price": 77.010,
        "description": "Material: Realizada en madera guayubira maciza con tratamiento artesanal que simula el envejecimiento natural de la madera. Opciones: color negro, gris, blanco. Medidas: 110x74x57h. *Altura hasta el asiento 32 cm. No incluye almohadones. Observación: Apto para utilizar al exterior. Origen: Nacional. Cuidados: Limpieza con paño semi-húmedo o seco",
        "category": "sillones",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_8255_1800x1800.jpg?v=1579108729"
    }, 
    {
        "id": 17,
        "title": "SILLÓN GONDOLA",
        "price": 115.554,
        "description": "Material: Realizado con sus patas en madera paraíso. Producto que se realiza tapizado o con funda a elección, solicitar muestrario de tela. Medidas: 160x82x70h. Origen: Nacional",
        "category": "sillones",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_1959_1400x.jpg?v=1586213966"
    },
    {
        "id": 18,
        "title": "SILLÓN GARDEN",
        "price": 80.929,
        "description": "Material: Realizado en madera petiribi o paraíso. *Almohadón de asiento en tusor a elección incluido. Medidas: 95x65x60H. Origen: Nacional. Cuidados: Limpieza con paño semi-húmedo o seco",
        "category": "sillones",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_0779_1_1400x.jpg?v=1579125339"
    },
    {
        "id": 19,
        "title": "CUADRO UNDERWATER",
        "price": 84.398,
        "description": "Material: Bordado a mano sobre arpillera con marco de madera. Medidas 200x100h",
        "category": "accesorios",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_5397_1400x.jpg?v=1595039891"
    },
    {
        "id": 20,
        "title": "TAPIZ TEJIDO HOME",
        "price": 42.350,
        "description": "Telar realizado artesanalmente. Medidas 120x70h",
        "category": "accesorios",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_1219_1400x.jpg?v=1606320485"
    },
    {
        "id": 21,
        "title": "MANTA DE LINO",
        "price": 39.250,
        "description": "Material: Lino. Medidas: 130x190. Color: Gris, Negro, Rayado",
        "category": "accesorios",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_8438_1a8d2e22-70f6-4ff8-aa08-ca158dfc1317_1400x.jpg?v=1613511616"
    },
    {
        "id": 22,
        "title": "PORTAMACETA RATTAN",
        "price": 24.500,
        "description": "Material: Rattan. Origen: Indonesia",
        "category": "accesorios",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_3534-2_e68e3a8d-326c-4e8d-9afd-55e0e3bcaca3_1400x.jpg?v=1613527109"
    },
    {
        "id": 23,
        "title": "ESTANTE SENSES",
        "price": 7.95,
        "description": "Material: Rattan. Medidas 100x35x40h. Origen: Indonesia",
        "category": "accesorios",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_4688-3_1400x.jpg?v=1615480455"
    },
    {
        "id": 24,
        "title": "CUADRO FACE",
        "price": 24.800,
        "description": "Medidas 50x70h",
        "category": "accesorios",
        "image": "https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_5289_1400x.jpg?v=1595048060"
    }
]

export default mockjson