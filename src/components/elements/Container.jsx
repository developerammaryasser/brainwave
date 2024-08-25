const Container = ({ className, children }) => {
  return <div className={`container py-24 ${className}`}>{children}</div>;
};
export default Container;
