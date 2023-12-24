import React from "react";
import { Link } from "react-router-dom";
import SideBarTimer from "../context/SideBarTimer";

function Question13() {
  return (
    <section class="w-full flex gap-5">
      <SideBarTimer />

      <div class="w-11/12 bg-amber-100 px-10 pt-10">
        <h1 class="font-bold text-xl"> Build a container image</h1>
        <p className="my-2 w-1/2">
          Build a container image as user neith
          <br />
          a) Using the URL of{" "}
          <a
            className="text-blue-700 underline"
            href="https://classroom.example.com/Containerfile"
          >
            https://classroom.example.com/Containerfile
          </a>
          {" "}to build the container image with name monitor.
          <br />
          b) Do not modify the container file
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

export default Question13;
