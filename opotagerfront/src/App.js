import "./styles/styles.scss";
import { useSelector } from "react-redux";
import Header from "./header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Auth from "./log/Auth";
import Journal from "./journal/Journal";
import Plantation from "./plantation/Plantation";

function App() {
  const isLoggedIn = useSelector ((state)=> state.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <>
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />}/>
          <Route path="/plantation" element={<Plantation />} />
          <Route path="/" element={<Home />} />
          <Route path="/Connexion" element={<Auth />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
