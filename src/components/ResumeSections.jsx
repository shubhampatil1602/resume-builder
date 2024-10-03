import { MdPerson } from 'react-icons/md';
import { IoBag } from 'react-icons/io5';
import { PiCertificateBold, PiGraduationCapFill } from 'react-icons/pi';
import { GrPersonalComputer } from 'react-icons/gr';
import { FaReact } from 'react-icons/fa';

const ResumeSections = ({ tab, setTab }) => {
  const buttons = [
    { id: 1, icon: <MdPerson size={30} />, name: 'Personal Details' },
    { id: 3, icon: <PiGraduationCapFill size={30} />, name: 'Education' },
    { id: 2, icon: <IoBag size={30} />, name: 'Experience' },
    { id: 4, icon: <GrPersonalComputer size={30} />, name: 'Projects' },
    { id: 6, icon: <FaReact size={30} />, name: 'Skills' },
    { id: 5, icon: <PiCertificateBold size={30} />, name: 'Extra Activities' },
  ];

  return (
    <div className='flex justify-center items-center gap-2 py-6 relative'>
      {buttons.map(({ id, icon, name }) => (
        <div key={id} className='relative group flex flex-col items-center'>
          {/* Button */}
          <button
            onClick={() => setTab(name)}
            className={`${
              tab === name ? 'border-2 border-black/80' : ''
            } h-12 w-12 transition hover:bg-zinc-100/80 bg-white rounded-lg flex justify-center items-center shadow`}
          >
            {icon}
          </button>

          {/* Name Label (hidden by default, shows on hover) */}
          <span className='absolute w-[100px] top-14 text-sm text-center bg-gray-700 text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            {name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ResumeSections;
