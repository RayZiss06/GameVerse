import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
  const { login, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>GameVerse</h1>

      <p>Welcome to GameVerse.</p>

      <button onClick={login}>Login with Keycloak</button>
    </div>
  );
}
