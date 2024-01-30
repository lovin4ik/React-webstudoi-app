import "./styles/App.css";
import "./styles/reset.css";
//
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
