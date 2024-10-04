import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ResumeContext } from '@/contexts/ResumeContext';

import { Button } from '@/components/ui/button';
import ResumeContents from './ResumeContents';

const Resume = () => {
  const { handleSave } = useContext(ResumeContext);

  const downloadPDF = () => {};

  return (
    <div className='md:w-1/2 w-full min-h-screen overflow-y-scroll border shadow-lg bg-zinc-100 px-5 pb-10'>
      <div className='flex justify-end gap-4 pl-10 py-5'>
        <Link to='/how-to-download'>
          <Button
            variant='link'
            className='font-medium transition  rounded-md flex justify-center items-center'
          >
            How to download?
          </Button>
        </Link>
        <Button onClick={handleSave} variant='outline'>
          Save
        </Button>
        <Link to='/print' target='_blank'>
          <Button onClick={downloadPDF}>Download</Button>
        </Link>
      </div>

      <div>
        <ResumeContents />
      </div>
    </div>
  );
};

export default Resume;
