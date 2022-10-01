import React from "react";
import Image from "next/image";
import SiteLayout from "../../components/SiteLayout";
import SubHero from "../../components/SubHero";
function about() {
  return (
    <SiteLayout>
      <SubHero menutitle="About Us" title="Titan Gold LLC" />
      <section id="about-detl" className="mt-50 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="about-detl-cont">
                <h2 className="mt-10">Gold Reserve Services</h2>
                <p>
                  Titan Gold LLC has a long history in mining insourcing and was
                  formed to acquire, explore and develop mining projects. The
                  Company, the successor issuer to Gold Reserve Corporation
                  which was formed in 1956, was incorporated in 1998 under the
                  laws of the Yukon Territory, Canada and continued to Alberta,
                  Canada in September 2014.
                </p>
                <p>
                  <h3>Fully Certified Metals</h3>
                  Any metals bought from us are fully certified and
                  authenticated by our team of gold numismatists. We provide
                  full supporting documentation including a Certificate of
                  Authenticity, Statement of Account and if relevant, a Storage
                  Agreement (specifying full details of holdings within an
                  LBMA-approved vault).
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="about-detl-img">
                <Image
                  src="/assets/images/about/about-detl.jpg"
                  width={600}
                  height={400}
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
