import { useState } from "react";

export default function Cancelamento() {
  const [consultas, setConsultas] = useState([
    { especialidade: "Cardiologia", horario: "09:30" },
    { especialidade: "Pediatria", horario: "14:00" },
  ]);

  const [motivos, setMotivos] = useState({}); // cada índice terá seu motivo

  const handleChangeMotivo = (index, valor) => {
    setMotivos({ ...motivos, [index]: valor });
  };

  const handleCancel = (index) => {
    const motivo = motivos[index] || "Não informado";

    const novaLista = consultas.filter((_, i) => i !== index);
    setConsultas(novaLista);

    // remove o motivo do item cancelado
    const novosMotivos = { ...motivos };
    delete novosMotivos[index];
    setMotivos(novosMotivos);

    alert("Consulta cancelada. Motivo: " + motivo);
  };

  return (
    <div>
      <h3>Cancelamento de Consultas</h3>
      {consultas.length === 0 ? (
        <p>Nenhuma consulta agendada.</p>
      ) : (
        consultas.map((c, i) => (
          <div key={i} className="cancel-card">
            <p>
              {c.especialidade} - {c.horario}
            </p>
            <input
              placeholder="Motivo do cancelamento"
              value={motivos[i] || ""}
              onChange={(e) => handleChangeMotivo(i, e.target.value)}
            />
            <button onClick={() => handleCancel(i)}>Cancelar</button>
          </div>
        ))
      )}
    </div>
  );
}
