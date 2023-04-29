
import render  from "./js/renderDrinks.js";
import "./js/searchDrinks.js";

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
window.addEventListener('DOMContentLoaded', () => {
  render(URL)
})
