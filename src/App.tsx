import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Student from "./pages/Student/Student";
import Admin from "./pages/Admin/Admin";
import SuperAdmin from "./pages/SuperAdmin/SuperAdmin";
import IssuesList from "./pages/Admin/CompetitionList/IssuesList/IssuesList";

function App() {
  useEffect(() => { }, []);
  return (
    <Routes>
      <Route index element={<Login />}></Route>
      <Route path="/student" element={<Student />}>
        <Route index element></Route>
      </Route>
      <Route path="/admin" element={<Admin />}>
        {/* <Route index element></Route> */}
        <Route path=":id" element={<Login />}></Route>
      </Route>
      <Route path="/superadmin" element={<SuperAdmin />}></Route>
    </Routes>
  );
}

export default App;
