import getElement from "./getElement.js";


const display = ({drinks}) => {

    const drink = drinks[0]
    const section = getElement('.section')
    const {
        strDrink: name,
        strInstructions: desc,
        strDrinkThumb: img
    } = drink
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
      ];
    const ulHtmls = list.map(ingredient => {
        return`
        <li>${ingredient? ingredient: ''}</li>
        `
    }).join('') 
    section.innerHTML = `
    <div class="img-wrapper">
        <img src="${img}" alt="img">
    </div>
    <div class="info">
        <h3 class="name">${name}</h3>
        <p class="desc">${desc}</p>
        <ul>
            ${ulHtmls}
        </ul>
        <a href="/learn_index.html">
            <button class="all-cocktails">All cocktails</button>
        </a>
    </div>
    `
}
export default display