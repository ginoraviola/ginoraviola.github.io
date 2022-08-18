// import '../App.css';
import Header from '../components/sections/Header';
import AboutMe from '../components/sections/AboutMe';
import Experience from '../components/sections/Experience';
import Technologies from '../components/sections/Technologies';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';


const MainPage = () => {
  return (
    <>
      <Header/>
      <div className="container h-full min-w-full px-4 md:px-28 bg-gray-900 bg-pattern">
        <AboutMe/>
        <Experience/>
        <Technologies />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default MainPage;
