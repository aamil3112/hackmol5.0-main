import CardHolder from "./CardHolder";
import leftArrow from "../../../public/images/leftArrow.svg";
import rightArrow from "../../../public/images/rightArrow.svg";

export default function JudgesSection() {
  return (
    <>
      <div id='judges' className="relative h-fit w-full">
        <div className="relative w-[80%] h-fit flex flex-col justify-center items-center left-[10%]">
          <div className="flex relative text-center font-Minecraft font-normal text-7xl pt-20 pb-8">
            JUDGES
          </div>
          <CardHolder />
          <div className="flex relative justify-end w-[67rem] pt-8 pb-12">
            <div className="relative w-[114px] h-[45px] flex flex-row gap-x-6 right-96 lg:right-0 md:right-48">
                {/* <img className="relative flex" src={leftArrow.src} /> */}
                {/* <img className="relative flex" src={rightArrow.src} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}