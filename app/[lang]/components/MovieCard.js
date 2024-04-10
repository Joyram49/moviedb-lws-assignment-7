"use client";
import starSvg from "@/app/assets/star.svg";
import tagSvg from "@/app/assets/tag.svg";
import { getMovieGenre } from "@/app/utils/getMovieGenre";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ data, movieCard, lang, genre }) {
  const { genre_ids } = data || {};
  const movieGenre = getMovieGenre(genre, genre_ids);
  return (
    <figure className='p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl'>
      <Image
        className='w-full h-auto object-cover'
        src={data.poster_path}
        alt='movie-poster'
        width={100}
        height={100}
      />
      <figcaption className='pt-4'>
        <h3 className='text-xl mb-1'>{data.title}</h3>
        <p className='text-[#575A6E] text-sm mb-2'>
          {movieGenre ?? "Action/Adventure/Sci-fi"}
        </p>
        <div className='flex items-center space-x-1 mb-5'>
          <Image src={starSvg} width='14' height='14' alt='star' />
          <Image src={starSvg} width='14' height='14' alt='star' />
          <Image src={starSvg} width='14' height='14' alt='star' />
          <Image src={starSvg} width='14' height='14' alt='star' />
          <Image src={starSvg} width='14' height='14' alt='star' />
        </div>
        <Link
          className='bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm'
          href={`/${lang}/movies/${data.id}`}
          scroll={false}
        >
          <Image src={tagSvg} alt='tag' width='14' height='14' />
          <span>{movieCard.button}</span>
        </Link>
      </figcaption>
    </figure>
  );
}
