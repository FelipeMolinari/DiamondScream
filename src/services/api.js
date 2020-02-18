import axios from "axios";

const api_key = "RGAPI-19e1af05-ee97-4462-a0fa-c7e57dda0c37";

const api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/"
});
api.defaults.headers.common["X-Riot-Token"] = api_key;

export default api;
