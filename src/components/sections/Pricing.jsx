import Button from "../elements/Button";
import Card from "../elements/Card";
import Menu from "../elements/Menu";
import Section from "../layouts/Section";

const Pricing = () => {
  return (
    <Section h2Text={`Pay once, use forever`} id={`pricing`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card
          title={`Basic`}
          text={`AI chatbot, personalized recommendations`}
          price={`0`}
          titleColor={`text-color-2`}
          list={[
            `An AI chatbot that can understand your queries`,
            `Personalized recommendations based on your preferences`,
            `Ability to explore the app and its features without any cost`,
          ]}
        />
        <Card
          title={`Premium`}
          text={`Advanced AI chatbot, priority support, analytics dashboard`}
          price={`9.99`}
          titleColor={`text-color-1`}
          list={[
            `An advanced AI chatbot that can understand complex queries`,
            `An analytics dashboard to track your conversations`,
            `Priority support to solve issues quickly`,
          ]}
        />
        <Card
          title={`Enterprise`}
          text={`Custom AI chatbot, advanced analytics, dedicated account`}
          titleColor={`text-color-3`}
          list={[
            `An AI chatbot that can understand your queries`,
            `Personalized recommendations based on your preferences`,
            `Ability to explore the app and its features without any cost`,
          ]}
          buttonText="Contact Us"
          buttonWhite={false}
        />
      </div>
    </Section>
  );
};
export default Pricing;
