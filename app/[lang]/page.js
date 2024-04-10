import MovieContainer from "./components/MovieContainer.";
import Sidebar from "./components/Sidebar";
import { getDictionary } from "./dictionaries/dictionaries";

export default async function Homepage({ params }) {
  const dict = await getDictionary(params.lang);

  return (
    <main>
      <div className='container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]'>
        <Sidebar sidebar={dict?.sidebar} lang={params.lang} />
        <MovieContainer movieCard={dict?.movieCard} lang={params.lang} />
      </div>
    </main>
  );
}
