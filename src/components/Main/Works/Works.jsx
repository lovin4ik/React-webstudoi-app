import "./style.css";
//
import img01 from "../../../images/programing.jpg";
import img02 from "../../../images/notebook.png";
import img03 from "../../../images/tablet.png";
//
import Work from "./Work/Work";
const Works = () => {
  const WorksList = [
    {
      img: img01,
      text: "Десктопні додатки",
      id: 4,
    },
    {
      img: img02,
      text: "Мобільні додатки",
      id: 5,
    },
    {
      img: img03,
      text: "Дизайнерські рішення",
      id: 6,
    },
  ];
  return (
    <section className="work__section">
      <div className="wrapper">
        <div className="work__wrapper">
          <h2>Чим ми займаємося</h2>
          <ul>
            {WorksList.map((work) => (
              <Work work={work} key={work.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Works;
