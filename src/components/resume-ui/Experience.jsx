import { useContext } from 'react';
import { ResumeContext } from '@/contexts/ResumeContext';
import Title from '@/components/resume-ui/Title';
import Description from './Description';

const Experience = () => {
  const { experience, toggle } = useContext(ResumeContext);

  return (
    <>
      {toggle.experienceToggle && (
        <div>
          <Title title='Experience' />
          {experience.map(
            ({ id, role, duration, company, location, summary }) => (
              <div key={id} className='w-full'>
                <div className='leading-tight'>
                  <div className='flex justify-between'>
                    <h3 className='font-semibold tracking-wide'>{role}</h3>
                    {duration && <p>{duration}</p>}
                  </div>
                  <div className='flex justify-between'>
                    {company && <p className='italic'>{company}</p>}
                    {location && <p className='italic'>{location}</p>}
                  </div>
                </div>
                {summary && <Description des={summary} />}
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};

export default Experience;
