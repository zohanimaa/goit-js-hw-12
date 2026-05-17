import axios from "axios";

const API_KEY = "55700970-bcda54bd417603eeff8d80436";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query, page) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                page,
                per_page: 15,
        
            },
        });
        return response.data;
    } catch (error) {
        throw new error("Pixabay request failed");
    }
}