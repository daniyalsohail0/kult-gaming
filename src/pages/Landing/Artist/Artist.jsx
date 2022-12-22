import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../../components/Button/Button";

import Section from "../../../components/Section/Section";

const Artist = () => {
  return (
    <Section id="landing-artist">
      <div className="section-container">
        <h2>
          Top Live <span className="text-primary">Artist</span>
        </h2>
        <p className="mt-4">
          Check out the Top Live Artists of the week. With the right amount of 
          care and garnish, you can be featured on our front page as well!
        </p>
      </div>

      <div className="cards">
        <div className="sliders">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            breakpoints={{
              1100: { slidesPerView: 3 },
              800: { slidesPerView: 2 },
            }}
            spaceBetween={28}
          >
            {new Array(7).fill(0).map((el, idx) => {
              return (
                <SwiperSlide>
                  <div className="card">
                    <div className="img">
                      <img
                        className="cover"
                        src="/assets/imgs/artist-cover-img.png"
                        alt="artist-cover"
                      />
                      <div className="title">The Grafiti Maniac</div>
                      <img
                        src="/assets/imgs/artist-img.png"
                        className="profile"
                        alt="artist"
                      />
                    </div>
                    <div className="text d-flex justify-content-between align-items-center">
                      <h5>Created By Zarbon</h5>

                      <div className="small">
                        <span className="text-primary">123k</span> Artwork
                      </div>
                    </div>

                    <Button primary>Follow Now</Button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default Artist;
