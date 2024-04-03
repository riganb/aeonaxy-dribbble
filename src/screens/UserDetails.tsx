import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import left_bg from "../res/left-background.png";
import { CommonScreenAttributes } from "../types";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

const UserDetails: React.FC<CommonScreenAttributes> = ({
  nextStep,
  data,
  updatePropValue,
}) => {
  const usernameTaken =
    data["username"] === "Rigan" || data["username"] === "Aeonaxy";

  return (
    <>
      <div className="w-full md:w-1/3 md:h-full flex flex-col md:justify-around p-10 gap-5 bg-[#f2d184]">
        <div className="text-[#aa853e] text-4xl font-cookie">dribbble</div>
        <div className="text-[#846014] font-[700] text-2xl">
          Discover the world's top
          <br />
          Designers & Creatives.
        </div>
        <div className="rounded-xl overflow-hidden hidden md:block">
          <img src={left_bg} alt="Left Background" />
        </div>
        <div className="text-[#846014] hidden md:block">
          Art by{" "}
          <a
            href="https://unsplash.com/s/photos/peter-tarka"
            className="underline text-[#846014]"
          >
            Peter Tarka
          </a>
        </div>
      </div>
      <div className="w-full md:w-2/3 md:h-full flex flex-col gap-5 p-10 items-center">
        <div className="w-full flex justify-end">
          Already a member?{" "}
          <span className="text-violet-700 pl-1">Sign In</span>
        </div>
        <div className="flex flex-col w-full md:w-1/2 gap-5 md:h-full md:justify-between">
          <div className="text-2xl font-bold">Sign up to Dribbble</div>
          {usernameTaken && (
            <div className="text-red-700">
              * Username has already been taken
            </div>
          )}
          <div className="w-full flex flex-row gap-3">
            <div className="flex-1">
              <div className="font-bold">Name</div>
              <input
                type="text"
                className="outline-none bg-gray-100 rounded-md p-2 mt-2 w-full"
                onChange={(e) => updatePropValue("name")(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <div className="font-bold">
                {usernameTaken && (
                  <span>
                    <FontAwesomeIcon
                      icon={faWarning}
                      color="rgb(239, 68, 68)"
                      className="pr-2"
                    />
                  </span>
                )}
                Username
              </div>
              <input
                type="text"
                className={`outline-none bg-gray-100 rounded-md p-2 mt-2 w-full ${
                  usernameTaken ? "bg-red-50 text-red-500" : ""
                }`}
                onChange={(e) => updatePropValue("username")(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="font-bold">Email</div>
            <input
              type="text"
              className="outline-none w-full bg-gray-100 rounded-md p-2 mt-2"
              onChange={(e) => updatePropValue("email")(e.target.value)}
            />
          </div>
          <div className="w-full">
            <div className="font-bold">Password</div>
            <input
              type="password"
              className="outline-none w-full bg-gray-100 rounded-md p-2 mt-2"
              placeholder="6+ characters"
              onChange={(e) => updatePropValue("password")(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-row gap-2 items-start">
            <div className="pl-1 pt-[1px]">
              <input
                type="checkbox"
                checked={data["terms"]}
                onChange={() => updatePropValue("terms")(!data["terms"])}
                className="accent-pink-500"
              />
            </div>
            <div className="text-gray-700 text-sm w-4/5">
              Creating an account means you're okay with our
              <span className="text-violet-700 pl-1">
                Terms of Service, Privacy Policy,
              </span>{" "}
              and our default
              <span className="text-violet-700 pl-1">
                Notiifcation Settings.
              </span>
            </div>
          </div>
          <div
            onClick={nextStep}
            className="text-white bg-pink-500 w-fit rounded-lg hover:bg-pink-400 px-7 py-2 font-semibold"
          >
            Create Account
          </div>
          <div className="text-[10px] text-gray-400">
            This site is protected by reCAPTCHA and the Google
            <br />
            <span className="text-violet-700 pl-1">
              Privacy Policy
            </span> and{" "}
            <span className="text-violet-700 pl-1">Terms of Service</span>{" "}
            apply.
          </div>
        </div>
      </div>
    </>
  );
};

export { UserDetails };
