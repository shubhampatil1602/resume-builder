import { Link } from 'react-router-dom';
import { IoLogoGithub } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav className='bg-transparent absolute z-50 w-full text-white h-14 backdrop-blur-md shadow-lg'>
      <div className='h-full flex items-center justify-between w-[80%] mx-auto'>
        <Link to='/'>
          <h2 className='font-medium md:text-lg'>Resume Builder</h2>
        </Link>
        <div className='flex gap-2 md:gap-6 text-sm'>
          <Link to='/create'>
            <span className='font-medium transition hover:bg-[#18181B] h-9 w-16 md:w-20 rounded-md flex justify-center items-center'>
              Create
            </span>
          </Link>
          <a
            href='#'
            className='font-medium transition hover:bg-[#18181B] h-9 w-10 md:w-24 rounded-md flex gap-2 justify-center items-center'
          >
            <span className='hidden md:block'>Github</span>
            <IoLogoGithub size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
