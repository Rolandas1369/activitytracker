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
  const [ordersData, setOrdersData] = useState<APIOrder[]>();

  useEffect(() => {
    void requestOrders().catch((err) => {
      console.log("Error with message", err);
    });
  }, []);

  async function requestOrders(): Promise<void> {
    const res = await fetch(config.url.API_URL + "orders/", {
      headers: { Authorization: `JWT ${localStorage.getItem("access_token")}` },
    });
    const json = (await res.json()) as APIOrder[];
    void setOrdersData(json);
  }

  return (
    <div>
      {ordersData
        ? ordersData.map((order, index) => {
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
              ></Order>
            );
          })
        : null}
    </div>
  );
};

export default OrdersList;
