import React, { useState, useRef} from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconPlus } from "@tabler/icons-react";

export default function SecondWidget() {
  const [images, setImages] = useState([
    "/img.webp",
    "/img.webp",
    "/img.webp",
    "/img.webp",
  ]);

  const [isClick, setIsClick] = useState(false)


  



  const scrollRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImages((prev) => [...prev, URL.createObjectURL(file)]);
    }
   
  }





  

  const scroll = (direction: "left" | "right") => {
    setIsClick(true)
   if (scrollRef.current) {
     const scrollAmount = 300; 
     scrollRef.current.scrollBy({
       left: direction === "left" ? -scrollAmount : scrollAmount,
       behavior: "smooth",
     });
   }
    
    setIsClick(false)
 };

  return (
    <div
      className="w-full bg-[#363C43]  rounded-[2em] px-15 py-6 flex flex-col  
    drop-shadow-xl/80  m max-lg:px-9 max-xl:px-5 max-2xl:px-8  "
    >
      <div className="flex justify-between items-center">
        <h1 className="px-12 bg-black text-white py-4 rounded-[1em] text-[20px] max-2xl:px-8 max-2xl:text-[14px] max-2xl:rounded-[1em] max-2xl:font-medium ">
          Gallary
        </h1>
        <div className="flex gap-9">
          <label
            className="font-bold px-8 py-4 text-white rounded-[2em] shadow-[8px_8px_10px_rgba(0,0,0,0.7),inset_2px_2px_4px_rgba(255,255,255,0.2),-2px_-2px_4px_rgba(255,255,255,0.2)] cursor-pointer flex justify-center items-center gap-1 max-2xl:px-5 max-2xl:py-3 max-2xl:text-[12px]  "
            htmlFor="file-upload"
          >
            <div className="size-4">
              <IconPlus className="size-4 font-bold"></IconPlus>
            </div>
            ADD IMAGE
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
          </label>
          <div className="flex justify-center items-center gap-5">
            <div
              className="size-12  rounded-[50%] flex justify-center items-center bg-slate-900 shadow-[8px_8px_10px_rgba(0,0,0,0.7),inset_2px_2px_4px_rgba(255,255,255,0.2),-2px_-2px_4px_rgba(255,255,255,0.2)] hover:bg-slate-950 transition-transform duration-300 cursor-pointer max-2xl:size-9  active:bg-linear-to-br active:from-sky-300 active:to-zinc-900"
              onClick={() => scroll("left")}
            >
              <IconArrowNarrowLeft className="text-gray-400 size-7 max-2xl:size-5" />
            </div>
            <div
              className={`size-12  rounded-[50%] flex justify-center items-center bg-slate-900 shadow-[4px_4px_2px_rgba(0,0,0,0.4),inset_2px_2px_4px_rgba(255,255,255,0.2),-2px_-2px_4px_rgba(255,255,255,0.2)]  hover:bg-slate-950 transition-transform duration-300 cursor-pointer  max-2xl:size-9  active:bg-linear-to-br active:from-sky-300 active:to-zinc-900" `}
              onClick={() => scroll("right")}
            >
              <IconArrowNarrowRight className="text-gray-400 size-7  max-2xl:size-5" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex  gap-5 w-full  scroll-smooth snap-x snap-mandatory pt-12 px-3 overflow-x-hidden relative scrollbar-none transition-all duration-900 ease-in-out max-lg:gap-8 max-2xl:gap-5 max-2xl:px-1 max-2xl:pt-12 "
        ref={scrollRef}
      >
        {images.length &&
          images.map((src: string, index: number) => (
            <div
              className="rounded-[1em]  cursor-pointer w-50 shrink-0 max-lg:rounded-[0.8em] max-lg:w-48 max-2xl:w-45 "
              key={index}
            >
              <img
                src={src}
                alt=""
                className="rounded-[2em] grayscale hover:-rotate-3 transition-transform duration-600 hover:scale-110 hover:grayscale-0 hover:shadow-[10px_0px_80px_rgba(0,0,0,0.8)] ease-in-out hover:translate-x-2 hover:-translate-y-4 hover:translate-z-8 object-cover max-lg:rounded-[0.8em]"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
