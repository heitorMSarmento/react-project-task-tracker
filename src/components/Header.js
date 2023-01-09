// atalho 'RAFC'
import PropTypes from 'prop-types';
import Button from './Button';

export const Header = ({ title }) => {
  const onClick = () => {
    console.log('click')
  }
  
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Adicionar' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Lista de Tarefas'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}