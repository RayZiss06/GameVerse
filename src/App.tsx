import { AppRoutes } from "./routes";
import { apiClient } from '@/services/api/client'

function App() {
  console.log('API Client Base URL:', apiClient.defaults.baseURL); // Log the base URL for debugging
  return <AppRoutes />;
}

export default App;
