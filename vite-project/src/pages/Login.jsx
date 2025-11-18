export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu email"
                            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Digite sua senha"
                            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}

// function Login() {
//     return (
//         <><div className="flex items-center justify-center min-h-screen bg-gray-100" /><div className="w-full max-w-md bg-white rounded-lg p-8 shadow-md">
//             <h1 className="text-2xl text-center text-gray-800 mb-4">Login</h1>
//             <p>Faça o Login para acessar essa página</p>
//         </div></>
//     );
// }
// export default Login;
