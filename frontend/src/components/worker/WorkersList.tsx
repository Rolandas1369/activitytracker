import React, { FunctionComponent, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Worker from "./Worker";
import CreateForm from "../createform/CreateForm";

const WorkersList: FunctionComponent = () => {
  const { getWorkersList } = useActions();
  const { data } = useTypedSelector((state) => state.workers);

  useEffect(() => {
    // getWorkersList();
  }, []);

  return (
    <div>
      <h2>Workers list</h2>
      {data.map((entry) => {
        return (
          <Worker
            key={Math.random()}
            id={entry.id}
            name={entry.name}
            surname={entry.surname}
            hourly_salary={entry.hourly_salary}
            taxes_amount_per_hour={entry.taxes_amount_per_hour}
          ></Worker>
        );
      })}
      <h2>Add worker</h2>
      <CreateForm APIEndpoint="workers/"></CreateForm>
    </div>
  );
};

export default WorkersList;
