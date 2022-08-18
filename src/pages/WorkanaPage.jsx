import {ReactComponent as CodingIsometric} from "./assets/coding-isometric.svg";
import {ReactComponent as CodeTyping} from "./assets/code-typing.svg";
import NavigationHeader from "../components/SectionHeader";

const WorkanaPage = () => {

    return (
        <div className="h-full w-fit bg-gray-800 bg-wkn-pattern py-24 lg:py-0">
            <NavigationHeader title="Experiencia Laboral: Workana" />

            <div className="flex flex-col items-center px-20">
                <div className="flex justify-center mb-10 lg:mb-20 lg:mb-4 appearing">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_Workana.png"
                         className="w-5/6 lg:w-3/6"
                    />
                </div>

                <div className="flex justify-center appearing lg:px-24">
                    <div className="mb-20 shadow-xl rounded-xl bg-gray-800 px-8 py-2 cursor-default floating">
                        <p className="text-gray-300 text-md lg:text-xl italic tracking-widest text-center text-recursive font-light leading-loose">
                            the most important online freelance work platform in Latin America
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-4 grid grid-cols-1 lg:grid-cols-2">
                <p className="text-white font-jost flex flex-col font-normal place-content-center text-xl lg:text-2xl tracking-widest text-center lg:text-right text-roboto leading-loose">
                    <span className="fade-in-bottom my-3">
                        <span className="font-semibold">Frontend</span> Web Developer
                    </span>
                    <span className="fade-in-bottom-2 my-3">Full time</span>
                    <span className="fade-in-bottom-3 my-3 font-semibold">Fully remote position</span>
                </p>

                <div className="w-full lg:w-3/5 fade-in-bottom mt-10 justify-center lg:mt-0 ">
                    <CodingIsometric/>
                </div>
            </div>


                {/*<div className="flex inset-x-0 bottom-10 invisible lg:visible">*/}
                {/*    <a href="#experience"*/}
                {/*       className="text-center flex flex-col animate-pulse"*/}
                {/*    >*/}
                {/*        <i className="fas fa-caret-down text-gray-300 text-xl"></i>*/}
                {/*        <i className="fas fa-chevron-down text-white text-5xl -mt-4"></i>*/}
                {/*    </a>*/}
                {/*</div>*/}
            {/*</div>*/}
            <div className="flex flex-col h-full items-center min-h-screen md:px-12 font-jost">
                <div id="experience"
                     className="lg:m-10 lg:p-16 px-10"
                     data-aos="zoom-out"
                >
                    <h1 className="text-black font-semibold text-3xl lg:text-5xl pt-12 lg:pt-5 mb-16 text-center lg:text-left">Some
                        cool
                        stuff I got the chance to work on</h1>

                    <p className="text-3xl lg:text-4xl text-white text-roboto mb-5 font-semibold">
                        1. Re-building the platform onboarding process
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="flex flex-col">
                            <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5 font-normal">
                                Multi-step form to improve the experience of freelancers joining the platform.
                            </p>
                            <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5 font-normal">
                                This process required constant communication with the backend team in order for them to
                                provide the
                                curated data in a way that makes sense and then wire the views and components with it.

                            </p>
                            <div className="flex flex-col text-center py-4">
                                <img src={require('./assets/wkn/wkn-onboarding-1.png')}
                                     className="w-full lg:w-5/6 rounded-3xl place-self-center py-2"/>
                                <p className="italic text-md text-white p-2 text-recursive">Welcome page</p>
                            </div>
                            <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5 ">
                                Regarding the front-end, we've used a library called Vee-validate for field validations.
                            </p>
                            <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5 ">
                                The steps submit the partial data in order not to miss any information the user has
                                filled in.
                            </p>
                            <div className="flex flex-col text-center py-4">
                                <img src={require("./assets/wkn/wkn-onboarding-2.png")}
                                     className="w-full lg:w-5/6 rounded-3xl place-self-center py-2"
                                />
                                <p className="italic text-md text-white p-2 text-recursive">Personal information
                                    step</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col text-center py-4">
                                <img src={require("./assets/wkn/wkn-onboarding-3.png")}
                                     className="w-full lg:w-5/6 rounded-3xl place-self-center py-2"
                                />
                                <p className="italic text-md text-white p-2 text-recursive">Skills selection step</p>
                            </div>

                            <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5 ">
                                Asking the users to complete as much info as they could about themselves would not only
                                improve
                                their chances to get hired, but also end up with a much more reliable and professional
                                profile.

                            </p>
                            <div className="flex flex-col text-center py-4">
                                <img src={require("./assets/wkn/wkn-onboarding-4.png")} alt="wkn-onboarding-4"
                                     className="w-full lg:w-5/6 rounded-3xl place-self-center py-2"
                                />
                                <p className="italic text-md text-white p-2 text-recursive">Personal details step</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center invisible lg:visible">
                        <a href="#posting-flow"
                           className="text-center flex flex-col animate-pulse"
                        >
                            <i className="fas fa-caret-down text-gray-300 text-xl"></i>
                            <i className="fas fa-chevron-down text-white text-5xl -mt-4"></i>
                        </a>
                    </div>


                </div>
                <div id="posting-flow"
                     className="lg:m-10 lg:p-16 px-10"
                     data-aos="zoom-out"
                >
                    <p className="text-3xl lg:text-4xl text-white text-roboto mb-5 font-semibold">
                        2. Migrate and improve the job posting flux
                    </p>
                    <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5">
                        Similarly, we needed to revamp the whole job posting experience.
                    </p>

                    <div className="flex flex-col text-center py-4 ">
                        <img src={require("./assets/wkn/wkn-pf-1.png")}
                             className="w-full lg:w-5/6 rounded-3xl place-self-center py-2"
                        />
                        <p className="italic text-md text-white p-2 text-recursive">Project definition</p>
                    </div>

                    <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5">
                        We complemented with a fellow frontend developer and after daily meetings of discussing the
                        analysis,
                        design, migration and implementation of the new flow, we ended up with a fully functional and
                        friendly
                        experience to post a project in the platform.
                    </p>
                    <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5">
                        The task included definition of alternative flows, data synchronization and error handling.
                    </p>
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex flex-col text-center py-4">
                            <img src={require("./assets/wkn/wkn-pf-2.png")} alt="wkn-pf-2"
                                 className="w-full lg:w-5/6 rounded-3xl place-self-center py-2"
                            />
                            <p className="italic text-md text-white p-2 text-recursive">Project details</p>
                        </div>
                        <div className="flex flex-col text-center py-4">
                            <img src={require("./assets/wkn/wkn-pf-3.png")} alt="wkn-pf-3"
                                 className="w-full lg:w-5/6 rounded-3xl place-self-center py-2"
                            />
                            <p className="italic text-md text-white p-2 text-recursive">Further info about the
                                project</p>
                        </div>
                    </div>

                    <div className="flex justify-center invisible lg:visible">
                        <a href="#voice-messages"
                           className="text-center flex flex-col animate-pulse"
                        >
                            <i className="fas fa-caret-down text-gray-300 text-xl"></i>
                            <i className="fas fa-chevron-down text-white text-5xl -mt-4"></i>
                        </a>
                    </div>
                </div>
                <div id="voice-messages"
                     className="lg:m-10 lg:p-16 px-10"
                     data-aos="zoom-out"
                >
                    <p className="text-3xl lg:text-4xl text-white text-roboto mb-5 font-semibold">
                        3. Voice messages <i className="fas fa-microphone-alt"></i>
                    </p>
                    <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5">
                        Before diving into this task, I had to research and learn about the dynamics of audio on the web
                        and
                        the logic to be able to use the API that is being supported today.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                        <div className="col-span-2">
                            <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5">
                                I implemented a voice service, declaring all the supported formats and codecs, along
                                with
                                all the helper methods to proper handle the audios sent through the chat.
                            </p>
                            <div className="flex flex-col text-center py-4">
                                <img src={require("./assets/wkn/wkn-voicemessages-1.png")} alt="wkn-voicemessages-1"
                                     className="w-full lg:w-5/6 rounded-3xl place-self-center py-2"
                                />
                                <p className="italic text-md text-white p-2 text-recursive">Button to start
                                    recording</p>
                            </div>
                            <div className="flex flex-col text-center py-4">
                                <img src={require("./assets/wkn/wkn-voicemessages-2.png")} alt="wkn-voicemessages-2"
                                     className="w-full lg:w-5/6 rounded-3xl place-self-center py-2"
                                />
                                <p className="italic text-md text-white p-2 text-recursive">Recording</p>
                            </div>
                        </div>
                        <div className="flex flex-col text-center py-4">
                            <img src={require("./assets/wkn/wkn-voicemessages-3.png")} alt="wkn-voicemessages-3"
                                 className="w-full lg:w-5/6 rounded-3xl place-self-center py-2"
                            />
                            <p className="italic text-md text-white p-2 text-recursive">Different voice message
                                states</p>
                        </div>
                    </div>
                    <div className="flex justify-center invisible lg:visible">
                        <a href="#further"
                           className="text-center flex flex-col animate-pulse"
                        >
                            <i className="fas fa-caret-down text-gray-300 text-xl"></i>
                            <i className="fas fa-chevron-down text-white text-5xl -mt-4"></i>
                        </a>
                    </div>
                </div>
                <div id="further"
                     className="lg:m-10 lg:p-16 px-10"
                     data-aos="zoom-out"
                >
                    <p className="text-3xl lg:text-4xl text-white text-roboto mb-5 font-semibold">
                        4. Many, many more...
                    </p>
                    <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5">
                        Workana has an incredible team of hardworking people who are always searching new ways to
                        improve
                        the platform and at the same time willing to help you at any time.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <div className="fade-in-bottom mt-10 flex justify-center lg:mt-0">
                                <CodeTyping/>
                            </div>
                        </div>
                        <div>
                            <p className="text-3xl lg:text-4xl text-white text-roboto mb-5 font-semibold">
                                Among other tasks:</p>
                            <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5">
                                Unit & integration testing
                            </p>
                            <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5">
                                Push .vue extension files (previously, we used .js)
                            </p>
                            <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5">
                                Implement Axios (previously, we used vue resource)
                            </p>
                            <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5">
                                Bug reports, fixes & monitoring
                            </p>
                            <p className="text-center lg:text-justify text-black text-xl lg:text-2xl leading-8 my-5">
                                etc.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center invisible lg:visible">
                        <a href="#top"
                           className="text-center flex flex-col animate-pulse"
                        >
                            <i className="fas fa-chevron-up text-white text-5xl"></i>
                            <i className="fas fa-caret-up text-gray-300 text-xl -mt-4"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WorkanaPage;