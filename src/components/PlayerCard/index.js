import "./PlayerCard.css";

const PlayerCard = (props) => {

  var firstName = props.name.split(' ').slice(0, -1).join(' ');
  var lastName = props.name.split(' ').slice(-1).join(' ');

  console.log(props.icon)

  return (
    <div className="player">
      <div className="header" style={{ backgroundColor: props.bgColor }}>
        <img src={props.icon} alt={props.name} />
      </div>
      <div className="cardFooter">
        <h4>{firstName} "{props.nick}" {lastName}</h4>
        <img src={props.favorite.image} alt={props.favorite.name}/>
      </div>
    </div>
  );
};

export default PlayerCard;
