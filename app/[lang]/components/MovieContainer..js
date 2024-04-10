import { getDictionary } from "../dictionaries/dictionaries";
import MovieCard from "./MovieCard";
import NoDatafound from "./NoDatafound";

export default async function MovieContainer({ movieCard, lang }) {
  const data = await getDictionary("movie");

  if (data?.results?.length === 0) {
    return <NoDatafound lang={lang} />;
  }
  return (
    <div className='content'>
      <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-7'>
        {data?.results?.map((movie) => (
          <MovieCard
            key={movie.id}
            data={movie}
            movieCard={movieCard}
            lang={lang}
            genre={data.genre}
          />
        ))}
      </div>
    </div>
  );
}
