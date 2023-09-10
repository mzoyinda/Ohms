import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Ohm";
import Departments from "./views/Ohm/Departments";
import Audit from "./views/Ohm/Audit";
import Department from "./views/Ohm/Departments/department";
import NewDepartment from "./views/Ohm/Departments/newDepartment";
import NewCustomer from "./views/Ohm/Departments/newCustomer";
import Login from "./views/Login";
import AllDepartments from "./views/Ohm/Departments/AllDepartments";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import Charts from "./views/Ohm/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="login" element={<Login />} />
          <Route path="create-ohm" element={<SignUp />} />

          {/* Departments */}
          <Route path="/ohm" element={<Dashboard />} >
          <Route element={<Charts/>} index/>
            <Route path="departments" element={<Departments />}>
              <Route element={<AllDepartments />} index/>
              <Route path=":id" element={<Department />} />
              <Route path=":id/add-customer" element={<NewCustomer />} />
            </Route>
            <Route path="add-department" element={<NewDepartment />} />
            <Route path="audit-trial" element={<Audit />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
