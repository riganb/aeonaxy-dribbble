import { useState } from "react";

import { MoreDetails, UserDetails, Verification, WorkDetails } from "./screens";

const STAGE_INDEX_TO_COMPONENT_MAPPING: Record<number, React.FC> = {
  0: UserDetails,
  1: MoreDetails,
  2: WorkDetails,
  3: Verification,
};

function App() {
  const [stepIndex, setStepIndex] = useState(0);

  const ScreenComponent = STAGE_INDEX_TO_COMPONENT_MAPPING[stepIndex];

  return (
    <div className="w-full h-full flex flex-row">
      <ScreenComponent />
    </div>
  );
}

export default App;
