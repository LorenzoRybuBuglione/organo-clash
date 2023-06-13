import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Formulary from "./components/Formulary";
import Role from "./components/Role";

function App() {
  const roles = [
    { name: "Topo", primaryColor: "#E06B69", secundaryColor: "#FDE7E8" },
    { name: "Selva", primaryColor: "#57C278", secundaryColor: "#D9F7E9" },
    { name: "Meio", primaryColor: "#82CFFA", secundaryColor: "#E8F8FF" },
    { name: "Atirador", primaryColor: "#FFBA05", secundaryColor: "#FFF5D9" },
    { name: "Suporte", primaryColor: "#DB6EBF", secundaryColor: "#FAE9F5" },
  ];

  const ranks = [
    { name: "Ferro", icon: "/images/Iron.webp" },
    { name: "Bronze", icon: "/images/Bronze.webp" },
    { name: "Prata", icon: "/images/Iron.webp" },
    { name: "Ouro", icon: "/images/Gold.webp" },
    { name: "Platina", icon: "/images/Platinum.webp" },
    { name: "Diamante", icon: "/images/Diamond.webp" },
    { name: "Mestre", icon: "/images/Master.webp" },
    { name: "Grão-Mestre", icon: "/images/Grandmaster.webp" },
    { name: "Desafiante", icon: "/images/Challenger.webp" },
  ];

  const [players, setPlayers] = useState([]);

  const onAddPlayer = (newPlayer) => {
    let newPlayerIcon = ranks.find((rank) => rank.name === newPlayer.rank).icon;
    newPlayer.icon = newPlayerIcon;
    setPlayers([...players, newPlayer]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulary
        onCreateCard={(newPlayer) => onAddPlayer(newPlayer)}
        roleNames={roles.map((role) => role.name)}
        rankNames={ranks.map((rank) => rank.name)}
      />
      {roles.map((role) => (
        <Role
          key={role.name}
          name={role.name}
          primaryColor={role.primaryColor}
          secundaryColor={role.secundaryColor}
          players={players.filter((player) => player.role === role.name)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
