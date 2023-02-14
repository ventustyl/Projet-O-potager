import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import FilActu from "../components/FilActu";
import NewPostForm from "../components/Post/NewPostForm";
// import Log from "../components/Log";

import '../styles/journal.scss'

import Tendances from "../components/Tendances";
import Friends from "../components/Admin/Friends";

const Journal = () => {
  const uid = useContext(UidContext);

  return (
    <main className="titre-page">
      <h1>Réseau Social</h1>
      <section className="container">
        <div className="control-reseau">
          <div className="journal-header">
            {uid ? <NewPostForm /> : ""} 
          </div>
          <FilActu />
        </div>
        <div className="right-side">
          <div className="right-side-container">
            <div className="wrapper">
              <Tendances />
              {uid && <Friends/>}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Journal;
