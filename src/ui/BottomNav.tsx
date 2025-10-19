import { FaArrowUp } from "react-icons/fa";
import Animate from "../utils/Animate";

function BottomNav() {
  return (
    <div className="flex  flex-col items-center ">
      <div className="flex flex-col  gap-4 items-center justify-center">
        <Animate delay={100} type="slideDown">
          <div className=" text-3xl lg:text-[50px] text-center  font-semibold lg:max-w-[40vw] leading-[1.1]">
            Get Ready to Grow Your Business
          </div>
        </Animate>
        <div className="flex flex-col  lg:flex-row gap-4  items-center ">
          <div
            onClick={() => {
              window.location.href =
                "mailto:choicepromotions@gmail.com?subject=hey&body=Hello!";
            }}
          >
            <Animate delay={200} type="slideDown">
              <div className="transition-all cursor-pointer lg:hover:text-black lg:hover:bg-primary flex items-center gap-3 duration-700 ease-in-out  border border-foreground/30  w-fit  px-4 py-3 rounded-full">
                choicepromotions@gmail.com <FaArrowUp />
              </div>
            </Animate>
          </div>

          <div onClick={()=>{
            window.location.href = "tel:9390558027"
          }}>
            <Animate delay={300} type="slideDown">
              <div className="transition-all cursor-pointer lg:hover:text-black lg:hover:bg-primary flex items-center gap-3 duration-700 ease-in-out  border border-foreground/30  w-fit  px-4 py-3 rounded-full">
                +91 9908927901 <FaArrowUp />
              </div>
            </Animate>
          </div>
        </div>
      </div>

      <div>
        <Animate delay={400} type="slideDown">
          <div className="text-foreground/30 mt-[4vh] w-fit text-xs text-center  ">
            © 2025 Choice Promotions. All Rights Reserved.
          </div>
        </Animate>
      </div>
    </div>
  );
}

export default BottomNav;
