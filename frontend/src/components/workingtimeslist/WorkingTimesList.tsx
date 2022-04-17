/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
  let transformedData = [] as {
    date: string;
    data: WorkingTimeAPI["data"];
  }[];

  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const getWorkingTimes = (filter: string) => {
    void axiosInstance.get(`workingtimes/${filter}`).then((res) => {
      const workingtimesdata = res.data as WorkingTimeAPI;
      console.log(data);
      setWorkingTimes(workingtimesdata);
    });
  };

  useEffect(() => {
    getWorkingTimes("?");
    searchRepositories();
  }, []);

  const transformData = () => {
    let orders = data.map((entry) => entry.work_day.date);
    console.log(orders);
    orders = [...new Set(orders)];
    console.log(orders);
    const sorted = [];
    for (let i = 0; i < orders.length; i++) {
      const orderr = data.filter((e) => e.work_day.date === orders[i]);

      sorted.push({ date: orders[i], data: orderr });
    }

    transformedData = sorted;
  };

  if (data.length > 0) {
    transformData();
  }

  return (
    <div>
      <h1 className="flex justify-center">Working Times</h1>
      {console.log(transformedData)}

      {transformedData.length > 0
        ? transformedData.map((entr) => {
            return (
              <div key={Math.random()}>
                <p>{entr.date}</p>

                {entr.data.map((p) => {
                  return (
                    <div key={Math.random()}>
                      <p>{p.order.name}</p>
                    </div>
                  );
                })}
              </div>
            );
            // const tentr = entr as WorkingTimeAPI[];
            // tentr.map((i) => {
            //   console.log(i);
            // });
          })
        : null}

      {/* <ApiFiltersNav
        getW={getWorkingTimes}
        workingTimes={workingTimes}
      ></ApiFiltersNav> */}

      {/* {data
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
        : null} */}
    </div>
  );
};

export default WorkingTimesList;
