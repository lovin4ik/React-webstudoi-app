import "./style.css";

const Work = (work) => {
  return (
    <li className="work-item">
      <img src={work.work.img} alt="FOTO" />
      <p>{work.work.text}</p>
    </li>
  );
};

export default Work;
