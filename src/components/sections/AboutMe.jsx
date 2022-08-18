import Title from '../Title';

const AboutMe = () => {
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(1996, 4, 15);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="flex h-full justify-center items-center min-h-screen">
      <div className="absolute bg-opacity-70 blur-sm h-full w-full"></div>

      <section className="flex flex-col z-10">
        <Title title="About me"/>
        <p
          className="text-slate-50 text-md text-center md:text-left md:text-xl font-mono tracking-wider ">
          {calculateAge()} years old.<br/><br/>
          Stubborn programmer.<br/><br/>
          Dedicated, responsible and proactive programmer. I love to face new challenges and learn about new technologies while building complex and scalable web applications.
          <br/><br/>
          Remote work enthusiast, used to work with distributed large teams.<br/>
          <br/>
          <span className="leading-loose">
            Currently finishing my studies in Systems Engineering and building my career as a software
        developer.
        </span>
          <br/><br/>
          <span className="leading-loose">
            Frontend development, frameworks and tools is what I am most interested in. Always learning and trying out new technologies and utilities.
        </span>
          <br/><br/>
          <span className="leading-loose">
        Currently working as a web developer, but I also like to work with mobile development technologies.
        </span>
        </p>
      </section>

    </div>
  );
};

export default AboutMe;