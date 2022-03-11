import { ActionType } from "../action-types";

interface SearchOrdersAction {
  type: ActionType.SEARCH_ORDERS;
}

interface SearchOrdersSuccessAction {
  type: ActionType.SEARCH_ORDERS_SUCCESS;
  payload: {
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

interface SearchOrdersErrorAction {
  type: ActionType.SEARCH_ORDERS_ERROR;
  payload: string;
}

export type OrdersActions =
  | SearchOrdersAction
  | SearchOrdersSuccessAction
  | SearchOrdersErrorAction;
