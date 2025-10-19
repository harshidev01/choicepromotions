import { ReactNode } from "react";
import Animate from "../utils/Animate";

interface ButtonInterface{
    children:ReactNode;
    delay:number;
    type?: "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "blink"; 
    callBack:()=>void
}

function Button({children,delay,type,callBack}:ButtonInterface) {
  return (
    <div onClick={callBack}>
      <Animate delay={delay} type={type}>
        <div className="transition-all duration-700 ease-in-out lg:hover:bg-foreground flex items-center cursor-pointer text-black text-xs font-semibold bg-primary px-6 py-3 ">
          {children}
        </div>
      </Animate>
    </div>
  );
}

export default Button;
