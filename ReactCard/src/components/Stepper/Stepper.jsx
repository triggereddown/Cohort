import React from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div>
      <div className="stepperBody">
        <div className="mapForStepper flex flex-col items-center">
          <h2 className="py-4 text-4xl font-bold ">
            Stepper Component Mini-Project
          </h2>
          <div className="flex items-center gap-6  py-4">
            {steps.map((item, idx) => {
              let circleClass = "bg-gray-300 text-gray-600";
              let lineClass = "bg-gray-300";

              if (item.step < currentStep) {
                circleClass = "bg-green-500 text-white";
                lineClass = "bg-green-500";
              } else if (item.step === currentStep) {
                circleClass = "bg-blue-600 text-white";
                lineClass = "bg-gray-300";
              }
              return (
                <div className=" flex items-center" key={idx}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${circleClass}`}
                    >
                      {item.step}
                    </div>
                    <div className="mt-2 text-sm font-medium">{item.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
