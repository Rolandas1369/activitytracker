import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { WorkersAction } from "../actions/searchWorkersActions";
import { OrdersActions } from "../actions";
import { RepositoriesAction } from "../actions/searchRepositoriesActions";
import axiosInstance from "../../components/axiosInstance";

interface WorkingTimeAPI {
  data: { id: number; worker: string; order: string; work_day: string }[];
}

interface WorkersAPI {
  data: {
    id: number;
    name: string;
    surname: string;
    hourly_salary: number;
    taxes_amount_per_hour: number;
  }[];
}

interface OrdersAPI {
  data: {
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

export const searchRepositories = () => {
  return async (dispatch: Dispatch<RepositoriesAction>): Promise<void> => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES });

    try {
      const { data }: WorkingTimeAPI = await axiosInstance.get("workingtimes/");
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: data
      });
    } catch (err: unknown) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: String(err)
      });
    }
  };
};

export const getWorkersList = () => {
  return async (dispatch: Dispatch<WorkersAction>): Promise<void> => {
    dispatch({ type: ActionType.SEARCH_WORKERS });

    try {
      const { data }: WorkersAPI = await axiosInstance.get("workers/");
      console.log(data);
      dispatch({
        type: ActionType.SEARCH_WORKERS_SUCCESS,
        payload: data
      });
    } catch (err: unknown) {
      dispatch({
        type: ActionType.SEARCH_WORKERS_ERROR,
        payload: String(err)
      });
    }
  };
};

export const getOrdersList = () => {
  return async (dispatch: Dispatch<OrdersActions>): Promise<void> => {
    dispatch({ type: ActionType.SEARCH_ORDERS });

    try {
      const { data }: OrdersAPI = await axiosInstance.get("orders/");
      console.log(data);
      dispatch({
        type: ActionType.SEARCH_ORDERS_SUCCESS,
        payload: data
      });
    } catch (err: unknown) {
      dispatch({
        type: ActionType.SEARCH_ORDERS_ERROR,
        payload: String(err)
      });
    }
  };
};
