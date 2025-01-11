import axios from "axios";

const API = `https://xcountries-backend.azurewebsites.net`;

export async function fetchCountries(){
    try {
        const response = await axios.get(`${API}/all`);
        return await response.data;

    } catch (error) {
        console.error("Error fetching data: ",error);
    }
}

