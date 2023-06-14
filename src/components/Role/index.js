import PlayerCard from "../PlayerCard";
import "./Role.css";

const Role = (props) => {
  return (
    props.players.length > 0 && (
      <section
        className="role"
        style={{ backgroundColor: props.secundaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="players">
          {props.players.map((player) => (
            <PlayerCard
              key={player.name}
              name={player.name}
              role={player.role}
              nick={player.nick}
              // rank={player.rank}
              icon={player.icon}
              favorite={player.favorite}
              bgColor={props.primaryColor}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Role;
