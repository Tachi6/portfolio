import mainPhoto from '../assets/main-photo.jpg';
import { Project } from '../components/Project';
import { TechnologyBox } from '../components/TechnologyBox';
import { TextButton } from '../components/TextButton';
import { CopyIcon } from '../icons/CopyIcon';
import { CssLogo } from '../icons/CssLogo';
import { DownloadIcon } from '../icons/DownloadIcon';
import { GitHubIcon } from '../icons/GitHubIcon';
import { HtmlLogo } from '../icons/HtmlLogo';
import { JavaScriptLogo } from '../icons/JavaScriptLogo';
import { LinkedinIcon } from '../icons/LinkedinIcon';
import { ReactLogo } from '../icons/ReactLogo';
import { TypeScriptLogo } from '../icons/TypeScriptLogo';

export const HomeView = () => {
  return (
    <section className="page-container home">
      <div className="top-content">
        <div className="main-info">
          <h1>
            David Gonzalez <span className="break-line">de la Rosa</span>
          </h1>
          <div className="abilities">
            <p className="ability-text">FRONT-END WEB DEVELOPER</p>
            <div className="abilities-logos">
              <TechnologyBox logo={<HtmlLogo height={24} />} />
              <TechnologyBox logo={<CssLogo height={24} />} />
              <TechnologyBox logo={<JavaScriptLogo height={24} />} />
              <TechnologyBox logo={<TypeScriptLogo height={24} />} />
              <TechnologyBox logo={<ReactLogo height={24} />} />
            </div>
          </div>
          <p className="description-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ducimus voluptatum, voluptatem, eius,
            possimus voluptates quae odio earum nostrum tempore delectus quia vitae libero at est perferendis quod ullam
            temporibus?
          </p>
          <div className="contact-buttons">
            <TextButton text="dav6wat@gmail.com" customClass="mail" />
            <div className="contact-buttons">
              <TextButton icon={<LinkedinIcon />} />
              <TextButton icon={<GitHubIcon />} />
              <TextButton text="CV" customClass="cv" />
            </div>
          </div>
          {/* <p className="ability-text">FLUTTER APP DEVELOPER</p> */}
        </div>
        <img src={mainPhoto} alt="main-photo" className="main-photo" />
      </div>
      <div className="bottom-content">
        <h2>Proyectos</h2>
        <Project />
      </div>
    </section>
  );
};
