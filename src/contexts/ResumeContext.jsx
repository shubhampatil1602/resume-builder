import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ResumeContext = createContext(null);

export const ResumeProvider = ({ children }) => {
  const [toggle, setToggle] = useState({
    educationToggle: true,
    experienceToggle: true,
    skillsToggle: true,
    projectsToggle: true,
    extraToggle: true,
  });
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    portfolio: '',
  });
  const [education, setEducation] = useState([
    {
      id: uuidv4(),
      college: '',
      duration: '',
      degree: '',
      grade: '',
      location: '',
    },
  ]);
  const [experience, setExperience] = useState([
    {
      id: uuidv4(),
      role: '',
      duration: '',
      company: '',
      location: '',
      summary: '',
    },
  ]);
  const [projects, setProjects] = useState([
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
  const [technicalSkills, setTechnicalSkills] = useState({
    languages: '',
    technologies_framework: '',
    devTools: '',
  });
  const [extra, setExtra] = useState('');

  // Function to save all the states to local storage
  const handleSave = () => {
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
    localStorage.setItem('education', JSON.stringify(education));
    localStorage.setItem('experience', JSON.stringify(experience));
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('technicalSkills', JSON.stringify(technicalSkills));
    localStorage.setItem('extra', JSON.stringify(extra));
    localStorage.setItem('toggle', JSON.stringify(toggle));
  };

  useEffect(() => {
    const savedPersonalInfo = localStorage.getItem('personalInfo');
    const savedEducation = localStorage.getItem('education');
    const savedExperience = localStorage.getItem('experience');
    const savedProjects = localStorage.getItem('projects');
    const savedTechnicalSkills = localStorage.getItem('technicalSkills');
    const savedExtra = localStorage.getItem('extra');
    const savedToggle = localStorage.getItem('toggle');

    if (savedPersonalInfo) {
      setPersonalInfo(JSON.parse(savedPersonalInfo));
    }
    if (savedEducation) {
      setEducation(JSON.parse(savedEducation));
    }
    if (savedExperience) {
      setExperience(JSON.parse(savedExperience));
    }
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
    if (savedTechnicalSkills) {
      setTechnicalSkills(JSON.parse(savedTechnicalSkills));
    }
    if (savedExtra) {
      setExtra(JSON.parse(savedExtra));
    }
    if (savedToggle) {
      setToggle(JSON.parse(savedToggle));
    }
  }, []);

  return (
    <ResumeContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        education,
        setEducation,
        experience,
        setExperience,
        projects,
        setProjects,
        technicalSkills,
        setTechnicalSkills,
        extra,
        setExtra,
        toggle,
        setToggle,
        handleSave,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
