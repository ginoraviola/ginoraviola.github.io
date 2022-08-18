import { useState } from 'react';

const Title = ({ title }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex justify-center md:w-fit relative  my-10 pr-6"
         onMouseOver={() => setHover(true)}
         onMouseLeave={() => setHover(false)}>
      <div
        className={`absolute z-0 top-0 animate-mark bg-amber-400 -z-10 rounded-xs h-6 mt-3 animate-mark ${hover ? 'w-full' : 'w-0'} transform transition-all duration-200`}></div>
      <p
        className={`font-bold text-4xl text-center font-jost pl-2 lg:text-left tracking-widest uppercase cursor-default text-white transition-all transform duration-200 ${hover ? 'translate-x-2' : ''}`}>
        {title}
      </p>
      <p
        className={`font-extrabold text-4xl absolute text-center font-jost pl-2 lg:text-left tracking-widest uppercase cursor-default text-black -z-10  transition-all transform duration-200 ${!hover ? 'opacity-100 -translate-x-3  translate-y-2' : 'opacity-0'}`}>
        {title}
      </p>
    </div>
  );
};

export default Title;