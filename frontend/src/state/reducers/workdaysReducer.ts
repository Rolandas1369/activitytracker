import { ActionType } from "../action-types";
import { WorkDaysAction } from "../actions/workdaysActions";

interface WorkDaysState {
  loading: boolean;
  error: string | null;
  workdays: { id: number; date: string; date_formated: string }[];
}

const initialState = {
  loading: false,
  error: null,
  workdays: []
};

const reducer = (
  state: WorkDaysState = initialState,
  action: WorkDaysAction
): WorkDaysState => {
  switch (action.type) {
    case ActionType.SEARCH_WORKDAYS:
      return { loading: true, error: null, workdays: [] };
    case ActionType.SEARCH_WORKDAYS_SUCCESS:
      return { loading: false, error: null, workdays: action.payload };
    case ActionType.SEARCH_WORKDAYS_ERROR:
      return { loading: false, error: action.payload, workdays: [] };
    default:
      return state;
  }
};

export default reducer;
