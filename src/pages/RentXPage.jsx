import {ReactComponent as RentXAnimation} from "./assets/rentx/rentx.svg";
import {ReactComponent as HousesAnimation} from "./assets/rentx/houses-animation.svg";
import {ReactComponent as Wave} from "./assets/rentx/wave.svg";
import {ReactComponent as Divider} from "./assets/rentx/divider.svg";
import {ReactComponent as WaveUp} from "./assets/rentx/wave-up.svg";
import {ReactComponent as RentXLogo} from "./assets/rentx/logo.svg";
import {useNavigate} from "react-router-dom";
import ImgGallery from "../components/ImgGallery";
import Title from "../components/Title";
import {FaChevronRight} from "react-icons/fa";
import AnimatedBlob from "../components/AnimatedBlob";
import NavigationHeader from "../components/SectionHeader";

const RentXPage = () => {
    const navigate = useNavigate();
    const overviewGallery = [
        {
            title: 'RentX - Login page',
            img: require('./assets/rentx/login.png'),
        },
        {
            title: 'RentX - Landing page',
            img: require('./assets/rentx/landing-1.png'),
        },
        {
            title: 'RentX - Landing page 2',
            img: require('./assets/rentx/landing-2.png'),
        }
    ];
    const showcaseGallery = [
        {
            title: 'RentX - Properties page',
            img: require('./assets/rentx/properties.png'),
        },
        {
            title: 'RentX - Property search page',
            img: require('./assets/rentx/properties-search.png'),
        },
        {
            title: 'RentX - Contracts page',
            img: require('./assets/rentx/contracts.png'),
        },
        {
            title: 'RentX - Contract page',
            img: require('./assets/rentx/contract.png'),
        },
        {
            title: 'RentX - Claims page',
            img: require('./assets/rentx/claims.png'),
        },
    ];
    const mobileGallery = [
        {
            title: 'RentX Mobile / Responsive - Landing page',
            img: require('./assets/rentx/landing-mobile.png'),
        },
        {
            title: 'RentX Mobile / Responsive - Contracts page',
            img: require('./assets/rentx/contracts-mobile.png'),
        },
        {
            title: 'RentX Mobile / Responsive - Contract page',
            img: require('./assets/rentx/contract-mobile.png'),
        },
        {
            title: 'RentX Mobile / Responsive - Claims page',
            img: require('./assets/rentx/claims-mobile.png'),
        },
    ];

    return (
        <div className="h-full w-fit bg-rentx-pattern lg:py-10">
            <NavigationHeader title="Experiencia personal: RentX" />
            <div className="flex relative flex-col h-screen items-center min-h-screen px-4 md:px-40 py-12">
                <div className="animate-scale-up md:animate-profile-pic md:-translate-x-1/4 scale-100">
                    <AnimatedBlob/>
                </div>
                <div className="flex flex-col text-center py-16 lg:py-5 px-10">
                    <span
                        className="text-recursive text-xl lg:text-xl text-gray-600 font-poppins">[March 2021 ~ Present]</span>
                    <RentXLogo className="w-full h-36"/>

                    <span className="text-recursive text-2xl mt-2 lg:text-3xl text-gray-700 font-jost">Academic - University Final Project to obtain my Systems Engineer degree</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 my-12">
                    <div className="flex w-full lg:w-3/4 justify-center items-center justify-items-center z-20">
                        <RentXAnimation/>
                    </div>
                    <div className="flex flex-col items-center justify-center text-gray-900 invisible lg:visible">
                        <p
                            className="font-normal py-6 lg:py-0 text-lg lg:text-2xl tracking-wide text-center leading-loose">
                            RentX offers a unified and secure communication portal to facilitate all the formalities
                            related to your rental contract.
                        </p>
                        <p
                            className="font-normal py-6 text-lg lg:text-2xl tracking-wide text-center leading-loose">
                            Using the MERN Stack, the application is built on the backend with a NodeJS server and a
                            MongoDB database. While the Frontend is built using React and React Native for the hybrid
                            mobile experience.
                        </p>
                    </div>
                </div>

                <div className="absolute w-full bottom-10 opacity-40 invisible lg:visible">
                    <Divider />
                </div>
            </div>
            <div className="flex flex-col h-full py-36 px-2 lg:px-20 lg:py-0">

                <h2 className="font-semibold text-center md:text-start text-4xl lg:text-5xl drop-shadow-lg text-sky-900 font-jost mb-4">Overview</h2>
                <div className="font-sans text-center md:text-start">
                    <span className="text-xl">The platform consists in providing a centralised portal for: &nbsp;
                        <b className="text-xl">Real estate agencies, Property owners and Tenants</b>
                        </span>
                </div>
                <div className="flex flex-col items-center justify-center text-gray-900 visible lg:invisible">
                    <p
                        className="font-normal py-6 lg:py-0 text-lg lg:text-2xl tracking-wide text-center leading-loose">
                        RentX offers a unified and secure communication portal to facilitate all the formalities
                        related to your rental contract.
                    </p>
                    <p
                        className="font-normal py-6 text-lg lg:text-2xl tracking-wide text-center leading-loose">
                        Using the MERN Stack, the application is built on the backend with a NodeJS server and a
                        MongoDB database. While the Frontend is built using React and React Native for the hybrid
                        mobile experience.
                    </p>
                </div>
                <ImgGallery images={overviewGallery}/>

                <div className="font-sans text-center my-5">
                    <span className="text-xl">Among the main features: &nbsp;
                        <ul className="text-xl my-3 leading-loose">
                            <li>
                                <span className="font-semibold text-xl">Contracts</span>
                            </li>
                            <li>
                                <span className="font-semibold text-xl">Rent payments</span>
                            </li>
                            <li>
                                <span className="font-semibold text-xl">Search and manage properties</span>
                            </li>
                            <li>
                                <span className="font-semibold text-xl">Claims management</span>
                            </li>
                        </ul>
                        </span>
                </div>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-b from-transparent to-sky-800 px-10 lg:px-20 h-screen ">
                <div className="flex w-full lg:w-3/4 justify-center items-center justify-items-center hover:scale-105 transition-all duration-500">
                    <HousesAnimation />
                </div>
                <div className="lg:flex items-center justify-center text-white md:px-24 z-10">
                    <p
                        className="font-normal lg:py-6 text-lg lg:text-2xl tracking-wide text-center leading-loose">
                        Web platform + Mobile app with P2P business model whose main purpose is to facilitate and streamline the management of transactions, communication and documentation involved in the process of renting real estate of all types.
                    </p>
                </div>

                <div className="absolute w-full bottom-0 ">
                    <Wave />
                </div>
            </div>

            <div className="flex flex-col relative h-full min-h-screen py-36 px-2 lg:px-20 lg:py-10 bg-gradient-to-b from-slate-700 to-transparent">

                <h2 className="font-semibold text-center md:text-start text-4xl lg:text-5xl drop-shadow-lg text-white font-jost mb-4">Showcase</h2>
                <ImgGallery images={showcaseGallery}/>

            </div>

            <div className="flex flex-col h-screen px-2 lg:px-20 lg:py-0">

                <h2 className="font-semibold text-center md:text-start text-4xl lg:text-5xl drop-shadow-lg text-sky-900 font-jost mb-4">React native mobile app</h2>
                <ImgGallery images={mobileGallery}/>

            </div>

        </div>

    )
}

export default RentXPage;