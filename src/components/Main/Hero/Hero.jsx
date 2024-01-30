import "./style.css";
import Modal from "../../Modal/Modal";
import { useState } from "react";
const Hero = (props) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <section className="hero">
      <div className="hero__bg"></div>
      <div className="wrapper">
        <div className="hero__wrapper">
          <h1>Ефективні рішення для вашого бізнесу</h1>
          <button onClick={() => setModalActive(true)}>Замовити послугу</button>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </section>
  );
};

export default Hero;
