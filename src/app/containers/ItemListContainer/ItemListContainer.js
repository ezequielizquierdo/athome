import React, { useState, useEffect } from "react";
import ItemList from "../../components/ItemList/ItemList";

export default function ItemListContainer() {
  const [posts, setPosts] = useState([]);

  setTimeout(
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }, []),
    2000
  );

  return <ItemList postsInput={posts} />;
}
