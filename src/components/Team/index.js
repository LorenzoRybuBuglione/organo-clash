import WorkerCard from "../WorkerCard";
import "./Team.css";

const Team = (props) => {
  return (
    props.workers.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.secundaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="workers">
          {props.workers.map((worker) => (
            <WorkerCard
              key={worker.name}
              name={worker.name}
              role={worker.role}
              image={worker.image}
              bgColor={props.primaryColor}
            />
          ))}
        </div>
      </section>
    )
  );
};
export default Team;
