import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import UsuarioDetalhe from "./pages/UsuarioDetalhe";
import Usuarios from "./pages/Usuarios";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import AlbumList from "./components/AlbumList";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/Login" element={<Login />} />

            <Route path="/" element={<Layout />} />
              <Route index element={<Usuarios />} />
              <Route path="/usuario/:id" element={<UsuarioDetalhe />} />
        { <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Usuarios />} />
                    <Route path="/usuario/:id" /> element={<UsuarioDetalhe />}
                    <Route path="*" element={<NotFound />} />
                    <Route element={<PrivateRoute />} />
                    <Route path="/produtos" element={<Produtos />} />
                </Route>
            </Routes> }
        </>
    )
)

function App() {
    return (
        <>
        <h1>
            Lista de Álbuns
        </h1>
        <AlbumList/>
        </>
    )
}
export default App;



{/* <BrowserRouter>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Usuarios />} />
                    <Route path="/usuario/:id" /> element={<UsuarioDetalhe />}
                    <Route path="*" element={<NotFound />} />
                    <Route element={<PrivateRoute />} />
                    <Route path="/produtos" element={<Produtos />} />
                </Route>
            </Routes>
        </BrowserRouter> */}
