//Import de react router dom pour les routes
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Aromates from "./pages/Aromates";
import Connexion from "./pages/Connexion";
import Astuces from "./pages/Astuces";
import Contact from "./pages/Contact";
import Fruits from "./pages/Fruits";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Legumes from "./pages/Legumes";

import "./styles/styles.scss";
import "./styles/connexion.scss"
import Footer from "./components/Footer";
import { UidContext } from "./components/AppContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.action";
import Erreur404 from "./pages/Erreur404";
import Trending from "./pages/Trending";

//Creation de la structure des pages dans un layout avec outlet de react router dom
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Creation de la constante de la création de la route principale
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/journal",
        element: <Journal />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/legumes",
        element: <Legumes />,
      },
      {
        path: "/fruits",
        element: <Fruits />,
      },
      {
        path: "/aromates",
        element: <Aromates />,
      },
      {
        path: "/astuces",
        element: <Astuces />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/connexion",
        element: <Connexion />,
      },
      {
        path: '/*',
        element: <Erreur404/>
      }

    ],
  },
]);

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => setUid(res.data))
        .catch((err) => console.log("Pas de token"));
    };
    fetchToken();

    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);

  return (
 
      <UidContext.Provider value={uid}>
        <RouterProvider router={router} />
      </UidContext.Provider>
  
  );
};

export default App;
