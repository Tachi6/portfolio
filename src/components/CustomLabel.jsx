export const CustomLabel = ({ label, icon }) => {
  return (
    <h2>
      <span className="project-logo">{icon}</span>
      {label}
    </h2>
  );
};
