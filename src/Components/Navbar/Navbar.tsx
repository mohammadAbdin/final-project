import { useContext } from "react";
import { FiLogOut } from "react-icons/fi"; // דוגמה לאייקון, ניתן להשתמש בכל סט של אייקונים
import { UserContext } from "../../Context/UserContext";
import { LogOutUser } from "../../Api/LogOutUser";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, setIsLogedIn, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-500 p-2  flex justify-between items-center w-full">
      <div className="flex flex-row  mx-4 justify-between items-center w-full">
        <div className="flex flex-col items-center justify-end">
          <img src="/edutrackerlogo1.png" alt="Logo" className="h-8 mr-2" />
          {user && (
            <span className="text-white text-sm">Hello, {user?.userType}</span>
          )}
        </div>
        <div className="text-white text-lg font-bold">EDUtracker</div>
        <div>
          {user && (
            <button
              onClick={() => {
                LogOutUser(setIsLogedIn, setUser, navigate);
              }}
              className="flex items-center text-white font-bold"
            >
              <FiLogOut className="mr-2" />
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
