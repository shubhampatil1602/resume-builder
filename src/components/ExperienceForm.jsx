import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { ResumeContext } from '@/contexts/ResumeContext';

import Section from './Section';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { PlusCircle, XCircle } from 'lucide-react';

const ExperienceForm = () => {
  const { experience, setExperience } = useContext(ResumeContext);

  const modules = {
    toolbar: [['bold', 'underline', 'italic'], [{ list: 'bullet' }], ['link']],
  };
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'align',
    'link',
  ];

  function handleChange(e, id, isEditor = false) {
    let name, value;

    if (isEditor) {
      name = 'summary';
      value = e;
    } else {
      name = e.target.name;
      value = e.target.value;
    }
    const newExperience = experience.map((exp) =>
      exp.id === id
        ? {
            ...exp,
            [name]: value,
          }
        : exp
    );
    setExperience(newExperience);
  }

  function handleAdd() {
    setExperience([
      ...experience,
      {
        id: uuidv4(),
        role: '',
        duration: '',
        company: '',
        location: '',
        summary: '',
      },
    ]);
  }

  function handleRemove(id) {
    setExperience(experience.filter((exp) => exp.id !== id));
  }

  return (
    <Section
      title='Work Experience'
      description='Add your work experience'
      sectionKey='experienceToggle'
    >
      {experience.map((exp) => (
        <React.Fragment key={exp.id}>
          <div className='px-4'>
            <Label>Job Title</Label>
            <Input
              name='role'
              placeholder='Frontend Developer'
              value={exp.role}
              onChange={(e) => handleChange(e, exp.id)}
            />
          </div>
          <div className='px-4'>
            <Label>Employment Dates</Label>
            <Input
              name='duration'
              placeholder='06/2024 – 08/2024'
              value={exp.duration}
              onChange={(e) => handleChange(e, exp.id)}
            />
          </div>
          <div className='px-4'>
            <Label>Company Name</Label>
            <Input
              name='company'
              placeholder=''
              value={exp.company}
              onChange={(e) => handleChange(e, exp.id)}
            />
          </div>
          <div className='px-4'>
            <Label>Location</Label>
            <Input
              name='location'
              placeholder=''
              value={exp.location}
              onChange={(e) => handleChange(e, exp.id)}
            />
          </div>

          <div className='px-4'>
            <Label>Job Description</Label>
            <ReactQuill
              modules={modules}
              formats={formats}
              theme='snow'
              value={exp.summary}
              onChange={(e) => handleChange(e, exp.id, true)}
            />
          </div>

          <div className='flex my-4'>
            <button
              onClick={handleAdd}
              className='rounded w-full border h-9 ml-4 text-sm border-dashed border-zinc-600 hover:border-blue-400 hover:text-blue-400 flex justify-center items-center gap-1'
            >
              <PlusCircle size={15} />
              <span>Add Experience</span>
            </button>
            <button
              onClick={() => handleRemove(exp.id)}
              className='rounded w-full border h-9 mx-4 text-sm border-dashed border-zinc-600 hover:border-red-400 hover:text-red-400 flex justify-center items-center gap-1'
            >
              <XCircle size={20} />
              <span>Remove</span>
            </button>
          </div>
        </React.Fragment>
      ))}
      {experience.length == 0 && (
        <button
          onClick={handleAdd}
          className='rounded border h-9 m-4 text-sm border-dashed border-zinc-600 hover:border-blue-400 hover:text-blue-400 flex justify-center items-center gap-1'
        >
          <PlusCircle size={15} />
          <span>Add Experience</span>
        </button>
      )}
    </Section>
  );
};

export default ExperienceForm;
