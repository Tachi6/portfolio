import { Abilities } from '../components/Abilities';
import { Contact } from '../components/Contact';
import { Projects } from '../components/Projects';
import { Data } from '../data/data';
import { technologies } from '../data/technologies';
import mainPhoto from '../assets/main-photo.jpg';

export const HomeView = () => {
  return (
    <section className="page-container home">
      <div className="top-content">
        <div className="main-info">
          <h1>
            David Gonzalez <span className="break-line">de la Rosa</span>
          </h1>
          <Abilities
            abilities={[technologies.html, technologies.css, technologies.js, technologies.ts, technologies.react]}
          />
          <p className="description-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ducimus voluptatum, voluptatem, eius,
            possimus voluptates quae odio earum nostrum tempore delectus quia vitae libero at est perferendis quod ullam
            temporibus?
          </p>
          <Contact />
        </div>
        <img src={mainPhoto} alt="main-photo" className="main-photo" />
      </div>
      <Projects label="Proyectos destacados" projects={[Data.cocktails, Data.dragonBall]} />
    </section>
  );
};
