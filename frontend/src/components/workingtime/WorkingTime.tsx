import { FunctionComponent } from "react";
import {
  WorkingTimeAPI,
  WorkersAPI,
  OrdersAPI,
  WorkDayApi
} from "../../interfaces/interfaces";

interface APIWorkingTimes {
  id: number;
  worker: WorkersAPI;
  order: {
    id: number;
    name: string;
    location: string;
    starting_at: string | null;
    began_at: string | null;
    ended_at: string | null;
    completed: string | false;
    price: number;
  };
  work_day: {
    id: number;
    date: string;
    date_formated: string;
  };
}

const WorkingTime: FunctionComponent<APIWorkingTimes> = ({
  worker,
  work_day,
  order
}): JSX.Element => {
  return (
    <div className="border m-1">
      <p>{worker.name}</p>
      <p>{work_day["date"]}</p>
      <p>{order.name}</p>
    </div>
  );
};

export default WorkingTime;
