import { useState } from "react";

function AddPostForm() {
  const [form, setForm] = useState({ title: "", body: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          body: form.body,
          userId: 1,
        }),
      });
      const data = await response.json();
      console.log("Post criado:", data);
      setStatus("success");
    } catch (error) {
      console.error("Erro ao enviar post", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Post</h2>
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
      />
      <textarea
        name="body"
        placeholder="Conteúdo"
        value={form.body}
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
      {status === "sending" && <p>Enviando...</p>}
      {status === "success" && <p>Post criado com sucesso!</p>}
      {status === "error" && <p>Erro ao criar post.</p>}
    </form>
  );
}

export default AddPostForm;
















// import { useState } from "react";

// function AddPostform() {
//   const [form, setForm] = useState({ title: "", body: "" });
//   const [status, setStatus] = useState("idle");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           title: form.title,
//           body: form.body,
//           userId: 1,
//         }),
//       });
//       // você pode tratar o response aqui se quiser
//     } catch (error) {
//       // tratamento de erro opcional
//     }
//   };
// }








// import { useState } from "react";

// function AddPostform() {

//     const [form, setForm] = useState({title: "", body: ""})
//     const [status, setStatus] = useState("idle")

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setStatus("sending");
//         try{
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts'), {
//                 method: "POST",
//                 headers: {"Content-Type": "application/json"},
//                 body: JSON.stringfy({
//                     title,
//                     body,
//                     userId: 1
//                 })
//             });
//         } catch{

//         }

        
//     }

// }

