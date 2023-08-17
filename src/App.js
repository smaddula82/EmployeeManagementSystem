//import logo from './logo.svg';
import './App.css';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>        
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path='/' exact element={<ListEmployeeComponent/>} />
              <Route path='/employees' element={<ListEmployeeComponent/>} /> 
              <Route path='/add-employee/:id' element={<CreateEmployeeComponent/>} />
              <Route path='/view-employee/:id' element={<ViewEmployeeComponent/>} />
             {/*} <Route path='/update-employee/:id' element={<UpdateEmployeeComponent/>} />*/}
            </Routes>    
          </div>
          <FooterComponent />        
      </Router>
    </div>
    
  );
}

export default App;
