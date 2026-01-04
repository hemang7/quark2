import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicroscope,
  faHandHoldingHand,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  {
    stat: <FontAwesomeIcon icon={faUserDoctor} />,
    text: "Qualified Professionals",
  },
  { stat: <FontAwesomeIcon icon={faMicroscope} />, text: "Modern Equipment" },
  {
    stat: <FontAwesomeIcon icon={faHandHoldingHand} />,
    text: "24x7 Customer Support",
  },
];

const Stats = () => {
  return (
    <div className="w-screen h-80" style={{ marginTop: 50 }}>
      <div className="relative w-[90%] mx-auto rounded-sm p-5">
        <h4 className="mb-4 w-[100%] mx-auto text-center text-3xl sm:text-4xl font-bold text-black">
          Trusted for excellence by clients.
        </h4>

        <hr className="w-48 h-1 mx-auto mb-12 bg-blue-300" />

        <div className="absolute left-1/2 transform -translate-x-1/2 w-full sm:w-[105%] flex rounded-md shadow-md bg-white">
          {stats.map(({ stat, text }, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col justify-center items-center border border-gray-200 p-5 sm:p-12"
            >
              <div className="font-bold sm:mb-5 text-lg sm:text-3xl text-blue-500">
                {stat}
              </div>
              <div className="font-medium text-center sm:mt-2 mt-3 text-sm sm:text-2xl">
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Stats;
