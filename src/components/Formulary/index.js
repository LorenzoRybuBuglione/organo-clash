import { useState } from "react";
import LabelInput from "../LabelInput";
import DropdownDropdown from "../Dropdown";
import Button from "../Button";
import "./Formulary.css";

const Formulary = (props) => {
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");
  const [role, setRole] = useState("");
  const [rank, setRank] = useState("");

  const onCreate = (event) => {
    event.preventDefault();
    props.onCreateCard({
      name,
      nick,
      role,
      rank,
    });
    setName("");
    setRole("");
    setNick("");
    setRank("");
  };

  return (
    <section className="formulary">
      <form onSubmit={onCreate}>
        <h2>Preencha os dados para criar o card do jogador.</h2>
        <LabelInput
          value={name}
          onTyping={(value) => setName(value)}
          label="Nome e Sobrenome"
          placeholder="Digite o seu nome e sobrenome"
          required
        />
        <LabelInput
          value={nick}
          onTyping={(value) => setNick(value)}
          label="Apelido"
          placeholder="Digite o seu apelido"
          required
        />
        <DropdownDropdown
          value={role}
          onChange={(value) => setRole(value)}
          label="Posição"
          items={props.roleNames}
          required
        />
        <DropdownDropdown
          value={rank}
          onChange={(value) => setRank(value)}
          label="Ranking"
          items={props.rankNames}
          required
        />
        <Button>Adicionar Jogador</Button>
      </form>
    </section>
  );
};

export default Formulary;
