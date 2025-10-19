import { GiPolarStar } from "react-icons/gi";
import NavBar from "../../ui/NavBar";
import Animate from "../../utils/Animate";
import { FaChevronRight } from "react-icons/fa";
import BottomNav from "../../ui/BottomNav";
import { useEffect } from "react";
import { useAppContext } from "../../utils/AppContext";
import { useNavigate } from "react-router-dom";

function About() {
  const {  dispatch } = useAppContext();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({
      type: "setPage",
      payload: "about",
    });
    navigate("/" + "about");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <NavBar />

      <div className="px-8  mt-[5vh] relative flex flex-col ">
        <div className=" hidden lg:block">
          <Animate delay={200} type="slideLeft">
            <div className="text-[80px] font-semibold">Choice</div>
          </Animate>
          <Animate delay={400} type="slideLeft">
            <div className="flex items-center gap-6">
              <div className="text-[80px] font-semibold">at a </div>
              <div>
                <img src="about-1.jpg" className="w-[12vw] rounded-full" />
              </div>

              <div>
                <img src="about-2.jpg" className="w-[25vw] rounded-full" />
              </div>
            </div>
          </Animate>
          <Animate delay={600} type="slideLeft">
            <div className="flex items-center gap-10">
              <div className="text-[80px] font-semibold">glance</div>
              <div>
                <img src="arraow.png" className="w-[20vw] mt-3" />
              </div>
            </div>
          </Animate>
        </div>
        <Animate delay={200} type="slideLeft">
          <div className="lg:hidden text-[40px] text-center font-semibold">
            Choice
            <br />
            at a glance
          </div>
        </Animate>
        <Animate delay={800} type="slideLeft">
          <h3 className="mt-[2vh] px-4 lg:text-xs  ">
            Know your trusted source of online services, and build your empire
            with top-class integrations.
          </h3>
        </Animate>
        <div className="mt-[5vh] flex flex-col lg:flex-row lg:items-center lg:gap-10">
          <div>
            <Animate delay={300} type="slideDown">
              <div>
                <img src="boss-image.jpg" className="h-[50vh]" />
              </div>
            </Animate>
          </div>
          <div className="mt-10 flex flex-col gap-6 lg:mt-[13vh] ">
            <Animate delay={300} type="slideDown">
              <h3 className="text-3xl text-center lg:text-start font-semibold lg:max-w-[30vw] ">
                Creative technical wizards at your service 🤘
              </h3>
            </Animate>
            <Animate delay={500} type="slideDown">
              <p className="lg:max-w-[30vw] lg:text-[15px]">
                Welcome to Choice, a cutting-edge digital marketing and design
                solution crafted by choice Promotions. We are dedicated to the art of
                digital transformation, and Choice is the embodiment of our
                commitment to redefining your online presence. At choice Promotions,
                we understand that the digital landscape is constantly evolving,
                and we are here to help your business stay at the forefront of
                this dynamic environment. With Choice, we offer a comprehensive
                suite of services, from web design to digital marketing
                strategies, tailored to your unique needs. Our team of experts
                brings a wealth of experience and creativity to the table,
                ensuring that your brand stands out and thrives in the digital
                realm.
              </p>
            </Animate>
          </div>
        </div>
      </div>
      <div className="mt-[5vh] mb-[5vh] w-full  bg-primary text-black py-3 flex justify-between lg:px-10 flex-col lg:flex-row items-center gap-3 lg:gap-0 ">
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
      <div className="mb-[10vh] mt-[5vh] px-6 lg:flex lg:gap-6  lg:justify-center">
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

      <div className="mb-[3vh]">
        <BottomNav />
      </div>
    </div>
  );
}
export default About;
