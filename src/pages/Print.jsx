import { useEffect } from 'react';
import Resume from './Resume';

const Print = () => {
  useEffect(() => {
    window.print();
  }, []);

  return (
    <div className='min-h-screen bg-white  w-full'>
      <Resume />
    </div>
  );
};

export default Print;
