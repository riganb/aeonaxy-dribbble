import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { CommonScreenAttributes } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

const MoreDetails: React.FC<CommonScreenAttributes> = ({
  nextStep,
  data,
  updatePropValue,
}) => {
  const profilePictureRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    profilePictureRef.current?.click();
  };

  const handleUpload = async () => {
    const uploadedFile = profilePictureRef.current?.files?.[0];
    if (uploadedFile) {
      const cachedURL = URL.createObjectURL(uploadedFile);
      updatePropValue("image")(cachedURL);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full py-5 md:py-10 md:px-5 items-center gap-7 px-4">
      <div className="text-[#e84d8e] text-4xl w-full font-cookie">dribbble</div>
      <div className="w-full md:w-1/2 flex flex-col justify-between h-full items-start">
        <div className="font-bold text-3xl">
          Welcome! Let's create your profile
        </div>
        <div className="text-gray-500">
          Let others get to know you better! You can do these later
        </div>
        <div className="h-4" />
        <div className="font-bold text-lg">Add an avatar</div>
        <div className="flex flex-col md:flex-row w-full">
          <div
            onClick={handleUploadClick}
            className={`w-auto border-2 border-dashed rounded-full border-gray-400 aspect-square flex justify-center items-center max-w-fit h-40 ${
              data["image"] ? "border-0 overflow-hidden" : ""
            }`}
          >
            {data["image"] ? (
              <img
                src={data["image"]}
                alt="Profile"
                className="h-full w-full"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCameraRetro}
                color="rgb(156, 163, 175)"
              />
            )}
          </div>
          <div className="flex flex-col h-full justify-start items-start pt-4 md:px-10 md:py-5 gap-3">
            <div
              onClick={handleUploadClick}
              className="w-fit rounded-lg px-4 text-sm py-2 font-semibold border-2 border-gray-200"
            >
              Choose Image
            </div>
            <div className="font-semibold text-gray-400">
              &gt; Or choose one of our defaults
            </div>
            <input
              type="file"
              id="file"
              ref={profilePictureRef}
              onChange={handleUpload}
              hidden
            />
          </div>
        </div>
        <div className="h-4" />
        <div className="font-bold text-lg">Add your location</div>
        <input
          type="text"
          className="outline-none w-full border-b-2 border-b-gray-200 pb-2"
          placeholder="Enter a location"
          onChange={(e) => updatePropValue("location")(e.target.value)}
        />
        <div className="h-5" />
        <div
          onClick={nextStep}
          className="text-white bg-pink-500 w-fit rounded-lg hover:bg-pink-400 px-24 py-2 font-semibold"
        >
          Next
        </div>
      </div>
    </div>
  );
};

export { MoreDetails };
