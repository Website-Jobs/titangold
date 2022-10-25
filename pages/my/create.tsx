import React, { useEffect, useState } from "react";
import { withAuthSync } from "../../utils/auth";
import SubHero from "../../components/SubHero";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";

const SiteLayout = dynamic(
  () => {
    return import("../../components/SiteLayout");
  },
  { ssr: false }
);

import { NextPage } from "next";
import { useAtom } from "jotai";
import { newUserAtom, userAtom } from "../../app";
import Image from "next/image";
import { useRouter } from "next/router";

const CreateUser: NextPage = ({ accid }: any) => {
  const [user, setUser] = useAtom(userAtom);
  const [account, setAccount] = useAtom(newUserAtom);
  const router = useRouter();

  const [image, setImage] = useState("");
  const [createObjectURL, setCreateObjectURL] = useState("/avatar/user.png");

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
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

  const createUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const body = new FormData();
    body.append("avatar", image);

    const response = await fetch(`/api/users/create`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    });
    const accountinfo = await response.json();
    if (accountinfo.status) {
      toast("Great! You have created a new account succesfully", {
        autoClose: 5000,
        type: "success",
      });
      router.push("/my/accounts");
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
                      src={createObjectURL}
                      width={200}
                      height={200}
                      alt={""}
                    />
                  </span>
                </div>
                <h4 className="mb-4">Create New User</h4>
                <div id="form-messages" />
                <form id="ajax-contact" className="mt-10" onSubmit={createUser}>
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
                        Create New User
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
