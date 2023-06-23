// const BASE_API = 'https://pokeapi.co/api/v2/'

// export async function getPokemon(id){
//     const response = await fetch(`${BASE_API}pokemon/${id}/`)
//     const data = await response.json()
//     // Aca falta validar errores
//     return data
// }

// export async function getSpecies(id){
//     const response = await fetch(`${BASE_API}pokemon-species/${id}/`)
//     const data = await response.json()
//     // Aca falta validar errores
//     return data
// }

const baseURL = 'https://api.football-data.org/v2/';

export async function getJugador(dorsal) {
  const token = '5ff15e0245ad4c0f919097d32976e00c'; // Reemplaza "YOUR_API_TOKEN" con tu propio token de API

  const response = await fetch(`${baseURL}players`, {
    headers: {
      'X-Auth-Token': token
    }
  });

  if (!response.ok) {
    throw new Error(`Error al obtener los datos del jugador: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  const jugador = data.players.find((player) => player.shirtNumber === dorsal);

  if (!jugador) {
    throw new Error(`No se encontró ningún jugador con el dorsal ${dorsal}`);
  }

  return jugador;
}