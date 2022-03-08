import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

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

interface APIOrders {
  id: number;
  name: string;
  starting_at: string | null;
  began_at: string | null;
  ended_at: string | null;
  completed: boolean;
  price: number;
}

type ApiFilterNavProps = {
  getW: (filter: string) => void;
  workingTimes: APIWorkingTimes[];
};

const ApiFiltersNav = ({ getW, workingTimes }: ApiFilterNavProps) => {
  const [workers, setWorkers] = useState<APIWorkers[]>();
  const [orders, setOrders] = useState<APIOrders[]>();
  const [days, setWorkDays] = useState<APIWorkDays[]>();

  useEffect(() => {
    void axiosInstance.get("workers/").then((data) => {
      const workers_data = data.data as APIWorkers[];
      setWorkers(workers_data);
    });

    void axiosInstance.get("orders/").then((data) => {
      const orders_data = data.data as APIOrders[];
      setOrders(orders_data);
    });

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
