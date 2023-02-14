import React from 'react'
import axios from 'axios'
import cookie from 'js-cookie'
import LogoutIcon from '../../images/icon/logout.svg'

const Logout = () => {

const removeCookie = (key) => {
    if (window !== "undefined")
    cookie.remove(key, {expires :1})
}

    const logout = async() => {
        await axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}api/user/logout`,
            withCredentials: true
        })
        .then(()=> removeCookie('jwt'))
        .catch((err) => console.log(err))

        // window.location.reload();
        window.location = "/";
    }
  return (
 <li onClick={logout}>
   Se déconnecter ici 
   <img src={LogoutIcon} alt="deconnexion"/>
 </li>
  )
}

export default Logout