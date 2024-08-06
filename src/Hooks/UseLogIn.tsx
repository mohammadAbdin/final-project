import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../Context/UserContext";
import { logIn } from "../Api/LogInRequest";
import UserType from "../Types/UserType";
interface UseLoginReturn {
  email: string;
  password: string;
  name: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setName: (name: string) => void;
  error: string | null;
  passwordError: string | null;
  handlelogIn: (event: React.FormEvent) => Promise<void>;
  handleLogout: (event: React.FormEvent) => Promise<void>;
}
interface LogInResponse {
  user: UserType;
  token: string;
  userType: string;
}
const useLogin = (): UseLoginReturn => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { setIsLogedIn, setUser } = useContext(UserContext);

  const [passwordError, setPasswordError] = useState<string | null>("");

  const handlelogIn = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setPasswordError("");

    const response: LogInResponse = await logIn(
      email,
      password,
      setIsLogedIn,
      setError,
      "/auth"
    );

    setUser(response.user);
    if (response.token) {
      Cookies.set("token", response.token);
    }
    switch (response.user.userType) {
      case "Teacher":
        navigate("/TeacherSchedule");
        break;
      case "Parent":
        navigate("/ParentPage");
        break;
      case "Student":
        navigate("/StudentSchedule");
        break;
      default:
    }
  };
  const handleLogout = async () => {
    try {
      const response = await fetch(
        "https://rev-ops-code-review-site.onrender.com/LogIn/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (response.ok) {
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

  return {
    email,
    password,
    name,
    setEmail,
    setPassword,
    setName,
    error,
    passwordError,
    handlelogIn,
    handleLogout,
  };
};

export default useLogin;
