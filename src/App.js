import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Departments from "./views/Departments";
import Audit from "./views/Audit";
import Department from "./views/Departments/department";
import NewDepartment from "./views/Departments/newDepartment";
import NewCustomer from "./views/Departments/newCustomer";
import Login from "./views/Login";
import AllDepartments from "./views/Departments/AllDepartments";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} exact />
          <Route path="login" element={<Login />} />

          {/* Departments */}
          <Route path="/departments" element={<Departments />} >
          <Route index element={<AllDepartments/>} />
            <Route path=":id" element={<Department />} />
              <Route path=":id/add-customer" element={<NewCustomer />} />
          </Route>
          <Route path="/add-department" element={<NewDepartment />} />
          <Route path="/audit-trial" element={<Audit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
