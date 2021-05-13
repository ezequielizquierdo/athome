import { database } from "../firebase";


// OBTENER TODOS LOS PRODUCTOS

function getProducts() {
  const productCollection = database.collection("products");

  return productCollection
  .get()
  .then(snapshot => {
    return snapshot.docs.map(doc => {
      let product = doc.data()
        return {
          id: doc.id,
          ...product
        }
    })
  })
}

export default getProducts



// export function getProducts() {
//   return productCollection.get().then((snapshot) => {
//     return snapshot.docs.map((doc) => doc.data());
//   });
// }

// OBTENER LOS PRODUCTOS POR ID

// export function getProductById(id) {
//   const productById = productCollection.where("id", "==", parseInt(id));
//   return productById.get().then((snapshot) => {
//     return snapshot.docs.map((doc) => doc.data());
//   });
// }

// OBTENER TODOS LOS PRODUCTOS



// export function getProductById(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>
//         fetch (`http://my-json-server.typicode.com/ezequielizquierdo/mockjson/products/${id}`)

//       .then((res) => res.json())
//       .then((data) => resolve(data))
//       .catch(err => reject(err)), 200)
//     })
// }

// export function getProductByCategory(category) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>
//         fetch (`http://my-json-server.typicode.com/ezequielizquierdo/mockjson/products?category=${category}`)
//       .then((res) => res.json())
//       .then((data) => resolve(data))
//       .catch(err => reject(err)), 200)
//     })
// }

// export function getProducts() {
//   return new Promise((resolve, reject) => {
//       setTimeout(() =>
//       fetch (`http://my-json-server.typicode.com/ezequielizquierdo/mockjson/products`)
//     .then((res) => res.json())
//     .then((data) => resolve(data))
//     .catch(err => reject(err)), 200)
//   })
// }
