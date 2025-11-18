import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UsuarioDetalhe() {

    const [user, setUser] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(`https://api.github.com/users/${id}`)
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Erro ao buscar usuários", error)
            }
        }
        fetchUsers();
    }, [id]);

    if (!user) return <p>Carregando...</p>;
    return (
        <div>
            <h1>Detalhes do Usuário do GitHub</h1>
            <img
                src={user.avatar_url}
                alt= {user.login}
                width={40}
                style={{borderRadius: "50%", marginRight: "10px"}}
            />
            <p>Login: {user.login}</p>
            <p>Name: {user.name || "Não informado"}</p>
            <Link to={"/"}>Voltar para lista</Link>
        </div>
    );
}
export default UsuarioDetalhe;