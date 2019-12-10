const orderByYear = movies => {
  const orderMovies = movies.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }

    if (a.year === b.year) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
    }
  });

  return orderMovies;
};

const howManyMovies = movies => {
  let i = 0;
  movies.filter(movie => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      i++;
    }
  });
  return i;
};
