import React from "react";
import { Link } from "react-router-dom";
import SideBarTimer from "../context/SideBarTimer";

function Question3() {
  return (
    <section class="w-full flex gap-5">
      <SideBarTimer />

      <div class="w-11/12 bg-amber-100 px-10 pt-10">
        <h1 class="font-bold text-xl">Configure the selinux</h1>
        <p className="my-2 w-1/2">
          The webserver is running on non-stardard port 82 having a issue serve
          the web content. Debug and fix the issue:
          <br />
          a) The web server can serve all the existing HTML file located at
          /var/www/html directory (Don't alter or remove any files in this
          directory)
          <br />
          b) The webserver can serve the content on port 82
          <br />
          c) Make the content accessible
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

export default Question3;
