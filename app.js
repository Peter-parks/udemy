

const movies = [
    {
        
        id: 1,
        name: "Los Vengadores",
        Recaudación: "1.518 millones de dólares",
        body: "Los Vengadores (2012) dio el pistoletazo de salida a las películas de superequipos, reuniendo a figuras como Thor, Capitán América, Iron Man, Viuda Negra y Hulk"
      },
      {
        
        id: 2,
        name: "El Rey León",
        Recaudación: "1.656 millones de dólares",
        body: " El Rey León es quizás el más extraño y confuso. Su estampa de vida sahariana hiperrealista simplemente no fue tan conmovedora o divertida como el clásico animado"
      },
      {
        
        id: 3,
        name: "Jurassic World",
        Recaudación: "1.671 millones de dólares",
        body: "Parque Jurásico, de Spielberg, no se libró de este destino, ya que 2015 irrumpió con una actualización de la historia de los monstruos prehistóricos favorita de todos, con Chris Pratt al mando. "
      },
      {
        
        id: 4,
        name: "Spider-Man: No Way Home",
        Recaudación: "1.921 millones de dólares",
        body: "Oro en taquilla, aparentemente. Spider-Man: No Way Home (2021), la tercera película de Tom Holland en el papel del hombre pegajoso favorito de todo el mundo, abrió el multiverso y reunió a Tobey Maguire y Andrew Garfield en una conmovedora sesión de terapia de grupoi"
      }
]


const newMovie = movies.every ((movie) => {
    return movie.name.length >= 4 
})

console.log(newMovie)