import { ActionType } from "../action-types";

interface SearchWorkersAction {
  type: ActionType.SEARCH_WORKERS;
}

interface SearchWorkersSuccessAction {
  type: ActionType.SEARCH_WORKERS_SUCCESS;
  payload: {
    id: number;
    name: string;
    surname: string;
    hourly_salary: number;
    taxes_amount_per_hour: number;
  }[];
}

interface SearchWorkersErrorAction {
  type: ActionType.SEARCH_WORKERS_ERROR;
  payload: string;
}

export type WorkersAction =
  | SearchWorkersAction
  | SearchWorkersErrorAction
  | SearchWorkersSuccessAction;
