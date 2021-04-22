import React , {useState, useEffect} from 'react'
import ItemList from '../ItemList.js/ItemList';

export default function ItemListContainer() {

  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data), 2000)
  }, []);

  return (
      <ItemList postsInput={posts}/>
  )
}
