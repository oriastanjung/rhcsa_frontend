import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import RulesAgreement from "./pages/RulesAgreement";
import DomainInfo from "./pages/DomainInfo";
import ExamPage from "./pages/ExamPage";
import { TimerProvider } from "./context/TimeContext";
import Question1 from "./pages/Question1";
import ImportantConfiguration from "./pages/ImportantConfiguration";
import Finish from "./pages/Finish";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import Question4 from "./pages/Question4";
import Question5 from "./pages/Question5";
import Question6 from "./pages/Question6";
import Question7 from "./pages/Question7";
import Question8 from "./pages/Question8";
import Question9 from "./pages/Question9";
import Question10 from "./pages/Question10";
import Question11 from "./pages/Question11";
import Question12 from "./pages/Question12";
import Question13 from "./pages/Question13";
import Question14 from "./pages/Question14";
import Question15 from "./pages/Question15";
import Question16 from "./pages/Question16";
import Question17 from "./pages/Question17";
import Question18 from "./pages/Question18";
import Question19 from "./pages/Question19";
import Question20 from "./pages/Question20";
import Question21 from "./pages/Question21";
import Question22 from "./pages/Question22";
import Question23 from "./pages/Question23";
import Question24 from "./pages/Question24";
import Question25 from "./pages/Question25";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />}></Route>
        <Route path="/finish" element={<Finish />}></Route>
        <Route path="/rules_agreement" element={<RulesAgreement />}></Route>
        <Route path="/domain_info" element={<DomainInfo />}></Route>
        <Route
          path="/exam"
          element={
            <TimerProvider>
              <ExamPage />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/important-configuration"
          element={
            <TimerProvider>
              <ImportantConfiguration />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q1"
          element={
            <TimerProvider>
              <Question1 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q2"
          element={
            <TimerProvider>
              <Question2/>
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q3"
          element={
            <TimerProvider>
              <Question3/>
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q4"
          element={
            <TimerProvider>
              <Question4 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q5"
          element={
            <TimerProvider>
              <Question5 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q6"
          element={
            <TimerProvider>
              <Question6 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q7"
          element={
            <TimerProvider>
              <Question7 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q8"
          element={
            <TimerProvider>
              <Question8 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q9"
          element={
            <TimerProvider>
              <Question9 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q10"
          element={
            <TimerProvider>
              <Question10 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q11"
          element={
            <TimerProvider>
              <Question11 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q12"
          element={
            <TimerProvider>
              <Question12 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q13"
          element={
            <TimerProvider>
              <Question13 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q14"
          element={
            <TimerProvider>
              <Question14 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q15"
          element={
            <TimerProvider>
              <Question15 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q16"
          element={
            <TimerProvider>
              <Question16 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q17"
          element={
            <TimerProvider>
              <Question17 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q18"
          element={
            <TimerProvider>
              <Question18 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q19"
          element={
            <TimerProvider>
              <Question19 />
            </TimerProvider>
          }
        ></Route>
         <Route
          path="/q20"
          element={
            <TimerProvider>
              <Question20 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q21"
          element={
            <TimerProvider>
              <Question21 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q22"
          element={
            <TimerProvider>
              <Question22 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q23"
          element={
            <TimerProvider>
              <Question23 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q24"
          element={
            <TimerProvider>
              <Question24 />
            </TimerProvider>
          }
        ></Route>
        <Route
          path="/q25"
          element={
            <TimerProvider>
              <Question25 />
            </TimerProvider>
          }
        ></Route>






      </Routes>
    </>
  );
}

export default App;
