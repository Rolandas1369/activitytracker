// @ts-ignore
import { FunctionComponent, useEffect, useState } from "react";
import CreateForm from "../createform/CreateForm";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const AddWorkingTimeForm: FunctionComponent = () => {
  const { getOrdersList } = useActions();
  const { getWorkersList } = useActions();
  const { orders } = useTypedSelector((state) => state.orders);
  const { data } = useTypedSelector((state) => state.workers);

  const [orderField, setOrderField] = useState("");
  const [workersField, setWorkersField] = useState("");
  const [orderForm, setOrderForm] = useState({
    data: { order: null, worker: null, work_day: null, hours: null },
  });

  useEffect(() => {
    getOrdersList();
    getWorkersList();
    console.log(orders);
    console.log(data);
  }, []);

  const addOrderToField = (orderID, orderName) => {
    setOrderField(orderName);
    orderForm.data.order = orderID;
  };

  const addWorkersField = (workerID, worker: string) => {
    const workerls = workersField + " " + worker;
    setWorkersField(workerls);
  };

  return (
    <div className="flex">
      <div>
        <h2>Add Working Time</h2>
        <form
          onSubmit={(e) => {
            console.log(orderForm);
            e.preventDefault();
          }}
        >
          <label>
            Order:
            <input
              className="m-2 border-2"
              type="text"
              value={orderField}
              readOnly
            />
            <input type="submit" />
          </label>
          {orders.map((order) => {
            return (
              <button
                className="m-2 border-2"
                key={order.id}
                onClick={() => addOrderToField(order.id, order.name)}
              >
                {order.name}
              </button>
            );
          })}
          <label>
            Workers:
            <input
              className="m-2 border-2"
              type="text"
              value={workersField}
              readOnly
            />
            <input type="submit" />
          </label>
          {data.map((worker) => {
            return (
              <button
                key={worker.id}
                className="m2 border-2"
                onClick={() => addWorkersField(worker.id, worker.name)}
              >
                {worker.name}
              </button>
            );
          })}
        </form>
      </div>
    </div>
  );
};

export default AddWorkingTimeForm;
