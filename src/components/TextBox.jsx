import { DoubleQuoteIcon } from '../icons/DoubleQuoteIcon';

export const TextBox = ({ label, content }) => {
  return (
    <article className="text-box">
      <p className="text-box-label">
        <span>
          <DoubleQuoteIcon />
        </span>
        {label}
      </p>
      <p>{content}</p>
    </article>
  );
};
