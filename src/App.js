
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import GetPhones from './Components/GetPhones';
import "bootstrap/dist/js/bootstrap.min.js"
import AddProducts from './Components/AddProducts';
import SingleProducts from './Components/SingleProduct';
import AdminLogin from './Components/Admin';
function App() {
  return (
   <Router>
     <div className="App">
      <Routes>
        <Route path='/signup' element={ <SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/' element={<GetPhones/> } />
        <Route path='/admin' element= {<Admin />} />
        <Route path='/addproducts' element= {<AddProducts />} />
        <Route path='/singleproduct' element={<SingleProducts/>} />
      </Routes>
     </div>
   </Router>
  );
}

export default App;
