import MovieModal from "@/app/[lang]/components/Modal";
import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Image from "next/image";

export default async function MovieDetailsPage({ params }) {
  const id = params.id;
  const movies = await getDictionary("movie");
  const dict = await getDictionary(params.lang);
  // fetch data
  const movie = movies.results.find((movie) => movie.id === parseInt(id));

  return (
    <MovieModal>
      <section>
        <div>
          <Image
            className='w-full object-cover max-h-[300px] lg:max-h-[450px]'
            src={movie.backdrop_path}
            alt='banner'
            height={500}
            width={300}
          />
        </div>

        <div className='grid grid-cols-12 py-12 gap-8'>
          <div className='col-span-2'>
            <Image
              src={movie.poster_path}
              alt='thumbnail'
              width={300}
              height={200}
            />
          </div>
          <div className='col-span-8'>
            <h2 className='font-bold text-slate-300 text-2xl'>{movie.title}</h2>
            <p className='my-2 text-slate-400 italic'>{movie.overview}</p>
            <ul className='text-slate-300 space-y-2 my-8'>
              <li>Release Date : {movie.release_date}</li>
              <li>Average Vote : {movie.vote_average}</li>
              <li>Vote Count : {movie.vote_count}</li>
              <li>Popularity : {movie.popularity}</li>
            </ul>
          </div>
          <div className='col-span-2 space-y-4'>
            <button className='py-2 w-full bg-primary font-medium text-slate-800 rounded-md'>
              {dict.moviePage.buttonOne}
            </button>
            <button className='py-2 w-full bg-primary font-medium text-slate-800 rounded-md'>
              {dict.moviePage.buttonTwo}
            </button>
          </div>
        </div>
      </section>
    </MovieModal>
  );
}
