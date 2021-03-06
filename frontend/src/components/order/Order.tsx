import { config } from "../Constants";
import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

interface APIOrder {
  began_at: string | null;
  completed: boolean;
  ended_at: string | null;
  location: string | null;
  name: string;
  price: number;
  starting_at: string | null;
  id: number;
  requestOrders: () => void;
}

const Order: React.FC<APIOrder> = (props): JSX.Element => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(props.completed);
  }, [props.completed]);

  const deleteOrder = (id) => {
    void axiosInstance.delete(`orders/${+id}`).then((res) => {
      // no multiple instant deletes becouse state is set to []
      // loding indicator needed
      console.log("deleted", res);
      props.requestOrders();
    });
  };

  const setStatusToCompleted = (val, props: APIOrder) => {
    const orderId = props.id;
    console.log(orderId);
    setCompleted(!completed);

    void axios
      .put(
        config.url.API_URL + `orders/${props.id}`,
        {
          name: props.name,
          price: props.price,
          completed: !props.completed
        },
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem("access_token")}`
          }
        }
      )
      .then((resp) => {
        console.log(resp);
      });
  };

  return (
    <div className="border-2 m-1">
      <p>
        <i className="text-blue-600">Pavadinimas:</i> {props.name}
      </p>
      <i className="text-blue-600">Atliktas: </i>
      <input
        type="checkbox"
        checked={completed}
        name="controlled"
        onChange={(e) => setStatusToCompleted(e.target.checked, props)}
      />
      {/* <p>
        <i className="text-blue-600">Atliktas:</i> {String(props.completed)}
      </p> */}
      <p>
        <i className="text-blue-600">Kaina:</i> {props.price}
      </p>
      <button onClick={() => deleteOrder(props.id)} className="text-red-600">
        Delete
      </button>
    </div>
  );
};

export default Order;
