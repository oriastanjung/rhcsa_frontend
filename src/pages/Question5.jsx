import React from "react";
import { Link } from "react-router-dom";
import SideBarTimer from "../context/SideBarTimer";

function Question5() {
  return (
    <section class="w-full flex gap-5">
      <SideBarTimer />

      <div class="w-11/12 bg-amber-100 px-10 pt-10">
        <h1 class="font-bold text-xl">
          Create a collaborative directory /home/shared with the following
          characteristics
        </h1>
        <p className="my-2 w-1/2">
          <br />
          a) Group ownership of /home/shared is sharegrp.
          <br />
          b) The directory should be readable, writable and accessible to
          members of sharegrp, but not to any other user. (It is understood that
          root has access to all files and directories on the system.)
          <br />
          c) Files created in /home/shared automatically have group ownership
          set to the sharegrp group
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

export default Question5;
