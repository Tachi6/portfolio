export const TextButton = ({ text, icon, customClass = '' }) => {
  return (
    <button
      className={customClass}
      onClick={() => {
        navigator.clipboard.writeText('dav6wat@gmail.com');
      }}
    >
      {text}
      {icon}
    </button>
  );
};
