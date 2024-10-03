import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ResumeContext } from '@/contexts/ResumeContext';

import Section from './Section';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { PlusCircle, XCircle } from 'lucide-react';

const EducationForm = () => {
  const { education, setEducation } = useContext(ResumeContext);
  function handleChange(e, id) {
    const { name, value } = e.target;

    const newEducation = education.map((edu) =>
      edu.id === id
        ? {
            ...edu,
            [name]: value,
          }
        : edu
    );
    setEducation(newEducation);
  }

  function handleAdd() {
    setEducation([
      ...education,
      {
        id: uuidv4(),
        college: '',
        duration: '',
        degree: '',
        grade: '',
        location: '',
      },
    ]);
  }

  function handleRemove(id) {
    setEducation(education.filter((edu) => edu.id !== id));
  }
  return (
    <Section
      title='Education'
      description='Enter your education details'
      sectionKey='educationToggle'
    >
      {education.map((edu) => (
        <React.Fragment key={edu.id}>
          <div className='px-4'>
            <Label>College name</Label>
            <Input
              name='college'
              placeholder='GEC Daman'
              value={edu.college}
              onChange={(e) => handleChange(e, edu.id)}
            />
          </div>
          <div className='px-4'>
            <Label>Duration</Label>
            <Input
              name='duration'
              placeholder='2021 - 2025'
              value={edu.duration}
              onChange={(e) => handleChange(e, edu.id)}
            />
          </div>
          <div className='px-4'>
            <Label>Degree</Label>
            <Input
              name='degree'
              placeholder='B.E. Computer Engineering'
              value={edu.degree}
              onChange={(e) => handleChange(e, edu.id)}
            />
          </div>
          <div className='px-4'>
            <Label>Grade</Label>
            <Input
              name='grade'
              placeholder='7.96 CGPA'
              value={edu.grade}
              onChange={(e) => handleChange(e, edu.id)}
            />
          </div>
          <div className='px-4'>
            <Label>Location</Label>
            <Input
              name='location'
              placeholder='Daman'
              value={edu.location}
              onChange={(e) => handleChange(e, edu.id)}
            />
          </div>
          <div className='flex my-4'>
            <button
              onClick={handleAdd}
              className='rounded w-full border h-9 ml-4 text-sm border-dashed border-zinc-600 hover:border-blue-400 hover:text-blue-400 flex justify-center items-center gap-1'
            >
              <PlusCircle size={15} />
              <span>Add Education</span>
            </button>
            <button
              onClick={() => handleRemove(edu.id)}
              className='rounded w-full border h-9 mx-4 text-sm border-dashed border-zinc-600 hover:border-red-400 hover:text-red-400 flex justify-center items-center gap-1'
            >
              <XCircle size={20} />
              <span>Remove</span>
            </button>
          </div>
        </React.Fragment>
      ))}
      {education.length == 0 && (
        <button
          onClick={handleAdd}
          className='rounded border h-9 m-4 text-sm border-dashed border-zinc-600 hover:border-blue-400 hover:text-blue-400 flex justify-center items-center gap-1'
        >
          <PlusCircle size={15} />
          <span>Add Education</span>
        </button>
      )}
    </Section>
  );
};

export default EducationForm;
