import React, { useEffect } from "react";
import SubHero from "../../components/SubHero";
import Link from "next/link";
import { logout, withAuthSync } from "../../utils/auth";

import dynamic from "next/dynamic";
const SiteLayout = dynamic(
  () => {
    return import("../../components/SiteLayout");
  },
  { ssr: false }
);

import { NextPage } from "next";
import { userAtom } from "../../app";
import { useAtom } from "jotai";

const MyHome: NextPage = ({ accid }: any) => {
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
      {/* Service Start */}
      <section id="service-section" className="all-service mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 g-0">
              <div className="service service-right">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div
                      className="service-item bg-dark mt-25 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <i className="flaticon-user" />
                      <Link href="/my/profile">
                        <a>
                          <h5>My Profile</h5>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div
                      className="service-item bg-dark mt-25 wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <i className="flaticon-piston" />
                      <Link href="/my/asset">
                        <a>
                          <h5>My Gold Asset</h5>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div
                      className="service-item bg-dark mt-25 wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <i className="flaticon-customer" />
                      <Link href="/my/partner">
                        <h5>Partner Profile</h5>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div
                      className="service-item bg-dark mt-25 wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <i className="flaticon-case" />
                      <Link href="#">
                        <a onClick={logout}>
                          <h5>Logout App</h5>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 g-0">
              <div className="service service-right">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div
                      className="service-item bg-dark mt-25 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <i className="flaticon-user" />
                      <Link href="/my/accounts">
                        <h5>All Accounts</h5>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div
                      className="service-item bg-dark mt-25 wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <i className="flaticon-checkmark" />
                      <Link href="/my/partners">
                        <h5>All Partners</h5>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div
                      className="service-item bg-dark mt-25 wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <i className="flaticon-case" />
                      <Link href="#">
                        <a onClick={logout}>
                          <h5>Logout App</h5>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service End */}
    </SiteLayout>
  );
};

export default withAuthSync(MyHome);
