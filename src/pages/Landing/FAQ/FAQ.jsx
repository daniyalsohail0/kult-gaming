import React from "react";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section/Section";
import FaqItem from "./FaqItem";

const items = [
  {
    question: "How can one join Seedify IGOs and INOs?",
    answer:
      "Follow the steps mentioned above in the gaming section for a deeper insight, or read our documentation on joining IGOs and INOs.",
  },
  {
    question: "What does IGO and INO mean?",
    answer:
      "IGO and INO mean Initial Game Offering and Initial Node Offering.",
  },
  {
    question: "How to get a project verified?",
    answer:
      "Follow the steps mentioned in the KYC documentation or contact one of our consultants for guidance.",
  },
];

const FAQ = () => {
  return (
    <Section id="faq">
      <div className="main">
        <GridContainer>
          <div className="col-lg-6">
            <div className="left">
              <h2>
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="mt-5">
                We understand that for users who are new to our platform may have
                difficulties in getting used to it. Therefore, we encourage users to 
                read our FAQs and documentation.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            {items.map((el, idx) => {
              return <FaqItem question={el.question} answer={el.answer} />;
            })}
          </div>
        </GridContainer>
      </div>
    </Section>
  );
};

export default FAQ;
