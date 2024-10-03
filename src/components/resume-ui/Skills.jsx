import { ResumeContext } from '@/contexts/ResumeContext';
import { useContext } from 'react';
import Title from './Title';

const Skills = () => {
  const {
    technicalSkills: { languages, technologies_framework, devTools },
    toggle,
  } = useContext(ResumeContext);

  return (
    <>
      {toggle.skillsToggle && (
        <div>
          <Title title='Technical Skills' />
          <div className='pl-0 md:pl-4'>
            {languages && (
              <div className='mb-0.5 leading-[0.5rem]'>
                <h3 className='font-semibold text-sm inline'>Languages:</h3>
                <span className='text-sm ml-1'>{languages}</span>
              </div>
            )}
            {technologies_framework && (
              <div className='mb-0.5 leading-[0.5rem]'>
                <h3 className='font-semibold text-sm inline'>
                  Technologies/Frameworks:
                </h3>
                <span className='text-sm ml-1'>{technologies_framework}</span>
              </div>
            )}
            {devTools && (
              <div className='mb-0.5 leading-[0.5rem]'>
                <h3 className='font-semibold text-sm inline'>
                  Developer Tools:
                </h3>
                <span className='text-sm ml-1'>{devTools}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;
