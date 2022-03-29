import { FunctionComponent, useState } from "react";

interface OrderProps {
  id: number;
  name: string;
  location: string;
  starting_at: string | null;
  began_at: string | null;
  ended_at: string | null;
  completed: string | false;
  price: number;
}

const AddWorkingTimeForm: FunctionComponent<OrderProps> = ({ name }) => {
  const [order, setOrder] = useState("");

  return (
    <>
      <input type="text" value={name} />
    </>
  );
};

export default AddWorkingTimeForm;
