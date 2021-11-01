import axios from "axios";

const YOUR_APP_KEY ="cf2bd19343973daf65eff5847a3cf6a8 -";
const YOUR_APP_ID = "60d936d7";



export const getRecipes = async (query) => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
   return await axios.get(url)
} 