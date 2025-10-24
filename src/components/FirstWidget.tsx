import React, { useState, useRef, useEffect, act } from "react";

export default function FirstWidget() {
  const [activeTab, setActiveTab] = useState("aboutMe");
  const [position, setPosition] = useState("left-1") 


  const changeTab = (tabname:string) => {

    setActiveTab(tabname)
  }


  const changePosition = (activeTab:string) => {
       
    if (activeTab === "aboutMe") {
      setPosition("left-1")
    } else if (activeTab === "experiences") {
      setPosition("left-1/3")
    } else {
      setPosition("left-2/3")
    }
  }
 
  useEffect(() => {
     
    changePosition(activeTab)
  }, [activeTab])

  return (
    <div className="w-full bg-[#363C43] rounded-[2em] py-7 flex flex-col gap-8 drop-shadow-xl/80 ">
      <div className=" px-15 max-lg:pl-3 max-lg:pr-3 max-xl:px-3  max-2xl:px-5">
        <div className="flex border w-full py-2  justify-evenly bg-[#171717] rounded-[1.5em] shadow-lg relative  gap-2 max-xl:gap-0 ">
          <div
            className={`absolute  top-2 bottom-2  bg-gray-700 rounded-2xl transition-all duration-600 ease-in-out ${position} shadow-[30px_30px_40px_rgba(0,0,0,0.9)] w-1/3 `}
          />
          <div
            className="w-1/3  text-center  relative inline-block group px-10 py-3 rounded-2xl "
            onClick={() => changeTab("aboutMe")}
          >
            <span
              className={`absolute left-0 bottom-0 h-full w-0 bg-white/5 ${
                activeTab !== "aboutMe"
                  ? "transition-all duration-400 group-hover:w-full cursor-pointer rounded-2xl"
                  : ""
              }`}
            ></span>
            <h1
              className={`text-[18px] max-lg:text-[14px] max-2xl:text-[16px] line-clamp-1 ${
                activeTab !== "aboutMe" ? "text-gray-400" : "text-white"
              } font-medium`}
            >
              About Me
            </h1>
          </div>
          <div
            className="w-1/3  text-center  relative inline-block group px-10 py-3 rounded-2xl"
            onClick={() => changeTab("experiences")}
          >
            <span
              className={`absolute left-0 bottom-0 h-full w-0 bg-white/5 ${
                activeTab !== "experiences"
                  ? "transition-all duration-400 group-hover:w-full cursor-pointer rounded-2xl"
                  : ""
              }`}
            ></span>
            <h1
              className={`text-[18px] max-lg:text-[14px] max-2xl:text-[16px]  ${
                activeTab !== "experiences" ? "text-gray-400" : "text-white"
              } font-medium`}
            >
              Experiences
            </h1>
          </div>
          <div
            className="w-1/3 text-center  relative inline-block group px-10 py-3 rounded-2xl "
            onClick={() => changeTab("recommended")}
          >
            <span
              className={`absolute left-0 bottom-0 h-full w-0 bg-white/5 ${
                activeTab !== "recommended"
                  ? "transition-all duration-400 group-hover:w-full cursor-pointer rounded-2xl"
                  : ""
              }`}
            ></span>
            <h1
              className={`text-[18px]  max-lg:text-[14px] max-2xl:text-[16px] ${
                activeTab !== "recommended" ? "text-gray-400" : "text-white"
              } font-medium`}
            >
              Recommended
            </h1>
          </div>
        </div>
      </div>
      <div className="pl-15 pr-5  max-lg:pl-5 max-lg:pr-3 max-xl:pr-2 max-xl:pl-3 max-2xl:pl-6">
        <div className="text-[20px] text-[#969696] gap-8 flex flex-col overflow-auto h-58  scrollbar-thumb-[#565758]  scrollbar-thumb-rounded-full scrollbar-thin  pr-10 pl-2 max-lg:text-[17px] max-lg:h-45 max-2xl:text-[17px]">
          <p className="">
            {" "}
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
          </p>
          <p className="">
            I was born and raised in Albany, NY& have been living in Santa Carla
            for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a long very
            long paragraph and this is so long that nobody wanna read this
            paragraph did you understand etc and this is long very long please
            dont't read it I was born and raised in Albany, NY& have been living
            in Santa Carla for the past 10 years my wife Tiffany and my 4 year
            old twin daughters- Emma and Ella. Both of them are just starting
            school, so my calender is usually blocked between 9-10 AM. This is a
            long very long paragraph and this is so long that nobody wanna read
            this paragraph did you understand etc and this is long very long
            please dont't read it school, so my calender is usually blocked
            between 9-10 AM. This is a long very long paragraph and this is so
            long that nobody wanna read this paragraph did you understand etc
            and this is long very long please dont't read it
          </p>
        </div>
      </div>
    </div>
  );
}
