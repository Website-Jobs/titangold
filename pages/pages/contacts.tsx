import React from "react";
import Image from "next/image";
import SiteLayout from "../../components/SiteLayout";
import SubHero from "../../components/SubHero";
function about() {
  return (
    <SiteLayout>
      <SubHero menutitle="Contact Us" title="Contact Us" />
      <section id="about-detl" className="mt-50 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="about-detl-cont">
                <h2 className="mt-10">Contact us</h2>
                <p>
                  Our experienced investment team will be ready to assist you if
                  you need to get in touch with us.
                </p>
                <p>
                  <h3>
                    203 Al Mankhool Street Opposite Al Khaleej Center Diana
                    Dubai
                  </h3>
                </p>
                <p>
                  <h1>+971557453069</h1>
                </p>
                <p>
                  <h3>info@titangoldllc.com</h3>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="about-detl-img">
                <Image
                  src="/assets/images/gold.jpg"
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
