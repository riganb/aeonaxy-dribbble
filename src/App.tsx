import { useCallback, useEffect, useState } from "react";

import { MoreDetails, UserDetails, Verification, WorkDetails } from "./screens";

import "./App.css";
import { CommonScreenAttributes, Props, UserData } from "./types";

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
  const [stepIndex, setStepIndex] = useState(0);

  const ScreenComponent = STAGE_INDEX_TO_COMPONENT_MAPPING[stepIndex];

  const nextStep = () => setStepIndex((i) => (i + 1) % 4);

  const [data, setData] = useState<UserData>({
    terms: false,
    occupations: [],
  });

  const updateProp = useCallback(
    (prop: Props) => (value: UserData[typeof prop]) =>
      setData({ ...data, [prop]: value }),
    [data]
  );

  useEffect(() => console.log("data::", data), [data]);

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <ScreenComponent
        nextStep={nextStep}
        data={data}
        updatePropValue={updateProp}
      />
    </div>
  );
}

export default App;
