export function getProductById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
        fetch (`http://my-json-server.typicode.com/ezequielizquierdo/mockjson/products/${id}`)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch(err => reject(err)), 500)
    })
}


export function getProductByCategory(category) {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
        fetch (`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch(err => reject(err)), 500)
    })
}
