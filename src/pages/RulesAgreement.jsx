import React from "react";
import { useNavigate } from "react-router-dom";

function RulesAgreement() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/domain_info")
  }
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
        <button class="px-3 mt-2 font-bold py-1 bg-gray-300 border w-full text-center text-xs">
          Select Language
        </button>
      </div>
      <div class="w-11/12 bg-amber-100 px-10 pt-10">
        <h1 class="font-bold text-lg">Agreement.</h1>
        <form onSubmit={handleSubmit}>
          <p class="w-2/4 text-justify">
            First, RHCSA exam participants are expected to adhere to the
            security and integrity regulations of the exam. This includes a
            prohibition on bringing or using communication devices during the
            exam, as well as a ban on communicating with other participants.
            Cheating or other security violations can result in disqualification
            of the participant and the revocation of any certifications that may
            have been obtained previously.
            <br />
            <br />
            Second, participants are expected to understand and follow the
            exam's timing rules. The RHCSA exam has specific time constraints
            for completing each task. Participants are expected to manage their
            time efficiently and focus on each given task. Violations of the
            timing rules can result in suboptimal scores or even failure in the
            exam.
            <br />
            <br />
            Finally, before taking the exam, participants are advised to
            carefully read the exam guide and materials. This involves
            understanding the exam format, the types of tasks that may be given,
            and the knowledge and skills being assessed. Participants are
            expected to ensure that they have sufficient knowledge to answer
            questions and complete tasks successfully. Overall, RHCSA
            participants are expected to comply with exam ethics and demonstrate
            the practical abilities required to achieve this Red Hat
            certification.
          </p>
          <div class="w-full mt-2 flex gap-2">
            <input
              name="name"
              id="name"
              type="checkbox"
              required
              class="bg-white border border-black"
            />
            <div class="flex justify-end">
              <label class="" for="name">
                I agree with the applicable terms and regulations.
              </label>
            </div>
          </div>
          <div class="flex justify-start mb-5">
            <button
              type="submit"
              class="px-3 mt-2 border-black font-bold py-1 bg-gray-300 border text-center text-xs"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RulesAgreement;
