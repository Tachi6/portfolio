import { TextBox } from '../components/TextBox';
import { aboutMeData } from '../data/AboutMeData.jsx';

export const AboutMeView = () => {
  return (
    <section className="page-container about-me-container">
      <h2>Conóceme más</h2>
      {aboutMeData.map((data) => (
        <TextBox key={data.label} label={data.label} content={data.content} />
      ))}
    </section>
  );
};
