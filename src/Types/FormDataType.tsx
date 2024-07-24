export interface FormDataType {
  fullName: string;
  email: string;
  parent_id?: string;
  class?: string;
  gender?: "male" | "female";
  age?: number;
  phone?: string;
  id: string;
  subject?: string | null;
  schedule?: { day: string; period: string; class: string }[];
}
