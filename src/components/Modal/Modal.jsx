import "./modal.css";
const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__window" onClick={(e) => e.stopPropagation()}>
        <h1>Hello, World!!!</h1>
      </div>
    </div>
  );
};

export default Modal;
