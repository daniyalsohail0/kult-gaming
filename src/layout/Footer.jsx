import React from "react";
import GridContainer from "../components/GridContainer";

import Section from "../components/Section";

const Footer = () => {
  return (
    <Section id="footer">
      <GridContainer rowClassName="main-row">
        <div className="col-xxl-3 col-lg-4">
          <img className="logo" src="/assets/imgs/logo.png" alt="logo" />
          <p className="mt-4 small">
            KULT gaming is a one stop shop for all P2E games. Create, Launch, and
            market your projects in a whole new dimension of gaming!
          </p>
        </div>
        <div className="col-xxl-6 col-lg-8">
          <div className="row">
            <div className="col-lg-5">
              <h6 className="text-primary">Categories</h6>

              <div className="mt-4">
                <div className="links">
                  <a href="#0" className="link">
                    What is ICO
                  </a>
                  <a href="#0" className="link">
                    Token
                  </a>
                  <a href="#0" className="link">
                    Road Map
                  </a>
                  <a href="#0" className="link">
                    Advisor
                  </a>
                  <a href="#0" className="link">
                    Payments
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <h6 className="text-primary">Quick Links</h6>

              <div className="mt-4">
                <div className="links">
                  <div className="row">
                    <div className="col-lg-6">
                      <a href="#0" className="link">
                        Home
                      </a>
                      <a href="#0" className="link">
                        Igo
                      </a>
                      <a href="#0" className="link">
                        Games
                      </a>
                      <a href="#0" className="link">
                        Party
                      </a>
                      <a href="#0" className="link">
                        Guilds
                      </a>
                    </div>
                    <div className="col-lg-6">
                      <a href="#0" className="link">
                        NFT
                      </a>
                      <a href="#0" className="link">
                        Staking
                      </a>
                      <a href="#0" className="link">
                        Earn
                      </a>
                      <a href="#0" className="link">
                        Insight
                      </a>
                      <a href="#0" className="link">
                        Connect Wallet
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-12">
          <div className="newsletter-wrap">
            <h5 className="text-primary">Newsletter</h5>

            <p className="my-4 small">
              Subscribe to our newsletter to stay up-to-date 
              for the latest game updates.
            </p>

            <div className="newsletter-input">
              <input type="text" placeholder="E-Mail Address" />
              <img src="/assets/imgs/newsletter-arrow.png" alt="newsletter" />
            </div>
          </div>
        </div>
      </GridContainer>
      <div className="copyright">
        <div className="copyright-main">
          <div className="left">Kult Copyright 2022 All Rights Reserved.</div>
          <div className="right">
            <a href="#0">Privacy Policy</a>
            <a href="#0">Terms & Condition</a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
