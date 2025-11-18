import React, { useState, useEffect } from 'react';

function PostsList() {
    // Estado para armazenar os posts
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // A função fetch retorna uma Promise
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then((response) => {
                // Verificamos se a requisição foi bem-sucedida
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                // Convertemos a resposta para JSON
                return response.json();
            })
            .then((data) => {
                // Atualizamos o estado com os dados recebidos
                setPosts(data);
            })
            .catch((error) => {
                // Tratamos qualquer erro que ocorra na requisição
                console.error('Erro ao buscar os posts:', error);
            });
    }, []); // O array de dependências vazio [] garante que o efeito rode apenas uma vez

    return (
        <div>
            <h1>Lista de Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostsList;