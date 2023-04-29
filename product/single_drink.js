import fetchDrink from "../js/fetchDrink.js";
import displaySingle from "../js/displaySingleDrink.js"


const display = async () => {
    const id = localStorage.getItem('DRINK')
    const data = await fetchDrink(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    displaySingle(data)
}
window.addEventListener("DOMContentLoaded", display);
