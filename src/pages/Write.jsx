import Navbar from '@/components/Navbar';
import Forms from './Forms';
import Resume from './Resume';
import Footer from '@/components/Footer';

const Write = () => {
  return (
    <>
      <Navbar />
      <div className='md:h-screen flex flex-col md:flex-row pt-14 bg-[#15655f84]  '>
        <Forms />
        <Resume />
      </div>
    </>
  );
};

export default Write;
