import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Company";
import Departments from "./views/Company/Departments";
import Audit from "./views/Company/Audit";
import Department from "./views/Company/Departments/department";
import NewDepartment from "./views/Company/Departments/newDepartment";
import NewCustomer from "./views/Company/Departments/newCustomer";
import Login from "./views/Login";
import AllDepartments from "./views/Company/Departments/AllDepartments";
import Home from "./views/Home";
import SignUp from "./views/CompanySignup";
import Charts from "./views/Company/Dashboard";
import RegisterAdmin from "./views/AdminSignup.js";
import ManageAdmin from "./views/ManageAdmin";
import { AuthContext } from "./AuthContext";
import { useState } from "react";


function App() {
  const [user, setUser] = useState("admin");


  return (
    <div className="App">
      <AuthContext.Provider value={{user}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="login" element={<Login />} />
          <Route path="create-ohm" element={<SignUp />} />

          {/* Company */}
          <Route path="/company" element={<Dashboard />} >
            <Route element={<Charts />} index />
            <Route path="admin/register" element={<RegisterAdmin />} />
            <Route path="depts" element={<Departments />}>
              <Route element={<AllDepartments />} index />
              <Route path=":id" element={<Department />} />
              <Route path=":id/add-customer" element={<NewCustomer />} />
            </Route>
            <Route path="add-dept" element={<NewDepartment />} />
            <Route path="audit-trial" element={<Audit />} />
            <Route path="manage-admin" element={<ManageAdmin />} />
          </Route>
        </Routes>
      </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
