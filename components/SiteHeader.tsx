import React from "react";
import Image from "next/image";
import Link from "next/link";

function SiteHeader() {
  return (
    <>
      <header className="header navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="nav-inner">
                {/* Start Navbar */}
                <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand style3" href="/">
                    <Image
                      src="/assets/images/logo.png"
                      alt="Logo"
                      width={264}
                      height={72}
                    />
                  </Link>
                  <button
                    className="navbar-toggler mobile-menu-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link href="/">
                          <a className="active" aria-label="Toggle navigation">
                            Home
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/">
                          <a aria-label="Toggle navigation">About</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/">
                          <a aria-label="Toggle navigation">Mining</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/">
                          <a aria-label="Toggle navigation">Investments</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/">
                          <a aria-label="Toggle navigation">Reserve</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/">
                          <a aria-label="Toggle navigation">Contact</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* navbar collapse */}
                  <div className="button add-list-button">
                    <Link href="/">
                      <a className="btn">Login: Gold Portal</a>
                    </Link>
                  </div>
                </nav>
                {/* End Navbar */}
              </div>
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </header>
    </>
  );
}

export default SiteHeader;
