import React from "react";
import { useAtom } from "jotai";
import { busyAtom } from "../app";

import BounceLoader from "react-spinners/BounceLoader";

function Busy() {
  const [busy] = useAtom(busyAtom);
  return <BounceLoader color="#ffffff" loading={busy} size={35} />;
}

export default Busy;
