import React from "react";
import { Link } from "react-router-dom";
import SideBarTimer from "../context/SideBarTimer";

function Question24() {
  return (
    <section class="w-full flex gap-5">
      <SideBarTimer />

      <div class="w-11/12 bg-amber-100 px-10 pt-10">
        <h1 class="font-bold text-xl">Create a logical volume</h1>
        <p className="my-2 w-1/2">
          Create the logical volume with the name "engineering" by using 20 PE's
          from the volume group "development". <br />
          (i). Consider each PE size of the volume group of ‘development’ as "32
          MiB". <br />
          (ii). Mount it on /mnt/engineering with file system ext3.
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

export default Question24;
