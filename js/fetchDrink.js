import { showLoading } from "./toggleLoading.js";
const fetchApi = async (url) => {
    showLoading();
    const data = await fetch(url);
    const drinks = await data.json();
    return drinks;
}
export default fetchApi;