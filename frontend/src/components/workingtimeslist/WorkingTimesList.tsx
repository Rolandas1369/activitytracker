import { FunctionComponent, useEffect, useState } from "react";
import WorkingTime from "../workingtime/WorkingTime";
import axiosInstance from "../axiosInstance";
import ApiFiltersNav from "./ApiFiltersNav";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface APIWorkingTimes {
  id: number;
  worker: string;
  order: string;
  work_day: string;
}

const WorkingTimesList: FunctionComponent = () => {
  const [workingTimes, setWorkingTimes] = useState<APIWorkingTimes[]>();
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const getWorkingTimes = (filter: string) => {
    void axiosInstance.get(`workingtimes/${filter}`).then((res) => {
      const workingtimesdata = res.data as APIWorkingTimes[];
      setWorkingTimes(workingtimesdata);
    });
  };

  useEffect(() => {
    getWorkingTimes("?");
    searchRepositories("react");
  }, []);

  return (
    <div>
      <h1 className="flex justify-center">Working Times</h1>
      <ApiFiltersNav
        getW={getWorkingTimes}
        workingTimes={workingTimes}
      ></ApiFiltersNav>
      {/* {workingTimes
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
        : null} */}
      {error && <h3>{error}</h3>}
      {loading && <h3>...loading</h3>}
      {!error &&
        !loading &&
        data.map((entry) => {
          return (
            <WorkingTime
              key={entry.id}
              id={entry.id}
              worker={entry.worker}
              order={entry.order}
              work_day={entry.work_day}
            ></WorkingTime>
          );
        })}
    </div>
  );
};

export default WorkingTimesList;
