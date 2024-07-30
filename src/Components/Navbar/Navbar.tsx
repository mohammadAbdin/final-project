import React from "react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../Context/UserContext";
// import useGetTokens from "../Hooks/UseGetTokens";
// import useLogin from "../Hooks/UseLogIn";

const Navbar: React.FC = () => {
  // const navigate = useNavigate();
  // const { setIsLogedIn, setUser, user } = useContext(UserContext);
  // const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  // const { handleLogout } = useLogin();
  // useEffect(() => {
  //   if (!isLoading) {
  //     console.log("User after fetch:", user);
  //   }
  // }, [isLoading, user]);

  // if (isLoading) {
  //   return <></>;
  // }

  return (
    <>
      <header className="bg-gray-800 ">
        <div className="myNavbar verticle-menu-container bg-grey-300 fixed w-full sm:mr-28 lg:justify-between text-white px-4 sm:px-6 top-0 lg:px-8 border-b border-gray-300">
          <div className=" flex h-16 items-center justify-between mr-32">
            <img className="mr-2 h-6 md:h-12 w-auto" alt="logo" />

            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only text-white ">Home</span>
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className=" lg:block text-white">
                {/* <UserTitles user={user} /> */}
              </nav>
              <div className="flex items-center gap-4">
                {/* {user ? (
                  <div className="sm:flex sm:gap-4">
                    <div className="hidden sm:flex">
                      <button
                        className="rounded-md bg-gray-100 px-5 py-2.5 hidden lg:block text-sm font-medium text-teal-600"
                        onClick={handleLogout}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="sm:flex sm:gap-4">
                    <button
                      className="rounded-md bg-teal-600 px-5 py-2.5 hidden lg:block text-sm font-medium text-white shadow"
                      onClick={() => {
                        navigate("/LogIn");
                      }}
                    >
                      Login
                    </button>
                    <div className="hidden sm:flex">
                      <button
                        className="rounded-md bg-gray-100 px-5 py-2.5 hidden lg:block text-sm font-medium text-teal-600"
                        onClick={() => {
                          navigate("/Register");
                        }}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                )} */}
                {/* <HamburgerMenu /> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
