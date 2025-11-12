import { TechnologyBox } from './TechnologyBox';

export const Abilities = ({ abilities }) => {
  return (
    <div className="abilities">
      <h4>FRONT-END WEB DEVELOPER</h4>
      <div className="abilities-logos">
        {abilities.map((ability) => (
          <TechnologyBox key={`ability-${ability.name}`} logo={ability.logo} />
        ))}
      </div>
    </div>
  );
};
