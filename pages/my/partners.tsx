import React, { useEffect, useState } from "react";
import Link from "next/link";
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
import { userAtom, busyAtom } from "../../app";
import { IPartner, IUser } from "../../interfaces";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Accounts: NextPage = ({ accid }: any) => {
  const [user, setUser] = useAtom(userAtom);
  const [partners, setPartners] = useState<IPartner[]>([]);
  const [busy, setBusy] = useAtom(busyAtom);

  const router = useRouter();

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`/api/partners/list`);
      const partners = await response.json();
      if (partners.status) {
        setPartners(partners.accounts);
      }
    };
    const getUser = async () => {
      const response = await fetch(`/api/users/${accid}/info`);
      const profile = await response.json();
      setUser(profile);
    };
    getUsers();
    getUser();
  }, [accid, busy, setUser]);

  const deleteThisPartner = async (userid: any) => {
    setBusy(true);
    const response = await fetch(`/api/partners/${userid}/delete`);
    const deleted = await response.json();
    if (deleted.status) {
      toast("Great! You have deleted this partner succesfully", {
        autoClose: 5000,
        type: "success",
      });
      setBusy(false);
      router.push("/my/partners?done=+");
    }
  };

  const mergeThisUser = async (userid: any) => {
    setBusy(true);
    const response = await fetch(`/api/users/${userid}/merge`);
    const deleted = await response.json();
    if (deleted.status) {
      toast("Great! You have merged this account succesfully", {
        autoClose: 5000,
        type: "success",
      });
      setBusy(false);
      router.push("/my/partners?done=+");
    }
  };

  return (
    <SiteLayout>
      <SubHero
        menutitle="Partners"
        title={`${user.lastname} ${user.firstname}`}
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-12 my-3">
            <Link href="/my/create-partner">
              <a className="btn p-1  btn-info pull-right">+ Partner</a>
            </Link>
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>LAST NAME</th>
                  <th>FIRST NAME</th>
                  <th>AMOUNT</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {partners.map((usr) => (
                  <>
                    <tr>
                      <td>{usr._id}</td>
                      <td>{usr.lastname}</td>
                      <td>{usr.firstname}</td>
                      <td>${usr.amount}</td>
                      <td>
                        <Link href={`/my/${usr._id}/edit-partner`}>
                          <a className="btn btn-md p-1 mx-1 btn-success">
                            Edit
                          </a>
                        </Link>
                        <Link href="#">
                          <a
                            onClick={(e) => deleteThisPartner(usr._id)}
                            className="btn btn-md p-1 mx-1 btn-danger"
                          >
                            Delete
                          </a>
                        </Link>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default withAuthSync(Accounts);
