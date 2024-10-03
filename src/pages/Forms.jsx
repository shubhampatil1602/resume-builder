import { useState } from 'react';

import ResumeSections from '../components/ResumeSections';
import PersonalDetailsForm from '@/components/PersonalDetailsForm';
import EducationForm from '@/components/EducationForm';
import ProjectForm from '@/components/ProjectForm';
import ExperienceForm from '@/components/ExperienceForm';
import SkillForm from '@/components/SkillForm';
import ExtraForm from '@/components/ExtraForm';

const Forms = () => {
  const [tab, setTab] = useState('Personal Details');

  return (
    <div className='min-h-screen md:w-1/2 w-full h-full overflow-y-scroll bg-zinc-50 pb-8'>
      <ResumeSections tab={tab} setTab={setTab} />
      {tab === 'Personal Details' && <PersonalDetailsForm />}
      {tab === 'Education' && <EducationForm />}
      {tab === 'Experience' && <ExperienceForm />}
      {tab === 'Projects' && <ProjectForm />}
      {tab === 'Skills' && <SkillForm />}
      {tab === 'Extra Activities' && <ExtraForm />}
    </div>
  );
};

export default Forms;
