import "./style.css";
import InfoCard from "./infoCard/InfoCard";
//
import img01 from "../../../images/antenna.svg";
import img02 from "../../../images/clock.svg";
import img03 from "../../../images/desktop.svg";
import img04 from "../../../images/astronaut.svg";
//
const Info = () => {
  const ListInfo = [
    {
      img: img01,
      title: "УВАГА ДО ДЕТАЛЕЙ",
      text: "Ідейні міркування, і навіть початок повсякденної роботи з формування позиції.",
      id: 0,
    },
    {
      img: img02,
      title: "ПУНКТУАЛЬНІСТЬ",
      text: "Завдання організації, особливо рамки і місце навчання кадрів тягне у себе.",
      id: 1,
    },
    {
      img: img03,
      title: "ПЛАНУВАННЯ",
      text: "Так само консультація з широким активом значною мірою зумовлює.",
      id: 2,
    },
    {
      img: img04,
      title: "СУЧАСНІ ТЕХНОЛОГІЇ",
      text: "Значимість цих проблем настільки очевидна, що реалізація планових завдань.",
      id: 3,
    },
  ];
  return (
    <section className="info">
      <div className="wrapper">
        <ul>
          {ListInfo.map((info) => (
            <InfoCard info={info} key={info.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Info;
