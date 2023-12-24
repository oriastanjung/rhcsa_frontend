import React from "react";
import { Link } from "react-router-dom";
import SideBarTimer from "../context/SideBarTimer";

function Question6() {
  return (
    <section class="w-full flex gap-5">
      <SideBarTimer />

      <div class="w-11/12 bg-amber-100 px-10 pt-10">
        <h1 class="font-bold text-xl">
          Automount the remote user home directory
        </h1>
        <p className="my-2 w-1/2">
          Configure autofs to automount the home directories of remoteuser250
          domain users. Note the following:
          <br />
          a) utility.network250.example.com (172.25.250.10) NFS-exports /netdir to
          your system.
          <br />
          b) remoteuser250 home directory is
          utility.network250.example.com:/netdir/remoteuser250
          <br />
          c) remoteuser250 home directory should be auto mounted locally beneath
          to /netdir as /netdir/remoteuser250.
          <br />
          d) The home directories must be writable by their users.
          <br />
          e) remoteuser250's password is ”redhat”
        </p>
        <hr className="border-black border  mt-10" />

        <div className="w-full mt-4 flex justify-center mb-10">
          <Link to={"/exam"}>
            <button className="bg-gray-300 px-4 py-1 border border-gray-500">
              Back
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Question6;
