import './App.css';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Dashboard from './views/dashboard';
import Departments from './views/departments';
import Audit from './views/audit';
import Department from './views/department';
import NewDepartment from './views/newDepartment';
import NewCustomer from './views/newCustomer';
import Login from './views/login';


function App() {
  return (
    <div className="App">
      <Router>
  <Routes>
  <Route path="/" element={<Dashboard/>} exact />
  <Route path="/login" element={<Login/>} />
    <Route path="/departments" element={<Departments/>} />
    <Route path="/audit-trial" element={<Audit/>} />
    <Route path="/department/:id" element={<Department/>} />
    <Route path="/add-department" element={<NewDepartment/>} />
    <Route path="/add-customer" element={<NewCustomer/>} />
  </Routes>
</Router>
    
    </div>
  );
}

export default App;
