import React from "react";
import { useTheme } from "next-themes";

const Button = ({ children, type, icon, onClick, classes }) => {
  const { theme } = useTheme();
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${
          theme === "dark" ? "bg-white text-black" : "bg-black text-white"
        }  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${classes}`}
      >
        {children}
      </button>
    );
  }

  if(type === "withIcon") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${
          theme === "dark" ? "bg-slate-300 text-black" : "bg-gray-300 text-black"
        }  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${classes}`}
      >{(() => {
        if (icon === "Github") {
          return (
            <svg className="h-6 w-6 inline-flex mr-1" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg>
          )
        } else if (icon === "Document") {
          return (
            <svg className="h-6 w-6 inline-flex mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="document"><path d="M9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm0,2a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-3-3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path></svg>
          )
        } else if (icon === "Webhost") {
          return (
            <svg className="h-5 w-5 inline-flex mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="website"><path d="M16,1C7.729,1,1,7.729,1,16s6.729,15,15,15,15-6.729,15-15S24.271,1,16,1Zm6.313,21.636c.375-1.703,.602-3.6,.66-5.636h5.986c-.193,2.515-1.105,4.829-2.53,6.741-1.349-.461-2.724-.829-4.116-1.105Zm-16.742,1.105c-1.425-1.912-2.337-4.226-2.53-6.741h5.986c.058,2.036,.285,3.933,.66,5.636-1.391,.276-2.767,.644-4.116,1.104Zm4.115-14.371c-.374,1.701-.601,3.597-.659,5.63H3.041c.193-2.515,1.104-4.829,2.53-6.741,1.351,.462,2.724,.832,4.115,1.11Zm1.973,.338c1.433,.194,2.882,.292,4.341,.292s2.908-.098,4.341-.292c.351,1.559,.578,3.343,.638,5.292H11.021c.06-1.949,.287-3.733,.638-5.292Zm-.638,7.292h9.957c-.06,1.953-.287,3.739-.639,5.3-2.877-.388-5.8-.387-8.678,0-.352-1.561-.58-3.348-.639-5.3Zm11.951-2c-.057-2.033-.284-3.929-.659-5.63,1.391-.278,2.765-.648,4.115-1.11,1.425,1.912,2.337,4.226,2.53,6.74h-5.986Zm2.008-8.371c-1.044,.324-2.103,.59-3.173,.797-.465-1.474-1.049-2.748-1.731-3.761,1.855,.615,3.522,1.642,4.903,2.964Zm-8.981-3.629c1.363,0,2.813,1.78,3.799,4.749-2.521,.317-5.076,.317-7.598,0,.986-2.969,2.436-4.749,3.799-4.749Zm-5.809,4.426c-1.069-.208-2.128-.473-3.173-.797,1.381-1.322,3.048-2.349,4.903-2.964-.682,1.013-1.266,2.287-1.731,3.761Zm-3.172,17.946c1.044-.324,2.103-.589,3.172-.797,.464,1.474,1.049,2.747,1.73,3.76-1.855-.615-3.521-1.642-4.902-2.963Zm8.981,3.628c-1.363,0-2.813-1.78-3.799-4.748,2.522-.317,5.077-.317,7.598,0-.986,2.969-2.436,4.749-3.799,4.749Zm5.809-4.426c1.069,.208,2.128,.474,3.173,.797-1.381,1.322-3.048,2.349-4.903,2.964,.682-1.013,1.266-2.287,1.731-3.761Z"></path></svg>
          )
        }
         else {
          return (
            <div></div>
          )
        }
      })()}
      {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
        theme === "dark"
          ? "hover:bg-slate-600 text-white"
          : "hover:bg-slate-100"
      } hover:scale-105 active:scale-100  tablet:first:ml-0 ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
