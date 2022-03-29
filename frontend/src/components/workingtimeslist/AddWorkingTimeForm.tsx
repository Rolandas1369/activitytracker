// @ts-ignore
import {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useEffect,
  useState
} from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import axiosInstance from "../axiosInstance";
import FormSection from "./FormSection";

const AddWorkingTimeForm: FunctionComponent = () => {
  const { getOrdersList } = useActions();
  const { getWorkersList } = useActions();
  const { getWorkDaysList } = useActions();
  const { orders } = useTypedSelector((state) => state.orders);
  const { data } = useTypedSelector((state) => state.workers);
  const { workdays } = useTypedSelector((state) => state.workdays);
  const [message, setMessage] = useState<string | null>(null);

  const [orderField, setOrderField] = useState<{
    order_id: number;
    order_name: string;
  }>({ order_id: null, order_name: "" });
  const [workersField, setWorkersField] = useState<
    {
      worker_id: number;
      worker_name: string;
      hours: number | null;
      messageClass: string | null;
    }[]
  >([]);
  const [workDayField, setWorkDayField] = useState<{
    workday_id: number;
    date_formated: string;
  }>({ workday_id: null, date_formated: "" });
  const [additionalTimeData, setAdditionalTimeData] = useState(" ");

  useEffect(() => {
    getOrdersList();
    getWorkersList();
    getWorkDaysList();
  }, []);

  const addOrderToField = (orderID, orderName) => {
    setOrderField({ order_id: orderID, order_name: orderName });
  };

  const addWorkersField = (
    workerID: number,
    worker: string,
    hours: number | null
  ) => {
    const tempWorkerField = [
      ...workersField,
      {
        worker_id: workerID,
        worker_name: worker,
        hours: hours,
        messageClass: null
      }
    ];
    setWorkersField(tempWorkerField);
    setAdditionalTimeData(" bg-indigo-500");
  };

  const addWorkingTimeToWorker = (
    e: ChangeEvent<HTMLInputElement>,
    workerID
  ) => {
    console.log(workersField);
    const result = workersField.filter((w) => {
      return w.worker_id === workerID;
    });

    result[0].hours = +e.target.value;
  };

  const addWorkDaysField = (workday_id: number, date_formated) => {
    setWorkDayField({
      workday_id: workday_id,
      date_formated: date_formated
    });
  };

  const submitWorkingTime = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const temp_data = [];
    workersField.map((worker) => {
      if (worker.hours === null) {
        setMessage(`Worker ${worker.worker_name} does't have working hours`);
        return;
      }
      console.log("Returning");
      temp_data.push({
        worker: worker.worker_id,
        order: orderField.order_id,
        work_day: workDayField.workday_id,
        hours: worker.hours
      });
    });
    if (temp_data.length === 0) {
      return;
    }

    console.log(temp_data, workersField);
    void axiosInstance.post("workingtimespost/", temp_data).then((res) => {
      setOrderField({ order_id: null, order_name: "" });
      setWorkersField([]);
      setWorkDayField({ workday_id: null, date_formated: "" });
      if (res.status === 200) {
        console.log("ok");
      }
    });
  };

  return (
    <div>
      <h2>Add Working Time</h2>
      <form className="flex flex-col" onSubmit={submitWorkingTime}>
        <input type="submit" />
        <label>
          Order:
          <input
            className="m-2 border-2"
            type="text"
            required
            value={orderField.order_name}
            readOnly
          />
        </label>
        <div className="border-2">
          {orders
            ? orders.map((order) => {
                return (
                  <FormSection
                    key={order.id}
                    id={order.id}
                    name={order.name}
                    location={order.location}
                    starting_at={order.starting_at}
                    began_at={order.began_at}
                    ended_at={order.ended_at}
                    completed={order.completed}
                    price={order.price}
                  ></FormSection>
                );
                // return (
                //   <button
                //     className="m-2 border-2"
                //     type="button"
                //     key={order.id}
                //     onClick={() => addOrderToField(order.id, order.name)}
                //   >
                //     {order.name}
                //   </button>
                // );
              })
            : null}
        </div>
        <div>
          <label>
            Workers:
            <input
              className="m-2 border-2"
              type="text"
              required
              value={workersField.map((worker) => worker.worker_name)}
              readOnly
            />
          </label>
          {message}
          <div className="flex flex-wrap  border-2">
            {data.map((worker) => {
              return (
                <div key={worker.id} className="flex">
                  <span>Name: </span>
                  <button
                    className="m-2 border-2"
                    type="button"
                    onClick={() =>
                      addWorkersField(worker.id, worker.name, null)
                    }
                  >
                    {worker.name}
                  </button>
                  <label>
                    Hours:
                    <input
                      onChange={(e) => addWorkingTimeToWorker(e, worker.id)}
                      className={"m-2 border-2 w-8" + " " + additionalTimeData}
                      type="number"
                    />
                  </label>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap">
            <label>
              Workday:
              <input
                className="m-2 border-2"
                type="text"
                required
                value={workDayField.date_formated}
                readOnly
              />
            </label>
            <div className="flex flex-wrap  border-2">
              {workdays.map((workday) => {
                return (
                  <div key={workday.id} className="flex">
                    <span>WorkDays: </span>
                    <button
                      className="m-2 border-2"
                      type="button"
                      onClick={() =>
                        addWorkDaysField(workday.id, workday.date_formated)
                      }
                    >
                      {workday.date_formated}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddWorkingTimeForm;
