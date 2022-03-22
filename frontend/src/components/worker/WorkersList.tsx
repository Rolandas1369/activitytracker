import { FunctionComponent, useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Worker from "./Worker";
import CreateForm from "../createform/CreateForm";

interface WorkersData {
  id: number;
  name: string;
  surname: string;
  hourly_salary: number;
  taxes_amount_per_hour: number;
}
[];

const WorkersList: FunctionComponent = () => {
  const { getWorkersList } = useActions();
  const { data } = useTypedSelector((state) => state.workers);
  const [sbf, setsbf] = useState(null);
  const [forms, addForm] = useState([
    <CreateForm APIEndpoint="workers/" key={Math.random()}></CreateForm>
  ]);

  useEffect(() => {
    getWorkersList();
  }, []);

  const createEditableForm = (data1: any[]) => {
    if (data) {
      const sdd = data1.map((entry: { key: string }) => {
        const keys = Object.keys(entry) as [string];
        return keys.map((etr: string) => {
          return <input type="text" key={Math.random()} value={entry[etr]} />;
        });
      });
      setsbf(sdd);
    }
  };

  const addAdditionalForm = () => {
    const currentForms = [...forms];
    currentForms.push(
      <CreateForm APIEndpoint="workers/" key={Math.random()}></CreateForm>
    );
    addForm(currentForms);
  };

  return (
    <div className="flex flex-wrap">
      <div>
        <h2>Workers list</h2>

        {sbf}
        {data.map((entry) => {
          return (
            <Worker
              key={Math.random()}
              id={entry.id}
              name={entry.name}
              surname={entry.surname}
              hourly_salary={entry.hourly_salary}
              taxes_amount_per_hour={entry.taxes_amount_per_hour}
              getWorkersList={getWorkersList}
            ></Worker>
          );
        })}
      </div>
      <div>
        <div>
          <h2>Add worker</h2>
          <button onClick={addAdditionalForm}>Add form</button>
        </div>
        {forms}
      </div>
    </div>
  );
};

export default WorkersList;
