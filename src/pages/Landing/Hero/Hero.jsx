import React from "react";

import Section from "../../../components/Section/Section";
import GridContainer from "../../../components/GridContainer";
import Button from "../../../components/Button/Button";

const Hero = () => {
  return (
    <Section id="landing-hero">
      <GridContainer>
        <div className="col-lg-6">
          <h6 className="text-primary">One Stop Shop For All Gamers</h6>
          <h2 className="mt-4">
            Connect, Create, & Launch{" "}
            <u className="text-primary underlined">Today!</u>
          </h2>
          <p className="mt-5">
            KULT is a dedicated gaming launchpad & IGO platform. We bring to you a platform projects can use to maximize their project's scope.
          </p>

          <div className="d-flex align-items-center gap-10 flex-sm-row flex-column">
            <Button primary className="mt-5">
              Explore Now
            </Button>
            <Button className="mt-5">
              <img src="/assets/imgs/play.png" alt="play" /> Watch Now
            </Button>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="right">
            <img src="/assets/imgs/hero-right.png" alt="right" />
          </div>
        </div>

        <div className="social-share">
          <img src="/assets/imgs/algorand.png" width={150} alt="algorand.png" />
          <img src="/assets/imgs/pera.png" width={150} alt="binance.png" />
          <img src="/assets/imgs/pyteal.png" width={150} alt="vintage" />
          <img src="/assets/imgs/unity.png" width={150} alt="vintage" />
          <img src="/assets/imgs/unreal.png" width={150} alt="vintage" />
          <img src="/assets/imgs/BlockAudit.png" width={150} alt="vintage" />
        </div>
      </GridContainer>
    </Section>
  );
};

export default Hero;
