import {films} from '/assets/films.js'
import {planets} from './assets/planets.js'
console.log(films)
console.log(planets)

let mainArea = document.querySelector('main')

films.forEach(function(film) {
    let filmDiv = document.createElement('div')  
    let filmTitle = document.createElement('h2')
    let filmCrawl = document.createElement('p')

    filmTitle.textContent = film.title 
    filmCrawl.textContent = film.opening_crawl

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)

    mainArea.appendChild(filmDiv)

});

planets.forEach(function(world) {
    let worldDiv = document.createElement('div')  
    let nameTiltle = document.createElement('h2')
    let planetTerrain = document.createElement('p')
   

    nameTiltle.textContent = world.name
    planetTerrain.textContent = world.terrain


    worldDiv.appendChild(nameTiltle)
    worldDiv.appendChild(planetTerrain)


    mainArea.appendChild(worldDiv)
});

