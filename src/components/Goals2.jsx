import React from "react";

const Goals2 = () => {
  return (
    <div className="mt-11 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-start gap-6">
        {/* Yellow Circle */}

        {/* Text Content */}
        <div className="flex flex-col tracking-wider ">
          <div className="flex flex-col  ">
            <div className="flex justify-end gap-4  ">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex-shrink-0" />
              <div className="text-2xl sm:text-3xl  md:text-4xl lg:text-5xl font-semibold leading-tight">
                Empowering Vulnerable
              </div>
            </div>
            <div className="text-2xl  mt-4 sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Communities Through Sustainable
            </div>
            <div className="text-2xl   mt-4 sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Development and Social Equity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Goals2;
