export interface FormDataType {
  fullName: string;
  email: string;
  parent_id?: string;
  class?: string;
  gender?: "male" | "female";
  phone?: string; // Optional property
  id: string;
}
