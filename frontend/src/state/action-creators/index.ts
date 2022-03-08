// @ts-ignore
import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import axiosInstance from "../../components/axiosInstance";
import { config } from "../../components/Constants";

interface WorkingTimeAPI {
  data: { id: number; worker: string; order: string; work_day: string }[];
}
export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES });

    try {
      const { data }: WorkingTimeAPI = await axiosInstance.get("workingtimes/");

      // data.map((result) => {
      //   console.log(result.order);
      // });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: "eroor message"
      });
    }
  };
};
