import { ActionType } from "../action-types";
import { OrdersActions } from "../actions/ordersActions";

interface OrdersState {
  loading: boolean;
  error: string | null;
  orders: {
    id: number;
    name: string;
    location: string;
    starting_at: string | null;
    began_at: string | null;
    ended_at: string | null;
    completed: string | false;
    price: number;
  }[];
}

const initialState = {
  loading: false,
  error: null,
  orders: []
};

const reducer = (
  state: OrdersState = initialState,
  action: OrdersActions
): OrdersState => {
  switch (action.type) {
    case ActionType.SEARCH_ORDERS:
      return { loading: true, error: null, orders: [] };
    case ActionType.SEARCH_ORDERS_SUCCESS:
      return { loading: false, error: null, orders: action.payload };
    case ActionType.SEARCH_ORDERS_ERROR:
      return { loading: false, error: action.payload, orders: [] };
    default:
      return state;
  }
};

export default reducer;
