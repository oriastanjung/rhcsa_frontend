import React from "react";
import { Link } from "react-router-dom";
import SideBarTimer from "../context/SideBarTimer";

function Question14() {
  return (
    <section class="w-full flex gap-5">
      <SideBarTimer />

      <div class="w-11/12 bg-amber-100 px-10 pt-10">
        <h1 class="font-bold text-xl">
          {" "}
          Configure the container as a system service
        </h1>
        <p className="my-2 w-1/2">
          Configure the container as a system start-up service and mount volumes
          persistently.
          <br />
          a) Create the container name as ascii2pdf as neith user
          <br />
          b) Run the container by using image monitor which one was already done
          in previous
          <br />
          c) Create the container as a system start-up service, While reboot it
          will automatically start the service without any human intervention.
          <br />
          d) The system service should be container-ascii2pdf. <br />
          e) The local
          directory /opt/files should be persistently mount on container’s
          /opt/incoming directory.
          <br />
          f) The local directory /opt/processed should be persistently mount on
          container’s /opt/outgoing directory.
          <br />
          <br />
          Note: In working of service starts, any file create/store under the
          /opt/files automatically creates into pdf on /opt/processed directory
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

export default Question14;
