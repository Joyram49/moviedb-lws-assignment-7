import { getDictionary } from "../dictionaries/dictionaries";

export default async function NoDatafound({ lang }) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <div className='container mx-auto custom-height'>
        <div className='flex h-full flex-col justify-center items-center'>
          <p className='text-slate-200 font-semibold text-xl'>
            {dict.nodatafound}
          </p>
        </div>
      </div>
    </div>
  );
}
