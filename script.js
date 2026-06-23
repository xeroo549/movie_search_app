addEventListener("DOMContentLoaded", (event) => {
    const API_KEY = 'dae6032d'

    let button = document.querySelector('#favourite-btn')
    let search_bar = document.querySelector('#search-bar')
    let release_year_filter = document.querySelector('#release-year-filter')
    

    async function search_film() {
        const text = search_bar.value
        const safeText = encodeURIComponent(text)
        const release_year = release_year_filter.value

        const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${safeText}&y=${release_year}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }

    search_bar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        search_film()

        search_bar.value = '';
    }
});






})