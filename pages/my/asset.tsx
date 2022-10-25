import React, { useEffect } from "react";
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
import { userAtom } from "../../app";
const Asset: NextPage = ({ accid }: any) => {
  const [user, setUser] = useAtom(userAtom);
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`/api/users/${accid}/info`);
      const profile = await response.json();
      setUser(profile);
    };
    getUser();
  }, [accid, setUser]);
  return (
    <SiteLayout>
      <SubHero
        menutitle="Accounts"
        title={`${user.lastname} ${user.firstname}`}
      />{" "}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 my-3">
            <div className="card contact-form">
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
                            <label htmlFor="mobile">Mobile / Telephone</label>
                            <h3>{user.mobile}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default withAuthSync(Asset);
