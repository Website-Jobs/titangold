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
import { userAtom } from "../../app";

const Partner: NextPage = ({ accid }: any) => {
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
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 my-3">
            <div className="card contact-form">
              <div className="card-body p-4">
                <h4 className="mb-4">
                  Partner Profile
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
                    <div className="col-lg-9 col-md-9 col-sm-12">
                      <div className="form-group mb-10">
                        <label htmlFor="email">Email Address</label>
                        <h3>{user.email}</h3>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group mb-10">
                            <label htmlFor="firstname">First Name</label>
                            <h3>{user.firstname}</h3>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group mb-10">
                            <label htmlFor="lastname">Last Name</label>
                            <h3>{user.lastname}</h3>
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

export default withAuthSync(Partner);
