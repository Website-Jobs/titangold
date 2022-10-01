import React from "react";
import Image from "next/image";
import SiteLayout from "../../components/SiteLayout";
import SubHero from "../../components/SubHero";
function about() {
  return (
    <SiteLayout>
      <SubHero menutitle="Mining" title="Titan Gold Mining" />
      <section id="about-detl" className="mt-50 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="about-detl-cont">
                <h2 className="mt-10">Gold Mining</h2>
                <p>
                  We understand that Gold mine exploration is challenging and
                  complex. It requires significant time, financial resources and
                  expertise in many disciplines – e.g. geography, geology,
                  chemistry and engineering - we have the best exploration team
                  set to get the best results.
                </p>
                <p>
                  <h3>Our Advisory</h3>
                  Gold and other precious metals are the best and most stable
                  investment approaches you can purchase and own in bulk. While
                  looking at the stock market, we can see that gold has steady
                  growth and little volatility against any other investment.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="about-detl-img">
                <Image
                  src="/assets/images/mining.jpg"
                  width={400}
                  height={225}
                  alt="alt"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default about;
