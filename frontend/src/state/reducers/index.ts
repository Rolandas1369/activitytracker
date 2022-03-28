import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";
import workersReducer from "./workersReducer";
import ordersReducer from "./ordersReducer";
import workdaysReducer from "./workdaysReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
  workers: workersReducer,
  orders: ordersReducer,
  workdays: workdaysReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
