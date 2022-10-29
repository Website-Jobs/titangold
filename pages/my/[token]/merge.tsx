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
import { IUser } from "../../../interfaces";

const Profile: NextPage = ({ accid }: any) => {
  const [user, setUser] = useAtom(userAtom);
  const [account, setAccount] = useAtom(newUserAtom);
  const [partners, setPartners] = useState<IUser[]>([]);
  const [partnerid, setPartnerId] = useState("");

  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`/api/partners/list`);
      const partnerz = await response.json();
      if (partnerz.status) {
        setPartners(partnerz.accounts);
      }
    };

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
    getUsers();
    getUser();
    getThisUser();
  }, [accid, setUser, token, setAccount]);

  const mergePartner = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const merger = {
      accountid: token,
      partner: partnerid,
    };
    const response = await fetch(`/api/users/${token}/merge/${partnerid}`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(merger),
    });
    const merged = await response.json();
    if (merged.status) {
      toast("Great! You have merged the accounts succesfully", {
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
                  Merge Account : {account.lastname} {account.firstname}
                </h4>
                <div id="form-messages" />
                <form
                  id="ajax-contact"
                  className="mt-10"
                  onSubmit={mergePartner}
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group mb-10">
                        <label htmlFor="email">Account to Merge</label>
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

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group mb-10">
                        <label htmlFor="partner">Partner Account</label>
                        <select
                          name="partner"
                          id="partner"
                          required={true}
                          className="form-control form-control-lg"
                          onChange={(e) => setPartnerId(e.target.value)}
                        >
                          <option value={""} defaultValue="">
                            Select Partner
                          </option>
                          {partners.map((partner) => (
                            <>
                              <option value={partner._id}>
                                {partner.lastname} {partner.firstname}
                              </option>
                            </>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        name="send"
                      >
                        Merge This Profile
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
