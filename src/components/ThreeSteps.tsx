import React from "react";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import AdsClickRoundedIcon from "@mui/icons-material/AdsClickRounded";
const ThreeSteps = () => {
  return (
    <div className="w-full mt-20  justify-items-center items-center">
      <p className="text-gray-600 mb-4">Three steps. Three minutes</p>
      <h1 className="text-gray-950 font-semibold text-4xl mb-8">
        Everything should be this easy.
      </h1>
      <div className="w-full grid grid-cols-3 p-24">
        <div>
          <QuestionAnswerRoundedIcon className="text-orange-300 mb-4 !text-[48px]" />
          <h2 className="text-gray-950 font-medium text-3xl mb-4">
            Answer questions
          </h2>
          <p className="text-gray-950 text-md text-pretty lg:text-balance mb-4">
            Getting insured is as easy as answering a few short questions about
            your home.
          </p>
        </div>
        <div>
          <FormatQuoteRoundedIcon className="text-teal-500 mb-4 !text-[48px]" />
          <h2 className="text-gray-950 font-medium text-3xl mb-4">
            Select a quote
          </h2>
          <p className="text-gray-950 text-md text-pretty lg:text-balance mb-4">
            Choose your quote and apply online. No hasslo,no paperwork, no
            application bpos.
          </p>
        </div>
        <div>
          <AdsClickRoundedIcon className="text-cyan-800 mb-4 !text-[48px]" />
          <h2 className="text-gray-950 font-medium text-3xl mb-4">
            Get registered
          </h2>
          <p className="text-gray-950 text-md text-pretty lg:text-balance mb-4">
            Congtribulations! You're complete this steps. And it feels so good.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeSteps;
