// @ts-ignore
import { FunctionComponent, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import CreateForm from "../createform/CreateForm";

const AddOrderForm: FunctionComponent = () => {
  const { orders } = useTypedSelector((state) => state.orders);
  const { getOrdersList } = useActions();

  useEffect(() => {
    getOrdersList();
  }, []);

  return (
    <div className="flex">
      <div className="border-2 m-2 p-2">
        <h2>
          <strong>Current orders</strong>
        </h2>
        <div className="pt-3">
          {orders.map((order) => {
            return <p key={order.id}>{order.name}</p>;
          })}
        </div>
      </div>
      <div className="border-2 m-2 p-2 w-auto">
        <h2>
          <strong>Add order</strong>
        </h2>
        <CreateForm
          APIEndpoint="orders/"
          updateData={getOrdersList}
        ></CreateForm>
      </div>
    </div>
  );
};

export default AddOrderForm;
