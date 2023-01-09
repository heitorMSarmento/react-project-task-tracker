import PropTypes from 'prop-types'

const tasks = [
    {
        id: 1,
        text: 'Consulta Médica',
        day: '10 de Janeiro as 10:30am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Curso',
        day: '15 de Janeiro as 10:30am',
        reminder: false,
    },
    {
        id: 3,
        text: 'Prova',
        day: '12 de Janeiro as 09:30am',
        reminder: true,
    },
]


const Tasks = () => {
  return (
    <>
    {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

Tasks.propTypes = {
    task: PropTypes.object,
}

export default Tasks