import React from "react";
import Image from "next/image";
import SiteLayout from "../../components/SiteLayout";
import SubHero from "../../components/SubHero";
function about() {
  return (
    <SiteLayout>
      <SubHero menutitle="Investments" title="Titan Gold Investments" />
      <section id="about-detl" className="mt-50 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="about-detl-cont">
                <h2 className="mt-10">
                  We are in World’s Top 10 Gold Reserve and Investment Companies
                </h2>
                <p>
                  Adding gold to your Titan Investment Account (TIA) may seem
                  like an extremely complex endeavor, but it’s actually quite a
                  bit easier than one may think. With the help of professionals,
                  you can begin to enjoy your new TIA investments sooner than
                  you’d think.
                </p>

                <p>
                  The first step towards investing in gold and other precious
                  metals is to establish a self-directed Titan Investment
                  Account. With a self-directed TIA, you are able to make all of
                  your own investment decisions as opposed to others deciding
                  where your TIA funds will be invested. A self-directed Titan
                  Investment Account can be a traditional TIA, Roth TIA, or one
                  of several other types.
                </p>

                <p>
                  {" "}
                  If you have a pre-existing TIA, you can keep it where it is or
                  roll it over to the new account. If you have an existing TIA,
                  you’ll need to speak with your TIA custodian to ensure that
                  you can add gold bullion to it – unfortunately, not all plans
                  have this option available. If you don’t have this option
                  available, you’ll need to open a new account that has this
                  capability. You can fund your TIA with cash, contributions,
                  rollover contributions, transfers from other TIAs, or direct
                  rollovers from other qualifying plans (pension plans, thrift
                  savings plans, 401k profit sharing, etc).
                </p>

                <p>
                  Once the account is properly funded, you can then instruct
                  your TIA to buy gold builion or various other precious metals.
                  This will usually consist of an account executive or financial
                  consultant making recommendations about how much of your
                  portfolio should be invested in gold and precious metals.
                  After these decisions have been finalized, you can then add
                  gold bullion and precious metals to your TIA.
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
