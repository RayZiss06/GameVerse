import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import keycloak from "./keycloak";
import type { AuthContextValue, AuthUser, GameVerseRole } from "./types";

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

interface KeycloakProviderProps {
  children: ReactNode;
}

export function KeycloakProvider({ children }: KeycloakProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | undefined>();
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    let mounted = true;

    const initializeKeycloak = async () => {
      try {
        const authenticated = await keycloak.init({
          onLoad: "check-sso",
          pkceMethod: "S256",
          checkLoginIframe: false,
        });

        if (!mounted) {
          return;
        }

        setIsAuthenticated(authenticated);
        setToken(keycloak.token);

        if (authenticated && keycloak.tokenParsed) {
          const roles = keycloak.tokenParsed.realm_access?.roles ?? [];

          const gameVerseRoles = roles.filter((role): role is GameVerseRole =>
            ["USER", "MODERATOR", "ADMIN", "SUPERADMIN"].includes(role),
          );

          setUser({
            username: keycloak.tokenParsed.preferred_username,
            email: keycloak.tokenParsed.email,
            firstName: keycloak.tokenParsed.given_name,
            lastName: keycloak.tokenParsed.family_name,
            roles: gameVerseRoles,
          });
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Keycloak initialization failed:", error);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    initializeKeycloak();

    return () => {
      mounted = false;
    };
  }, []);

  const login = useCallback(async () => {
    await keycloak.login({
      redirectUri: `${window.location.origin}/home`,
    });
  }, []);

  const logout = useCallback(async () => {
    await keycloak.logout({
      redirectUri: `${window.location.origin}/login`,
    });
  }, []);

  const hasRole = useCallback((role: GameVerseRole) => {
    return keycloak.hasRealmRole(role);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated,
      isLoading,
      user,
      token,
      login,
      logout,
      hasRole,
    }),
    [isAuthenticated, isLoading, user, token, login, logout, hasRole],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
