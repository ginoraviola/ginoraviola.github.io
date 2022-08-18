import LabelText from './LabelText';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const ExperienceItem  = ({ title, subtitle, imageSrc, period, url, cta, icon}) => {
  const [isHovering, setIsHovering] = useState(false);
  let navigate = useNavigate();

  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
    if (cta.url) {
      navigate(cta.url)
    }
  }
  return (
    <div
      className={`flex flex-col my-2 w-full justify-center h-52 items-center px-6 relative md:mx-2 rounded-xl shadow-2xl ${isHovering ? 'animate-float' : ''} dark:bg-gray-300  ${(cta || url) && 'cursor-pointer hover:bg-slate-800'} `}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick}
      onMouseOver={() => setIsHovering(true)} >
      { period && (
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
          <LabelText text={period}></LabelText>
        </div>
      )}
      <div className={`flex flex-col w-full py-3`}>
        <h5 className={`mt-2 mb-2 text-xl font-bold ${isHovering && (cta || url) ? 'text-white' : 'text-gray-800 '} font-jost z-40`}>
          {title}
        </h5>
        <p className={`mb-5 text-xs ${isHovering && (cta || url) ? 'text-gray-200' : 'text-gray-800'} max-w-sm font-light tracking-wider italic lg:text-sm z-10 line-clamp-3`}>{subtitle}</p>

      </div>
      {cta && (
        <a href={cta.link}
           className={`${isHovering ? 'text-sky-200': 'text-sky-600'} absolute bottom-2 font-medium text-right text-lg tracking-widest`}>{cta.text}</a>
      )}
      {
        icon &&
          icon

      }
      { imageSrc && (
      <img src={imageSrc}
           alt={title}
           className={`absolute h-28 w-28 object-contain right-10 transform transition-all duration-500 ${isHovering ? 'scale-110 opacity-100 animate-pulse' : 'opacity-60'}`}/>
      )}
    </div>
  );
};

export default ExperienceItem;