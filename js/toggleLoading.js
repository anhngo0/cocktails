import getElement from "./getElement.js";
const loading = getElement('.loading');

export const showLoading = () => {
  loading.classList.remove('hide-loading');
};

export const removeLoading = () =>{
    loading.classList.add('hide-loading');
  };