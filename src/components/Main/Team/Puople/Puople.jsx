import "./style.css";

const Puople = (team) => {
  return (
    <li className="puople-team">
      <img src={team.team.avatar} alt="Avatar" />
      <div>
        <h3>{team.team.name}</h3>
        <p>{team.team.work}</p>
      </div>
    </li>
  );
};

export default Puople;
