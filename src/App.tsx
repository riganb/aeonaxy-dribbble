import { useState } from "react";

import { MoreDetails, UserDetails, Verification, WorkDetails } from "./screens";

import "./App.css";
import { CommonScreenAttributes } from "./types";

const STAGE_INDEX_TO_COMPONENT_MAPPING: Record<
  number,
  React.FC<CommonScreenAttributes>
> = {
  0: UserDetails,
  1: MoreDetails,
  2: WorkDetails,
  3: Verification,
};

function App() {
  const [stepIndex, setStepIndex] = useState(2);

  const ScreenComponent = STAGE_INDEX_TO_COMPONENT_MAPPING[stepIndex];

  const nextStep = () => setStepIndex((i) => (i + 1) % 4);

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <ScreenComponent nextStep={nextStep} />
    </div>
  );
}

export default App;
