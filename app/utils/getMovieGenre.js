export const getMovieGenre = (genres, genre_ids) => {
  let movieGenre = [];
  const genreId = genre_ids.map((genreId) => {
    movieGenre.push(genres[genreId]);
  });

  const temp = movieGenre.join("/");
  return temp;
};
