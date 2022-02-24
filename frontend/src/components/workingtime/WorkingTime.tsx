import { FunctionComponent } from "react";

interface APIWorkingTimes {
  id: number;
  worker: string;
  order: string;
  work_day: string;
}

const WorkingTime: FunctionComponent<APIWorkingTimes> = (
  props
): JSX.Element => {
  return (
    <div className="border m-1">
      <p>
        <span className="text-blue-500">Order:</span> {props.order}
      </p>
      <p>
        <span className="text-blue-500">Worker:</span> {props.worker}
      </p>
      <p>
        <span className="text-blue-500"> Work Day:</span> {props.work_day}
      </p>
    </div>
  );
};

export default WorkingTime;
