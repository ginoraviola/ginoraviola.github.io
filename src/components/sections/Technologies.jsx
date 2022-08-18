import Title from '../Title';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNode, FaReact, FaVuejs } from 'react-icons/fa';

const Technologies = () => {

  const technologies = [
    {
      name: 'CSS3',
      icon: <FaCss3Alt className="text-8xl text-sky-400"/>,
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 className="text-8xl text-orange-500"/>,
    },
    {
      name: 'JavaScript',
      icon: <FaJsSquare className="text-8xl text-amber-300"/>,
    },
    {
      name: 'Node.js',
      icon: <FaNode className="text-8xl text-green-600"/>,
    },
    {
      name: 'React',
      icon: <FaReact className="text-8xl text-sky-400"/>,
    },
    {
      name: 'Vue.js',
      icon: <FaVuejs className="text-8xl text-green-400"/>,
    },
    ];

  return (
    <div className="flex h-full items-center min-h-screen">
      <div className="absolute bg-opacity-70 blur-sm h-full w-full"></div>

      <section className="flex flex-col w-full z-10 ">
        <Title title="Main Technologies"/>

        <div className="flex flex-wrap lg:flex-nowrap justify-around font-jost ">
          {technologies.map(({ name, icon }) => (
            <div key={name} className="flex flex-col items-center justify-center transition-all hover:rotate-360 hover:scale-125 duration-300 hover:brightness-105">
              {icon}
              <span className="text-md p-2 text-white ">{name}</span>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}

export default Technologies;