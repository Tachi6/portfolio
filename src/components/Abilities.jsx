import { TechnologyBox } from './TechnologyBox';

export const Abilities = ({ abilities }) => {
  return (
    <div className="abilities">
      <p className="ability-text">FRONT-END WEB DEVELOPER</p>
      <div className="abilities-logos">
        {abilities.map((ability) => (
          <TechnologyBox key={`ability-${ability.type.name}`} logo={ability} />
        ))}
      </div>
    </div>
  );
};
