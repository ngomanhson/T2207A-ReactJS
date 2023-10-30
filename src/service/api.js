import axios from "axios";
import url from "./url";
const getJWT = () => {
    let state = localStorage.getItem("state");
    state = JSON.parse(state);
    if (state) return state.token;
    return "";
};

// F5 se co token dua vao
export default axios.create({
    baseURL: url.BASE_URL,
    // headers: {
    //     Authorization: `Bearer ${getJWT()}`,
    // },
});
