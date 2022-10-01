import React from "react";
import Link from "next/link";

function SiteFooter() {
  return (
    <>
      <footer id="footer-section">
        {/* Start Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-12">
                <div
                  className="footer-cmn f-activity wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h6 className="mb-5">GET IN TOUCH</h6>
                  <h5>About Titan Gold LLC</h5>
                  <p>
                    The Titan Gold LLC offers a uniquely consultative approach
                    to purchasing and selling physical gold and silver,
                    regardless of how much you are looking to invest. results in
                    products that assist workers.
                  </p>
                  <ul className="social d-flex mt-30">
                    <li>
                      <Link href="/">
                        <i className="fa fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa fa-linkedin" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div
                  className="footer-cmn f-legal f-links wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h5>Our Links</h5>
                  <ul>
                    <li>
                      <Link href="/pages/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/pages/mining">Mining</Link>
                    </li>
                    <li>
                      <Link href="/pages/investments">Investments</Link>
                    </li>
                    <li>
                      <Link href="/pages/reserve">Reserve</Link>
                    </li>
                    <li>
                      <Link href="/pages/contacts">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="footer-cmn f-address wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h6>DUBAI</h6>
                  <h5>Head Office</h5>
                  <p>
                    203 Al Mankhool Street Opposite Al Khaleej Center Diana
                    Dubai
                  </p>
                  <ul className="mt-20">
                    <li>
                      <Link href="/">
                        <a>
                          <i className="flaticon-mobile" /> +971557453069
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>
                          <i className="flaticon-mail" /> info@titangoldllc.com
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>
                          <i className="flaticon-startup" />
                          www.titangoldllc.com
                        </a>
                      </Link>
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
                  <Link href="/" rel="nofollow">
                    Idrak
                  </Link>
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
