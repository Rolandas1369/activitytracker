import { ActionType } from "../action-types";
import { WorkersAction } from "../actions/searchWorkersActions";

interface WorkersState {
  loading: boolean;
  error: string | null;
  data: {
    id: number;
    name: string;
    surname: string;
    hourly_salary: number;
    taxes_amount_per_hour: number;
  }[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
};

const reducer = (
  state: WorkersState = initialState,
  action: WorkersAction
): WorkersState => {
  switch (action.type) {
    case ActionType.SEARCH_WORKERS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_WORKERS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_WORKERS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
