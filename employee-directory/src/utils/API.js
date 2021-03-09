import axios from "axios";
const BASEURL = "futuramaapi.herokuapp.com/api/v2/characters?search=";

export default {
    search: function () {
        return axios.get(BASEURL + query);
    }
};