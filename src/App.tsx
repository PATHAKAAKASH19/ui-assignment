import FirstWidget from "./components/FirstWidget"
import SecondWidget from "./components/SecondWidget"

function App() {


  return (
    <div className=" bg-[#272C31] w-full px-15 py-22 max-lg:px-4 h-fit max-xl:px-4 max-2xl:px-6 transition-all duration-700 max-lg:py-30 max-2xl:h-screen">
      <div className="grid grid-cols-2 gap-10 justify-center items-center max-lg:grid-cols-1  max-2xl:gap-4">
        <div className="w-full  row-span-2 h-full rounded-[2em] bg-[#565758] max-lg:hidden"></div>
        <div>
          <FirstWidget></FirstWidget>
          <div className="border-[#313337] border-b-6 my-6 mx-14 rounded-[2em] drop-shadow-xl/50 max-lg:my-6 max-xl:my-5"></div>
          <SecondWidget></SecondWidget>
          <div className="border-[#313337] border-b-6 mt-6 mx-14 rounded-[2em]  drop-shadow-xl/50 max-lg:my-6   max-xl:my-5"></div>
        </div>
      </div>
    </div>
  );
}



export default App
