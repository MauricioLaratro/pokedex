// import { getPokemon, getSpecies } from "./api.js"

// const $form = document.querySelector('#form')

// $form.addEventListener('submit', async (event) => {
//     event.preventDefault()
//     const form = new FormData($form)
//     const id = form.get('id')
//     const pokemon = await getPokemon(id)
//     const species = await getSpecies(id)
//     console.log(pokemon, species)
// })


import { getJugador } from "./api.js"

const $form = document.querySelector('#form')

$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const form = new FormData($form)
    const dorsal = form.get('id') // Utiliza el valor del formulario como dorsal
    try {
        const jugador = await getJugador(dorsal) // Llamada a la función getJugador con el dorsal del jugador
        console.log(jugador) // Mostrar los datos del jugador en la consola
        // Utiliza los datos del jugador como desees, como por ejemplo, mostrarlos en la interfaz de usuario
    } catch (error) {
        console.error(error) // Manejo de errores en caso de que no se encuentre el jugador o haya un error en la solicitud
    }
})