import { useState, useEffect, FunctionComponent } from "react";

import Order from "../order/Order";
import { config } from "../Constants";

interface APIOrder {
  began_at: string | null;
  completed: boolean;
  ended_at: string | null;
  location: string | null;
  name: string;
  price: number;
  starting_at: string | null;
  id: number;
}
const OrdersList: FunctionComponent = () => {
  const [completedOrdersData, setCompletedOrdersData] = useState<APIOrder[]>();
  const [uncompletedOrdersData, setUncompletedOrdersData] =
    useState<APIOrder[]>();

  useEffect(() => {
    void requestOrders().catch((err) => {
      console.log("Error with message", err);
    });
  }, []);

  async function requestOrders(): Promise<void> {
    setCompletedOrdersData([]);
    setUncompletedOrdersData([]);
    const res1 = await fetch(config.url.API_URL + "orders/?completed=true", {
      headers: { Authorization: `JWT ${localStorage.getItem("access_token")}` }
    });
    const json1 = (await res1.json()) as APIOrder[];
    void setCompletedOrdersData(json1);

    const res = await fetch(config.url.API_URL + "orders/?completed=false", {
      headers: { Authorization: `JWT ${localStorage.getItem("access_token")}` }
    });
    const json = (await res.json()) as APIOrder[];
    void setUncompletedOrdersData(json);
  }

  const handleSubmit = () => {
    console.log("Something after submit");
  };

  return (
    <div>
      <h1 className="flex justify-center">Orders</h1>
      <div className="flex flex-wrap justify-center">
        <div className="completed">
          <h2>Completed</h2>
          {completedOrdersData
            ? completedOrdersData.map((order, index) => {
                return (
                  <Order
                    key={index}
                    began_at={order.began_at}
                    completed={order.completed}
                    ended_at={order.ended_at}
                    location={order.location}
                    name={order.name}
                    price={order.price}
                    starting_at={order.starting_at}
                    id={order.id}
                    requestOrders={requestOrders}
                  ></Order>
                );
              })
            : null}
        </div>
        <div className="uncompleted">
          <h2>Unccffompleted</h2>
          {uncompletedOrdersData
            ? uncompletedOrdersData.map((order, index) => {
                return (
                  <Order
                    key={index}
                    began_at={order.began_at}
                    completed={order.completed}
                    ended_at={order.ended_at}
                    location={order.location}
                    name={order.name}
                    price={order.price}
                    starting_at={order.starting_at}
                    id={order.id}
                    requestOrders={requestOrders}
                  ></Order>
                );
              })
            : null}
        </div>
      </div>

      <form
        className="flex justify-center"
        onSubmit={handleSubmit}
        action="/orders"
      >
        <input className="cursor-pointer" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default OrdersList;
