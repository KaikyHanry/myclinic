import { useState } from "react";

export default function Agendamento() {
  const [form, setForm] = useState({
    sintomas: "",
    especialidade: "",
    horario: ""
  });
  const [agendamentos, setAgendamentos] = useState([]);

  const horariosDisponiveis = ["08:00", "09:30", "11:00", "14:00", "16:00"];
  const medicos = {
    Cardiologia: "Dr. João Silva",
    Ortopedia: "Dra. Ana Costa",
    Pediatria: "Dr. Pedro Souza"
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.especialidade || !form.horario) return;
    setAgendamentos([...agendamentos, form]);
    setForm({ sintomas: "", especialidade: "", horario: "" });
  };

  return (
    <div>
      <h3>Agendamento de Consulta</h3>
      <form onSubmit={handleSubmit} className="form">
        <textarea
          name="sintomas"
          placeholder="Descreva seus sintomas..."
          value={form.sintomas}
          onChange={handleChange}
          required
        />
        <select name="especialidade" value={form.especialidade} onChange={handleChange} required>
          <option value="">Selecione a especialidade</option>
          <option value="Cardiologia">Cardiologia</option>
          <option value="Ortopedia">Ortopedia</option>
          <option value="Pediatria">Pediatria</option>
        </select>
        <select name="horario" value={form.horario} onChange={handleChange} required>
          <option value="">Selecione o horário</option>
          {horariosDisponiveis.map((h, i) => (
            <option key={i} value={h}>{h}</option>
          ))}
        </select>
        <button type="submit">Agendar</button>
      </form>

      <h4>Consultas Agendadas</h4>
      <ul>
        {agendamentos.map((a, i) => (
          <li key={i}>
            {a.especialidade} - {medicos[a.especialidade]} - {a.horario}
          </li>
        ))}
      </ul>
    </div>
  );
}
