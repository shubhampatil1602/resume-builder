import PersonalDetails from '@/components/resume-ui/PersonalDetails';
import Education from '@/components/resume-ui/Education';
import Project from '@/components/resume-ui/Project';
import Experience from '@/components/resume-ui/Experience';
import Skills from '@/components/resume-ui/Skills';
import Extra from '@/components/resume-ui/Extra';

const ResumeContents = () => {
  return (
    <div className='bg-white px-[40px] py-[30px] min-h-full font-noto'>
      <PersonalDetails />
      <Education />
      <Experience />
      <Project />
      <Skills />
      <Extra />
    </div>
  );
};

export default ResumeContents;
