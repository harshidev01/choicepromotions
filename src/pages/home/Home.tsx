/* eslint-disable @typescript-eslint/no-explicit-any */
import NavBar from "../../ui/NavBar";
import { GoArrowRight } from "react-icons/go";
import { IoArrowUpOutline } from "react-icons/io5";
import Animate from "../../utils/Animate";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GiPolarStar } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { TiArrowRight } from "react-icons/ti";
import Button from "../../ui/Button";
import BottomNav from "../../ui/BottomNav";
import { categoryCards, skillsWithIcons } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../utils/AppContext";
import { useEffect } from "react";

function Home() {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({
      type: "setPage",
      payload: "home",
    });
    navigate("/" + "home");
  }, []);

  function handleNavigate(page: string) {
    dispatch({
      type: "setPage",
      payload: page,
    });
    navigate("/" + page);
  }

  return (
    <div className="bg-background h-full flex flex-col">
      <div className="h-full">
        <NavBar />
      </div>

      <div className="relative mt-[5vh]  h-full">
        <div className=" p-6 top-0 lg:items-center lg:justify-center w-full flex flex-col ">
          <div className="text-3xl font-semibold flex flex-col">
            <div className="flex  justify-between lg:justify-start    lg:gap-[5vw] ">
              <Animate delay={200} type="slideLeft">
                <h3 className="lg:text-[100px]">Best</h3>
              </Animate>
              <Animate delay={200} type="slideLeft">
                <img
                  src="arraow.png"
                  className="h-[5vh] mr-[10vw] lg:h-[15vh] lg:-mt-[3vh] "
                />
              </Animate>
            </div>
            <Animate delay={400} type="slideLeft">
              <h3 className="lg:text-[70px] lg:max-w-[50vw]  mt-[2vh] leading-[1.2]">
                Place for Creative Digital Solutions
              </h3>
            </Animate>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:mt-10 ">
            <div>
              <div>
                <div className="lg:max-w-[30vw]">
                  <Animate delay={500} type="slideLeft">
                    <p className="text-lg  mt-[3vh]">
                      Unlock the Power of Web Presence with our Professional
                      Website Designing Service! Elevate Your Online Presence
                      with Stunning Website Designs.
                    </p>
                  </Animate>
                </div>
              </div>
              <div className="mt-[5vh]">
                <Animate delay={500} type="slideLeft">
                  <div>
                    <img src="arrow-2.png" />
                  </div>
                </Animate>
                <div className="mt-[3vh] flex flex-col lg:flex-row items-center  gap-3 lg:gap-6">
                  <div>
                    <Animate delay={500} type="slideUp">
                      <div
                        onClick={() => {
                          handleNavigate("contact");
                        }}
                        className="flex items-center  w-fit h-fit border px-4 py-2 lg:hover:bg-primary transition-all duration-700 cursor-pointer mt-1 ease-in-out "
                      >
                        GET STARTED
                        <GoArrowRight className="ml-3" />
                      </div>
                    </Animate>
                  </div>
                  <div>
                    <Animate delay={800} type="slideUp">
                      <div
                        onClick={() => {
                          handleNavigate("contact");
                        }}
                        className="flex items-center  w-fit h-fit border px-4 py-2 lg:hover:bg-primary transition-all duration-700 cursor-pointer mt-1 ease-in-out "
                      >
                        SEE PRICING
                        <GoArrowRight className="ml-3" />
                      </div>
                    </Animate>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-end gap-5 relative">
              <Animate delay={800} type="slideDown">
                <div>
                  <img
                    src="banner-peoples.jpg"
                    className="object-cover h-[50vh] lg:h-[35vh] lg:w-[22vw]"
                  />
                </div>
              </Animate>

              <div className="hidden  lg:flex absolute -right-[11vw] ">
                <Animate delay={950} type="slideDown">
                  <div
                    onClick={() => {
                      handleNavigate("contact");
                    }}
                    className="bg-primary rounded-full w-36 h-36 flex  transition-all duration-700 cursor-pointer lg:hover:bg-white font-semibold ease-in-out text-black text-lg items-center justify-center"
                  >
                    <IoArrowUpOutline className="mr-2 -mt-7" /> Explore
                    <br /> More
                  </div>
                </Animate>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-[10vh] flex gap-6 flex-col lg:flex-row lg:items-center lg:justify-center">
        <div>
          <Animate delay={200} type="slideLeft">
            <div className="relative items-center  flex flex-col">
              <img
                src="star-with-lines.png"
                className=" lg:w-[32vw] h-[55vh] lg:h-[26vh] object-cover"
              />
              <img
                src="star-with-lines.png"
                className=" lg:w-[32vw] h-[55vh] lg:h-[26vh] object-cover"
              />

              <div className="absolute flex flex-col lg:flex-row  lg:items-center lg:justify-center">
                <div className="w-full flex mt-8">
                  <Animate type="slideUp" delay={350}>
                    <img
                      src="person.png"
                      className=" h-[35vh] top-4 lg:-mt-[10vh] lg:mr-10 lg:h-[40vh]"
                    />
                  </Animate>
                </div>

                <div className="text-black text-center lg:mt-4">
                  <Animate type="slideUp" delay={300}>
                    <div className="flex flex-col border-b border-black pb-8">
                      <h2 className="text-[80px] lg:text-[60px] font-semibold">
                        90{" "}
                      </h2>
                      <p className="text-[20px] font-semibold -mt-[3vh]">
                        PROJECTS
                      </p>
                    </div>
                  </Animate>
                  <Animate type="slideUp" delay={500}>
                    <div className="flex flex-col border-b border-black pb-8">
                      <h2 className="text-[80px] lg:text-[60px] font-semibold">
                        30{" "}
                      </h2>
                      <p className="text-[20px] font-semibold -mt-[3vh]">
                        CLIENTS
                      </p>
                    </div>
                  </Animate>
                  <Animate type="slideUp" delay={700}>
                    <div className="flex flex-col  pb-8">
                      <h2 className="text-[80px] lg:text-[60px] font-semibold">
                        12{" "}
                      </h2>
                      <p className="text-[20px] font-semibold -mt-[3vh]">
                        EXPERTS
                      </p>
                    </div>
                  </Animate>
                </div>
              </div>
            </div>
          </Animate>
        </div>
        <div>
          <Animate type="slideLeft" delay={700}>
            <div className="bg-foreground text-black mt-[5vh] lg:mt-0 lg:p-16 p-5 lg:max-w-[25vw] lg:h-[52vh]">
              <Animate delay={900} type="slideUp">
                <div className=" text-2xl border-b-2 pb-5 border-black">
                  Establish Your Business’s Online Presence 🥇
                </div>
              </Animate>
              <Animate delay={1000} type="slideUp">
                <p className="mt-6 lg:text-sm">
                  Improve your business website’s online presence with the
                  unique integration of digital marketing features. Show up your
                  online strength to achieve your virtual goal.
                </p>
              </Animate>
            </div>
          </Animate>
        </div>
      </div>
      <div className=" flex flex-col w-full px-6 justify-center items-center text-center mb-[10vh]">
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
        <div className="mt-[5vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <div className="mb-[5vh] bg-primary text-black py-3 flex justify-between lg:px-10 flex-col lg:flex-row items-center gap-3 lg:gap-0 ">
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
      <div className="mb-[5vh] px-6 items-center justify-center flex flex-col lg:flex-row lg:gap-4">
        <div className=" flex flex-col  lg:max-w-[40vw] gap-5 text-center ">
          <Animate delay={200} type="slideLeft">
            <div className="text-3xl font-semibold text-start lg:text-4xl">
              One-stop digital marketing services 🎯
            </div>
          </Animate>
          <Animate delay={400} type="slideLeft">
            <p className="mt-3 text-start border-l-2 pl-3 border-primary text-lg lg:text-sm lg:max-w-[30vw]">
              Get benefits with the best Digital Marketing Service with unique
              strategies. Improve the search visibility of your website with the
              proper techniques of our digital marketing experts. Boost sales
              and optimize your page for more user engagement.
            </p>
          </Animate>
        </div>
        <div className="mt-10">
          <Animate delay={300} type="slideUp">
            <div>
              <img
                src="peoples.jpg"
                className="lg:h-[40vh] lg:w-[20vw] lg:rounded-md"
              />
            </div>
          </Animate>
        </div>
      </div>
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
      <div className="mb-[5vh] mt-[5vh] px-6 lg:flex lg:gap-6  lg:justify-center">
        <div>
          <Animate delay={200} type="slideUp">
            <div className="flex flex-col gap-4 lg:w-[30vw]">
              <div className="text-3xl font-semibold">
                Improve the Online Presence of Your Business with Ads 🧭
              </div>
              <div className="text-xs border-l-2 border-primary pl-3">
                Increase the online visibility of your business website with the
                help of Google Ads. It is a platform where you can promote your
                business exclusively.
              </div>
            </div>
          </Animate>
        </div>
        <div className="mt-[5vh] flex flex-col gap-6 lg:mt-0">
          <Animate delay={200} type="slideUp">
            <div className="flex gap-3 items-center text-xl  font-semibold border-b pb-6 border-foreground/30">
              <FaChevronRight className="text-primary w-4 h-4" /> Google paid
              campaigns
            </div>
          </Animate>
          <Animate delay={400} type="slideUp">
            <div className="flex gap-3 items-center text-xl  font-semibold border-b pb-6 border-foreground/30">
              <FaChevronRight className="text-primary w-4 h-4" /> Organic
              content management
            </div>
          </Animate>
          <Animate delay={600} type="slideUp">
            <div className="flex gap-3 items-center text-xl  font-semibold border-b pb-6 border-foreground/30">
              <FaChevronRight className="text-primary w-4 h-4" /> SMO techniques
            </div>
          </Animate>
        </div>
      </div>
      <div className="mt-[8vh] mb-[5vh] px-6  items-center justify-center flex flex-col gap-10  ">
        <div className="text-4xl text-center font-semibold lg:text-2xl lg:max-w-[40vw] ">
          Have Any Questions On Minds! Send Us Message
        </div>
        <Button
          callBack={() => {
            handleNavigate("contact");
          }}
          delay={200}
          type="slideDown"
        >
          Join Now <TiArrowRight className="w-5 h-5 ml-" />
        </Button>
      </div>
      <div className="mb-[5vh] relative mt-[8vh] text-foreground flex items-center justify-center px-6">
        <BottomNav />
      </div>
    </div>
  );
}

export default Home;
