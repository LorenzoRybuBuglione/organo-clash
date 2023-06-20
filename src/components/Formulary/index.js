import { useEffect, useState } from "react";
import LabelInput from "../LabelInput";
import DropdownDropdown from "../Dropdown";
import Button from "../Button";
import "./Formulary.css";

const Formulary = (props) => {
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");
  const [rank, setRank] = useState("");
  const [role, setRole] = useState("");
  const [favorite, setFavorite] = useState({
    id: "",
    name: "",
    role: "",
    image: "",
  });

  const [championsNames, setChampionsNames] = useState([]);

  useEffect(() => {
    if (role !== "") {
      let roleChampions = props.champions.filter((champion) =>
        champion.role.includes(role)
      );
      setChampionsNames(roleChampions.map((champion) => champion.name));
    } else {
      setChampionsNames(props.champions.map((champion) => champion.name));
    }
  }, [props.champions, role]);

  const onCreate = (event) => {
    event.preventDefault();
    console.log(favorite);
    props.onCreateCard({
      name,
      nick,
      role,
      rank,
      favorite,
    });
    CleanUp();
  };

  const CleanUp = () => {
    setName("");
    setNick("");
    setRank("");
    setRole("");
    setFavorite({
      id: "",
      name: "",
      role: "",
      image: "",
    });
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
          value={rank}
          onChange={(value) => setRank(value)}
          label="Ranking"
          items={props.rankNames}
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
          value={favorite.name}
          onChange={(value) => {
            setFavorite(
              props.champions.find((champion) => champion.name === value)
            );
          }}
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
