import "./App.css";
import axios from "axios";
import { useState } from "react";

const url = "https://api.adviceslip.com/advice";

const App = () => {
  const [advice, setAdvice] = useState("Tell it like it is");
  const [adviceId, setAdviceId] = useState("1");

  const fetchAdvice = async () => {
    try {
      axios.get(url).then((res) => {
        setAdvice(res.data.slip.advice);
        setAdviceId(res.data.slip.id);
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <section className="bgColor3 lg:h-[500px] lg:w-[500px] h-[384px] w-96 rounded-lg text-center duration-300">
        <p className="mt-10 color2 spacing1 text-sm lg:text-lg">
          ADVICE #{adviceId}
        </p>
        <div className="h-full flex items-center">
          {/* <div className="h-[1px] absolute mt-[130px] lg:mt-[180px] w-[318px] lg:w-[435px] mx-8 f bg-gray-300 duration-300"></div> */}
          <svg
            className="absolute ml-11 mt-[60px] lg:hidden"
            width="295"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
          <svg
            className="absolute hidden mt-[80px] lg:block ml-7"
            width="444"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>

          <button
            className="bgColor2 absolute ml-[158px] lg:ml-[201px] rounded-full mt-[265px] lg:mt-[360px] lg:h-[100px] lg:w-[100px] h-[70px] w-[70px] hover:shadow-[0_5px_40px_-5px_rgba(0,0,0,0.4)] hover:shadow-cyan-300 duration-300"
            onClick={fetchAdvice}
          >
            <svg
              className="mx-auto scale-110 hover:scale-125 hover:lg:scale-150 duration-200"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </button>
          <div className="flex w-full justify-center items-center">
            <p className="mx-4 lg:mx-8 text-center mt-[-140px] lg:mt-[-165px] text-3xl lg:text-5xl duration-200 color1">
              "{advice}"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
