import React, { useEffect } from "react";

import dynamic from "next/dynamic";
const SiteLayout = dynamic(
  () => {
    return import("../../components/SiteLayout");
  },
  { ssr: false }
);
import SubHero from "../../components/SubHero";
import { withAuthSync } from "../../utils/auth";

import { NextPage } from "next";
import { useAtom } from "jotai";
import { userAtom } from "../../app";
const Assets: NextPage = ({ accid }: any) => {
  const [user, setUser] = useAtom(userAtom);
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`/api/users/${accid}/info`);
      const profile = await response.json();
      setUser(profile);
    };
    getUser();
  }, [accid, setUser]);
  return (
    <SiteLayout>
      <SubHero
        menutitle="Accounts"
        title={`${user.lastname} ${user.firstname}`}
      />
    </SiteLayout>
  );
};

export default withAuthSync(Assets);
