import Link from "next/link";
import React from "react";

function ScrollTop() {
  return (
    <div>
      <Link href="#">
        <a className="scroll-top">
          <i className="lni lni-chevron-up" />
        </a>
      </Link>
    </div>
  );
}

export default ScrollTop;
