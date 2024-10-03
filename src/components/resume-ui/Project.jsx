import { useContext } from 'react';
import { ResumeContext } from '@/contexts/ResumeContext';
import { ExternalLinkIcon } from 'lucide-react';
import Title from '@/components/resume-ui/Title';
import Description from './Description';

const Project = () => {
  const { projects, toggle } = useContext(ResumeContext);

  return (
    <>
      {toggle.projectsToggle && (
        <div>
          <Title title='Projects' />
          {projects.map(
            ({ id, projectTitle, live, code, tech, summary, duration }) => (
              <div key={id}>
                {/* Reduced margin for compactness */}
                <div className='flex justify-between items-center'>
                  <div className='flex items-center'>
                    <h3 className='font-semibold tracking-[0.030em]'>
                      {projectTitle} {live || code ? ' -' : ''}
                    </h3>
                    {live && (
                      <a
                        href={live}
                        target='_blank'
                        className='flex gap-1 items-center ml-2'
                      >
                        <span>Live</span>
                        <ExternalLinkIcon size={16} /> {code && '|'}
                      </a>
                    )}
                    {code && (
                      <a href={code} target='_blank' className='ml-2'>
                        Code
                      </a>
                    )}
                  </div>
                  {duration && <p>{duration}</p>}
                </div>
                {tech && (
                  <p className='italic font-medium text-sm'>
                    <span className='font-semibold mr-1'>Tech Stack:</span>
                    {tech}
                  </p>
                )}
                {summary && <Description des={summary} />}
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};

export default Project;
