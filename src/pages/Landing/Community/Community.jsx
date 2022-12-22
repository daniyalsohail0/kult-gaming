import React from "react";
import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section/Section";

const Community = () => {
  return (
    <Section id="landing-community">
      <div className="section-container">
        <h2>
          Join Our <span className="text-primary">Commnunity</span>
        </h2>

        <p className="mt-3">
          If you want to stay up-to-date to current or upcoming IGOs and launches on 
          our platform, connect with us today. Our community will always be there 
          to help you out whenever the need arisis. 
        </p>
      </div>

      <div className="cards">
        <GridContainer rowClassName="justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <img src="/assets/imgs/com-telegram.png" alt="telegram" />
              <div className="text">
                <h3>Telegram</h3>
                <div className="small">Join the community</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <img src="/assets/imgs/com-discord.png" alt="discord" />
              <div className="text">
                <h3>Discord</h3>
                <div className="small">Join the community</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <img src="/assets/imgs/com-twitter.png" alt="twitter" />
              <div className="text">
                <h3>Twitter</h3>
                <div className="small">Join the community</div>
              </div>
            </div>
          </div>
        </GridContainer>
      </div>
    </Section>
  );
};

export default Community;
