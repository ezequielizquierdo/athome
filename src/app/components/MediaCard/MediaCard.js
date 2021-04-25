import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const { getProductById } = require('../../../Services/post_services')

export default function MediaCard() {
  const {postId} = useParams();
  const [post, setPost] = useState({title: ''})

  useEffect(() => {
    getProductById(postId)
    .then(res => setPost(res))
  }, [postId])

  return (
    <div>
      <h1>Titulo: {post.title}</h1>
    </div>
  );
}
