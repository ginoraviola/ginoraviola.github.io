import Title from '../Title';
import ExperienceItem from '../ExperienceItem';
import {ReactComponent as RentX} from '../../static/rentx.svg';
import { useEffect, useState } from 'react';

const Portfolio = () => {

  let [items, setItems] = useState([
    {
      title: 'Workana',
      subtitle: 'Workana is a platform for freelancers to find and hire for work. It is a web application that allows users to create and manage their own profile, post jobs, and find jobs that match their skills and experience.',
      imageSrc: 'https://wkncdn.com/newx/assets/build/img/logos-v3/m_logo.16736117c.png',
      period: '[2019 ~ July 2022]',
      cta: {
        text: 'Learn More',
        url: 'portfolio/workana'
      }
    },
    {
      title: 'AnimaEdu',
      subtitle: 'E-commerce - Mindfulness courses',
      imageSrc: 'https://animaedu.com/img/logo.svg',
      period: '[Apr 2018 ~ Aug 2018]',
    },
    {
      title: 'Evento Original',
      subtitle: 'Spanish e-commerce',
      period: '[Oct 2018 ~ Dec 2018]',
    },
    {
      title: 'Bitflow Labs',
      subtitle: 'Medical care management website',
      period: '[Oct 2018 ~ Dec 2018]'
    },
    {
      title: 'Cinephile',
      subtitle: 'Movies app concept - browse through the latest movies trending now.',
      period: '[Mar 2020 ~ Jul 2020]',
      cta: {
        text: 'Learn More',
        url: '/portfolio/cinephile'
      }
    },
    {
      title: 'Cepar',
      subtitle: 'Medical care management web system - Template implementation and launching of administrative system for medical personnel.',
      period: '[Oct 2020 ~ Dec 2020]',
      imageSrc: 'http://cepar.com.ar/wp-content/uploads/2016/10/logo_cepar.png',
      url: 'http://cepar.com.ar/',
      cta: {
        text: 'Visit site',
      }
    },
    {
      title: 'RentX',
      subtitle: 'RentX is the final project of my career to become a Systems Engineer.',
      period: '[2021 ~ Present]',
      icon: <RentX className="absolute h-28 w-28 object-contain right-10 opacity-70"/>,
      cta: {
        text: 'Learn more',
        url: 'portfolio/rentx'
      }
    }
  ]);

    const sorted = items.sort((a, b) => {
      if (a.period.toLowerCase().includes('present')) {
        return -1;
      }
      if (b.period.toLowerCase().includes('present')) {
        return 1;
      }
      if (a.cta && !b.cta) {
        return -1;
      }
      if (b.cta && !a.cta) {
        return 1;
      }
    });

  return (
    <div className="flex h-full items-center min-h-screen">
      <div className="absolute bg-opacity-70 blur-sm h-full w-full"></div>

      <section className="flex flex-col w-full z-10 ">
        <Title title="Portfolio"/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2 lg:flex-row">
          {sorted.map((item, index) => (
            <ExperienceItem key={index} {...item} />
          ))}

        </div>
      </section>

    </div>
  )
}

export default Portfolio;