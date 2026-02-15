export default function Button({ children, textOnly, classes, ...rest }) {
  const classNames = textOnly ? 'text-button' : 'button';
  return (
    <button className={classNames + ` ${classes}`} {...rest}>
      {children}
    </button>
  );
}
