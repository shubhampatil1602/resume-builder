import React, { useContext } from 'react';
import { ResumeContext } from '@/contexts/ResumeContext';
import Section from './Section';
import { Label } from './ui/label';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ExtraForm = () => {
  const { extra, setExtra } = useContext(ResumeContext);

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

  function handleChange(e) {
    setExtra(e);
  }
  return (
    <Section
      title='Achievements and Certifications'
      description='Add your Achievements and Certifications'
      sectionKey='extraToggle'
    >
      <div className='px-4 mb-4'>
        <Label>Description</Label>
        <ReactQuill
          modules={modules}
          formats={formats}
          theme='snow'
          value={extra}
          onChange={handleChange}
        />
      </div>
    </Section>
  );
};

export default ExtraForm;
