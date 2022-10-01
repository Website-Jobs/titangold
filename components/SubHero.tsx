import React from "react";
import Link from "next/link";


function SubHero({ title, menutitle }: any) {
  return (
    <>
      <section id="banner-section" className="bg-prefix">
        <div className="overlay">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 mt-30">
                <h1 className="lowercase">{title}</h1>
              </div>
              <div className="col-md-12">
                <ul className="d-flex justify-content-center">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <a className="dot-divider" />
                  </li>
                  <li>
                    <Link href="#">{menutitle}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SubHero;
