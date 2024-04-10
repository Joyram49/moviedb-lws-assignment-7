export default function Footer({ text }) {
  return (
    <footer className='py-6 md:py-8 mt-8'>
      <div className='container mx-auto'>
        <p className='text-center font-sora font-semibold text-sm text-black/70 dark:text-[#EEEEEE]/60'>
          {text}
        </p>
      </div>
    </footer>
  );
}
