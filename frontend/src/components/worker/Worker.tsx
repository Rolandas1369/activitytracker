import React, { FunctionComponent } from "react";
interface APIWorkers {
  id: number;
  name: string;
  surname: string;
  hourly_salary: number;
  taxes_amount_per_hour: number;
}

const Worker: FunctionComponent<APIWorkers> = (props) => {
  return (
    <div className="border-2 m-2">
      <p>Name: {props.name}</p>
      <p>Surname: {props.surname}</p>
      <p>Hourly Salary: {props.hourly_salary}</p>
      <p>Taxes amount per hour: {props.taxes_amount_per_hour}</p>
    </div>
  );
};

export default Worker;
