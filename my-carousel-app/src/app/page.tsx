import Carousel from '@/components/Carousel';
import { FaEmpire } from 'react-icons/fa';

export default function HomePage() {
  return (
    <main className="p-[6rem]">
      <FaEmpire className="text-orange-500 text-center mx-auto mb-[2rem] scale-[3]" />

      <p className="text-center font-bold text-[0.8rem] mb-[0.4rem] text-[#939090]">
        <span className="text-orange-300">//</span> 02 . OUR VALUES
      </p>

      <h1 className="text-center text-white text-[1.5rem] font-bold">
        The core values behind our work
      </h1>

      <div className="mx-auto w-full max-w-4xl mt-2 p-4">
        <Carousel />
      </div>

      

      <div className="mt-4 flex flex-row justify-center items-start gap-6 sm:flex-row">
        <div className="group cursor-pointer flex items-center border-black border rounded-lg px-6 py-3.5 text-sm font-medium text-white bg-black transition-all duration-300 hover:bg-white hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 text-blue-400 transition-colors duration-300 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Get In Touch
        </div>
        <div className="group cursor-pointer relative flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-black shadow-[0_4px_15px_-5px_rgba(0,0,0,0.1)] transition-all duration-300  hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)] dark:hover:text-white dark:text-gray-900 dark:hover:bg-black">
          <span className="absolute right-0 -mr-2 h-4 w-4 rounded-full bg-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          <span className="absolute right-0 -mr-2 h-4 w-4 animate-ping rounded-full bg-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          Our Services
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
        

      </div>
    </main>
  );
}