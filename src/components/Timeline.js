import style2 from "../styles/timeline.module.css";
import topborder from "../../public/images/timeline/TopBorder.svg";
import rightborder from "../../public/images/timeline/RightBorder.svg";
import leftborder from "../../public/images/timeline/LeftBorder.svg";
import bottomborder from "../../public/images/timeline/BottomBorder.svg";
import borderstyle from "../../public/images/timeline/BookBorderPixel.svg";
// importing mobile-border
import topbordermob from "../../public/images/timeline/TopBordermob.svg";

import leftbordermob from "../../public/images/timeline/LeftBordermob.svg";
import bottombordermob from "../../public/images/timeline/BottomBordermob.svg";
import borderstylemob from "../../public/images/timeline/BookBorderPixelmob.svg";
import ribbon from "../../public/images/timeline/RibbonBottom.svg";
import clock from "../../public/images/timeline/clock.svg";

function Timeline() {
  return (
    <div id="schedule" className={`p-10 mt-6 mb-6`}>
      <div className={`font-Minecraft text-4xl sm:text-7xl text-center p-4 text-black`}>
        EVENT TIMELINE
      </div>
      <div className="flex justify-center align-center p-6">
        <div
          className={`w-fit flex flex-wrap relative ${style2.orientationofbook}  `}
        >
          <div className=" -rotate-90 absolute top-[-452px] left-[465px] max-[990px]:hidden">
            <img src={topborder.src} alt="#" />
          </div>
          <div className="absolute top-[8px] left-0 max-[990px]:hidden">
            <img src={leftborder.src} alt="#" />
          </div>
          <div className="absolute top-[2px] right-0 max-[990px]:hidden">
            <img src={rightborder.src} alt="#" />
          </div>
          <div className="absolute bottom-0 left-[8px] max-[990px]:hidden">
            <img src={bottomborder.src} alt="#" />
          </div>
          <div className=" absolute top-[-13.6px] left-[-37.7px] max-[990px]:hidden">
            <img src={borderstyle.src} alt="" />
          </div>
          {/* mobile-border */}
          <div className={`absolute top-[8px] right-[0]  ${style2.display}`}>
            <img src={topbordermob.src} alt="#" />
          </div>
          <div
            className={`absolute top-[0] left-0 max-[990px]:blocks ${style2.display}`}
          >
            <img src={leftbordermob.src} alt="#" />
          </div>
          <div className={`absolute bottom-[-4px] left-[0] ${style2.display}`}>
            <img src={bottombordermob.src} alt="#" />
          </div>
          <div
            className={`absolute top-[-39px] right-[-16px] ${style2.display}`}
          >
            <img src={borderstylemob.src} alt="" />
          </div>
          {/* border-images */}
          <div
            className={`${style2.container} ${style2.borderleft}  ${style2.widthbook} ${style2.containertext} `}
          >
            <div className="flex justify-between">
              <div className={`${style2.daytext}`}>DAY1</div>{" "}
              <div className="flex text-black-200">24 FEB-2024</div>
            </div>
            <div className={` ${style2.borderbox}  ${style2.paddinginbox}`}>
              <div>Hackathon Opening Ceremony</div>{" "}
              <div className="flex">
                <div className="pt-[4px] mr-[4px]">
                  <img src={clock.src} alt="" />
                </div>
                <div>10:00 AM</div>
              </div>
            </div>
            <div className="card">
              <div
                className={` ${style2.borderbox}  ${style2.paddinginbox} relative`}
              >
                <div className="absolute top-[-7px] right-[18px]">
                  <img src={ribbon.src} alt="#" />
                </div>
                <div>Hackathon starts</div>
                <div className="flex">
                  <div className="pt-[4px] mr-[4px]">
                    <img src={clock.src} alt="" />
                  </div>
                  <div>11:00 AM</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className={` ${style2.borderbox}  ${style2.paddinginbox}`}>
                <div>Mentors Allotment</div>
                <div className="flex">
                  <div className="pt-[4px] mr-[4px]">
                    <img src={clock.src} alt="" />
                  </div>
                  <div>4:00 PM</div>
                </div>
              </div>
            </div>
            {/* <div className="card">
                <div className={` ${style2.borderbox}  ${style2.paddinginbox}`}>
                  <div>Hackathon registration starts</div>
                  <div className="flex">
                    <div className="pt-[4px] mr-[4px]">
                      <img src={clock.src} alt="" />
                    </div>
                    <div>10:00 AM</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className={` ${style2.borderbox}  ${style2.paddinginbox}`}>
                  <div>Hackathon registration starts</div>
                  <div className="flex">
                    <div className="pt-[4px] mr-[4px]">
                      <img src={clock.src} alt="" />
                    </div>
                    <div>10:00 AM</div>
                  </div>
                </div>
              </div> */}
            <div className="mx-auto">1/2</div>
          </div>

          <div
            className={`${style2.container}  ${style2.borderright}  ${style2.widthbook} ${style2.containertext}`}
          >
            <div className="flex justify-between">
              <div className={`${style2.daytext}`}>DAY2</div>{" "}
              <div className="text-black-200">25 FEB-2024</div>
            </div>
            <div className={` ${style2.borderbox}  ${style2.paddinginbox}`}>
              <div>Mid Night Evaluation</div>{" "}
              <div className="flex">
                <div className="pt-[4px] mr-[4px]">
                  <img src={clock.src} alt="" />
                </div>
                <div>1 : 00 AM</div>
              </div>
            </div>
            {/* <div className="card">
                <div className={` ${style2.borderbox}  ${style2.paddinginbox}`}>
                  <div>Hackathon registration starts</div>
                  <div className="flex">
                    <div className="pt-[4px] mr-[4px]">
                      <img src={clock.src} alt="" />
                    </div>
                    <div>10:00 AM</div>
                  </div>
                </div>
              </div> */}
            {/* <div className="card">
                <div className={` ${style2.borderbox}  ${style2.paddinginbox}`}>
                  <div>Hackathon registration starts</div>
                  <div className="flex">
                    <div className="pt-[4px] mr-[4px]">
                      <img src={clock.src} alt="" />
                    </div>
                    <div>10:00 AM</div>
                  </div>
                </div>
              </div> */}
            <div className="card">
              <div className={` ${style2.borderbox}  ${style2.paddinginbox}`}>
                <div>Final Submission</div>
                <div className="flex">
                  <div className="pt-[4px] mr-[4px]">
                    <img src={clock.src} alt="" />
                  </div>
                  <div>11:00 AM</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className={` ${style2.borderbox}  ${style2.paddinginbox}`}>
                <div>Results Announcement</div>
                <div className="flex">
                  <div className="pt-[4px] mr-[4px]">
                    <img src={clock.src} alt="" />
                  </div>
                  <div>2:00 PM</div>
                </div>
              </div>
            </div>
            <div className="mx-auto">2/2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Timeline;
