import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const SiteLayout = dynamic(
  () => {
    return import("../../components/SiteLayout");
  },
  { ssr: false }
);
import SubHero from "../../components/SubHero";
import { withAuthSync } from "../../utils/auth";

import { NextPage } from "next";
import { useAtom } from "jotai";
import { partnerAtom, userAtom } from "../../app";
const Asset: NextPage = ({ accid }: any) => {
  const [user, setUser] = useAtom(userAtom);
  const [partner, setPartner] = useAtom(partnerAtom);
  const [hasPartner, setHasPartner] = useState(false);

  useEffect(() => {
    const getPartner = async (partnerid: any) => {
      const response = await fetch(`/api/partners/${partnerid}/info`);
      const partner = await response.json();
      setPartner(partner);
      alert(JSON.stringify(partner));
    };
    const getUser = async () => {
      const response = await fetch(`/api/users/${accid}/info`);
      const profile = await response.json();
      setUser(profile);
      if (profile.partnerid) {
        getPartner(profile.partnerid);
        setHasPartner(true);
      } else {
        setHasPartner(false);
      }
    };
    getUser();
  }, [accid, setUser, setPartner]);

  return (
    <SiteLayout>
      <SubHero
        menutitle="Accounts"
        title={`${user.lastname} ${user.firstname}`}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 my-3">
            <div className="card contact-form">
              {hasPartner ? (
                <>
                  <div className="card-body p-4">
                    <h4 className="mb-4">
                      My Gold Asset
                      <hr />
                    </h4>
                    <span style={{ float: "right" }}>
                      <Image
                        src={`${user.avatar}`}
                        width={200}
                        height={200}
                        alt={user.firstname}
                      />
                    </span>
                    <div id="form-messages" />
                    <form id="ajax-contact" className="mt-10">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group mb-10">
                                <label>Gold Value (USD)</label>
                                <h3>$500,000.00 USD</h3>
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group mb-10">
                                <label>Investment Date</label>
                                <h3>Date Invested</h3>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group mb-10">
                                <label htmlFor="mobile">
                                  Mobile / Telephone
                                </label>
                                <h3>{user.mobile}</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </>
              ) : (
                <>
                  <div className="card-body p-4">
                    <h4 className="mb-4 text-center">
                      No Assets or Investment is registered with your account
                    </h4>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default withAuthSync(Asset);
