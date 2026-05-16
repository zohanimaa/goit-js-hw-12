import axios from "axios";

const API_KEY = "55700970-bcda54bd417603eeff8d80436";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };
    return axios.get(BASE_URL, { params }).then(res => res.data).catch(error => {
        console.error("Pixabay API error:", error);
        throw error;
    });
}