import React, { useEffect, useState } from "react";
import { withAuthSync } from "../../utils/auth";
import SubHero from "../../components/SubHero";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import Image from "next/image";

const SiteLayout = dynamic(
  () => {
    return import("../../components/SiteLayout");
  },
  { ssr: false }
);

import { NextPage } from "next";
import { useAtom } from "jotai";
import { userAtom, partnerAtom } from "../../app";

const Partner: NextPage = ({ accid }: any) => {
  //||\\
  const [user, setUser] = useAtom(userAtom);
  const [partner, setPartner] = useAtom(partnerAtom);
  const [hasPartner, setHasPartner] = useState(false);
  //|\\
  useEffect(() => {
    const getPartner = async (partnerid: any) => {
      const response = await fetch(`/api/users/${partnerid}/info`);
      const partner = await response.json();
      setPartner(partner);
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
                      Partner Profile
                      <hr />
                    </h4>
                    <span style={{ float: "right" }}>
                      <Image
                        src={`${partner.avatar}`}
                        width={200}
                        height={200}
                        alt={partner.firstname}
                      />
                    </span>
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
                        <div className="col-lg-9 col-md-9 col-sm-12">
                          <div className="form-group mb-10">
                            <label htmlFor="email">Email Address</label>
                            <h3>{partner.email}</h3>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group mb-10">
                                <label htmlFor="firstname">First Name</label>
                                <h3>{partner.firstname}</h3>
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group mb-10">
                                <label htmlFor="lastname">Last Name</label>
                                <h3>{partner.lastname}</h3>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group mb-10">
                                <label htmlFor="mobile">
                                  Mobile / Telephone
                                </label>
                                <h3>{partner.mobile}</h3>
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
                      No Partner Registered with your account
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

export default withAuthSync(Partner);
