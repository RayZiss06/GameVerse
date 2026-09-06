export type GameVerseRole = "USER" | "MODERATOR" | "ADMIN" | "SUPERADMIN";

export interface AuthUser {
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  roles: GameVerseRole[];
}

export interface AuthContextValue {
  isAuthenticated: boolean;
  isLoading: boolean;

  user: AuthUser | null;

  token: string | undefined;

  login: () => Promise<void>;
  logout: () => Promise<void>;

  hasRole: (role: GameVerseRole) => boolean;
}
