import { ResumeContext } from '@/contexts/ResumeContext';
import Section from './Section';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useContext } from 'react';

const SkillForm = () => {
  const { technicalSkills, setTechnicalSkills } = useContext(ResumeContext);
  function handleChange(e) {
    const { name, value } = e.target;
    setTechnicalSkills({
      ...technicalSkills,
      [name]: value,
    });
  }
  return (
    <Section
      title='Technical Skills'
      description='Enter your Technical Skills'
      sectionKey='skillsToggle'
    >
      <div className='px-4'>
        <Label>Languages</Label>
        <Input
          name='languages'
          placeholder='Javascript, Typescript, C++, Java, Python'
          value={technicalSkills.languages}
          onChange={handleChange}
        />
      </div>
      <div className='px-4'>
        <Label>Technologies/Frameworks</Label>
        <Input
          name='technologies_framework'
          placeholder='React, Next, Express, Node, Redux, PostgreSQL'
          value={technicalSkills.technologies_framework}
          onChange={handleChange}
        />
      </div>
      <div className='px-4 mb-4'>
        <Label>Developer Tools</Label>
        <Input
          name='devTools'
          placeholder='VS Code, Vim, Figma'
          value={technicalSkills.devTools}
          onChange={handleChange}
        />
      </div>
    </Section>
  );
};

export default SkillForm;
