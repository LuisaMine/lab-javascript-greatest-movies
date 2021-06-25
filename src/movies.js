// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data");

function getAllDirectors(movies) {
  

const arrDirector = movies.map(
  (movie) => movie. director)  
return arrDirector
}

console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  function howManyMovies(movies) {

      const spielbergMovies = movies.filter(
        (movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
        return spielbergMovies.length
    
      
      }
console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  const sumScores = movies.reduce((acumulador, valorActual) => {
    if (valorActual.score) {
      return acumulador + valorActual.score
    } else {
      return acumulador
    }
  }, 0)
  const avgMovies = sumScores / movies.length
  return Number(avgMovies.toFixed(2))
}
console.log(scoresAverage(movies))
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.length === 0) {
    return 0
  }
  const dramaMovies = movies.filter(
    (movie) => movie.genre.includes("Drama"))
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {

  const yearSort = movies.sort((a,b) => {
  return a.year - b.year 

});

const ordered = yearSort.sort((a,b) =>  {
if (a.year === b.year) {
  return (a.title > b.title) -1;

}
});

const newOrdered = ordered 
return ordered

}

console.log(orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

function orderAlphabetically(movies) {
  const arrMovies = movies.map(
    (movie) => movie.title)
    const newArr = arrMovies
    return newArr.sort()
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
