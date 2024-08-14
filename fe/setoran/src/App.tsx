import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";

import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<UserLayout />}></Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}></Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
