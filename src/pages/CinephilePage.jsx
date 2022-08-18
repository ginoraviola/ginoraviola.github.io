import { useNavigate } from 'react-router-dom';
import {ReactComponent as CinephileAnimation } from './assets/cinephile/cinephile-animation.svg';
import NavigationHeader from "../components/SectionHeader";

const CinephilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-fit bg-gray-800 bg-pattern-2 py-32">
      <NavigationHeader title="Experiencia personal: Cinephile" />

      <div className="flex flex-col h-full items-center min-h-screen px-4 md:px-28">

        <div className="flex flex-col text-center py-16 px-10">
      <span
        className="text-recursive text-3xl lg:text-xl text-gray-600 font-poppins">[March ~ July - 2020]</span>
          <p
            className="text-gray-800 text-9xl lg:text-8xl font-semibold text-roboto p-2 tracking-wider font-jost uppercase ">Cinephile:</p>
          <span className="text-recursive text-5xl mt-2 lg:text-3xl ml-40 text-gray-600 font-jost">movies app concept</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-20 lg: py-6 lg:px-40">
          <div className="fade-in-bottom mt-2 flex justify-center lg:-mt-12">
            <CinephileAnimation />

          </div>
          <div className="flex flex-col items-center text-gray-800">
            <p
              className="font-normal py-6 lg:py-0 text-4xl lg:text-2xl tracking-wider text-center font-poppins leading-loose">
              Coming from a JavaScript related background, and willing to build a mobile app, it
              kinda
              made sense to me to dive into mobile development using react-native.
            </p>
            <p
              className="font-normal py-6 text-4xl lg:text-2xl tracking-wider text-center text-roboto leading-loose">
              Bootstrapped with react native CLI, using TypeScript and Axios for the http client.
            </p>

          </div>

        </div>

        <div className="flex inset-x-0 bottom-10 invisible lg:visible">
          <a href="#description"
             className="text-center flex flex-col animate-pulse"
          >
            <i className="fas fa-caret-down text-gray-600 text-xl"></i>
            <i className="fas fa-chevron-down text-black text-5xl -mt-4"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-col h-full items-center min-h-screen py-36 lg:py-0">
        <div className="m-10 p-16 py-28 font-poppins"
             id="description"
             data-aos="zoom-out"
        >
          <p
            className="font-normal lg:py-6 text-3xl text-gray-800 tracking-tight text-center text-roboto">
            The movies information was provided by consuming
            <a href="https://www.themoviedb.org/documentation/api"
               target="_blank"
               className="text-blue-800 font-medium"
               rel="noopener noreferrer"
            >&nbsp;
              the TMDB (The Movie DataBase) API
              <i className="fas fa-external-link-alt text-xl"></i>
            </a>
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:px-40 py-20">
            <div className="lg:col-span-2 flex flex-col justify-evenly">
              <p
                className="font-normal py-2 lg:py-6 text-4xl lg:text-3xl text-gray-800 text-center lg:text-left text-roboto">
                The animations were thought and designed as I was learning a lot from the libraries
                <a href="https://github.com/software-mansion/react-native-reanimated"
                   target="_blank"
                   className="text-blue-800 font-medium"
                   rel="noopener noreferrer"
                >&nbsp;
                  react-native reanimated
                  <i className="fas fa-external-link-alt text-xl"></i>
                </a>&nbsp;
                and
                <a href="https://github.com/wcandillon/react-native-redash"
                   target="_blank"
                   className="text-blue-800 font-medium"
                   rel="noopener noreferrer"
                >&nbsp;
                  react-native redash
                  <i className="fas fa-external-link-alt text-xl"></i>
                </a>
              </p>
              <p
                className="font-normal py-6 text-4xl lg:text-3xl text-gray-800 tracking-wider text-center lg:text-left text-roboto leading-loose">
                After many re-builds and iterations, I ended up with, to my consideration, a nice
                looking UI and smooth animations.
              </p>
            </div>
            <div>
              <video muted autoPlay className="rounded w-full lg:w-10/12">
                <source src={require('./assets/Untitled.mov')} type="video/mp4"/>
              </video>
            </div>
          </div>

        </div>

        <div className="m-10 p-16" data-aos="zoom-out">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:px-40 py-20">
            <div>
              <video muted autoPlay loop className="w-full lg:w-10/12">
                <source src={require('./assets/cinephile/cinephile2.mp4')} type="video/mp4"/>
              </video>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-evenly">
              <p
                className="font-normal py-2 lg:py-6 text-4xl lg:text-3xl text-gray-800 text-center lg:text-left tracking-wider text-roboto leading-loose">
                The libraries mentioned above allows you to write animations in JS but they run in
                the
                UI thread, which translates to better performance. I also used "LottieFiles" for
                some
                pre-made animations.
              </p>
            </div>

          </div>
        </div>
        <div className="m-10 p-16" data-aos="zoom-out">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:px-40 py-20">
            <div className="lg:col-span-2 flex flex-col justify-evenly">
              <p
                className="font-normal py-2 lg:py-6 text-4xl lg:text-3xl text-gray-800 text-center lg:text-left tracking-wider text-roboto leading-loose">
                The app idea consisted in providing a nice looking movies browser, where you could
                search for specific titles or just see what's trending and mark as favorite the
                films
                you liked.
              </p>
            </div>
            <div>
              <video muted autoPlay loop className="w-full lg:w-10/12">
                <source src={require('./assets/cinephile/cinephile3.mp4')} type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
        <div className="m-10 p-16" data-aos="zoom-out">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:px-40 py-20">
            <div>
              <video muted autoPlay loop className="w-full lg:w-10/12">
                <source src={require('./assets/cinephile/cinephile4.mp4')} type="video/mp4"/>
              </video>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-evenly">
              <p
                className="font-normal py-2 lg:py-6 text-4xl lg:text-3xl text-gray-800 text-center lg:text-left tracking-wider text-roboto leading-loose">

                Although the application was not finished or published (yet) due to lack of time, I
                had
                fun and learned a lot about all the magic that goes on behind the scenes in making
                the
                animations.
              </p>
            </div>

          </div>
          <div className="flex justify-center invisible lg:visible">
            <a href="#top"
               className="text-center flex flex-col animate-pulse"
            >
              <i className="fas fa-chevron-up text-black text-5xl"></i>
              <i className="fas fa-caret-up text-gray-600 text-xl -mt-4"></i>

            </a>
          </div>
        </div>


      </div>
    </div>
    );
};

export default CinephilePage;