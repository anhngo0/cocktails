import getElement from "./getElement.js"
import { removeLoading } from "./toggleLoading.js"

const showDrinks =  ({drinks}) => {
    const section = getElement('.section-center')
    const mes = getElement('.fail-mes')
    mes.textContent = ''
   

    //  when not found drinks from input
    if(!drinks){
         // remove loading gif
         removeLoading();
        mes.textContent = "sorry,no drinks matched your search";
        section.innerHTML = null;
        return;
    }
   
    // render products according to data from called api
    const htmls = drinks.map(drink => {
        const {
            'idDrink' : id,
            "strDrinkThumb":img,
            "strDrink": name
        } = drink

        return`
        <a href = './product/single_drink.html'>
            <div class="item-wrapper" data-id = '${id}'>
                <img src="${img}" alt="img" class="item-img">
                <span class="item-name">${name}</span>
            </div>
        </a>
        `
    }).join('');
    
     // remove loading gif
     removeLoading();
   
    section.innerHTML = htmls;
    return section;
}
export default showDrinks;