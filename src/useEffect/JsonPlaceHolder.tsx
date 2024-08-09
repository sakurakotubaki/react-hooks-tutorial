import { useEffect, useState } from "react";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const JsonPlaceHolder = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // apiから取得したデータを格納するstate
    const [posts, setPosts] = useState<Post[]>([]);
    // loading中かどうかを判定するstate
    const [loading, setLoading] = useState<boolean>(true);
    // useEffectを使ってapiからデータを取得。async/awaitを使って非同期処理を行う
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPosts();
    }, []);
    
  return (
    <div>
      <h1>JsonPlaceHolder</h1>
      {/* APIのデータをロード中は、三項演算子で分岐処理をする*/}
        {loading ? (
            <p>loading...</p>
        ) : (
            <ul>
            {posts.map((post) => (
                <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                </li>
            ))}
            </ul>
        )}  
    </div>
  )
}

export default JsonPlaceHolder