import axios from "axios";
import {
  AccessFailure,
  AccessStart,
  AccessSuccess,
  Logout,
} from "./AuthActions";
import { URL } from "../../lib/constants";
import { toast } from "react-toastify";

export const AuthLogin = async (user, dispatch, navigate, setLoading) => {
  setLoading(true);
  dispatch(AccessStart());
  try {
    const res = await axios.post(`${URL}/auth/sign-in`, user, {
      withCredentials: true,
      validateStatus: (status) => status < 600,
    });

    if (res.status === 200) {
      dispatch(AccessSuccess(res.data));
      if (res.data) {
        navigate("/");
        setLoading(false);
      }
    } else {
      dispatch(AccessFailure());
      setLoading(false);
      toast.error(res.data.message || "Something went wrong");
    }
  } catch (error) {
    dispatch(AccessFailure());
    toast.error("An unexpected error occurred. Please try again.");
  }
};

export const AuthSignUp = async (user, dispatch, navigate, setLoading) => {
  dispatch(AccessStart());
  try {
    const res = await axios.post(`${URL}/auth/sign-up`, user, {
      withCredentials: true,
      validateStatus: (status) => status < 600,
    });
    if (res.status === 200) {
      dispatch(AccessSuccess(res.data));
      if (res.data) {
        navigate("/");
        setLoading(false);
      }
    } else {
      dispatch(AccessFailure());
      setLoading(false);
      toast.error(res.data.message || "Something went wrong");
    }
  } catch (err) {
    dispatch(AccessFailure());
    toast.error("An unexpected error occurred. Please try again.");
  }
};

export const AuthLogOut = async (navigate, dispatch, setLoading) => {
  try {
    // Notify the backend (optional)
    const res = await axios.post(`${URL}/auth/logout`, {
      withCredentials: true,
      validateStatus: (status) => status < 600,
    });

    if (res.status === 200) {
      dispatch(Logout());
      setLoading(false);
      navigate("/");
      toast.success(res.data.message);
    } else {
      setLoading(false);
      toast.error(res.data.message);
    }
  } catch (err) {
    setLoading(false);
    toast.error("An unexpected error occurred. Please try again.");
  }
};
