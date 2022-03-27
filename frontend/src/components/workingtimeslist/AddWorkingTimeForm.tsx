// @ts-ignore
import {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useEffect,
  useState
} from "react";
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
  const [dataValues, setDataValues] = useState<{
    orderID: number;
    orderName: string;
    workers: [{ workerID: number | null; worker: string; hours: number }];
  }>({
    orderID: 0,
    orderName: "",
    workers: [{ workerID: null, worker: "", hours: 0 }]
  });
  const [orderForm, setOrderForm] = useState({
    data: { order: null, worker: null, work_day: null, hours: null }
  });
  const [formData, setFormData] = useState<
    { orderID: number; workerID: number; hours: number }[]
  >([]);

  useEffect(() => {
    getOrdersList();
    getWorkersList();
    console.log(orders);
    console.log(data);
  }, []);

  const addOrderToField = (orderID, orderName) => {
    const tempValues = dataValues;
    tempValues["orderID"] = orderID;
    tempValues["orderName"] = orderName;
    setDataValues(tempValues);
    setOrderField(orderName);
  };

  const addWorkersField = (workerID, worker: string) => {
    const tempDataValues = dataValues;
    console.log(tempDataValues);
    const tempWorkersField: { workerID: number; worker: string }[] = [];
    tempWorkersField.push({ workerID: workerID, worker: worker });

    tempDataValues.workers.push({
      workerID: workerID,
      worker: worker,
      hours: 0
    });
    console.log(tempDataValues);

    let stringedField = "";
    tempDataValues.workers.map((field) => {
      stringedField += " " + field.worker;
    });

    const tempFormData = [] as {
      orderID: number;
      workerID: number;
      hours: 0;
    }[];
    tempWorkersField.map((worker) => {
      tempFormData.push({
        orderID: tempDataValues.orderID,
        workerID: worker.workerID,
        hours: 0
      });
    });
    setFormData([...formData, ...tempFormData]);

    // tempDataValues["workers"] = [{ workerID: workerID, worker: worker }];
    // console.log(tempDataValues);
    // // const workerls = [...workersField, { workerID: workerID, worker: worker }];
    setWorkersField(stringedField);
  };

  const addTime = (e: ChangeEvent<HTMLInputElement>, workerID) => {
    // formData = formData as {};
    console.log(formData, workerID, e.target.value);
    const result = formData.filter((w) => {
      return w.workerID === workerID;
    });

    result[0].hours = +e.target.value;
  };

  const submitWorkingTime = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div>
        <h2>Add Working Time</h2>
        <form className="flex flex-col" onSubmit={(e) => submitWorkingTime(e)}>
          <input type="submit" />
          <label>
            Order:
            <input
              className="m-2 border-2"
              type="text"
              value={orderField}
              readOnly
            />
          </label>
          <div>
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
          </div>
          <label>
            Workers:
            <input
              className="m-2 border-2"
              type="text"
              value={workersField}
              readOnly
            />
          </label>
          <div className="flex flex-wrap">
            {data.map((worker) => {
              return (
                <div key={worker.id} className="flex">
                  <span>Name: </span>
                  <button
                    className="m-2 border-2"
                    onClick={() => addWorkersField(worker.id, worker.name)}
                  >
                    {worker.name}
                  </button>
                  <label>
                    Hours:
                    <input
                      onChange={(e) => addTime(e, worker.id)}
                      className="m-2 border-2 w-8"
                      type="number"
                    />
                  </label>
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWorkingTimeForm;
