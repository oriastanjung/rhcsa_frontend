import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    retype_email: "",
    redhat_username: "",
    country: "",
    certification_number: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const router = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here, e.g., send data to the server
    console.log("Form submitted:", form);

    const submit = await axios.post("http://localhost:3000/saveFormData", form);
    // alert("tersimpan!")

    router("/rules_agreement")
  };

  return (
    <section class="w-full flex gap-5">
      <div class="bg-white h-1/2 w-1/12 px-4 py-4">
        <img src="/logo-rh.png" alt="" />
        <h1 class="font-bold mt-4">
          Red Hat Certified <br />
          System <br />
          Administrator Exam
        </h1>
        <p class="text-[8px] mt-5">Infinite Learning Indonesia</p>
        <button class="px-3 mt-2  font-bold py-1 bg-gray-300 border w-full text-center text-xs">
          Select Language
        </button>
      </div>
      <div class="w-11/12 bg-amber-100 px-10 pt-10">
        <h1 class="font-bold text-lg">
          Enter the information requested below then click on 'Submit'.
        </h1>
        <form onSubmit={handleSubmit}>
          <p>'*' Indicates the required field</p>
          <div class="flex flex-col gap-1 mt-2">
            <div class="w-1/3 flex gap-2">
              <div class="w-1/2 flex justify-end">
                <label class="" for="name">
                  *Name
                </label>
              </div>
              <input
                name="name"
                id="name"
                type="text"
                onChange={handleChange}
                value={form.name}
                required
                class="bg-white border border-black w-full"
              />
            </div>
            <div class="w-1/3 flex gap-2">
              <div class="w-1/2 flex justify-end">
                <label class="" for="email">
                  *Email
                </label>
              </div>
              <input
                name="email"
                id="email"
                type="email"
                onChange={handleChange}
                value={form.email}
                required
                class="bg-white border border-black w-full"
              />
            </div>
            <div class="w-1/3 flex gap-2">
              <div class="w-1/2 flex justify-end">
                <label class="" for="retype_email">
                  *Retype Email
                </label>
              </div>
              <input
                name="retype_email"
                id="retype_email"
                onChange={handleChange}
                value={form.retype_email}
                type="email"
                required
                class="bg-white border border-black w-full"
              />
            </div>
            <div class="w-1/3 flex gap-2">
              <div class="w-1/2 flex justify-end">
                <label class="" for="redhat_username">
                  redhat.com username
                </label>
              </div>
              <input
                name="redhat_username"
                id="redhat_username"
                onChange={handleChange}
                value={form.redhat_username}
                type="text"
                class="bg-white border border-black w-full"
              />
            </div>
            <div class="w-1/3 flex gap-2">
              <div class="w-1/2 flex justify-end">
                <label class="" for="redhat_username">
                  *Country of Residence
                </label>
              </div>
              <select
                required
                class="w-full bg-gray-200 border border-black"
                name="country"
                onChange={handleChange}
                value={form.country}
                id="country"
              >
                <option value=""></option>
                <option value="Indonesia">Indonesia</option>
                <option value="UnitedStates">United States</option>
                <option value="India">India</option>
              </select>
            </div>
            <div class="w-1/3 flex gap-2">
              <div class="w-1/2 flex justify-end">
                <label class="" for="certification_number">
                  Certification Number
                </label>
              </div>
              <input
                name="certification_number"
                id="certification_number"
                type="text"
                onChange={handleChange}
                value={form.certification_number}
                class="bg-white border border-black w-full"
              />
            </div>
          </div>
          <div class="w-full pl-40 mt-2 flex gap-2">
            <input
              name="consent"
              id="consent"
              onChange={handleChange}
              value={form.consent}
              type="checkbox"
              class="bg-white border border-black"
            />
            <div class="flex justify-end">
              <label class="" for="consent">
                Please check here if this exam is being paid for buy your
                employer and you consent to your employer requesting a copy of
                your results.
              </label>
            </div>
          </div>
          <div class="flex justify-center mb-5">
            <button
              type="submit"
              class="px-3 mt-2 border-black font-bold py-1 bg-gray-300 border  text-center text-xs"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Registration;
