import commingSoonImg from "@/app/assets/icons/commingSoon.svg";
import favouritesImg from "@/app/assets/icons/favourite.svg";
import newReleaseImg from "@/app/assets/icons/newRelease.svg";
import trendingImg from "@/app/assets/icons/trending.svg";
import watchLaterImg from "@/app/assets/icons/watchLater.svg";
import Image from "next/image";
import Link from "next/link";

export default async function Sidebar({ sidebar, lang }) {
  return (
    <aside>
      <ul className='space-y-2 list-none font-sora '>
        <li>
          <Link
            className='flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black no-underline '
            href={`/${lang}`}
          >
            <Image
              src={trendingImg}
              width='24'
              height='24'
              alt='trending-img'
            />
            <span>{sidebar?.sideOne}</span>
          </Link>
        </li>
        <li>
          <Link
            className='flex items-center space-x-2 px-5 py-3.5 rounded-lg no-underline '
            href={`/${lang}`}
          >
            <Image
              src={newReleaseImg}
              width='24'
              height='24'
              alt='newRelease-Img'
            />
            <span>{sidebar?.sideTwo}</span>
          </Link>
        </li>
        <li>
          <Link
            className='flex items-center space-x-2 px-5 py-3.5 rounded-lg no-underline '
            href={`/${lang}`}
          >
            <Image
              src={commingSoonImg}
              width='24'
              height='24'
              alt='commingSoon-Img'
            />
            <span>{sidebar?.sideThree}</span>
          </Link>
        </li>
        <li>
          <Link
            className='flex items-center space-x-2 px-5 py-3.5 rounded-lg no-underline '
            href={`/${lang}`}
          >
            <Image
              src={favouritesImg}
              width='24'
              height='24'
              alt='favourites-Img'
            />
            <span>{sidebar?.sideFour}</span>
          </Link>
        </li>
        <li>
          <Link
            className='flex items-center space-x-2 px-5 py-3.5 rounded-lg no-underline '
            href={`/${lang}`}
          >
            <Image
              src={watchLaterImg}
              width='24'
              height='24'
              alt='watchLater-Img'
            />
            <span>{sidebar?.sideFive}</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
