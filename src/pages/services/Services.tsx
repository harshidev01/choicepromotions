/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdOutlineArrowOutward } from "react-icons/md";
import NavBar from "../../ui/NavBar";
import Animate from "../../utils/Animate";
import { categoryCards, skillsWithIcons } from "../../utils/data";
import { GiPolarStar } from "react-icons/gi";
import { FaAngleDown, FaChevronRight } from "react-icons/fa";
import BottomNav from "../../ui/BottomNav";
import { useEffect } from "react";
import { useAppContext } from "../../utils/AppContext";
import { useNavigate } from "react-router-dom";

function Services() {
  const {  dispatch } = useAppContext();
  const navigate = useNavigate();

  
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({
      type: "setPage",
      payload: "services",
    });
    navigate("/" + "services");

  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <NavBar />

      <div className="px-8 mt-[7vh]">
        <div className="text-center flex flex-col items-center justify-center lg:h-[40vh] ">
          <Animate delay={200} type="slideLeft">
            {" "}
            <div className="text-[50px] font-semibold">Services</div>
          </Animate>
          <div>
            <Animate delay={400} type="slideLeft">
              {" "}
              <p className="lg:max-w-[40vw] lg:text-xs">
                Comprehensive Website Services to Ignite Your Online Success.
                Empower Your Business with Powerful Online Services from our
                Website.
              </p>
            </Animate>
          </div>
        </div>
        <div className="mb-[5vh] mt-[5vh] px-6 items-center justify-center flex flex-col lg:flex-row lg:gap-4">
          <div className=" flex flex-col  lg:max-w-[40vw] gap-5 text-center ">
            <Animate delay={600} type="slideLeft">
              <div className="text-3xl font-semibold text-start lg:text-4xl">
                One-stop digital marketing services 🎯
              </div>
            </Animate>
            <Animate delay={800} type="slideLeft">
              <p className="mt-3 text-start border-l-2 pl-3 border-primary text-lg lg:text-sm lg:max-w-[30vw]">
                Get benefits with the best Digital Marketing Service with unique
                strategies. Improve the search visibility of your website with
                the proper techniques of our digital marketing experts. Boost
                sales and optimize your page for more user engagement.
              </p>
            </Animate>
          </div>
          <div className="mt-10">
            <Animate delay={800} type="slideUp">
              <div>
                <img
                  src="peoples.jpg"
                  className="lg:h-[40vh] lg:w-[20vw] lg:rounded-md"
                />
              </div>
            </Animate>
          </div>
        </div>
        <div className=" mt-[5vh] flex flex-col w-full px-6 justify-center items-center text-center mb-[10vh]">
          <div>
            <Animate delay={100} type="slideLeft">
              <div className="flex lg:max-w-[40vw]   text-3xl">
                Here are Numerous Topics That Will Enhance Your Skills
              </div>
            </Animate>
          </div>
          <div className="mt-[7vh] flex justify-center w-full ">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center ">
              {skillsWithIcons.map(
                (item: { skill: string; icon: any; color: string }, index) => (
                  <Animate delay={index * 100} key={index}>
                    <div className="flex items-center gap-3 border  py-3 rounded-full justify-center text-black lg:hover:bg-foreground/90 bg-foreground cursor-pointer px-4">
                      <item.icon
                        style={{ color: item?.color }}
                        className="text-3xl"
                      />
                      <span className="text-xs text-nowrap lg:text-lg font-medium">
                        {item?.skill}
                      </span>
                    </div>
                  </Animate>
                )
              )}
            </div>
          </div>
        </div>
        <div className="mb-[5vh] mt-[5vh] flex flex-col items-center justify-center px-6">
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <Animate delay={200} type="slideLeft">
              <div className="text-3xl font-semibold">Our Services</div>
            </Animate>
            <Animate delay={400} type="slideLeft">
              <p className="m-2 px-3 lg:max-w-[50vw]">
                Comprehensive Website Services to Ignite Your Online Success.
                Empower Your Business with Powerful Online Services from our
                Website.
              </p>
            </Animate>
          </div>
          <div className="mt-[5vh] relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryCards.map((card, index) => (
              <Animate key={index} delay={index * 100} type="slideUp">
                <div className="bg-foreground text-black p-6 lg:p-3 rounded-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center w-20 h-20 bg-foreground/40 rounded-full">
                      <card.icon
                        className="w-10 h-10"
                        style={{ color: card.iconColor }}
                      />
                    </div>
                    <div className="bg-black -mt-14 -mr-2 lg:-mt-10 lg:-mr-1 cursor-pointer lg:hover:bg-black/90 ">
                      <MdOutlineArrowOutward className="text-4xl m-1 text-primary" />
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-1">
                    <h3 className="text-3xl lg:text-xl font-semibold">
                      {card.title}
                    </h3>
                  </div>

                  <img
                    src={card.image}
                    alt={card.title}
                    className="mt-6 rounded-md object-cover  h-[20vh] lg:h-[15vh] w-full"
                  />
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-[5vh] w-full bg-primary text-black py-3 flex justify-between lg:px-10 flex-col lg:flex-row items-center gap-3 lg:gap-0 ">
        <div>
          <Animate delay={100} type="slideUp">
            <div className="flex items-center  text-2xl font-semibold gap-4 w-[80vw] lg:w-fit ">
              <GiPolarStar className="mr-3 w-4 h-4" /> Creative People
            </div>
          </Animate>
        </div>

        <div>
          <Animate delay={100} type="slideUp">
            <div className="flex items-center  text-2xl font-semibold gap-4 w-[80vw] lg:w-fit ">
              <GiPolarStar className="mr-3 w-4 h-4" /> Good Reviews
            </div>
          </Animate>
        </div>
        <div>
          <Animate delay={100} type="slideUp">
            <div className="flex items-center  text-2xl font-semibold gap-4 w-[80vw] lg:w-fit ">
              <GiPolarStar className="mr-3 w-4 h-4" /> Awesome Design
            </div>
          </Animate>
        </div>
        <div>
          <Animate delay={100} type="slideUp">
            <div className="flex items-center  text-2xl font-semibold gap-4 w-[80vw]  lg:w-fit">
              <GiPolarStar className="mr-3 w-4 h-4" /> Fast Delivery
            </div>
          </Animate>
        </div>
      </div>
      <Animate delay={300} type="slideLeft">
        <div className="text-3xl mt-[5vh] font-semibold text-center">
          Simple Step Follow to Complete Work
        </div>
      </Animate>
      <div className="mt-[5vh] flex flex-col gap-5 lg:flex-row items-center justify-center mb-[5vh] px-6">
        <div>
          <Animate delay={200} type="slideDown">
            <div className="bg-slate-800 bg-opacity-70 relative z-[999] p-5  flex py-8 flex-col gap-5 items-center justify-center lg:max-w-[20vw]">
              <div className="flex flex-col gap-3 text-center border-b border-foreground/10 pb-7 w-full ">
                <div className="text-primary text-xl">Step 01</div>
                <div className="text-foreground font-semibold">
                  Web Inspection
                </div>
              </div>
              <div className="text-foreground  text-center text-sm">
                Proper inspection of a website with the best tools for the next
                stage.
              </div>
            </div>
          </Animate>
        </div>
        <div>
          <Animate delay={300} type="slideDown">
            <FaChevronRight className="w-5 h-5 text-primary/50 mt-3 hidden lg:flex" />
            <FaAngleDown className="w-5 h-5 text-primary/50 mt-3 flex lg:hidden" />
          </Animate>
        </div>

        <div>
          <Animate delay={450} type="slideDown">
            <div className="bg-primary b relative z-[999] p-5  flex py-8 flex-col gap-5 items-center justify-center lg:max-w-[20vw]">
              <div className="flex flex-col gap-3 text-center border-b border-black/20 pb-7 w-full ">
                <div className="text-black text-xl">Step 02</div>
                <div className="text-black font-semibold">
                  Deep Optimization
                </div>
              </div>
              <div className="text-black  text-center text-sm">
                Optimizing the website with special strategies by covering all
                its needs.
              </div>
            </div>
          </Animate>
        </div>

        <div>
          <Animate delay={600} type="slideDown">
            <FaChevronRight className="w-5 h-5 text-primary/50 mt-3 hidden lg:flex" />
            <FaAngleDown className="w-5 h-5 text-primary/50 mt-3 flex lg:hidden" />
          </Animate>
        </div>

        <div>
          <Animate delay={750} type="slideDown">
            <div className="bg-slate-800 bg-opacity-70 relative z-[999] p-5  flex py-8 flex-col gap-5 items-center justify-center lg:max-w-[20vw]">
              <div className="flex flex-col gap-3 text-center border-b border-foreground/10 pb-7 w-full ">
                <div className="text-primary text-xl">Step 01</div>
                <div className="text-foreground font-semibold">
                  Analyze Growth
                </div>
              </div>
              <div className="text-foreground  text-center text-sm">
                Expert analysis of website data for deploying a strategy for
                further growth.
              </div>
            </div>
          </Animate>
        </div>
      </div>
      <div className="mb-[3vh] mt-[5vh]">
      <BottomNav/>
      
      </div>
    </div>
  );
}
export default Services;
