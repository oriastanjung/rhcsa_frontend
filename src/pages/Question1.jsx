import React from "react";

import { Link } from "react-router-dom";
import SideBarTimer from "../context/SideBarTimer";

function Question1() {


  return (
    <section class="w-full flex gap-5">
      <SideBarTimer />

      <div class="w-11/12 bg-amber-100 px-10 pt-10">
        <h1 class="font-bold text-xl">Configure the network</h1>
        <p className="my-2 w-1/2">
          Assign Hostname and Ip address for your virtual machine. <br />
          Hostname node1.network250.example.com <br />
          IP Address 172.25.250.11 <br />
          Netmask 255.255.255.0 <br />
          Gateway 172.25.250.254 <br />
          Nameserver 172.25.250.254 <br />
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

export default Question1;
