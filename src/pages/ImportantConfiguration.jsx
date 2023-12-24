import React from "react";

import { Link } from "react-router-dom";
import SideBarTimer from "../context/SideBarTimer";

function ImportantConfiguration() {

  return (
    <section class="w-full flex gap-5">
     <SideBarTimer />

      <div class="w-11/12 bg-amber-100 px-10 pt-10">
        <h1 class="font-bold text-3xl">Important configuration information</h1>
        <p className="my-2 w-1/2">
          During the exam you will be working with several virtual systems in
          addition to the desktop at which you are seated. You do not have root
          access in the desktop system however you have full root access to the
          virtual systems.
        </p>
        <p className="my-2 w-1/2">
          <span className="font-bold">System Information</span> <br /> You will
          be working with the following virtual systems for this exam:
        </p>
        <img src="/informationConf.png" alt="" className="" />
        <p className="my-2 w-1/2">
          The systems you are working with are members of the DNS domain network
          network250.example.com. All systems in this domain are in the
          172.25.250.0/255.255.255.0 subnet and all systems in that subnet are
          in network250.example.com.
          <br />
          <br />
          The IP Addresses listed for these systems are the addresses that{" "}
          <strong>should</strong> be assigned to the system. You may find a
          necessary to configure the network for one or both of your systems in
          order to reach it at the address listed above.
        </p>
        <p className="my-2 w-1/2">
          <strong>Account Information</strong>
        </p>
        <p className="my-2 w-1/2">
          The <strong>root</strong> password for node1 has been set to{" "}
          <strong className="text-xl">"redhat"</strong>
        </p>
        <p className="my-2 w-1/2">
          Unless otherwise specified, this will be the password you use to
          access other systems and services. Also, unless otherwise specified,
          you should use this password for any accounts that you create or for
          any services that require a password be set.
        </p>
        <p className="my-2 w-1/2">
          <strong>Registry Access</strong>
        </p>
        <p className="my-2 w-1/2">
          Some of the items in this exam may require container images from a
          registry.
          <br />
          Container registry server is registry.lab.example.com Use admin as
          username and redhat321 as password for container registry
        </p>
        <p className="my-2 w-1/2">
          <strong>Other Information</strong>
        </p>
        <p className="my-2 w-1/2">
          You may access your exam systems via SSH or via the console. Note that
          SSH access may be dependent on your solving for other exam items.
        </p>
        <hr className="border-black border  mt-10" />

        <div className="w-full mt-4 flex justify-center mb-10">
          <Link to={"/exam"}>
            <button className="bg-gray-300 px-4 py-1 border border-gray-500">Back</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ImportantConfiguration;
