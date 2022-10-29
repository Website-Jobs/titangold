import React, { useEffect, useState } from "react";
import { withAuthSync } from "../../utils/auth";
import SubHero from "../../components/SubHero";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";

const { Upload } = require("upload-js");
const upload = Upload({ apiKey: "public_12a1xrd86dBd9ccC1KzXUKPtsqRn" });

const SiteLayout = dynamic(
  () => {
    return import("../../components/SiteLayout");
  },
  { ssr: false }
);

import { NextPage } from "next";
import { useAtom } from "jotai";
import { newPartnerAtom, newUserAtom, userAtom } from "../../app";
import Image from "next/image";
import { useRouter } from "next/router";

const CreateUser: NextPage = ({ accid }: any) => {
  const [user, setUser] = useAtom(userAtom);
  const [partner, setPartner] = useAtom(newPartnerAtom);
  const router = useRouter();

  const [image, setImage] = useState("");
  const [createObjectURL, setCreateObjectURL] = useState("/avatar/user.png");

  const uploadToClient = async (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file);
      setCreateObjectURL(URL.createObjectURL(file));
      const { fileUrl, filePath } = await upload.uploadFile(file, {
        onBegin: ({ cancel }: any) => {},
        onProgress: ({ bytesSent, bytesTotal }: any) => {},
        path: {
          folderPath: "/uploads/titangold/{UTC_YEAR}/{UTC_MONTH}/{UTC_DAY}",
          fileName: "{UNIQUE_DIGITS_8}{ORIGINAL_FILE_EXT}",
        },
      });
      if (fileUrl) {
        setPartner({ ...partner, avatar: fileUrl });
      }
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`/api/users/${accid}/info`);
      const profile = await response.json();
      setUser(profile);
    };
    getUser();
  }, [accid, setUser]);

  const createPartnerr = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await fetch(`/api/partners/create`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(partner),
    });
    const partnerinfo = await response.json();
    if (partnerinfo.status) {
      toast("Great! You have created a new partner succesfully", {
        autoClose: 5000,
        type: "success",
      });
      router.push("/my/partners");
    }
  };

  return (
    <SiteLayout>
      <SubHero
        menutitle="Partner"
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
                      src={createObjectURL}
                      width={200}
                      height={200}
                      alt={""}
                    />
                  </span>
                </div>
                <h4 className="mb-4">Create New Partner</h4>
                <div id="form-messages" />
                <form
                  id="ajax-contact"
                  className="mt-10"
                  onSubmit={createPartnerr}
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
                          value={partner.email}
                          className="form-control"
                          onChange={(e) =>
                            setPartner({ ...partner, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3">
                      <div className="form-group mb-10">
                        <label htmlFor="avatar">Profile Photo</label>
                        <input
                          id="avatar"
                          type="file"
                          name="avatar"
                          className="form-control"
                          onChange={uploadToClient}
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
                          value={partner.firstname}
                          className="form-control"
                          onChange={(e) =>
                            setPartner({
                              ...partner,
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
                          value={partner.lastname}
                          className="form-control"
                          onChange={(e) =>
                            setPartner({ ...partner, lastname: e.target.value })
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
                          value={partner.address}
                          className="form-control"
                          onChange={(e) =>
                            setPartner({ ...partner, address: e.target.value })
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
                          value={partner.mobile}
                          className="form-control"
                          onChange={(e) =>
                            setPartner({ ...partner, mobile: e.target.value })
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
                          value={partner.country}
                          className="form-control"
                          onChange={(e) =>
                            setPartner({ ...partner, country: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <hr />
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="form-group mb-10">
                        <label htmlFor="goldasset">Gold Asset</label>
                        <input
                          id="goldasset"
                          type="text"
                          name="goldasset"
                          placeholder="Gold"
                          value={partner.gold}
                          className="form-control"
                          onChange={(e) =>
                            setPartner({ ...partner, gold: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="form-group mb-10">
                        <label htmlFor="amount">Amount (USD)</label>
                        <input
                          id="country"
                          type="text"
                          name="amount"
                          placeholder="Amount"
                          value={partner.amount}
                          className="form-control"
                          onChange={(e) =>
                            setPartner({ ...partner, amount: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="form-group mb-10">
                        <label htmlFor="created">Date Stored</label>
                        <input
                          id="created"
                          type="datetime-local"
                          name="created"
                          placeholder="Date Stored"
                          value={partner.created}
                          className="form-control"
                          onChange={(e) =>
                            setPartner({ ...partner, created: e.target.value })
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
                        Create New Partner
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

export default withAuthSync(CreateUser);
