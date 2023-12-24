import React, { useEffect, useState } from "react";
import RevisitDone from "../component/revisitDone";
import Cookies from "js-cookie";
import SideBarTimer from "../context/SideBarTimer";

function ExamPage() {
  const initialDataState = Cookies.get("examData")
    ? JSON.parse(Cookies.get("examData"))
    : {
        configuration: "",
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
        question6: "",
        question7: "",
        question8: "",
        question9: "",
        question10: "",
        question11: "",
        question12: "",
        question13: "",
        question14: "",
        question15: "",
        question16: "",
        question17: "",
        question18: "",
        question19: "",
        question20: "",
        question21: "",
        question22: "",
        question23: "",
        question24: "",
        question25: "",
      };

  const [data, setData] = useState(initialDataState);
  const handleRevisitDoneChange = (value, dataName) => {
    setData((prevData) => ({
      ...prevData,
      [dataName]: value,
    }));
    console.log(dataName, "dataname");
    console.log(data, "data");
    // Save the entire updated state to cookies
    Cookies.set(
      "examData",
      JSON.stringify({
        ...data,
        [dataName]: value,
      })
    );
  };



  useEffect(() => {
    console.log("data >> ", data);
  }, [data]);
  return (
    <section class="w-full flex gap-5">
      <SideBarTimer />

      <div class="w-11/12 bg-amber-100 px-10 pt-10 pb-20">
        <h1 class="font-bold text-lg">RHCSA Exam</h1>
        <p className="my-2">
          <span className="font-bold">Please Review</span> the{" "}
          <span className="italic">Important Configuration Information</span>{" "}
          section below for information on your exam environment.
        </p>
        <p className="w-1/2">
          As a reminder, please be aware that you are not permitted to
          communicate with other examinees during the course of this exam. You
          are also prohibited from connecting to the hosts of other examinees.
          The testing system and the network will be monitored, and misuse of
          either will result in a grade of zero on the exam.
        </p>
        <p className="mt-3 w-1/2">
          Perform the task listed below. You may want to read the entire list
          before you begin. These items will be reported as a single score. You
          must score 210 points or higher, out of 300, on these task in order to
          earn certification.
        </p>
        <hr className="border-black mt-6 mb-2" />
        <h1 class="font-bold text-lg">Configuration Information</h1>
        <p className="mt-3">
          Before you begin, you should review some general configuration
          information outlined in the following link :{" "}
        </p>
        <div className="mt-5 pl-8">
          <RevisitDone
            name={`configuration`}
            key={"configuration"}
            data={data["configuration"]}
            link={"/important-configuration"}
            nameLink={"Important configuration information"}
            isLarge={true}
            onChange={(value) => handleRevisitDoneChange(value, `configuration`)}
          />
        </div>
        <div>
          <hr className="border-black mt-6 mb-2" />

          <p className="mt-3 mb-10">
            {" "}
            Perform the following tasks on node1.network250.example.com
          </p>
          <div className="mt-5 pl-8">
            {/* list kumpulan pertanyaan */}
            <RevisitDone
              name={`question1`}
              key={"question1"}
              data={data["question1"]}
              link={"/q1"}
              nameLink={"1. Configure the network"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question1")}
            />
            <RevisitDone
              name={`question2`}
              key={"question2"}
              data={data["question2"]}
              link={"/q2"}
              nameLink={"2. Configure the repository"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question2")}
            />
            <RevisitDone
              name={`question3`}
              key={"question3"}
              data={data["question3"]}
              link={"/q3"}
              nameLink={"3. Configure the selinux"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question3")}
            />
            <RevisitDone
              name={`question4`}
              key={"question4"}
              data={data["question4"]}
              link={"/q4"}
              nameLink={"4. Create the following users, groups and group memberships"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question4")}
            />
            <RevisitDone
              name={`question5`}
              key={"question5"}
              data={data["question5"]}
              link={"/q5"}
              nameLink={"5. Create a collaborative directory"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question5")}
            />
            <RevisitDone
              name={`question6`}
              key={"question6"}
              data={data["question6"]}
              link={"/q6"}
              nameLink={"6. Automount the remote user home directory"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question6")}
            />
            <RevisitDone
              name={`question7`}
              key={"question7"}
              data={data["question7"]}
              link={"/q7"}
              nameLink={"7. Configure Crontab"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question7")}
            />
            <RevisitDone
              name={`question8`}
              key={"question8"}
              data={data["question8"]}
              link={"/q8"}
              nameLink={"8. Configure your system as NTP client"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question8")}
            />
            <RevisitDone
              name={`question9`}
              key={"question9"}
              data={data["question9"]}
              link={"/q9"}
              nameLink={"9. Locate the files"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question9")}
            />
            <RevisitDone
              name={`question10`}
              key={"question10"}
              data={data["question10"]}
              link={"/q10"}
              nameLink={"10. Find the string"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question10")}
            />
            <RevisitDone
              name={`question11`}
              key={"question11"}
              data={data["question11"]}
              link={"/q11"}
              nameLink={"11. Create a user account"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question11")}
            />
            <RevisitDone
              name={`question12`}
              key={"question12"}
              data={data["question12"]}
              link={"/q12"}
              nameLink={"12. Create a archive files"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question12")}
            />
            <RevisitDone
              name={`question13`}
              key={"question13"}
              data={data["question13"]}
              link={"/q13"}
              nameLink={"13. Build a container image"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question13")}
            />
            <RevisitDone
              name={`question14`}
              key={"question14"}
              data={data["question14"]}
              link={"/q14"}
              nameLink={"14. Configure the container as a system service"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question14")}
            />
            <RevisitDone
              name={`question15`}
              key={"question15"}
              data={data["question15"]}
              link={"/q15"}
              nameLink={"15. Configure default permissions"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question15")}
            />
            <RevisitDone
              name={`question16`}
              key={"question16"}
              data={data["question16"]}
              link={"/q16"}
              nameLink={"16. Set the Password expire date "}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question16")}
            />
            <RevisitDone
              name={`question17`}
              key={"question17"}
              data={data["question17"]}
              link={"/q17"}
              nameLink={"17. Configure sudoers"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question17")}
            />
            <RevisitDone
              name={`question18`}
              key={"question18"}
              data={data["question18"]}
              link={"/q18"}
              nameLink={"18. Configure the application"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question18")}
            />
            <RevisitDone
              name={`question19`}
              key={"question19"}
              data={data["question19"]}
              link={"/q19"}
              nameLink={"19. Create the shell script"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question19")}
            />
          </div>
        </div>
        <div>
          <hr className="border-black mt-6 mb-2" />

          <p className="mt-3 mb-10">
            {" "}
            Perform the following tasks on node2.network250.example.com
          </p>
          <div className="mt-5 pl-8">
            {/* list kumpulan pertanyaan */}
            <RevisitDone
              name={`question20`}
              key={"question20"}
              data={data["question20"]}
              link={"/q20"}
              nameLink={"20. Reset the root password"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question20")}
            />
            <RevisitDone
              name={`question21`}
              key={"question21"}
              data={data["question21"]}
              link={"/q21"}
              nameLink={"21. Configure the repository"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question21")}
            />
            <RevisitDone
              name={`question22`}
              key={"question22"}
              data={data["question22"]}
              link={"/q22"}
              nameLink={"22. Resize the logical volume"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question22")}
            />
            <RevisitDone
              name={`question23`}
              key={"question23"}
              data={data["question23"]}
              link={"/q23"}
              nameLink={"23. Create a swap partition"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question23")}
            />
            <RevisitDone
              name={`question24`}
              key={"question24"}
              data={data["question24"]}
              link={"/q24"}
              nameLink={"24. Create a logical volume"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question24")}
            />
            <RevisitDone
              name={`question25`}
              key={"question25"}
              data={data["question25"]}
              link={"/q25"}
              nameLink={"25. Configure the tuning system"}
              // isLarge={true}
              onChange={(value) => handleRevisitDoneChange(value, "question25")}
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExamPage;
