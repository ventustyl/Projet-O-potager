import axios from 'axios'

// Fonction axios pour recuperer tous les posts
export const getAllPosts = async () => {
   const res =await  axios.get("/posts");
   if (res.status !== 200) {
    return console.log ('Erreur survenu')
   }
   const data = res.data;
   return data
}

// Fonction Envoi de l'inscription
export const sendAuthRequest = async (signup, data) => {
   const res = await axios
     .post(`/user/${signup ? "signup" : "login"}/`, {
       name: data.name ? data.name : "",
       email: data.email,
       password: data.password,
     })
     .catch((err) => console.log(err));
 
   if (res.status !== 200 && res.status !== 201) {
     return console.log("Unable to Authenticate");
   }
   
   const resData = await res.data;
   return resData;
 };