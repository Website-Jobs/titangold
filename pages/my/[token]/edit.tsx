import React, { useEffect, useState } from "react";
import { withAuthSync } from "../../../utils/auth";
import SubHero from "../../../components/SubHero";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import Image from "next/image";

const SiteLayout = dynamic(
  () => {
    return import("../../../components/SiteLayout");
  },
  { ssr: false }
);

import { NextPage } from "next";
import { useAtom } from "jotai";
import { newUserAtom, userAtom } from "../../../app";

import { useRouter } from "next/router";

const Profile: NextPage = ({ accid }: any) => {
  const [user, setUser] = useAtom(userAtom);
  const [account, setAccount] = useAtom(newUserAtom);

  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    const getThisUser = async () => {
      const userresponse = await fetch(`/api/users/${token}/info`);
      const userprofile = await userresponse.json();
      setAccount(userprofile);
    };

    const getUser = async () => {
      const response = await fetch(`/api/users/${accid}/info`);
      const profile = await response.json();
      setUser(profile);
    };
    getUser();
    getThisUser();
  }, [accid, setUser, token, setAccount]);

  const updateProfile = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await fetch(`/api/users/${token}/update`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    });
    const profile = await response.json();
    if (profile.status) {
      toast("Great! You have updated this user's profile succesfully", {
        autoClose: 5000,
        type: "success",
      });
    }
  };

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
                <div className="col-lg-12">
                  <span style={{ float: "right" }}>
                    <Image
                      src={`${user.avatar}`}
                      width={100}
                      height={100}
                      alt={user.firstname}
                    />
                  </span>
                </div>
                <h4 className="mb-4">
                  Account Profile : {account.lastname} {account.firstname}
                </h4>
                <div id="form-messages" />
                <form
                  id="ajax-contact"
                  className="mt-10"
                  onSubmit={updateProfile}
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group mb-10">
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required={true}
                          value={account.email}
                          className="form-control"
                          onChange={(e) =>
                            setAccount({ ...account, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12">
                      <div className="form-group mb-10">
                        <label htmlFor="password">Password</label>
                        <input
                          id="password"
                          type="text"
                          name=""
                          placeholder="Password"
                          required={true}
                          value={account.password}
                          className="form-control bg-light"
                          onChange={(e) =>
                            setAccount({ ...account, password: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12">
                      <div className="form-group mb-10">
                        <label htmlFor="avatar">Profile Photo</label>
                        <input
                          id="avatar"
                          type="file"
                          name="avatar"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group mb-10">
                        <label htmlFor="firstname">First Name</label>
                        <input
                          id="firstname"
                          type="text"
                          name="firstname"
                          placeholder="First Name"
                          value={account.firstname}
                          className="form-control"
                          onChange={(e) =>
                            setAccount({
                              ...account,
                              firstname: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group mb-10">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                          id="lastname"
                          type="text"
                          name="lastname"
                          placeholder="Last Name"
                          value={account.lastname}
                          className="form-control"
                          onChange={(e) =>
                            setAccount({ ...account, lastname: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group mb-10">
                        <label htmlFor="address">Location / Address</label>
                        <input
                          id="address"
                          type="text"
                          name="address"
                          placeholder="Location / Address"
                          value={account.address}
                          className="form-control"
                          onChange={(e) =>
                            setAccount({ ...account, address: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group mb-10">
                        <label htmlFor="mobile">Mobile / Tel</label>
                        <input
                          id="mobile"
                          type="text"
                          name="mobile"
                          placeholder="Mobile / Tel"
                          value={account.mobile}
                          className="form-control"
                          onChange={(e) =>
                            setAccount({ ...account, mobile: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group mb-10">
                        <label htmlFor="country">Country</label>
                        <input
                          id="country"
                          type="text"
                          name="country"
                          placeholder="Country"
                          value={account.country}
                          className="form-control"
                          onChange={(e) =>
                            setAccount({ ...account, country: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        name="send"
                      >
                        Update This Profile
                      </button>
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

export default withAuthSync(Profile);
