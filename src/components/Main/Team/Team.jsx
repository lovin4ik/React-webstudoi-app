import "./style.css";
//
import Puople from "./Puople/Puople";
//
import Puople01 from "../../../images/men-1.jpg";
import Puople02 from "../../../images/woomen-1.jpg";
import Puople03 from "../../../images/man-2.jpg";
import Puople04 from "../../../images/man-3.jpg";
//
const Team = () => {
  const ListTeam = [
    {
      avatar: Puople01,
      name: "Ігор Дем'яненко",
      work: "Product Designer",
      id: 7,
    },
    {
      avatar: Puople02,
      name: "Ольга Рєпіна",
      work: "Frontend Developer",
      id: 8,
    },
    {
      avatar: Puople03,
      name: "Микола Тарасов",
      work: "Marketing",
      id: 9,
    },
    {
      avatar: Puople04,
      name: "Михайло Єрмаков",
      work: "UI Designer",
      id: 10,
    },
  ];
  return (
    <section className="team__section">
      <div className="wrapper">
        <div className="team__wrapper">
          <h2>Наша команда</h2>
          <ul>
            {ListTeam.map((team) => (
              <Puople team={team} key={team.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
