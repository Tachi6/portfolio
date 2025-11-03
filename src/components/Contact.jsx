import { GitHubIcon } from '../icons/GitHubIcon';
import { LinkedinIcon } from '../icons/LinkedinIcon';
import { SmallButon } from './SmallButton';

export const Contact = () => {
  return (
    <div className="contact-buttons">
      <SmallButon text="dav6wat@gmail.com" customClass="mail" />
      <div className="contact-buttons">
        <SmallButon icon={<LinkedinIcon />} url="https://www.linkedin.com/in/david-gonzalez-de-la-rosa-274a7118a/" />
        <SmallButon icon={<GitHubIcon />} url="https://github.com/Tachi6" />
        <SmallButon text="CV" customClass="cv" url="../assets/main-photo.jpg" />
      </div>
    </div>
  );
};
