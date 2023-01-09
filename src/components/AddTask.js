

const AddTask = () => {
  return (
    <form className="add-form">
        <div className="form-control">
            <label>Tarefa</label>
            <input type='text' placeholder='Adicionar Tarefa' ></input>
        </div>
        <div className="form-control">
            <label>Data e Horário</label>
            <input type='text' placeholder='Qual a Data e Horário?' ></input>
        </div>
        <div className="form-control form-control-check">
            <label>Lembrete</label>
            <input type='checkbox' placeholder='Lembrete' ></input>
        </div>

        <input type='submit' value='Salvar Tarefa' className="btn btn-block"></input>
    </form>
  )
}

export default AddTask