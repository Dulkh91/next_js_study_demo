'use client'
import { useState,useEffect } from "react";
interface Comments{
    id: string,
    text: string
}
const HomePage = () => {
    const [comments, setComments] = useState<Comments[]>([])
    useEffect(()=>{
        fetch('/api/comments')
      .then(response=> response.json())
      .then(data => setComments(data))
    },[])

    return ( <div>
        <h1>Comments</h1>
        <ul>
            {comments.map(com=>(
                <li key={com.id}>{com.text}</li>
            ))}
        </ul>
    </div> );
}
 
export default HomePage;