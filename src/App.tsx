import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.sass";
import Login from "./pages/Login/Login";
import Student from "./pages/Student/Student";
import Admin from "./pages/Admin/Admin";
import SuperAdmin from "./pages/SuperAdmin/SuperAdmin";
import IssuesList from "./pages/Admin/CompetitionList/IssuesList/IssuesList";
import CompetitionList from "./pages/Admin/CompetitionList/CompetitionList";
import Correcting from "./pages/Admin/Correcting/Correcting";
import EditIssues from "./pages/Admin/CompetitionList/IssuesList/EditIssues/EditIssues";
import Issues from "./pages/Admin/CompetitionList/Issues";

function App() {
  useEffect(() => { }, []);
  return (
    <Routes>
      <Route index element={<Login />}></Route>
      <Route path="/student" element={<Student />}>
        <Route index element></Route>
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route index element={<CompetitionList />}></Route>
        <Route path=":id" element={<Issues/>}>
          <Route index element={<IssuesList />}></Route>
          <Route path="new" element={<EditIssues/>}></Route>
          <Route path="edit" element={<EditIssues/>}></Route>
        </Route>
      </Route>
      <Route path="/admin/correct" element={<Admin />}>
        <Route index element={<Correcting />}></Route>
        <Route path=":id" element={<Correcting />}></Route>
      </Route>
      <Route path="/superadmin" element={<SuperAdmin />}></Route>
    </Routes>
  );
}

export default App;
