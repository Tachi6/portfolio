export const CustomLabel = ({ label, icon, logoStyle = '' }) => {
  return (
    <h2>
      <span className={`project-logo ${logoStyle}`}>{icon}</span>
      {label}
    </h2>
  );
};
