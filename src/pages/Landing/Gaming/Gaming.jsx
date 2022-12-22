import React from "react";
import Button from "../../../components/Button/Button";

import Section from "../../../components/Section/Section";

const items = [
  {
    title: "Purchase $KULT Token",
    btnText: "Buy $KULT",
    text: "Purchase KULT Coin today and become the part of the biggest growing gaming platform.",
  },
  {
    title: "Launch Your Presale",
    btnText: "Start Now",
    text: "Follow the steps mentioned in the guidelines and launch your project today!",
  },
  {
    title: "Complete KYC",
    btnText: "Complete KYC",
    text: "In order to become an official member it is imperative that projects complete their KYC to help us get to know them better.",
  },
  {
    title: "Share your profile with others!",
    text: "Once you have completed all the steps, share your profile with others and encourage them to follow you!",
  },
];

const Gaming = () => {
  return (
    <Section id="landing-gaming">
      <div className="main">
        <div className="left">
          <h2>
            How To Join{" "}
            <span className="text-primary">The Blockchain Gaming</span>{" "}
            Revolution <span className="text-primary">With Us</span>
          </h2>
          <p className="mt-5">
            Kult encourages users to read our comprehensive guide to 
            enable themselves to launch their project with complete guidance 
            and ease.
          </p>
        </div>
        <div className="right">
          {items.map((el, idx) => {
            return (
              <div className="item" key={"gam-item" + idx}>
                <div className="icon">
                  <img src="/assets/imgs/gaming-icon.png" alt="gaming-icon" />
                </div>
                <div className="text">
                  <h5>{el.title}</h5>
                  <p className="mt-4">
                    {el.text}
                  </p>

                  {el.btnText && (
                    <Button className="mt-4" primary>
                      {el.btnText}
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Gaming;
