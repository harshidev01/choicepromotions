/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import BottomNav from "../../ui/BottomNav";
import NavBar from "../../ui/NavBar";
import Animate from "../../utils/Animate";
import { FaUser } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosText } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useAppContext } from "../../utils/AppContext";
import { useNavigate } from "react-router-dom";

function Contact() {
  const { register, handleSubmit, formState, setError, reset } = useForm();
  const { errors } = formState;
  const [successMessage, setSuccessMessage] = useState("");
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({
      type: "setPage",
      payload: "contact",
    });
    navigate("/" + "contact");
  }, []);

  async function handleSubmitClick(e: any) {
    const url = "https://freeemailapi.vercel.app/sendEmail/";

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        toEmail: "choicepromotions@gmail.com",
        body: `new Client Request 
      Name : ${e?.name}
      Email :${e?.email}
      Phone No :${e?.phone}
      Message :  ${e?.message}
      `,
        title: "Choice Promotions",
        subject: `New Client Contacted`,
      }),
    });
    const result = await response.json();

    if (result?.message === "wrongEmail") {
      setError("email", {
        type: "manual",
        message: "Wrogng Email",
      });
    } else if (result?.message === "emailSendSuccess") {
      setSuccessMessage("Your form submitted successfully😊");
      reset();
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <NavBar />
      <div className="relative bg-black flex items-center mt-[7vh] justify-center w-full h-full">
        <img
          src="contact-back.jpg"
          className="opacity-30 h-[40vh] lg:h-fit object-cover"
        />

        <div className="absolute text-4xl lg:text-[70px] font-semibold text-center">
          <Animate delay={200} type="slideDown">
            <div>Contact Us</div>
          </Animate>
        </div>
      </div>
      <div className="px-8 mt-[5vh] w-full  justify-center flex flex-col lg:flex-row">
        <div className="flex flex-col gap-7 mt-[3vh]">
          <Animate delay={200} type="slideLeft">
            <div className="text-4xl font-semibold lg:max-w-[30vw]">
              Get in Touch with Choice 👋{" "}
            </div>
          </Animate>
          <Animate delay={400} type="slideLeft">
            <p className="lg:max-w-[30vw] lg:text-xs">
              Feel free to connect with us for any of your needs regarding our
              services. Our support team is ready to solve any of your issues.
              Just push a text to us and we will get back to you immediately.
            </p>
          </Animate>
        </div>
        <div className="mt-[4vh] lg:mt-0">
          <Animate delay={500} type="slideDown">
            <div className="bg-gray-900 min-w-[22vw] rounded-sm min-h-[50vh] relative mb-[10vh] p-6">
              <div className="text-2xl font-semibold mb-3">
                Drop Us a Message
              </div>

              <form
                className="flex flex-col gap-10 mt-[5vh] "
                onSubmit={handleSubmit(handleSubmitClick)}
              >
                <div className="w-full relative flex  gap-1 h-6 flex-col ">
                  <FaUser className=" absolute top-1" />
                  <input
                    className="w-full outline-none bg-transparent border-b pl-6 "
                    placeholder="Name*"
                    {...register("name", {
                      required: "Please Enter Name",
                    })}
                  />
                  {errors?.name?.message && (
                    <div className="text-red-400 text-xs ">
                      {errors?.name?.message as any}{" "}
                    </div>
                  )}
                </div>

                <div className="w-full relative flex  gap-1 h-6 flex flex-col ">
                  <MdPhoneInTalk className=" absolute top-1" />
                  <input
                    className="w-full outline-none bg-transparent border-b pl-6 "
                    placeholder="Phone no*"
                    {...register("phone", {
                      required: "Please Enter Phone No",
                    })}
                  />
                  {errors?.phone?.message && (
                    <div className="text-red-400 text-xs">
                      {errors?.phone?.message as any}{" "}
                    </div>
                  )}
                </div>
                <div className="w-full relative flex  gap-1 h-6 flex flex-col ">
                  <AiOutlineMail className=" absolute top-1" />
                  <input
                    className="w-full outline-none bg-transparent border-b pl-6 "
                    placeholder="Email Id*"
                    {...register("email", {
                      required: "Please Enter Email Id",
                      pattern: /^[a-z0-9][\w\.]+\@\w+?(\.\w+){1,}$/gi,
                    })}
                  />
                  {errors?.email?.message && (
                    <div className="text-red-400 text-xs">
                      {errors?.email?.message as any}{" "}
                    </div>
                  )}
                </div>
                <div className="w-full relative flex  gap-1  flex-col h-20 ">
                  <IoIosText className=" absolute top-1" />
                  <textarea
                    className="w-full outline-none bg-transparent border-b pl-6 h-14 resize-none "
                    placeholder="Message *"
                    {...register("message", {
                      required: "Please Enter Message",
                    })}
                  />
                  {errors?.message?.message && (
                    <div className="text-red-400 text-xs">
                      {errors?.message?.message as any}{" "}
                    </div>
                  )}
                </div>
                <button className="bg-primary px-4 py-2 rounded-md text-black font-semibold flex justify-center  items-center gap-3">
                  Connect Today <IoSend />
                </button>
                {successMessage && (
                  <div className="text-xs text-green-500">{successMessage}</div>
                )}
              </form>
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

export default Contact;
