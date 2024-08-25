import Container from "../elements/Container";

const Section = ({
  classNameContainer,
  classNameContent,
  pText,
  h2Text,
  classNameH2,
  classNameP,
  id,
  children,
}) => {
  return (
    <section className="relative z-3" id={id}>
      <Container className={`space-y-16 ${classNameContainer}`}>
        <div
          className={`flex flex-col justify-center items-center gap-y-6 ${classNameContent}`}
        >
          <h2 className={`h2 text-center ${classNameH2}`}>{h2Text}</h2>
          {pText && (
            <p className={`body-2 text-center text-n-4 ${classNameP}`}>
              {pText}
            </p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
};
export default Section;
