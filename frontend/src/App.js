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
import SignUp from "./views/SignUp";
import Charts from "./views/Company/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="login" element={<Login />} />
          <Route path="create-Company" element={<SignUp />} />

          {/* Departments */}
          <Route path="/company" element={<Dashboard />} >
          <Route element={<Charts/>} index/>
            <Route path="depts" element={<Departments />}>
              <Route element={<AllDepartments />} index/>
              <Route path=":id" element={<Department />} />
              <Route path=":id/add-customer" element={<NewCustomer />} />
            </Route>
            <Route path="add-dept" element={<NewDepartment />} />
            <Route path="audit-trial" element={<Audit />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
