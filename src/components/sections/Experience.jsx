import ExperienceItem from '../ExperienceItem';
import Title from '../Title';

const Experience = () => (

  <div className="flex h-full items-center min-h-screen">
    <div className="absolute bg-opacity-70 blur-sm h-full w-full"></div>

    <section className="flex flex-col w-full z-10 ">
      <Title title="Experience"/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2 lg:flex-row">
        <ExperienceItem
          period="[2018 - Present]"
          imageSrc="https://rooftop.dev/images/big-logo-triangle.webp"
          url="https://rooftop.dev"
          title="Rooftop DevLabs"
          subtitle="the most talented devs community"/>
        <ExperienceItem
          period="[2019 - July 2022]"
          imageSrc="https://wkncdn.com/newx/assets/build/img/logos-v3/m_logo.16736117c.png"
          title="Workana"
          url="https://workana.com"
          subtitle="the most important freelancer platform in latin america"/>
      </div>
    </section>

  </div>
);

export default Experience;