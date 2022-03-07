import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.sass";
import Login from "./pages/Login/Login";
import Student from "./pages/Student/Student";
import Admin from "./pages/Admin/Admin";
import SuperAdmin from "./pages/SuperAdmin/SuperAdmin";
import IssuesList from "./pages/Admin/CompetitionList/IssuesList/IssuesList";
import AdminCompetitionList from "./pages/Admin/CompetitionList/CompetitionList";
import Correcting from "./pages/Admin/Correcting/Correcting";
<<<<<<< HEAD
import EditIssues from "./pages/Admin/CompetitionList/IssuesList/EditIssues/EditIssues";
import Issues from "./pages/Admin/CompetitionList/Issues";
=======
import SuperAdminCompetitionList from "./pages/SuperAdmin/CompetitionList/CompetitionList";
import SuperAdminCompetitionManage from "./pages/SuperAdmin/CompetitionManage/CompetitionManage";
import SuperAdminCompetitionSetting from "./pages/SuperAdmin/CompetitionManage/CompetitionSetting/CompetitionSetting";
import SuperAdminQuestionSetting from "./pages/SuperAdmin/CompetitionManage/QuestionSetting/QuestionSetting";
import SuperAdminStudentAccount from "./pages/SuperAdmin/CompetitionManage/StudentAccount/StudentAccount";
import SuperAdminAuthorizeAdmin from "./pages/SuperAdmin/CompetitionManage/AuthorizeAdmin/AuthorizeAdmin";
>>>>>>> 9b442d243b34421cb3630bd9a6481de97fa4a10a

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <Routes>
      <Route index element={<Login />}></Route>
      <Route path="/student" element={<Student />}>
        <Route index element></Route>
      </Route>
      <Route path="/admin" element={<Admin />}>
<<<<<<< HEAD
        <Route index element={<CompetitionList />}></Route>
        <Route path=":id" element={<Issues/>}>
          <Route index element={<IssuesList />}></Route>
          <Route path="new" element={<EditIssues/>}></Route>
          <Route path="edit" element={<EditIssues/>}></Route>
        </Route>
=======
        <Route index element={<AdminCompetitionList />}></Route>
        <Route path=":id" element={<IssuesList />}></Route>
>>>>>>> 9b442d243b34421cb3630bd9a6481de97fa4a10a
      </Route>
      <Route path="/admin/correct" element={<Admin />}>
        <Route index element={<Correcting />}></Route>
        <Route path=":id" element={<Correcting />}></Route>
<<<<<<< HEAD
=======
      </Route>
      <Route path="/superadmin" element={<SuperAdmin />}>
        <Route index element={<SuperAdminCompetitionList />}></Route>
        <Route path=":id" element={<SuperAdminCompetitionManage />}>
          <Route index element={<SuperAdminCompetitionSetting />}></Route>
          <Route
            path="question"
            element={<SuperAdminQuestionSetting />}
          ></Route>
          <Route path="account" element={<SuperAdminStudentAccount />}></Route>
          <Route
            path="authorize"
            element={<SuperAdminAuthorizeAdmin />}
          ></Route>
        </Route>
>>>>>>> 9b442d243b34421cb3630bd9a6481de97fa4a10a
      </Route>
    </Routes>
  );
}

export default App;
