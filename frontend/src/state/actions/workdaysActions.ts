import { ActionType } from "../action-types";

interface SearchWorkdaysAction {
  type: ActionType.SEARCH_WORKDAYS;
}

interface SearchWorkersSuccessAction {
  type: ActionType.SEARCH_WORKDAYS_SUCCESS;
  payload: {
    id: number;
    date: string;
    date_formated: string;
  }[];
}

interface SearchWorkersErrorAction {
  type: ActionType.SEARCH_WORKDAYS_ERROR;
  payload: string;
}

export type WorkDaysAction =
  | SearchWorkdaysAction
  | SearchWorkersErrorAction
  | SearchWorkersSuccessAction;
