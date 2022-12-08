import type { NextPage } from "next";
import React from "react";
import SiteLayout from "../../components/SiteLayout";
import SubHero from "../../components/SubHero";
import { busyAtom, userAtom } from "../../app";
import { useAtom } from "jotai";
import Busy from "../../components/Busy";
import Link from "next/link";
import { toast } from "react-toastify";
import { login } from "../../utils/auth";

const Login: NextPage = () => {
  const [busy, setBusy] = useAtom(busyAtom);
  const [user, setUser] = useAtom(userAtom);

  const titanLogin = async (e: React.SyntheticEvent) => {
    setBusy(true);
    e.preventDefault();
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();

    if (result.status) {
      toast("Great! We just found your details, logging you in now...", {
        autoClose: 5000,
        type: "success",
      });
      await login(result.accid, 10);
    } else {
      toast(
        "Opps! Your email or password is not correct, do check and try again.",
        {
          autoClose: 5000,
          type: "error",
        }
      );
    }
    setBusy(false);
  };

  return (
    <SiteLayout>
      <SubHero menutitle="User Login" title="User Login" />
      <section id="login-section" className="mt-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
              <div className="form-head login-form mb-30">
                <span style={{ float: "right" }}>
                  <Busy />
                </span>
                <h4 className="title mb-30">Login</h4>
                <form method="POST" action="#!" onSubmit={titanLogin}>
                  <div className="input-group mb-30">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-user" />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-group mb-30">
                    <span className="input-group-text" id="basic-addon2">
                      <i className="fa fa-lock" />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      aria-label="password"
                      aria-describedby="basic-addon2"
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="check-and-pass mb-30">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input width-auto"
                            id="exampleCheck1"
                          />
                          <label className="form-check-label">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 text-right">
                        <Link href="#">
                          <a className="lost-pass float-end">
                            Lost your password?
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="button mb-30">
                    <button type="submit" className="btn btn-primary">
                      Login Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Login;
