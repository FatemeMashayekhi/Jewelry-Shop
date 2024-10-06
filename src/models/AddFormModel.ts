import { FieldErrors, UseFormRegister } from "react-hook-form";

export type FormDataTypes = {
  name: string;
  category: string;
  subcategory: string;
  quantity: number;
  price: number;
  discount: number;
  brand: string;
  description: string;
  thumbnail: FileList; // Single file
  images: FileList; // Multiple files
};

export interface InputFieldProps {
  label: string;
  type: string;
  register: UseFormRegister<FormDataTypes>;
  errors: FieldErrors<FormDataTypes>;
  name: keyof FormDataTypes;
  validation: object;
}

export interface SelectFieldProps {
  label: string;
  register: UseFormRegister<FormDataTypes>;
  errors: FieldErrors<FormDataTypes>;
  name: keyof FormDataTypes;
  options: { id: string; name: string }[];
  validation?: object;
}

export type Category = {
  name: string;
  id: string;
};

export type SubCategory = {
  name: string;
  id: string;
};
