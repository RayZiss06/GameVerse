import { useAuth } from "../hooks/useAuth";

export default function HomePage() {
  const { user, logout, hasRole } = useAuth();

  return (
    <div>
      <h1>GameVerse Home</h1>

      <hr />

      <h2>User Information</h2>

      <p>Username: {user?.username ?? "N/A"}</p>

      <p>Email: {user?.email ?? "N/A"}</p>

      <p>
        Name: {user?.firstName ?? ""} {user?.lastName ?? ""}
      </p>

      <h2>Roles</h2>

      <p>USER: {hasRole("USER") ? "Yes" : "No"}</p>

      <p>MODERATOR: {hasRole("MODERATOR") ? "Yes" : "No"}</p>

      <p>ADMIN: {hasRole("ADMIN") ? "Yes" : "No"}</p>

      <p>SUPERADMIN: {hasRole("SUPERADMIN") ? "Yes" : "No"}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
