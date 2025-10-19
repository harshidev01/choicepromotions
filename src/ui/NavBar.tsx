import { IoArrowUpSharp } from "react-icons/io5";
import Animate from "../utils/Animate";

import { VscMenu } from "react-icons/vsc";
import Button from "./Button";
import { useAppContext } from "../utils/AppContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const { selectedPage, dispatch } = useAppContext();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  function handleNavigate(page: string) {
    setOpenMenu(false)
    dispatch({
      type: "setPage",
      payload: page,
    });
    navigate("/" + page);
  }

  function handleMenuClick() {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="w-full lg:gap-[10vw] lg:justify-center flex lg:items-center  lg:pt-[3vh]">
      {openMenu && (
        <div className="w-[100vw] fixed z-[999] flex ">
          <div className="w-[70vw] h-[100vh] bg-black  ">
            <div className="">
              <div
                className="pl-4 pt-3 lg:pt-0 lg:pl-0 cursor-pointer"
                onClick={() => {
                  handleNavigate("home");
                }}
              >
                <Animate delay={100} type="slideDown">
                  {" "}
                  <img
                    src="logo.png"
                    className="lg:w-[15vw] lg:h-[11vh] relative w-[60vw] h-[10vh] lg:top-6 top-4"
                  />
                </Animate>
              </div>
              <Animate delay={200} type="slideDown">
                <div
                  onClick={() => {
                    handleNavigate("home");
                  }}
                  className={` text-xl mt-10 border-b pl-6 border-foreground/20 pb-3    ${
                    selectedPage === "home" || !selectedPage
                      ? "text-primary "
                      : "text-foreground"
                  } `}
                >
                  Home
                </div>
              </Animate>

              <Animate delay={400} type="slideDown">
                <div
                  onClick={() => {
                    handleNavigate("about");
                  }}
                  className={` text-xl mt-10 border-b pl-6 border-foreground/20 pb-3    ${
                    selectedPage === "about"
                      ? "text-primary "
                      : "text-foreground"
                  } `}
                >
                  About
                </div>
              </Animate>
              <Animate delay={600} type="slideDown">
                <div
                  onClick={() => {
                    handleNavigate("services");
                  }}
                  className={` text-xl mt-10 border-b pl-6 border-foreground/20 pb-3    ${
                    selectedPage === "services"
                      ? "text-primary "
                      : "text-foreground"
                  } `}
                >
                  Services
                </div>
              </Animate>

              <Animate delay={800} type="slideDown">
                <div
                  onClick={() => {
                    handleNavigate("contact");
                  }}
                  className={` text-xl mt-10 border-b pl-6 border-foreground/20 pb-3    ${
                    selectedPage === "contact"
                      ? "text-primary "
                      : "text-foreground"
                  } `}
                >
                  Contact Us
                </div>
              </Animate>
              <div className="mx-6 mt-[5vh]">
                <Button
                  callBack={() => {
                    handleNavigate("contact");
                  }}
                  delay={1000}
                  type="slideDown"
                >
                  <div className="text-nowrap flex items-center ">
                    Let's Talk
                    <IoArrowUpSharp className="ml-2 h-4 w-4 " />
                  </div>
                </Button>
              </div>
              <div className=" text-center flex flex-col items-center justify-center mt-[10vh]">
                <div>
                  <Animate delay={400} type="slideDown">
                    <div className="text-foreground/30 mt-[4vh] w-fit text-xs text-center  ">
                      © 2024 Choice Promotions. All Rights Reserved.
                    </div>
                  </Animate>
                </div>
                <div>
                  <Animate delay={500} type="slideDown">
                    <div className="text-foreground mt-[4vh] w-fit text-xs text-center  ">
                      Made with 💛
                    </div>
                  </Animate>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[30vw] h-[100vh] " onClick={handleMenuClick}></div>
        </div>
      )}
      <div className="w-full lg:w-fit">
        <Animate delay={100} type="slideLeft">
          <div className="flex items-center justify-between w-full ">
            <div
              className="pl-4 pt-3 lg:pt-0 lg:pl-0 cursor-pointer"
              onClick={() => {
                handleNavigate("home");
              }}
            >
              <Animate delay={100} type="slideDown">
                <img
                  src="logo.png"
                  className="lg:w-[15vw] lg:h-[11vh] relative w-[60vw] h-[10vh] lg:top-6 top-4"
                />
              </Animate>
            </div>
            <div
              onClick={handleMenuClick}
              className="mr-5 lg:hidden mt-[4vh] border px-2 py-2 rounded-sm "
            >
              {openMenu ? (
                <IoMdClose className="w-5 h-5 " />
              ) : (
                <VscMenu className="w-5 h-5 " />
              )}
            </div>
          </div>
        </Animate>
      </div>

      <div className="mt-[4vh] lg:flex gap-10 text-xl items-center hidden">
        <Animate delay={200} type="slideDown">
          <div
            onClick={() => {
              handleNavigate("home");
            }}
            className={`lg:hover:border-b-2 pb-1 mt-1 cursor-pointer text-nowrap  border-b-2 border-transparent transition-all duration-700 ease-in-out ${
              selectedPage === "home" || !selectedPage
                ? "lg:border-primary lg:scale-105 lg:text-primary "
                : "lg:hover:border-primary lg:hover:scale-105 lg:hover:text-primary "
            }`}
          >
            Home
          </div>
        </Animate>

        <Animate delay={400} type="slideDown">
          <div
            onClick={() => {
              handleNavigate("about");
            }}
            className={`lg:hover:border-b-2 pb-1 mt-1 cursor-pointer text-nowrap  border-b-2 border-transparent transition-all duration-700 ease-in-out ${
              selectedPage === "about"
                ? "lg:border-primary lg:scale-105 lg:text-primary "
                : "lg:hover:border-primary lg:hover:scale-105 lg:hover:text-primary "
            }`}
          >
            About
          </div>
        </Animate>
        <Animate delay={600} type="slideDown">
          <div
            onClick={() => {
              handleNavigate("services");
            }}
            className={`lg:hover:border-b-2 lg:hover:border-primary pb-1 mt-1 lg:hover:scale-105 lg:hover:text-primary cursor-pointer text-nowrap  border-b-2 border-transparent transition-all duration-700 ease-in-out ${
              selectedPage === "services"
                ? "lg:border-primary lg:scale-105 lg:text-primary "
                : "lg:hover:border-primary lg:hover:scale-105 lg:hover:text-primary "
            }`}
          >
            Services
          </div>
        </Animate>

        <Animate delay={800} type="slideDown">
          <div
            onClick={() => {
              handleNavigate("contact");
            }}
            className={`lg:hover:border-b-2 cursor-pointer border-b-2 border-transparent text-nowrap transition-all duration-700 pb-1 mt-1 ease-in-out ${
              selectedPage === "contact"
                ? "lg:border-primary lg:scale-105 lg:text-primary "
                : "lg:hover:border-primary lg:hover:scale-105 lg:hover:text-primary "
            }`}
          >
            Contact Us
          </div>
        </Animate>
        <Button
          callBack={() => {
            handleNavigate("contact");
          }}
          delay={1000}
          type="slideDown"
        >
          <div className="text-nowrap flex items-center">
            Let's Talk
            <IoArrowUpSharp className="ml-2 h-4 w-4 " />
          </div>
        </Button>
      </div>
    </div>
  );
}
export default NavBar;
