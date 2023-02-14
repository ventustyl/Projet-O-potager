import React, { useContext } from "react";
import Log from "../components/Log";
import Login from "../images/log.png";
import "../styles/connexion.scss";
import { UidContext } from "../components/AppContext";
import Logout from "../components/Log/Logout";
import UpdateProfil from "../components/Admin/UpdateProfil";

const Connexion = () => {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <div>
        <h1 className="static">Page profil</h1>    
        <div className="bloc-admin">
    
       
          <UpdateProfil/>
          <Logout />
        </div>
     </div>
   
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            <img src={Login} alt="img-log" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Connexion;
