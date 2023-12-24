import React from "react";
import { Link } from "react-router-dom";
import SideBarTimer from "../context/SideBarTimer";

function Question4() {
  return (
    <section class="w-full flex gap-5">
      <SideBarTimer />

      <div class="w-11/12 bg-amber-100 px-10 pt-10">
        <h1 class="font-bold text-xl">
          Create the following users, groups and group memberships
        </h1>
        <p className="my-2 w-1/2">
          <br />
          a) A group named sharegrp.
          <br />
          b) A user harry who belongs to sharegrp as a secondary group.
          <br />
          c) A user natasha who belongs to sharegrp as a secondary group.
          <br />
          d) A user sarah who does not have access to an interactive shell on
          the system and who is not member of sharegrp.
          <br />
          e) The users harry, natasha, sarah should all have password of redhat
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

export default Question4;
