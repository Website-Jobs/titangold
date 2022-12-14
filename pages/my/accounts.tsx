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
import { IUser } from "../../interfaces";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Accounts: NextPage = ({ accid }: any) => {
  const [user, setUser] = useAtom(userAtom);
  const [users, setUsers] = useState<IUser[]>([]);
  const [busy, setBusy] = useAtom(busyAtom);

  const router = useRouter();

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`/api/users/list`);
      const users = await response.json();
      if (users.status) {
        setUsers(users.accounts);
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

  const deleteThisUser = async (userid: any) => {
    setBusy(true);
    const response = await fetch(`/api/users/${userid}/delete`);
    const deleted = await response.json();
    if (deleted.status) {
      toast("Great! You have deleted this account succesfully", {
        autoClose: 5000,
        type: "success",
      });
      setBusy(false);
      router.push("/my/accounts?done=+");
    }
  };

  return (
    <SiteLayout>
      <SubHero
        menutitle="Accounts"
        title={`${user.lastname} ${user.firstname}`}
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-12 my-3">
            <a href={"/my/create"} className="btn p-1  btn-info pull-right">
              + Account
            </a>
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>L.NAME</th>
                  <th>F.NAME</th>
                  <th>EMAIL</th>
                  <th>MOBILE</th>
                  <th>PASSWORD</th>
                  <th>COUNTRY</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {users.map((usr) => (
                  <>
                    <tr>
                      <td>{usr._id}</td>
                      <td>{usr.lastname}</td>
                      <td>{usr.firstname}</td>
                      <td>{usr.email}</td>
                      <td>{usr.mobile}</td>
                      <td>{usr.password}</td>
                      <td>{usr.country}</td>
                      <td>
                        <Link href={`/my/${usr._id}/edit`}>
                          <a className="btn btn-md p-1 mx-1 btn-success">
                            Edit
                          </a>
                        </Link>
                        {usr.role == "user" && (
                          <>
                            <Link href={`/my/${usr._id}/merge`}>
                              <a className="btn btn-md p-1 mx-1 btn-info">
                                Marge
                              </a>
                            </Link>
                            <Link href="#">
                              <a
                                onClick={(e) => deleteThisUser(usr._id)}
                                className="btn btn-md p-1 mx-1 btn-danger"
                              >
                                Delete
                              </a>
                            </Link>
                          </>
                        )}
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
