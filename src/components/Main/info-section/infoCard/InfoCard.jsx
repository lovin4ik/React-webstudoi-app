import "./style.css";
//
const InfoCard = (info) => {
  return (
    <li className="info-item">
      <div className="info-svg">
        <img src={info.info.img} alt="img" />
      </div>
      <h3>{info.info.title}</h3>
      <p>{info.info.text}</p>
    </li>
  );
};

export default InfoCard;
