import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextType {
  accessToken: string | null;
  refreshToken: string | null;
  logout: () => void;
}
