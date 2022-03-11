import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface APIWorkers {
  id: number;
  name: string;
  surname: string;
  hourly_salary: number;
  taxes_amount_per_hour: number;
}

interface APIWorkingTimes {
  id: number;
  worker: string;
  order: string;
  work_day: string;
}

interface APIWorkDays {
  id: number;
  date: string;
  date_formated: string;
}

type ApiFilterNavProps = {
  getW: (filter: string) => void;
  workingTimes: APIWorkingTimes[];
};

const ApiFiltersNav = ({ getW }: ApiFilterNavProps) => {
  const [workers, setWorkers] = useState<APIWorkers[]>();

  const [days, setWorkDays] = useState<APIWorkDays[]>();
  const { getWorkersList } = useActions();
  const { getOrdersList } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.workers);
  const { orders } = useTypedSelector((state) => state.orders);

  useEffect(() => {
    void axiosInstance.get("workers/").then((data) => {
      const workers_data = data.data as APIWorkers[];
      setWorkers(workers_data);
    });

    getWorkersList();
    getOrdersList();

    void axiosInstance.get("workdays/").then((data) => {
      const work_days_data = data.data as APIWorkDays[];
      setWorkDays(work_days_data);
    });
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    getW(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange} onBlur={handleChange}>
        <optgroup label="Workers">
          <option value="">All workers</option>
          {workers
            ? workers.map((worker) => {
                return (
                  <option
                    key={worker.id}
                    value={"?worker=" + String(worker.id)}
                  >
                    {worker.name}
                  </option>
                );
              })
            : null}
        </optgroup>
      </select>
      <select onChange={handleChange} onBlur={handleChange}>
        <optgroup label="Orders">
          <option value="">All orders</option>
          {orders
            ? orders.map((order) => {
                return (
                  <option key={order.id} value={"?order=" + String(order.id)}>
                    {order.name}
                  </option>
                );
              })
            : null}
        </optgroup>
      </select>
      <select onChange={handleChange} onBlur={handleChange}>
        <optgroup label="Work Days">
          <option value="">All Days</option>
          {days
            ? days.map((day) => {
                return (
                  <option key={day.id} value={"?work_day=" + String(day.id)}>
                    {day.date_formated}
                  </option>
                );
              })
            : null}
        </optgroup>
      </select>
    </div>
  );
};

export default ApiFiltersNav;
