import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const SiteLayout = dynamic(
  () => {
    return import("../../components/SiteLayout");
  },
  { ssr: false }
);
import SubHero from "../../components/SubHero";
function About() {
  return (
    <SiteLayout>
      <SubHero menutitle="About Us" title="Titan Gold LLC" />
      <section id="about-detl" className="mt-50 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="about-detl-cont">
                <h2 className="mt-10">About us</h2>
                <p>
                  The Pure Gold Company views itself as a trusted market leader.
                  We are members of the Royal Numismatic Association, British
                  Numismatic Association, British Chamber of Commerce and the
                  Information Commissioner, as well as being featured in the
                  Press including FT, Daily Mail, Reuters, WSJ, Money Week,
                  Observer, Guardian, Your Money and others.
                </p>
                <h3 className="mt-3">OUR APPROACH</h3>
                <p>
                  The Titan Gold LLC offers a uniquely consultative approach to
                  purchasing and selling physical gold and silver, regardless of
                  how much you are looking to invest. We pride ourselves on our
                  simple and tailored strategy, working with beginners and
                  experienced investors alike, to find the precious metal
                  investment that will benefit them most. Whether you are
                  looking to convert personal savings or part of your pension
                  into physical gold or silver, we can provide a tax-efficient
                  solution. In addition, our Buy Back Guarantee means your gold
                  and silver investment is as liquid as the cash in your bank
                  account.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="about-detl-img pt-10">
                <Image
                  src="/assets/images/nuggets.jpg"
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

export default About;
