import AnimatedBlob from '../AnimatedBlob';
import { FaGithub, FaGlobeAmericas, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => (
  <div className="flex h-screen justify-center overflow-x-hidden">
    <div
      className="absolute h-full w-screen backdrop-blur-0 bg-hero bg-center scale-105 blur-sm overflow-x-hidden overflow-hidden"></div>

    <div className="flex flex-col md:flex-row z-10 justify-center items-center">
      <div>
        <div className="flex justify-center animate-scale-up md:animate-profile-pic md:-translate-x-1/4 scale-100">
          <AnimatedBlob/>
          <img src={require('../../static/profile-pic-1.png')}
               className="w-60 h-60 md:w-80 md:h-80 z-10 rounded-full hover:scale-105 transition-all duration-300 brightness-100 hover:brightness-125 animate-float"
               alt="logo"
          />
        </div>
      </div>

      <div className="flex animate-appear mt-20 md:mt-0 relative">
        <div className="flex-grow text-white text-center md:mt-24 lg:m-2">
          <p
            className="text-4xl md:text-6xl p-2 tracking-wider uppercase font-jost tracking-in-expand-delay1">
            <span className="font-semibold">Gino </span>
            {/*<Blob className="absolute h-3/5 top-1/4 left-1/5 mix-blend-multiply filter opacity-60"/>*/}
            <span className="font-thin text-slate-400 brightness-125">Raviola</span>
          </p>
          <p
            className="text-lg md:text-2xl text-blue-400 brightness-125 tracking-widest font-jost md:p-5 lg:p-1 md:mt-12 lg:mt-4 mb-12">
            <span className="font-semibold">Frontend &nbsp;</span>
            <span className="font-light">DEVELOPER</span>
          </p>
          <div className="flex justify-center items-center my-5">
            <FaMapMarkerAlt className="text-red-500 text-4xl mr-2"/>
            <p className="md:text-3xl lg:text-medium justify-center items-center tracking-wide font-jost">
              Based in&nbsp;
              <span className="font-bold">San Francisco&nbsp;</span>
              <p className="text-sm font-thin"> CÓRDOBA, ARGENTINA</p>
            </p>
          </div>
            <div className="flex justify-center items-center my-5">
              <FaGlobeAmericas className="text-blue-500 text-3xl mr-2"/>
              <p className="md:text-3xl lg:text-medium justify-center items-center tracking-wide font-jost">
                <span className="font-semibold">Work from&nbsp;</span>
                <span className="font-thin">ANYWHERE</span>
              </p>
            </div>

          <div className="flex justify-center mt-8 p-1">
            <a href="http://www.github.com/ginoraviola"
               className="px-2 justify-center items-center cursor-pointer "
               target="_blank"
               rel="noreferrer"
            >
              <FaGithub className="text-slate-200 text-4xl mx-2 transition-all duration-100 hover:scale-125 hover:text-white"/>
            </a>
            <a href="src/components/sections/Header"
               className="px-2 justify-center items-center cursor-pointer "
               target="_blank"
               rel="noreferrer"
            >
              <FaLinkedin className="text-slate-200 text-4xl mx-2 transition-all duration-100 hover:scale-125 hover:text-white"/>
            </a>
          </div>

        </div>
      </div>
    </div>

  </div>
);

export default Header;