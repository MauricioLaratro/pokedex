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

const BASE_API = 'https://api.football-data.org/v2/'

export async function getJugador(dorsal) {
  const token = "5ff15e0245ad4c0f919097d32976e0 0c"; // Necesitarás un token de API válido
  const seleccionId = 765; // ID de la selección argentina

  try {
    // Obtener la lista de jugadores de la selección
    const response = await fetch(`${BASE_API}teams/${seleccionId}`, {
      headers: {
        "X-Auth-Token": token
      }
    });
    const data = await response.json();
    const jugadores = data.squad;
    const jugadorEncontrado = jugadores.find(jugador => jugador.shirtNumber === dorsal);
    
    if (jugadorEncontrado) {
      const jugadorId = jugadorEncontrado.id;
      
      // Obtener los datos del jugador específico
      const jugadorResponse = await fetch(`${BASE_API}players/${jugadorId}`, {
        headers: {
          "X-Auth-Token": token
        }
      });
      const jugadorData = await jugadorResponse.json();
      
      // Retornar los datos del jugador
      return jugadorData;
    } else {
      throw new Error("No se encontró ningún jugador con ese dorsal.");
    }
  } catch (error) {
    // Manejar errores
    console.error("Error al obtener los datos del jugador:", error);
    throw error;
  }
}