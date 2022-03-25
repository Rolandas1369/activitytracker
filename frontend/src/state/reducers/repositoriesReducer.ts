import { ActionType } from "../action-types";
import { RepositoriesAction } from "../actions/searchRepositoriesActions";
import { WorkingTimeAPI } from "../../interfaces/interfaces";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: WorkingTimeAPI["data"];
}

const initialState = {
  loading: false,
  error: null,
  data: []
};

const reducer = (
  state: RepositoriesState = initialState,
  action: RepositoriesAction
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
