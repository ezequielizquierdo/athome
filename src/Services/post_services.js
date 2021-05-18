import { database } from "../firebase";
import firebase from 'firebase/app';
import 'firebase/firestore';

// OBTENER TODOS LOS PRODUCTOS
const productCollection = database.collection("products");
const orderCollection = database.collection("order");


export function getCollection() {
  return productCollection;
}

export async function getProducts() {
  const docRef = await productCollection.get();

  const products = docRef.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return products;
}

export async function getProductsById(id) {
  const docRef = productCollection.doc(id);
  const product = await docRef
  .get()
  .then((doc) => {
    const producto = doc.data();
    return { id: doc.id, ...producto };
  });

  console.log(product);
  return product;
}


export function createOrder(buyer, item, total) {
  return orderCollection
    .add({
      buyer: buyer,
      item: item,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: total,
    })
    .then(function (id) {
      console.log("Confirmación de compra Nº: ", id.id);
      return id.id;
    })
    .catch(function (error) {
      console.error(error);
      return "Error procesando pedido";
    });
  }  