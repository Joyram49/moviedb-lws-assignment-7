export default function Sidebar() {
  return (
    <div
      role='status'
      className='max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700'
    >
      <div className='flex items-center justify-start gap-x-3 bg-gray-100 dark:bg-white/30 w-full px-3 py-2 rounded-lg'>
        <div className='h-8  bg-gray-300 rounded-full dark:bg-gray-600 w-8 '></div>
        <div className='w-32 h-4 bg-gray-200 rounded-full dark:bg-gray-700'></div>
      </div>
      <div className='flex items-center justify-start gap-x-3 px-3 pt-4 '>
        <div className='h-8  bg-gray-300 rounded-full dark:bg-gray-600 w-8 '></div>
        <div className='w-32 h-4 bg-gray-200 rounded-full dark:bg-gray-700'></div>
      </div>
      <div className='flex items-center justify-start gap-x-3 px-3 pt-4 '>
        <div className='h-8  bg-gray-300 rounded-full dark:bg-gray-600 w-8 '></div>
        <div className='w-32 h-4 bg-gray-200 rounded-full dark:bg-gray-700'></div>
      </div>
      <div className='flex items-center justify-start gap-x-3 px-3  pt-4 '>
        <div className='h-8  bg-gray-300 rounded-full dark:bg-gray-600 w-8 '></div>
        <div className='w-32 h-4 bg-gray-200 rounded-full dark:bg-gray-700'></div>
      </div>
      <div className='flex items-center justify-start gap-x-3 px-3  pt-4 '>
        <div className='h-8  bg-gray-300 rounded-full dark:bg-gray-600 w-8 '></div>
        <div className='w-32 h-4 bg-gray-200 rounded-full dark:bg-gray-700'></div>
      </div>
      <span className='sr-only'>Loading...</span>
    </div>
  );
}
