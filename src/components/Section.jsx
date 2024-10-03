import { useContext } from 'react';
import { Switch } from './ui/switch';
import { ResumeContext } from '@/contexts/ResumeContext';

const Section = ({ children, title, description, sectionKey }) => {
  const { toggle, setToggle } = useContext(ResumeContext);
  const handleToggle = () => {
    setToggle((prevState) => ({
      ...prevState,
      [sectionKey]: !prevState[sectionKey],
    }));
  };
  return (
    <section className='w-full h-full flex justify-center items-start'>
      <div className='w-[90%] bg-white border rounded-lg shadow-md flex flex-col gap-2'>
        <div className='border-b p-4 flex justify-between items-center'>
          <div>
            <h3 className='font-semibold text-xl'>{title}</h3>
            <p className='text-sm text-zinc-800'>{description}</p>
          </div>
          {!sectionKey ? null : (
            <Switch onClick={handleToggle} checked={toggle[sectionKey]} />
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
