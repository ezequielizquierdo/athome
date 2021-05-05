# Proyecto atHome - Curso React - Coderhouse

AtHome busca ser una plataforma ecommerce donde poder adquirir los mobiliarios necesarios para comenzar una experiencia de home office. 
Con la pandemia, atHome busca ser un sitio donde conseguir lo que sea necesario, y con un toque de diseño.

# Composición de la plataforma. Contenido funcional.

* atHome busca ser una plataforma de rapido acceso a los productos que ofrece.

Contiene:

HomePage: ("/")
    Contiene el acceso a cada una de las categorias de productos que se ofrecen.

Categories: ("/categories/:category")
    Desde el HomePage podemos acceder a las categorias que se ofrecen en la plataforma. 
    En la misma, se renderizarán los productos discriminados por categorias.

Detalle de productos: ("/products/:id")
    Se verá la descripción completa del producto elegido en la categoria correspondiente.
        Se renderizarán: Nombre de producto, Precio, Descripción.
    Podrá elegirse la cantidad deseada del item en cuestión, y enviarse al carrito de compras.

Carrito de compras: ("/cart")
    Se renderizarán los productos elegidos por el usuario, y manipularlos según se deseé. (Eliminar items, agregar, finalizar compra)

Contacto: (en producción)