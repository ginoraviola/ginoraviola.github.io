import Title from '../Title';

const Contact = () => {
  return (
    <div className="flex h-full items-center min-h-screen">
      <div className="absolute bg-opacity-70 blur-sm h-full w-full"></div>

      <section className="flex flex-col w-full z-10 ">
        <Title title="Contact"/>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium text-roboto mb-2 text-gray-200">Drop me a
            line</h1>
        </div>
        <div className="lg:w-1/2 mx-auto">
          <div className="flex flex-wrap -m-2">
            <form
                  className="flex flex-wrap"
            >
              <div className="p-2 w-full lg:w-1/2 mt-2">
                <div className="relative">
                  <label htmlFor="name"
                         className="leading-7 text-4xl lg:text-sm text-gray-400 uppercase"
                  >
                    Name
                  </label>
                  <input type="text"
                         required
                         id="name"
                         name="name"
                         className="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-3xl lg:text-base outline-none text-gray-700 py-2 mt-6 lg:mt-1 px-3 leading-loose transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full lg:w-1/2 mt-2">
                <div className="relative">
                  <label htmlFor="email"
                         className="leading-7 text-4xl lg:text-sm text-gray-400 uppercase"
                  >
                    Email
                  </label>
                  <input type="email"
                         required
                         id="email"
                         name="email"
                         className="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-3xl lg:text-base outline-none text-gray-700 py-2 mt-6 lg:mt-1 px-3 leading-loose transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full mt-2">
                <div className="relative">
                  <label htmlFor="message"
                         className="leading-7 text-4xl lg:text-sm text-gray-400 uppercase"
                  >Message
                  </label>
                  <textarea id="message"
                            required
                            name="message"
                            className="w-full bg-gray-100 bg-opacity-70 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-60 lg:h-32 text-3xl lg:text-base outline-none text-gray-700 py-2 mt-6 lg:mt-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full mt-10">
                <button
                  className="flex w-full lg:w-2/4 mx-auto justify-center text-center text-white bg-blue-500 border-0 py-3 px-8 focus:outline-none hover:bg-blue-600 rounded text-4xl uppercase lg:text-lg"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-blue-400 text-3xl lg:text-xl text-roboto"
                 target="_blank"
                 rel={'noopener noreferrer'}
                 href="mailto:ginoraviola@gmail.com?subject=CV contact"
              >
                ginoraviola@gmail.com
              </a>
              <p className="leading-normal my-5 text-xl lg:text-base text-roboto text-gray-500">
                San Francisco - Cordoba - Arg.
                <br/>
                  +54 3564 206600
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;