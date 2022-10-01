import React from "react";

function SiteFooter() {
  return (
    <>
      <footer id="footer-section">
        {/* Start Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="footer-cmn f-activity wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h6>GET IN TOUCH</h6>
                  <h5>Follow Our Activity</h5>
                  <p>
                    Making the world a better place through constructing elegant
                    hierarchies. Innovations enabled by the Steeler institutes
                    results in products that assist workers.
                  </p>
                  <ul className="social d-flex mt-30">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div
                  className="footer-cmn f-solutions f-links wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h5>Solutions</h5>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Mechanical</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Electrical</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Fabrication</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Automation</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Construction</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div
                  className="footer-cmn f-legal f-links wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h5>Legal</h5>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Catering Services</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Customer Relations</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Innovation</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="footer-cmn f-address wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h6>BALTIMORE</h6>
                  <h5>Head Office</h5>
                  <p>
                    Innovations enabled by the Steeler institutes results in
                    products that assist workers.
                  </p>
                  <ul className="mt-20">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="flaticon-mobile" /> +1 555 222 000 111
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="flaticon-mail" /> info@example.com
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="flaticon-startup" />
                        www.example.com{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ Footer Top End  */}
        <div className="copyright text-center mt-50">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="copyright-text">
                  Designed &amp; Developed by{" "}
                  <a href="javascript:void(0)/" rel="nofollow">
                    Idrak
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default SiteFooter;
