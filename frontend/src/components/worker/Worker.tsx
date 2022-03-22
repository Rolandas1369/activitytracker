import React, { ChangeEvent, FunctionComponent, useState } from "react";
import axiosInstance from "../axiosInstance";
interface APIWorkers {
  id: number;
  name: string;
  surname: string;
  hourly_salary: number;
  taxes_amount_per_hour: number;
  getWorkersList: () => void;
}

const Worker: FunctionComponent<APIWorkers> = (props) => {
  const [submitForm, setSubmitForm] = useState({
    id: props.id,
    name: props.name,
    surname: props.surname,
    hourly_salary: props.hourly_salary,
    taxes_amount_per_hour: props.taxes_amount_per_hour
  });

  const changeWorkerData = (id: number) => {
    void axiosInstance.put(`workers/${id}`, submitForm).then((res) => {
      props.getWorkersList();
    });
  };

  const deleteWorker = (id: number) => {
    void axiosInstance.delete(`workers/${id}`).then((res) => {
      props.getWorkersList();
    });
  };

  const editValue = (
    e: ChangeEvent<HTMLInputElement>,
    id: number,
    inputKey: string
  ) => {
    const inputData = { ...submitForm };
    inputData[inputKey] = e.target.value;
    setSubmitForm(inputData);
  };
  return (
    <div className="border-2 m-2">
      <form className="flex flex-col">
        <label>
          ID:
          <input
            className="border-2"
            readOnly
            type="number"
            value={submitForm.id}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            className="border-2"
            onChange={(e) => editValue(e, props.id, "name")}
            value={submitForm.name}
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            className="border-2"
            value={submitForm.surname}
            onChange={(e) => editValue(e, props.id, "surname")}
          />
        </label>
        <label>
          Hourly Salary:
          <input
            type="number"
            onChange={(e) => editValue(e, props.id, "hourly_salary")}
            className="border-2"
            value={submitForm.hourly_salary}
          />
        </label>
        <label>
          Taxes amount:
          <input
            type="number"
            className="border-2"
            onChange={(e) => editValue(e, props.id, "taxes_amount_per_hour")}
            value={submitForm.taxes_amount_per_hour}
          />
        </label>
      </form>
      <div className="flex justify-between">
        <button onClick={() => changeWorkerData(props.id)}>Update</button>
        <button onClick={() => deleteWorker(props.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Worker;
