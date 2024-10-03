import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ResumeContext } from '@/contexts/ResumeContext';

import { Button } from '@/components/ui/button';
import ResumeContents from './ResumeContents';

const Resume = () => {
  const { handleSave } = useContext(ResumeContext);

  return (
    <div className='md:w-1/2 w-full min-h-screen overflow-y-scroll border shadow-lg bg-zinc-100 px-5 pb-10'>
      <div className='flex justify-end gap-4 pl-10 py-5'>
        <Button onClick={handleSave} variant='outline'>
          Save
        </Button>
        <Link to='/print' target='_blank'>
          <Button>Print</Button>
        </Link>
      </div>
      <ResumeContents />
    </div>
  );
};

export default Resume;
