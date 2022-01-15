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

const Order: React.FC<APIOrder> = (props): JSX.Element => {
  return (
    <div className="border-2">
      <p>{props.name}</p>
      <p>{String(props.completed)}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default Order;
