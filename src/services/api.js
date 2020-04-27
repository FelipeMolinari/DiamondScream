import axios from "axios";

const api_key = "RGAPI-7f34889f-2e8a-4314-8fdd-8d76d6142a8d";

const api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/",
});
api.defaults.headers.common["X-Riot-Token"] = api_key;

export default api;
