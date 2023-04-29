const setProduct = (section) => {
    section.addEventListener('click', (e) => {
        const id = e.target.parentElement.dataset.id
        localStorage.setItem('DRINK', id)
    })
}
export default setProduct