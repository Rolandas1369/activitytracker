import { FunctionComponent, useEffect, useState } from "react";
import WorkingTime from "../workingtime/WorkingTime";
import axiosInstance from "../axiosInstance";
import ApiFiltersNav from "./ApiFiltersNav";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { WorkingTimeAPI } from "../../interfaces/interfaces";

const WorkingTimesList: FunctionComponent = () => {
  const [workingTimes, setWorkingTimes] = useState<WorkingTimeAPI>();
  const { searchRepositories } = useActions();

  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const getWorkingTimes = (filter: string) => {
    void axiosInstance.get(`workingtimes/${filter}`).then((res) => {
      const workingtimesdata = res.data as WorkingTimeAPI;
      setWorkingTimes(workingtimesdata);
    });
  };

  useEffect(() => {
    getWorkingTimes("?");
    searchRepositories();
  }, []);

  return (
    <div>
      <h1 className="flex justify-center">Working Times</h1>
      {/* <ApiFiltersNav
        getW={getWorkingTimes}
        workingTimes={workingTimes}
      ></ApiFiltersNav> */}
      {data
        ? data.map((workingtime) => {
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
