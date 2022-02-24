import { FunctionComponent, useEffect, useState } from "react";
import WorkingTime from "../workingtime/WorkingTime";
import axiosInstance from "../axiosInstance";

interface APIWorkingTimes {
  id: number;
  worker: string;
  order: string;
  work_day: string;
}

const WorkingTimesList: FunctionComponent = () => {
  const [workingTimes, setWorkingTimes] = useState<APIWorkingTimes[]>();

  const getWorkingTimes = () => {
    void axiosInstance.get("workingtimes/").then((res) => {
      const workingtimesdata = res.data as APIWorkingTimes[];
      setWorkingTimes(workingtimesdata);
    });
  };

  useEffect(() => {
    getWorkingTimes();
  }, []);

  return (
    <div>
      <h1 className="flex justify-center">Working Times</h1>
      {workingTimes
        ? workingTimes.map((workingtime) => {
            return (
              <WorkingTime
                key={workingtime.id}
                id={workingtime.id}
                worker={workingtime.worker}
                order={workingtime.order}
                work_day={workingtime.work_day}
              />
            );
          })
        : null}
    </div>
  );
};

export default WorkingTimesList;
