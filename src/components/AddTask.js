import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState();

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text || !day) {
      alert('Por favor informe a Tarefa!')
      return
    }

    onAdd({ text, day, reminder})

    setText('')         // reset formulário
    setDay('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Tarefa</label>
        <input
          type="text"
          placeholder="Adicionar Tarefa"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Data e Horário</label>
        <input type="text" placeholder="Qual a Data e Horário?" value={day}
          onChange={(e) => setDay(e.target.value)}></input>
      </div>
      <div className="form-control form-control-check">
        <label>Lembrete</label>
        <input type="checkbox" placeholder="Lembrete" value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}></input>
      </div>

      <input
        type="submit"
        value="Salvar Tarefa"
        className="btn btn-block"
      ></input>
    </form>
  );
};

export default AddTask;
