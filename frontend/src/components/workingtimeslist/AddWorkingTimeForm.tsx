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
import axiosInstance from "../axiosInstance";
import { workers } from "cluster";

const AddWorkingTimeForm: FunctionComponent = () => {
  const { getOrdersList } = useActions();
  const { getWorkersList } = useActions();
  const { getWorkDaysList } = useActions();
  const { orders } = useTypedSelector((state) => state.orders);
  const { data } = useTypedSelector((state) => state.workers);
  const { workdays } = useTypedSelector((state) => state.workdays);

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
    if (data.length > 0) {
      console.log("Data");
    }
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
        console.log("xx");
      }
      console.log("Returning");
      temp_data.push({
        worker: worker.worker_id,
        order: orderField.order_id,
        work_day: workDayField.workday_id,
        hours: worker.hours
      });
    });

    console.log(temp_data, workersField);
    // void axiosInstance
    //   .post("workingtimespost/", temp_data)
    //   .then((res) => console.log(res));
  };
  console.log(data);

  const setAditionalData = () => {
    console.log(data);
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
            value={orderField.order_name}
            readOnly
          />
        </label>
        <div className="border-2">
          {orders.map((order) => {
            return (
              <button
                className="m-2 border-2"
                type="button"
                key={order.id}
                onClick={() => addOrderToField(order.id, order.name)}
              >
                {order.name}
              </button>
            );
          })}
        </div>
        <div>
          <label>
            Workers:
            <input
              className="m-2 border-2"
              type="text"
              value={workersField.map((worker) => worker.worker_name)}
              readOnly
            />
          </label>
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
