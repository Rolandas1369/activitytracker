import { useState, useEffect, ReactNode } from "react";

import Order from "../order/Order";

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
const OrdersList = (): ReactNode | null => {
  const [ordersData, setOrdersData] = useState<APIOrder[]>();

  useEffect(() => {
    void requestOrders().catch((err) => {
      console.log("Error with message", err);
    });
  }, []);

  async function requestOrders(): Promise<void> {
    const res = await fetch("http://activitytracker.xyz/api/orders", {headers: {Authorization: `JWT ${localStorage.getItem("access_token")}`}});
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
