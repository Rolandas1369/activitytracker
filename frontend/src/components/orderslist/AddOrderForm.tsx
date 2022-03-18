import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";

import axiosInstance from "../axiosInstance";

const AddOrderForm: FunctionComponent = () => {
  const [order, setOrder] = useState({});
  const [name, setName] = useState<string | null>("");
  const [location, setLocation] = useState<string | null>("");
  const [price, setPrice] = useState<string | null>("");

  const setValue = (
    e: ChangeEvent<HTMLInputElement>,
    changeF: React.Dispatch<React.SetStateAction<string>>
  ) => {
    changeF(e.target.value);
  };

  const addOrder = (e: FormEvent) => {
    e.preventDefault();

    const dataJson = [
      {
        name: name,
        location: location,
        starting_at: null,
        began_at: null,
        completed: false,
        price: price
      },
      {
        name: name + "test",
        location: location,
        starting_at: null,
        began_at: null,
        completed: false,
        price: price
      }
    ];

    console.log(dataJson);
    void axiosInstance.post("orders/", dataJson).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <form
        onSubmit={addOrder}
        className="border-solid border-2 border-indigo-600"
      >
        <label>
          Name:
          <input
            onChange={(e) => setValue(e, setName)}
            value={name}
            type="text"
            className="border-solid border-2 border-red-600"
          />
        </label>
        <label>
          Location:
          <input
            onChange={(e) => setValue(e, setLocation)}
            value={location}
            type="text"
            className="border-solid border-2 border-red-600"
          />
        </label>
        <label>
          Price:
          <input
            onChange={(e) => setValue(e, setPrice)}
            value={price}
            type="number"
            className="border-solid border-2 border-red-600"
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddOrderForm;
