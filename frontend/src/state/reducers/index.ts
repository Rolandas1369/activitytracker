import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";
import workersReducer from "./workersReducer";
import ordersReducer from "./ordersReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
  workers: workersReducer,
  orders: ordersReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
