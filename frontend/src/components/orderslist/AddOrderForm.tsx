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
      <div>
        <h2>Current orders</h2>
        {orders.map((order) => {
          return <p key={order.id}>{order.name}</p>;
        })}
      </div>
      <div>
        <h2>Add order</h2>
        <CreateForm APIEndpoint="orders/"></CreateForm>
      </div>
    </div>
  );
};

export default AddOrderForm;
