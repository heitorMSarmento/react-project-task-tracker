// atalho 'RAFC'
import PropTypes from "prop-types";
import Button from "./Button";

export const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Fechar" : "Adicionar"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Lista de Tarefas",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
