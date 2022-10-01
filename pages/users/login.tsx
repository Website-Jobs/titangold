import type { NextPage } from "next";
import React from "react";
import SiteLayout from "../../components/SiteLayout";
import SubHero from "../../components/SubHero";

const login: NextPage = () => {
  const titanLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();
    alert(0);
  };
  return (
    <SiteLayout>
      <SubHero menutitle="User Login" title="User Login" />

      <section id="login-section" className="mt-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
              <div className="form-head login-form mb-30">
                <h4 className="title mb-30">Login</h4>
                <form method="POST" action="#!" onSubmit={titanLogin}>
                  <div className="input-group mb-30">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-user" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-30">
                    <span className="input-group-text" id="basic-addon2">
                      <i className="fa fa-lock" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password"
                      aria-label="password"
                      aria-describedby="basic-addon2"
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
                        <a
                          href="javascript:void(0)"
                          className="lost-pass float-end"
                        >
                          Lost your password?
                        </a>
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

export default login;
