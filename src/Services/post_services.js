function getProductById(idPost) {
    return new Promise((resolve, reject) => {
        fetch (`https://fakestoreapi.com/products/${idPost}`)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch(err => reject(err))
    })
}

module.exports = {
    getProductById,
}
