import { Navigate, Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/home" element={<div>GameVerse Home</div>} />

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
