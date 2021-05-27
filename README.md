# Proyecto atHome - Curso React - Coderhouse

> AtHome busca ser una plataforma ecommerce donde poder adquirir los mobiliarios necesarios
> 
> para comenzar una experiencia de home office. De rápido acceso a los productos que ofrece.
> 
> Con la pandemia, atHome busca ser un sitio donde conseguir lo que sea necesario, 
> 
> ✨ y con un toque de diseño.✨

# Composición de la plataforma. Contenido funcional.

## Tech:

En el desarrollo del proyecto se utilizó:
- [ReactJS](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)


Contiene:

- HomePage: ("/")
    Contiene el acceso a cada una de las categorías de productos que se ofrecen.

- Categories: ("/categories/:category")
    Desde el HomePage podemos acceder a las categorías que se ofrecen en la plataforma. 
    En la misma, se renderizarán los productos discriminados por categorías.

- Detalle de productos: ("/products/:id")
    Se verá la descripción completa del producto elegido en la categoría correspondiente.
        Se renderizarán: Nombre de producto, Precio, Descripción.
    Podrá elegirse la cantidad deseada del ítem en cuestión, y enviarse al carrito de compras.

- Carrito de compras: ("/cart")
    Se renderizarán los productos elegidos por el usuario, y manipularlos según se deseé. (Eliminar ítems, agregar, finalizar compra)

Contacto: (en footer)
    Los medios de contacto son via Email y teléfono, y están ubicados en el footer de cada página


## Sobre los productos y su elección:

En el header de la App podrás encontrar las distintas **categorías** de productos que se ofrecen.

- Sillas ->  (/categories/sillas)
- Sillones -> (/categories/sillones)
- Escritorios -> (/categories/escritorios)
- Accesorios -> (/categories/accesorios)

En cada una podrás encontrar todos los productos incluidos en dicha categoría.
La base de productos ha sido cargada en ***Firebase***

**Hay posibilidad de acceso desde el footer a cada categoría, incluso a un listado completo de los productos ofrecidos.*

## Producto elegido

Podrás observar cada producto individualmente (products/:id), y el mismo tendrá su completa descripción detallada cuando se haga click en su respectiva card. 

En esa ubicación podrás elegir la cantidad requerida y agregarlo al carro de compras.
Posteriormente a la elección del producto, podrás hacer una vista previa del carrito eligiendo la opción **Ver carrito** donde se desplegará un componente con la vista previa del carro. En la misma, podrás optar por confirmar la compra o seguir comprando haciendo click fuera del componente.

## Confirmación de compra

Cuando querramos finalizar la compra, podremos acceder a nuestro carrito para visualizar los productos elegidos. Podemos hacerlo de manera rápida desde el carrito ubicado en el márgen superior derecho, o desde los distintos accesos a la confirmación de la compra que nos llevarán a /cart.

En la página de confirmación de compra podrás ver la cantidad de productos elegidos junto con su valor unitario y total. Tendrá la posibilidad también de adicionar unidades, quitar, o vaciar el carro por completo.

Para avanzar con la compra, el usuario deberá ingresar ciertos datos necesarios para ser contactados, y coordinar entrega y forma de pago de su compra.

Posteriormente a la finalización de la compra, y si el usuario ingresó correctamente datos solicitados en los campos requeridos, se confirmará el proceso, y se le otorgará un número de identificación único relacionado a la compra, sino recibirá un mensaje de error para que pueda corregir o agregar el dato necesario.


### **Que disfrutes de tu experiencia atHome!**