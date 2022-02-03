// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const getAllDirectorsExtra = movies.map((movie) => {
    return movie.director;
  });
  return getAllDirectorsExtra;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const howManyMoviesGenre = movies.filter((movie) => {
    if (
      movie.director.includes('Steven Spielberg') &&
      movie.genre.includes('Drama')
    ) {
      return true;
    } else {
      return false;
    }
  });

  return howManyMoviesGenre.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const scoresAverageExtra = movies.reduce((acc, movie) => {
    return acc + movie.score / movies.length;
  }, 0);
  // console.log(Number.parseFloat(scoresAverageExtra).toFixed(2))
  const returnsString = Number(scoresAverageExtra);
  // console.log(returnsString);
  const returnsNumber = +returnsString.toFixed(2);
  // console.log(returnsNumber);
  return returnsNumber;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

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
    bestYearAvg
  };
}
