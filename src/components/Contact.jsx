import { GitHubLogo } from '../logos/GitHubLogo';
import { LinkedinLogo } from '../logos/LinkedinLogo';
import { MailButton } from './MailButton';
import { SmallLinkButton } from './SmallLinkButton';

export const Contact = () => {
  return (
    <div className="contact-buttons">
      <MailButton />
      <SmallLinkButton
        content={<LinkedinLogo />}
        url="https://www.linkedin.com/in/david-gonzalez-de-la-rosa-274a7118a/"
      />
      <SmallLinkButton content={<GitHubLogo />} url="https://github.com/Tachi6" />
      <SmallLinkButton content={<span>CV</span>} url="../assets/files/cv-david-gonzalez-de-la-rosa-es.pdf" />
    </div>
  );
};
