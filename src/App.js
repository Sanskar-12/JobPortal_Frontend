import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/NotFound";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import "./App.css";
import UserDashboard from "./components/UserDashboard";
import { ProtectedRoute } from "protected-route-react";
import { useSelector } from "react-redux";
import Layout from "./components/global/Layout";
import { ProSidebarProvider } from "react-pro-sidebar";
import UserJobHistory from "./components/UserJobHistory";
import UserInfoDashboard from "./components/UserInfoDashboard";
import AdminDashboard from "./components/AdminDashboard";
import SingleJob from "./pages/SingleJob";
import DashUsers from "./components/DashUsers";
import DashJobs from "./components/DashJobs";
import Register from "./pages/Register";

function App() {
  const { isAuthenticated,userInfo } = useSelector((state) => state.signIn);
  const UserDashboardHOC = Layout(UserDashboard);
  const UserJobHistorydHOC = Layout(UserJobHistory);
  const UserInfoDashboardHOC=Layout(UserInfoDashboard)
  const AdminDashboardHOC=Layout(AdminDashboard)
  const DashUsersHOC=Layout(DashUsers)
  const DashJobsHOC=Layout(DashJobs)

  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path={`/search/:keyword`} element={<Home />} />
              <Route path={`/job/:id`} element={<SingleJob />} />
              <Route
                path={"/login"}
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect={userInfo?.role===1 ? ("/admin/dashboard"):("/user/dashboard")}
                  >
                    <Login />
                  </ProtectedRoute>
                }
              />
              <Route
                path={"/register"}
                element={
                  <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  >
                    <Register />
                  </ProtectedRoute>
                }
              />
              <Route
                path={"/user/dashboard"}
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <UserDashboardHOC />
                  </ProtectedRoute>
                }
              />
              <Route
                path={"/admin/dashboard"}
                element={
                  <ProtectedRoute  isAuthenticated={isAuthenticated} >
                    <AdminDashboardHOC />
                  </ProtectedRoute>
                }
              />
              <Route
                path={"/admin/users"}
                element={
                  <ProtectedRoute  isAuthenticated={isAuthenticated} >
                    <DashUsersHOC />
                  </ProtectedRoute>
                }
              />
              <Route
                path={"/user/jobs"}
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <UserJobHistorydHOC />
                  </ProtectedRoute>
                }
              />
              <Route
                path={"/admin/jobs"}
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <DashJobsHOC />
                  </ProtectedRoute>
                }
              />
              <Route
                path={"/user/info"}
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <UserInfoDashboardHOC />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </ProSidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
