import { useContext } from 'react';
import { ResumeContext } from '@/contexts/ResumeContext';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Section from '@/components/Section';

const PersonalDetailsForm = () => {
  const { personalInfo, setPersonalInfo } = useContext(ResumeContext);
  function handleChange(e) {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  }

  return (
    <Section title='Personal Details' description='Enter your personal details'>
      <div className='px-4'>
        <Label>Name</Label>
        <Input
          name='name'
          placeholder='Jaggu Dada'
          value={personalInfo.name}
          onChange={handleChange}
        />
      </div>
      <div className='px-4'>
        <Label>Job Title</Label>
        <Input
          name='title'
          placeholder='Full Stack Developer'
          value={personalInfo.title}
          onChange={handleChange}
        />
      </div>
      <div className='px-4'>
        <Label>Phone</Label>
        <Input
          name='phone'
          placeholder='+919106850991'
          value={personalInfo.phone}
          onChange={handleChange}
        />
      </div>
      <div className='px-4'>
        <Label>Email</Label>
        <Input
          name='email'
          placeholder='bhidu@gmail.com'
          value={personalInfo.email}
          onChange={handleChange}
        />
      </div>
      <div className='px-4'>
        <Label>Linkedin Profile URL</Label>
        <Input
          name='linkedin'
          placeholder='https://www.linkedin.com/'
          value={personalInfo.linkedin}
          onChange={handleChange}
        />
      </div>
      <div className='px-4'>
        <Label>Github Profile URL</Label>
        <Input
          name='github'
          placeholder='https://www.github.com/'
          value={personalInfo.github}
          onChange={handleChange}
        />
      </div>
      <div className='px-4 pb-4'>
        <Label>Portfolio URL</Label>
        <Input
          name='portfolio'
          placeholder=''
          value={personalInfo.portfolio}
          onChange={handleChange}
        />
      </div>
    </Section>
  );
};

export default PersonalDetailsForm;
