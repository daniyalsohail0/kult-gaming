import React from "react";
import Button from "../../../components/Button/Button";
import GridContainer from "../../../components/GridContainer";

import Section from "../../../components/Section/Section";

const Economy = () => {
  return (
    <Section id="landing-economy">
      <div className="section-container">
        <h2>
          Be Part Of The{" "}
          <span className="text-primary">Biggest Gaming Platform</span>
        </h2>
        <p className="mt-4">
          We have designed Kult to enable gaming projects
          maximize their potentials. We offer a wide array of features
          to grow your project exponentially.
        </p>
      </div>

      <div className="mt-5">
        <GridContainer className="cards">
          <div className="col-lg-5">
            <div className="card one">
              <h5>NFT Marketplace</h5>

              <div className="sundi-1 mt-5">
                <img src="/assets/imgs/sundi-1.png" alt="sundi" />
              </div>

              <h3 className="text-primary mt-3">
                Fastest NFT Marketplace
                Connect, Create & Publish
              </h3>
            </div>
          </div>
          <div className="col-lg-7 d-flex flex-column justify-content-between">
            <div className="card two">
              <div className="text">
                <h5 className="mb-5">Launchpad</h5>

                <h3 className="text-primary mt-3">
                  Launch your project with comprehensive guidance.
                </h3>
              </div>

              <div className="img">
                <img src="/assets/imgs/sundi-2.png" alt="sundi-2" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="card three mt-3">
                  <div className="text">
                    <strong>In-Game Assets</strong>

                    <h4 className="text-primary my-4">
                      List your In-Game Assets on your profile.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card four mt-3">
                  <div className="text">
                    <strong>Personalized Project Profiles</strong>

                    <h4 className="text-primary my-4">
                      Build your guild with minimum effort.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridContainer>

        <div className="d-flex justify-content-center mt-5">
          <Button primary>Powerful Features</Button>
        </div>
      </div>
    </Section>
  );
};

export default Economy;
