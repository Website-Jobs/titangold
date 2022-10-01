import React from "react";
import Image from "next/image";
import SiteLayout from "../../components/SiteLayout";
import SubHero from "../../components/SubHero";
function about() {
  return (
    <SiteLayout>
      <SubHero menutitle="About Us" title="Titan Gold LLC" />
      <section id="about-detl" className="mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="about-detl-cont">
                <h2 className="mt-10">About us</h2>
                <p>
                  Capitalise on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.
                </p>
                <p>
                  Override the digital divide with additional clickthroughs from
                  DevOps. Nanotechnology immersion along the information highway
                  will close the loop on focusing solely on the bottom line.
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
