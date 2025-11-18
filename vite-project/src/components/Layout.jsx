import { Link, Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
            <nav>
                <Link to="/">Usuários</Link>
                <Link to="/produtos">Produtos</Link>
            </nav>
            <hr />
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    );
}
export default Layout;
