import { DoubleQuoteIcon } from '../icons/DoubleQuoteIcon';

export const TextBox = ({ label, content }) => {
  return (
    <article className="text-box">
      <p className="text-box-label">
        <DoubleQuoteIcon />
        {label}
      </p>
      <p>{content}</p>
    </article>
  );
};
