import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "54644062-931f8757c3983fa8d6dda8238";

export function getImagesByQuery(query) {
     
    return axios.get(BASE_URL, {
        params: {
            key:API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    })
        .then(response => {
            return response.data;
        });
}
