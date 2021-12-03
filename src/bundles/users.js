import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./UserActions";
import axios from "axios";

const initialState = {
  loading: false,
  users: {},
  error: "",
};

const userReducer = {
  name: "users",

  reducer: (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_USERS_REQUEST":
        return {
          ...state,
          laoding: true,
        };

      case "FETCH_USERS_SUCCESS":
        return {
          loading: false,
          users: action.payload,
          error: "",
        };

      case "FETCH_USERS_FAILURE":
        return {
          loading: false,
          users: {},
          error: "",
        };

      default:
        return state;
    }
  },

  selectUsers: (state) => state.users,

  doFetchUsers:
    () =>
    ({ dispatch }) => {
      dispatch(fetchUsersRequest());
      axios
        .get(
          "https://api.learnyst.com/learner/v12/courses/?is_from_classroom=true&school_id=127906&device_type=4&isAxiosCall=true"
        )
        .then((response) => {
          const users = response.data;
          // console.log("Got the data");
          dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
          const errorMsg = error.message;
          // console.log("Got the errror:- ", errorMsg);
          dispatch(fetchUsersFailure(errorMsg));
        });
    },

  init: (store) => {
    store.doFetchUsers();
    store.selectUsers();
  },
};

export default userReducer;
