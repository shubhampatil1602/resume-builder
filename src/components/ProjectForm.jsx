import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { ResumeContext } from '@/contexts/ResumeContext';

import Section from './Section';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { PlusCircle, XCircle } from 'lucide-react';

const ProjectForm = () => {
  const { projects, setProjects } = useContext(ResumeContext);

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
    const newProject = projects.map((pro) =>
      pro.id === id
        ? {
            ...pro,
            [name]: value,
          }
        : pro
    );
    setProjects(newProject);
  }

  function handleAdd() {
    setProjects([
      ...projects,
      {
        id: uuidv4(),
        projectTitle: '',
        live: '',
        code: '',
        tech: '',
        summary: '',
        duration: '',
      },
    ]);
  }

  function handleRemove(id) {
    setProjects(projects.filter((pro) => pro.id !== id));
  }

  return (
    <Section
      title='Projects'
      description='Add your cool projects'
      sectionKey='projectsToggle'
    >
      {projects.map((pro) => (
        <React.Fragment key={pro.id}>
          <div className='px-4'>
            <Label>Project name</Label>
            <Input
              name='projectTitle'
              placeholder='Resume Builder'
              value={pro.projectTitle}
              onChange={(e) => handleChange(e, pro.id)}
            />
          </div>
          <div className='px-4'>
            <Label>Deployed link if any</Label>
            <Input
              name='live'
              placeholder=''
              value={pro.live}
              onChange={(e) => handleChange(e, pro.id)}
            />
          </div>
          <div className='px-4'>
            <Label>Github repo if public</Label>
            <Input
              name='code'
              placeholder=''
              value={pro.code}
              onChange={(e) => handleChange(e, pro.id)}
            />
          </div>
          <div className='px-4'>
            <Label>Tech Stack</Label>
            <Input
              name='tech'
              placeholder='Reactjs, Tailwind, Shadcn'
              value={pro.tech}
              onChange={(e) => handleChange(e, pro.id)}
            />
          </div>
          <div className='px-4'>
            <Label>Project duration</Label>
            <Input
              name='duration'
              placeholder='06/2024 – 08/2024'
              value={pro.duration}
              onChange={(e) => handleChange(e, pro.id)}
            />
          </div>
          <div className='px-4'>
            <Label>Project Description</Label>
            <ReactQuill
              modules={modules}
              formats={formats}
              theme='snow'
              value={pro.summary}
              onChange={(e) => handleChange(e, pro.id, true)}
            />
          </div>

          <div className='flex my-4'>
            <button
              onClick={handleAdd}
              className='rounded w-full border h-9 ml-4 text-sm border-dashed border-zinc-600 hover:border-blue-400 hover:text-blue-400 flex justify-center items-center gap-1'
            >
              <PlusCircle size={15} />
              <span>Add Projects</span>
            </button>
            <button
              onClick={() => handleRemove(pro.id)}
              className='rounded w-full border h-9 mx-4 text-sm border-dashed border-zinc-600 hover:border-red-400 hover:text-red-400 flex justify-center items-center gap-1'
            >
              <XCircle size={20} />
              <span>Remove</span>
            </button>
          </div>
        </React.Fragment>
      ))}
      {projects.length == 0 && (
        <button
          onClick={handleAdd}
          className='rounded border h-9 m-4 text-sm border-dashed border-zinc-600 hover:border-blue-400 hover:text-blue-400 flex justify-center items-center gap-1'
        >
          <PlusCircle size={15} />
          <span>Add Projects</span>
        </button>
      )}
    </Section>
  );
};

export default ProjectForm;
