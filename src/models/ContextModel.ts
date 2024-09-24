import { UseMutationResult } from "@tanstack/react-query";

export interface Admin {
  username: string;
  password: string | number;
}

export type DataContextType = {
  handleLogin?: (admin: Admin) => void;
  postGenerateAccessToken?: UseMutationResult<void, Error, void, unknown>;
};
