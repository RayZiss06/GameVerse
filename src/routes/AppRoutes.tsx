import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import UnauthorizedPage from "../pages/UnauthorizedPage";
import DashboardPage from "../pages/DashboardPage";
import { ProtectedRoute } from "./ProtectedRoute";

export function AppRoutes() {
  return (
    <Routes>
      {/* Public Home Page */}
      <Route path="/" element={<HomePage />} />

      {/* Public Login Page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* other protected routes */}
      </Route>

      {/* Unauthorized */}
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      {/* Unknown Routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

// import { Navigate, Route, Routes } from "react-router-dom";

// import LoginPage from "../pages/LoginPage";
// import HomePage from "../pages/HomePage";
// import UnauthorizedPage from "../pages/UnauthorizedPage";

// import { ProtectedRoute } from "./ProtectedRoute";

// export function AppRoutes() {
//   return (
//     <Routes>
//       {/* Public route */}
//       <Route path="/login" element={<LoginPage />} />

//       {/* Protected routes */}
//       <Route element={<ProtectedRoute />}>
//         <Route path="/home" element={<HomePage />} />
//       </Route>

//       {/* Unauthorized */}
//       <Route path="/unauthorized" element={<UnauthorizedPage />} />

//       {/* Root */}
//       <Route path="/" element={<Navigate to="/home" replace />} />

//       {/* Unknown routes */}
//       <Route path="*" element={<Navigate to="/home" replace />} />
//     </Routes>
//   );
// }
