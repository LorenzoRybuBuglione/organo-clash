import { useEffect, useState } from "react";
import LabelInput from "../LabelInput";
import DropdownDropdown from "../Dropdown";
import Button from "../Button";
import "./Formulary.css";

const Formulary = (props) => {
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");
  const [role, setRole] = useState("");
  const [rank, setRank] = useState("");
  const [favorite, setFavorite] = useState("");

  const [championsNames, setChampionsNames] = useState([]);

  useEffect(() => {
    if (role !== "") {
      let roleChampions = props.champions.filter(
        (champion) => (champion.role.includes(role))
      );
      setChampionsNames(roleChampions.map((champion) => champion.name));
    } else {
      setChampionsNames(props.champions.map((champion) => champion.name));
    }
  }, [props.champions, role]);

  const onCreate = (event) => {
    event.preventDefault();
    props.onCreateCard({
      name,
      nick,
      role,
      rank,
      favorite,
    });
    setName("");
    setRole("");
    setNick("");
    setRank("");
    setFavorite("");
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
        <DropdownDropdown
          value={favorite}
          onChange={(value) => setFavorite(value)}
          label="Campeão favorito"
          items={
            // role === "" ?
            championsNames
          }
          required
        />
        <Button>Adicionar Jogador</Button>
      </form>
    </section>
  );
};

export default Formulary;
