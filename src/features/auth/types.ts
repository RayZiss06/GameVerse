export interface AuthUser {
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}

export interface AuthContextValue {
  isAuthenticated: boolean;
  isLoading: boolean;

  user: AuthUser | null;

  token: string | undefined;

  login: () => Promise<void>;
  logout: () => Promise<void>;

  hasRole: (role: string) => boolean;
}
