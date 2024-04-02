import { CommonScreenAttributes, OptionsEnum } from "../types";
import option1 from "../res/option-1.png";
import option2 from "../res/option-2.png";
import option3 from "../res/option-3.png";

const OPTIONS_TO_DATA_MAPPING: Record<
  OptionsEnum,
  { image: string; label: string; description: string }
> = {
  Designer: {
    label: "I'm a designer looking to share my work",
    image: option1,
    description:
      "You want to? We would love for you to, share, meddle, and collaborate.",
  },
  Recruiter: {
    label: "I'm looking to hire a designer",
    image: option2,
    description: "Recruiters have had amazing experiences, and so will you.",
  },
  Learner: {
    label: "I'm looking for design inspiration",
    image: option3,
    description:
      "With over 7 million shots, Dribbble is ready to call them on.",
  },
};

type OptionsCardAttributes = {
  type: OptionsEnum;
  selected: boolean;
};

const OptionsCard = ({ type, selected }: OptionsCardAttributes) => {
  return (
    <div
      className={`px-5 pb-4 flex flex-col gap-1 justify-center items-center border-2 border-gray-200 rounded-xl ${
        selected ? "border-pink-500" : ""
      }`}
    >
      <div
        className={`max-h-52 object-contain ${
          selected ? "-translate-y-10" : ""
        }`}
      >
        <img
          src={OPTIONS_TO_DATA_MAPPING[type].image}
          alt={type}
          className="w-full h-full"
        />
      </div>
      <div
        className={`font-bold text-center w-2/3 ${
          selected ? "-translate-y-10" : ""
        }`}
      >
        {OPTIONS_TO_DATA_MAPPING[type].label}
      </div>
      {selected ? (
        <div className="-translate-y-10 text-center text-gray-500 text-sm">
          {OPTIONS_TO_DATA_MAPPING[type].description}
        </div>
      ) : null}
      <input
        type="checkbox"
        className={`rounded-full w-5 h-5 accent-pink-500 ${
          selected ? "-translate-y-5" : ""
        }`}
        checked={selected}
      />
    </div>
  );
};

const WorkDetails: React.FC<CommonScreenAttributes> = ({ nextStep }) => {
  return (
    <div className="flex-1 flex flex-col h-full py-5 md:py-10 md:px-5 items-center gap-7 px-4">
      <div className="text-[#e84d8e] text-xl w-full">dribbble</div>
      <div className="w-full flex flex-col justify-between h-full items-center">
        <div className="font-bold text-3xl">What brings you to Dribbble?</div>
        <div className="text-gray-500">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 pt-8 md:gap-16 md:w-3/4">
          {[
            OptionsEnum.Desinger,
            OptionsEnum.Recruiter,
            OptionsEnum.Learner,
          ].map((type) => (
            <OptionsCard key={type} type={type} selected={true} />
          ))}
        </div>
        <div className="font-bold">Anything else? You can select multiple</div>
        <div className="text-white bg-pink-500 w-fit rounded-lg hover:bg-pink-400 px-24 py-2 font-semibold">
          Finish
        </div>
        <div className="font-bold text-sm text-gray-400">or Press RETURN</div>
      </div>
    </div>
  );
};

export { WorkDetails };
