import movieList from "@/app/data/data";

export async function GET(request, { params }) {
  const id = +params.id;
  const movies = movieList.results;
  const requestedMovie = movies.find((movie) => movie.id === id);
  return Response.json(requestedMovie);
}

export async function PATCH(request, { params }) {
  const id = +params.id;
  const { title } = await request.json();
  const movies = movieList.results;
  const filteredMovie = movies.find((movie) => movie.id === id);
  filteredMovie.title = title;
  return Response.json(filteredMovie);
}

export async function DELETE(request, { params }) {
  const id = +params.id;
  const movies = movieList.results;
  const movieIndex = movies.findIndex((movie) => movie.id === id);
  const movieToDelete = movies[movieIndex];
  movies.splice(movieIndex, 1);
  return Response.json(movieToDelete);
}
