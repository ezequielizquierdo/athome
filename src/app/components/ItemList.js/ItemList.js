import React from "react";
import Item from "../Item/Item";
import './ItemList.css'


export default function ItemList({ postsInput }) {
  return (
    <ul>
      {postsInput.map((post) => {
        return <Item key={post.id} post={post} />;
      })}
    </ul>
  );
}
