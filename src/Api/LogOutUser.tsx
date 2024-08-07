import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import UserType from "../Types/UserType";

export const LogOutUser = async (
  setIsLogedIn: React.Dispatch<React.SetStateAction<boolean>>,
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>,
  navigate: ReturnType<typeof useNavigate>
) => {
  try {
    const response = await axios.post(
      "http://localhost:5001/user/logout",
      {},
      { withCredentials: true }
    );

    if (response.status === 200) {
      Cookies.remove("token");
      setIsLogedIn(false);
      setUser(undefined);
      navigate("/");
      window.location.reload();
    } else {
      console.error("Logout failed");
    }
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
