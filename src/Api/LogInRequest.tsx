import axios from "axios";

export const logIn = async (
  email: string,
  password: string,
  setIsLogedIn: (isLogedIn: boolean) => void,
  setError: (error: string) => void,
  path: string
) => {
  try {
    const response = await axios.post(
      `https://final-project-1-hjx7.onrender.com/user${path}`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    setIsLogedIn(true);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const errorData = error.response.data;
        console.log(errorData);

        setError(errorData.message || "Login failed");
      } else if (error.request) {
        console.error("No response received:", error.request);
        setError("No response from the server.");
      } else {
        console.error("Error:", error.message);
        setError(error.message);
      }
    } else {
      console.error("Unexpected Error:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  }
};
