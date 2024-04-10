import logoSVG from "@/app/assets/logo.svg";
import ringSVG from "@/app/assets/ring.svg";
import shoppingCartSvg from "@/app/assets/shopping-cart.svg";
import Image from "next/image";
import Link from "next/link";
import DisplayModeButton from "./DisplayModeButton";
import LangButton from "./LangButton";

export default function Header({ lang }) {
  return (
    <header>
      <nav className='container flex items-center justify-between space-x-10 py-6'>
        <Link href={`/${lang}`}>
          <Image src={logoSVG} width='139' height='26' alt='logo' />
        </Link>

        <ul className='flex items-center space-x-5 list-none'>
          <li>
            <Link
              className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block'
              href={`/${lang}`}
            >
              <Image src={ringSVG} width='24' height='24' alt='ring' />
            </Link>
          </li>
          <li>
            <LangButton />
          </li>
          <li>
            <DisplayModeButton />
          </li>
          <li>
            <Link
              className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block'
              href={`/${lang}`}
            >
              <Image
                src={shoppingCartSvg}
                width='24'
                height='24'
                alt='shopping -cart'
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
