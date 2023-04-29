export default (selection) => {
   const element = document.querySelector(selection);
    if(element) {
        return element;
    } else {
        throw new Error(`No element ${element} exist! Error`);
    }
};
