import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const HowToDownload = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[#15655f84] p-8'>
      <Link to='/create' className='mb-6'>
        <Button className='text-white bg-gray-800 hover:bg-gray-700 transition duration-300'>
          Back
        </Button>
      </Link>
      <div className='w-full max-w-4xl p-6 pt-8 rounded-lg shadow-lg bg-white flex flex-col items-center'>
        <h1 className='text-black text-xl md:text-3xl font-bold mb-8'>
          How to Download your resume ?
        </h1>
        <div className='flex flex-col items-center space-y-8'>
          <div className='flex flex-col'>
            <p className='text-black mt-4 mb-3 text-left font-medium'>
              1. Make sure to click on save first, then click on download?
            </p>
            <img
              src='/one.png'
              alt='Step 1: Click on download'
              className='w-full max-w-[600px] h-auto rounded-lg shadow-lg'
            />
          </div>
          <div className='flex flex-col'>
            <p className='text-black mt-4 font-medium'>
              2. Press Ctrl+P (Windows) or Cmd+P (Mac)
            </p>
            <p className='text-black mb-4 font-medium'>
              3. Select all options as shown and click save
            </p>
            <img
              src='/two.png'
              alt='Step 2: Press Ctrl+P or Cmd+P'
              className='w-full max-w-[600px] h-auto rounded-lg shadow-lg'
            />
          </div>
          <div className='text-center'>
            <p className='text-gray-600 text-sm'>Enjoy...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToDownload;
