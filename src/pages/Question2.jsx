import React from "react";
import { Link } from "react-router-dom";
import SideBarTimer from "../context/SideBarTimer";

function Question2() {
  
  return (
    <section class="w-full flex gap-5">
      <SideBarTimer />

      <div class="w-11/12 bg-amber-100 px-10 pt-10">
        <h1 class="font-bold text-xl">Configure the repository</h1>
        <p className="my-2 w-1/2">
          YUM repositories have been made available from{" "}
          <a
            className="text-blue-700 underline"
            href="http://classroom.example.com/content/rhel9.0/x86_64/dvd/AppStream"
          >
            http://classroom.example.com/content/rhel9.0/x86_64/dvd/AppStream
          </a>{" "}
          and {" "}
          <a
            className="text-blue-700 underline"
            href="http://classroom.example.com/content/rhel9.0/x86_64/dvd/BaseOS"
          >
            http://classroom.example.com/content/rhel9.0/x86_64/dvd/BaseOS
          </a>{" "}
          <br />
          <br />
          <p>Configure your systems to use these locations as default repositories.</p>
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

export default Question2;
