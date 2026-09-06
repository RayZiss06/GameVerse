import { useAuth } from "../hooks/useAuth";

export default function HomePage() {
  const { user, logout, hasRole } = useAuth();

  return (
    <div>
      <h1>GameVerse</h1>

      <h2>Authentication Test</h2>

      <p>
        Authentication:
        <strong> Authenticated</strong>
      </p>

      <hr />

      <h2>User Information</h2>

      <p>Username: {user?.username ?? "N/A"}</p>

      <p>Email: {user?.email ?? "N/A"}</p>

      <p>
        Name: {user?.firstName ?? ""} {user?.lastName ?? ""}
      </p>

      <hr />

      <h2>GameVerse Roles</h2>

      <p>USER: {hasRole("USER") ? "YES" : "NO"}</p>

      <p>MODERATOR: {hasRole("MODERATOR") ? "YES" : "NO"}</p>

      <p>ADMIN: {hasRole("ADMIN") ? "YES" : "NO"}</p>

      <p>SUPERADMIN: {hasRole("SUPERADMIN") ? "YES" : "NO"}</p>

      <hr />

      <button onClick={logout}>Logout</button>
    </div>
  );
}
