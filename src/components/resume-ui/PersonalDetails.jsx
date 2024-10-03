import { ResumeContext } from '@/contexts/ResumeContext';
import { useContext } from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLaptop,
  FaLinkedin,
  FaPhone,
} from 'react-icons/fa6';

const PersonalDetails = () => {
  const {
    personalInfo: { name, title, phone, email, linkedin, github, portfolio },
  } = useContext(ResumeContext);

  return (
    <>
      {/* Container for Name and Title */}
      <div className='text-center'>
        <h1 className='text-3xl uppercase tracking-normal font-medium'>
          {name}
        </h1>
        <h2 className='text-base font-normal uppercase'>{title}</h2>
      </div>

      {/* Container for contact details */}
      <div className='flex flex-wrap justify-center items-center gap-2 text-sm'>
        {phone && (
          <div className='flex items-center gap-1'>
            <FaPhone size={12} />
            <p>{phone}</p>
          </div>
        )}
        {email && (
          <div className='flex items-center gap-1'>
            <FaEnvelope size={12} />
            <a href={`mailto:${email}`} className='underline'>
              {email}
            </a>
          </div>
        )}
        {linkedin && (
          <div className='flex items-center gap-1'>
            <FaLinkedin size={12} />
            <a href={linkedin} className='underline'>
              Linkedin
            </a>
          </div>
        )}
        {github && (
          <div className='flex items-center gap-1'>
            <FaGithub size={12} />
            <a href={github} className='underline'>
              Github
            </a>
          </div>
        )}
        {portfolio && (
          <div className='flex items-center gap-1'>
            <FaLaptop size={12} />
            <a href={portfolio} className='underline'>
              Portfolio
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default PersonalDetails;
