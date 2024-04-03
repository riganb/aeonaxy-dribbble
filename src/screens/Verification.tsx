import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CommonScreenAttributes } from "../types";
import {
  faBagShopping,
  faBasketball,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

type LinkSectionHeading =
  | "For designers"
  | "Hire designers"
  | "Brands"
  | "Company"
  | "Directories"
  | "Design assets"
  | "Design resources";

type LinkSectionData = { text: string; link?: string }[];

const TextLists: Record<LinkSectionHeading, LinkSectionData> = {
  "For designers": [
    { text: "Go Pro!" },
    { text: "Explore design work" },
    { text: "Design blog" },
    { text: "Overtime podcast" },
    { text: "Playoffs" },
    { text: "Weekly Warm-Up" },
    { text: "Refer a Friend" },
    { text: "Code of conduct" },
  ],
  "Hire designers": [
    { text: "Post a job opening" },
    { text: "Post a freelance project" },
    { text: "Search for designers" },
  ],
  Brands: [{ text: "Advertise with us" }],
  Company: [
    { text: "About" },
    { text: "Careers" },
    { text: "Support" },
    { text: "Media kit" },
    { text: "Testimonials" },
    { text: "API" },
    { text: "Terms of service" },
    { text: "Privacy policy" },
    { text: "Cookie policy" },
  ],
  Directories: [
    { text: "Design jobs" },
    { text: "Designers for hire" },
    { text: "Freelance designers for hire" },
    { text: "Tags" },
    { text: "Places" },
  ],
  "Design assets": [
    { text: "Dribbble Marketplace" },
    { text: "Creative Market" },
    { text: "Fontspring" },
    { text: "Font Squirrel" },
  ],
  "Design resources": [
    { text: "Design Resources" },
    { text: "Freelancing" },
    { text: "Design Hiring" },
    { text: "Design Portfolio" },
    { text: "Design Education" },
    { text: "Creative Process" },
    { text: "Design Industry" },
    { text: "Trends" },
  ],
};

const Verification: React.FC<CommonScreenAttributes> = ({ nextStep, data }) => {
  return (
    <div className="flex-1 h-fit flex flex-col pt-2 items-center gap-7">
      <div className="w-full flex flex-row flex-wrap justify-between">
        <div className="flex flex-row px-3 gap-5 py-2 md:p-4 items-center flex-wrap">
          <div className="text-3xl font-[400] w-full md:w-fit font-cookie">
            dribbble
          </div>
          <div className="text-sm text-gray-500 font-semibold">Inspiration</div>
          <div className="text-sm text-gray-500 font-semibold">Find Work</div>
          <div className="text-sm text-gray-500 font-semibold">
            Learn Design
          </div>
          <div className="text-sm text-gray-500 font-semibold">Go Pro</div>
          <div className="text-sm text-gray-500 font-semibold">
            Hire Designers
          </div>
        </div>
        <div className="flex flex-row px-3 py-2 md:p-4 items-center gap-5">
          <input
            type="text"
            className="outline-none rounded-lg text-gray-300 text-sm bg-gray-100 w-28 p-3"
            placeholder="Search"
          />
          <FontAwesomeIcon
            icon={faBagShopping}
            color="rgb(209, 213, 219)"
            className="h-6"
          />
          <div className="w-10 rounded-full overflow-hidden aspect-square">
            <img src={data["image"]} alt="Profile" />
          </div>
          <div
            onClick={nextStep}
            className="text-white bg-pink-500 w-fit rounded-lg hover:bg-pink-400 px-4 py-3 font-semibold text-sm"
          >
            Upload
          </div>
        </div>
      </div>
      <div className="w-full flex h-fit flex-col justify-start py-20 items-center gap-5 px-5 md:px-0">
        <div className="font-semibold text-3xl">
          Please verify your email...
        </div>
        <div>
          <FontAwesomeIcon
            icon={faEnvelope}
            color="rgb(156, 163, 175)"
            className="h-32"
          />
        </div>
        <div className="text-gray-500 text-center">
          Please verify your email address. We've sent a confirmation email to:
        </div>
        <div className="font-bold">account@refero.design</div>
        <div className="text-gray-500 text-center">
          Click the confirmation link in that email to begin using Dribbble.
        </div>
        <div className="md:w-1/2 text-center text-gray-500">
          Didn't receive the email? Check your Spam folder, it may have been
          caught by a filter. If you still don't see it, you can{" "}
          <span className="font-bold text-pink-500">
            resend the confirmation email
          </span>
          .
        </div>
        <div className="text-gray-500">
          Wrong email address?{" "}
          <span className="font-bold text-pink-500">Change it.</span>
        </div>
      </div>
      <div className="bg-gray-50 flex flex-col flex-wrap w-full">
        <div className="flex flex-row flex-wrap gap-3 md:gap-0 justify-between p-5 items-start md:px-16">
          <div className="flex flex-col gap-3 md:gap-5 pb-3 md:pb-0">
            <div className="text-pink-500 font-[400] text-5xl font-cookie">
              dribbble
            </div>
            <div className="text-gray-700 font-[500] text-sm">
              Dribbble is the world's leading
              <br />
              community for creatives to share, grow,
              <br /> and get hired.
            </div>
            <div className="flex flex-row justify-start items-center gap-3">
              <FontAwesomeIcon icon={faBasketball} color="rgb(55, 65, 81)" />
              <FontAwesomeIcon icon={faTwitter} color="rgb(55, 65, 81)" />
              <FontAwesomeIcon icon={faFacebook} color="rgb(55, 65, 81)" />
              <FontAwesomeIcon icon={faInstagram} color="rgb(55, 65, 81)" />
              <FontAwesomeIcon icon={faPinterest} color="rgb(55, 65, 81)" />
            </div>
          </div>
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="font-semibold text-sm">For designers</div>
            {TextLists["For designers"].map((item) => (
              <div className="text-gray-700 font-[500] text-sm">
                {item.text}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="font-semibold text-sm">Hire designers</div>
            {TextLists["Hire designers"].map((item) => (
              <div className="text-gray-700 font-[500] text-sm">
                {item.text}
              </div>
            ))}
            <div className="font-semibold text-sm">Brands</div>
            {TextLists["Brands"].map((item) => (
              <div className="text-gray-700 font-[500] text-sm">
                {item.text}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="font-semibold text-sm">Company</div>
            {TextLists["Company"].map((item) => (
              <div className="text-gray-700 font-[500] text-sm">
                {item.text}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="font-semibold text-sm">Directories</div>
            {TextLists["Directories"].map((item) => (
              <div className="text-gray-700 font-[500] text-sm">
                {item.text}
              </div>
            ))}
            <div className="font-semibold text-sm">Design assets</div>
            {TextLists["Design assets"].map((item) => (
              <div className="text-gray-700 font-[500] text-sm">
                {item.text}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="font-semibold text-sm">Design resources</div>
            {TextLists["Design resources"].map((item) => (
              <div className="text-gray-700 font-[500] text-sm">
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 md:mt-10 h-[2px] mx-5 md:mx-16 bg-gray-300" />
        <div className="py-10 flex flex-col md:flex-row justify-start items-center md:justify-between md:items-center mx-5 md:mx-16">
          <div className="text-gray-500 font-[500] text-sm">
            &#169; 2023 Dribbble. All rights reserved.
          </div>
          <div className="flex justify-center items-center text-sm">
            <span className="font-bold">20,501,853</span>
            <span className="text-gray-500 ml-1">shots dribbbled</span>
            <FontAwesomeIcon
              icon={faBasketball}
              className="ml-2 h-5"
              color="#e84d8e"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Verification };
