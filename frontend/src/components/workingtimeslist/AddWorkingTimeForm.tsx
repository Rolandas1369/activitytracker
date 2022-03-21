// @ts-ignore
import { FunctionComponent, useEffect } from "react";
import CreateForm from "../createform/CreateForm";

const AddWorkingTimeForm: FunctionComponent = () => {
  useEffect(() => {}, []);

  return (
    <div className="flex">
      <div>
        <h2>Add Working Time</h2>
        <CreateForm APIEndpoint="workingtimes/"></CreateForm>
      </div>
    </div>
  );
};

export default AddWorkingTimeForm;
