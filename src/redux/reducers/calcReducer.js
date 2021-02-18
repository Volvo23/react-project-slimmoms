import { createReducer } from "@reduxjs/toolkit";
import {
  clearState,
  getRecomends,
  setError,
  // setLoading,
  setUserInfo,
  toggleModal,
} from "../actions/calcAction";

const initialState = {
  userInfo: {},
  notAllowed: [],
  dailyRate: "",
  // recomends: {},
  error: "",
  modal: false,
};

export const calcReducer = createReducer(
  { ...initialState },
  {
    [setUserInfo]: (state, action) => {
      return {
        ...state,
        userInfo: { ...action.payload },
      };
    },
    [getRecomends]: (state, action) => {
      return {
        ...state,
        dailyRate: action.payload.dailyRate,
        notAllowed: [...action.payload.notAllowedProducts],
        // recomends: { ...action.payload },
      };
    },
    [setError]: (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    },
    [toggleModal]: (state) => ({
      ...state,
      modal: !state.modal,
    }),
    // [clearState]: (state) => {
    //   return { ...initialState };
    // },

    // [setLoading]: (state) => {
    //   return {
    //     ...state,
    //     loading: !state.loading,
    //   };
    // },
  }
);

export default calcReducer;
