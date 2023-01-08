// atalho 'RAFC'
import PropTypes from 'prop-types';

export const Header = ({ title }) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Lista de Tarefas'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}