import { useContext } from 'react';
import { ResumeContext } from '@/contexts/ResumeContext';
import Description from './Description';
import Title from './Title';

const Extra = () => {
  const { extra, toggle } = useContext(ResumeContext);

  return (
    <>
      {toggle.extraToggle && (
        <div>
          <Title title='Achievements and Certifications' />
          <div className='pl-0 md:pl-4 mt-2'>
            {extra && <Description des={extra} />}
          </div>
        </div>
      )}
    </>
  );
};

export default Extra;
