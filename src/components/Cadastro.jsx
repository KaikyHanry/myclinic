import { useState } from "react";

// Mock simples de API (simula o envio e retorno do backend)
function mockCadastroAPI(dados) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("📦 Enviando dados para mock API:", dados);
      resolve({ sucesso: true, mensagem: "Cadastro realizado com sucesso!" });
    }, 1000); // simula 1 segundo de delay
  });
}

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    nascimento: "",
    telefone: "",
    email: "",
  });
  const [cadastrados, setCadastrados] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensagem("");

    // Chama o mock da API
    const resposta = await mockCadastroAPI(form);

    if (resposta.sucesso) {
      setCadastrados([...cadastrados, form]);
      setMensagem(resposta.mensagem);
      setForm({ nome: "", cpf: "", nascimento: "", telefone: "", email: "" });
    } else {
      setMensagem("Erro ao cadastrar. Tente novamente.");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h3>Cadastro de Paciente</h3>
      <form onSubmit={handleSubmit} className="form">
        <input name="nome" placeholder="Nome completo" value={form.nome} onChange={handleChange} required />
        <input name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} required />
        <input type="date" name="nascimento" value={form.nascimento} onChange={handleChange} required />
        <input name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} required />
        <input type="email" name="email" placeholder="E-mail" value={form.email} onChange={handleChange} required />

        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>

      {mensagem && <p style={{ color: "green" }}>{mensagem}</p>}

      <h4>Usuários cadastrados</h4>
      {cadastrados.length === 0 ? (
        <p>Nenhum usuário cadastrado ainda.</p>
      ) : (
        <ul>
          {cadastrados.map((u, i) => (
            <li key={i}>
              {u.nome} — {u.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
