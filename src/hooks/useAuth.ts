import { useContext } from "react";
import { AuthContext } from "../features/auth/KeycloakProvider";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside KeycloakProvider");
  }

  return context;
}
