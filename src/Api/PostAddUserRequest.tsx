import axios from "axios";

import { FormDataType } from "../Types/FormDataType";

async function AddUserRequest(
  userType: string,
  formData: FormDataType
): Promise<void> {
  try {
    const response = await axios.post(
      "https://final-project-1-hjx7.onrender.com/user/Add-user",
      {
        userType,
        formData,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error adding the user:", error);
    throw error;
  }
}

export default AddUserRequest;
