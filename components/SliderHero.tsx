import React from "react";
import Image from "next/image";
function SliderHero() {
  return (
    <>
      <section id="home" className="hero-area style1">
        <div className="hero-overlay">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-9 col-12">
                <div className="hero-content">
                  <h1 className="wow fadeInLeft" data-wow-delay=".5s">
                    We will provide you{" "}
                    <span>the best industrial service ever in the world! </span>
                  </h1>
                  <p className="wow fadeInLeft" data-wow-delay="1s">
                    We are the best guarenteed company to serve you. We are
                    dedicated to help you any time. You will find yourself
                    working in a partnership that results in an incredible
                    experience.
                  </p>
                  <div className="hero-btn mt-50">
                    <a
                      className="btn btn-one wow fadeInLeft"
                      data-wow-delay="1.5s"
                      href="about.html"
                    >
                      Get More Info <i className="lni lni-angle-double-right" />
                    </a>
                    <a
                      className="btn btn-two glightbox video-button wow fadeInLeft"
                      data-wow-delay="2s"
                      href="https://www.youtube.com/watch?v=SVYotEl0QNc"
                    >
                      <i className="lni lni-play" />
                      <span className="text">Watch our intro video</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-3 col-12">
                <div className="hero-image wow fadeInRight" data-wow-delay="2s">
                  <Image
                    width={393}
                    height={547}
                    src="/assets/images/man.png"
                    alt="alt"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SliderHero;
