import { GitHubIcon } from '../icons/GitHubIcon';
import { LinkedinIcon } from '../icons/LinkedinIcon';
import { MailButton } from './MailButton';
import { SmallLinkButon } from './SmallLinkButton';

export const Contact = () => {
  return (
    <div className="contact-buttons">
      <MailButton />
      <SmallLinkButon
        content={<LinkedinIcon />}
        url="https://www.linkedin.com/in/david-gonzalez-de-la-rosa-274a7118a/"
      />
      <SmallLinkButon content={<GitHubIcon />} url="https://github.com/Tachi6" />
      <SmallLinkButon content="CV" customClass="cv" url="../assets/files/cv-david-gonzalez-de-la-rosa-es.pdf" />
    </div>
  );
};
