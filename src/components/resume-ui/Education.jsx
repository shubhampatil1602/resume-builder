import { useContext } from 'react';
import { ResumeContext } from '@/contexts/ResumeContext';
import Title from '@/components/resume-ui/Title';

const Education = () => {
  const { education, toggle } = useContext(ResumeContext);

  return (
    <>
      {toggle.educationToggle && (
        <div>
          <Title title='Education' />
          {education.map(
            ({ id, college, duration, degree, grade, location }) => (
              <div key={id} className='mb-1'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-base font-medium leading-5'>{college}</h2>
                  <p className='text-sm leading-5'>{duration}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='italic text-sm leading-5'>
                    {degree}
                    {grade && (
                      <span className='ml-1 font-semibold leading-5'>
                        {' '}
                        - {grade}
                      </span>
                    )}
                  </p>
                  <p className='italic text-sm'>{location}</p>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};

export default Education;
